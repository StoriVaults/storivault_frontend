import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { ApiEnvelope, ApiError } from '@/types';

// Create axios instance
export const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://usman678zafar-storivault-backend.hf.space',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    // Get token from auth store
    const authStorage = localStorage.getItem('auth-storage');
    if (authStorage) {
      try {
        const { state } = JSON.parse(authStorage);
        if (state?.accessToken) {
          config.headers.Authorization = `Bearer ${state.accessToken}`;
        }
      } catch (error) {
        console.warn('Failed to parse auth storage:', error);
      }
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle envelope unwrapping and errors
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle /auth/token endpoint (doesn't use envelope)
    if (response.config.url?.includes('/auth/token')) {
      return response;
    }
    
    // Unwrap envelope for other endpoints
    const envelope = response.data as ApiEnvelope;
    
    if (envelope.success) {
      return { ...response, data: envelope.data };
    } else {
      // Convert envelope error to ApiError
      const apiError: ApiError = new Error(envelope.message || 'API Error') as ApiError;
      apiError.status = response.status;
      apiError.details = envelope.error?.details;
      throw apiError;
    }
  },
  (error: AxiosError) => {
    // Handle network errors and HTTP error responses
    const apiError: ApiError = new Error() as ApiError;
    
    if (error.response) {
      // Server responded with error status
      const data = error.response.data as any;
      
      if (data && typeof data === 'object') {
        if (data.success === false) {
          // Envelope error
          apiError.message = data.message || 'API Error';
          apiError.details = data.error?.details;
        } else if (data.detail) {
          // FastAPI validation error
          apiError.message = Array.isArray(data.detail) 
            ? data.detail.map((d: any) => d.msg).join(', ')
            : data.detail;
        } else {
          apiError.message = error.message;
        }
      } else {
        apiError.message = error.message;
      }
      
      apiError.status = error.response.status;
      
      // Handle 401 errors - logout user
      if (error.response.status === 401) {
        // Clear auth storage
        localStorage.removeItem('auth-storage');
        
        // Redirect to login if not already there
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/auth')) {
          window.location.href = '/auth/login';
        }
      }
    } else if (error.request) {
      // Network error
      apiError.message = 'Network error. Please check your connection.';
    } else {
      // Other error
      apiError.message = error.message || 'Unknown error occurred';
    }
    
    return Promise.reject(apiError);
  }
);

// Helper function to create multipart form data
export const createFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();
  
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined && value !== null) {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        // Handle arrays (e.g., tags)
        formData.append(key, value.join(','));
      } else {
        formData.append(key, String(value));
      }
    }
  }
  
  return formData;
};

export default apiClient;
