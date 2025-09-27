import { apiClient, createFormData } from './client';
import { User, UpdateProfileRequest, ChangePasswordRequest, PaginatedResponse } from '@/types';

export const usersApi = {
  // Update current user profile
  updateProfile: async (data: UpdateProfileRequest): Promise<User> => {
    const response = await apiClient.patch<User>('/users/me', data);
    return response.data;
  },

  // Upload profile picture
  uploadProfilePicture: async (file: File): Promise<User> => {
    const formData = createFormData({ file });
    
    const response = await apiClient.post<User>('/users/me/profile-pic', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  },

  // Get user by username
  getUserByUsername: async (username: string): Promise<User> => {
    const response = await apiClient.get<User>(`/users/${username}`);
    return response.data;
  },

  // Follow user
  followUser: async (username: string): Promise<void> => {
    await apiClient.post(`/users/${username}/follow`);
  },

  // Unfollow user
  unfollowUser: async (username: string): Promise<void> => {
    await apiClient.post(`/users/${username}/unfollow`);
  },

  // Get user followers
  getFollowers: async (username: string, page = 1, limit = 20): Promise<PaginatedResponse<User>> => {
    const response = await apiClient.get<PaginatedResponse<User>>(`/users/${username}/followers`, {
      params: { page, limit }
    });
    return response.data;
  },

  // Get user following
  getFollowing: async (username: string, page = 1, limit = 20): Promise<PaginatedResponse<User>> => {
    const response = await apiClient.get<PaginatedResponse<User>>(`/users/${username}/following`, {
      params: { page, limit }
    });
    return response.data;
  },

  // Change password
  changePassword: async (data: ChangePasswordRequest): Promise<void> => {
    await apiClient.post('/users/me/password', data);
  },

  // Delete account
  deleteAccount: async (): Promise<void> => {
    await apiClient.delete('/users/me');
  }
};