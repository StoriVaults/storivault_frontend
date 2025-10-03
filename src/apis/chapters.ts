import { apiClient } from './client';
import { Chapter, CreateChapterRequest, UpdateChapterRequest } from '@/types/api';

export const chaptersApi = {
  // Get chapters by story ID
  getChaptersByStory: async (storyId: string, publishedOnly: boolean = true): Promise<Chapter[]> => {
    const response = await apiClient.get(`/chapters/by-story/${storyId}`, {
      params: { published_only: publishedOnly }
    });
    return response.data;
  },

  // Get a single chapter
  getChapter: async (chapterId: string): Promise<Chapter> => {
    const response = await apiClient.get(`/chapters/${chapterId}`);
    return response.data;
  },

  // Create a new chapter (requires auth)
  createChapter: async (data: CreateChapterRequest): Promise<Chapter> => {
    const response = await apiClient.post('/chapters', data);
    return response.data;
  },

  // Update a chapter (requires auth)
  updateChapter: async (chapterId: string, data: UpdateChapterRequest): Promise<Chapter> => {
    const response = await apiClient.patch(`/chapters/${chapterId}`, data);
    return response.data;
  },

  // Delete a chapter (requires auth)
  deleteChapter: async (chapterId: string): Promise<void> => {
    await apiClient.delete(`/chapters/${chapterId}`);
  },

  // Set read progress for a chapter
  setReadProgress: async (chapterId: string, storyId: string): Promise<void> => {
    await apiClient.post(`/chapters/${chapterId}/progress`, null, {
      params: { story_id: storyId }
    });
  }
};
