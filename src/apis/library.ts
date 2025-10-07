import { apiClient } from './client';
import { Story, PaginatedResponse } from '@/types';

export const libraryApi = {
  // Save story to library
  saveStory: async (storyId: string): Promise<void> => {
    await apiClient.post(`/library/${storyId}`);
  },

  // Remove story from library
  removeStory: async (storyId: string): Promise<void> => {
    await apiClient.delete(`/library/${storyId}`);
  },

  // Get saved stories
  getSavedStories: async (page = 1, limit = 20): Promise<PaginatedResponse<Story>> => {
    const response = await apiClient.get<PaginatedResponse<Story>>('/library', {
      params: { page, limit }
    });
    return response.data;
  }
};
