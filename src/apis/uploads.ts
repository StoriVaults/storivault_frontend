import { apiClient, createFormData } from './client';
import { UploadResponse, PresignRequest, PresignResponse, GetUrlQuery, GetUrlResponse } from '@/types';

export const uploadsApi = {
  // Check upload status
  getStatus: async (): Promise<{ configured: boolean }> => {
    const response = await apiClient.get<{ configured: boolean }>('/uploads/status');
    return response.data;
  },

  // Direct file upload
  uploadFile: async (
    file: File, 
    folder?: 'images' | 'covers' | 'media' | 'avatars'
  ): Promise<UploadResponse> => {
    const formData = createFormData({ uploadedFile: file });
    
    const params = folder ? { folder } : {};
    
    const response = await apiClient.post<UploadResponse>('/uploads/file', formData, {
      params,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  },

  // Get presigned URL for upload
  getPresignedUrl: async (data: PresignRequest): Promise<PresignResponse> => {
    const response = await apiClient.post<PresignResponse>('/uploads/presign', data);
    return response.data;
  },

  // Get signed URL for private file access
  getSignedUrl: async (query: GetUrlQuery): Promise<GetUrlResponse> => {
    const response = await apiClient.get<GetUrlResponse>('/uploads/get-url', {
      params: query
    });
    return response.data;
  },

  // Delete file
  deleteFile: async (key: string): Promise<{ key: string }> => {
    const response = await apiClient.delete<{ key: string }>(`/uploads/${key}`);
    return response.data;
  }
};