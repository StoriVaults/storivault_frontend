import { apiClient, createFormData } from './client';
import { Story, CreateStoryRequest, UpdateStoryRequest, StoriesQuery, SearchQuery, PaginatedResponse } from '@/types';

export const storiesApi = {
  // Create story with multipart form (including cover upload)
  createStoryMultipart: async (data: {
    title: string;
    description?: string;
    genre: string;
    tags?: string;
    visibility?: 'public' | 'private';
    cover?: File;
  }): Promise<Story> => {
    const formData = createFormData(data);
    
    const response = await apiClient.post<Story>('/stories', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  },

  // Create story with JSON
  createStory: async (data: CreateStoryRequest): Promise<Story> => {
    const response = await apiClient.post<Story>('/stories/json', data);
    return response.data;
  },

  // Update story cover
  updateStoryCover: async (storyId: string, cover: File): Promise<Story> => {
    const formData = createFormData({ cover });
    
    const response = await apiClient.patch<Story>(`/stories/${storyId}/cover`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  },

  // Get stories with filters and pagination
  getStories: async (query: StoriesQuery = {}): Promise<PaginatedResponse<Story>> => {
    const response = await apiClient.get<PaginatedResponse<Story>>('/stories', {
      params: query
    });
    return response.data;
  },

  // Search stories
  searchStories: async (query: SearchQuery): Promise<PaginatedResponse<Story>> => {
    const response = await apiClient.get<PaginatedResponse<Story>>('/stories/search', {
      params: query
    });
    return response.data;
  },

  // Get story by ID
  getStory: async (storyId: string): Promise<Story> => {
    const response = await apiClient.get<Story>(`/stories/${storyId}`);
    return response.data;
  },

  // Update story
  updateStory: async (storyId: string, data: UpdateStoryRequest): Promise<Story> => {
    const response = await apiClient.patch<Story>(`/stories/${storyId}`, data);
    return response.data;
  },

  // Delete story
  deleteStory: async (storyId: string): Promise<void> => {
    await apiClient.delete(`/stories/${storyId}`);
  }
};