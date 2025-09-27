import { apiClient, createFormData } from './client';
import { TokenResponse, User, SignupRequest } from '@/types';

export const authApi = {
  // Login with email/password
  login: async (email: string, password: string): Promise<TokenResponse> => {
    const formData = createFormData({
      username: email, // Backend expects 'username' field for email
      password: password
    });

    const response = await apiClient.post<TokenResponse>('/auth/token', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },

  // Sign up new user
  signup: async (username: string, email: string, password: string): Promise<User> => {
    const request: SignupRequest = {
      username,
      email,
      password
    };

    const response = await apiClient.post<User>('/auth/signup', request);
    return response.data;
  },

  // Get current user profile
  getMe: async (token?: string): Promise<User> => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    
    const response = await apiClient.get<User>('/users/me', { headers });
    return response.data;
  }
};