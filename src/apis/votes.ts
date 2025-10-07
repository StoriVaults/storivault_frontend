import { apiClient } from './client';
import { VoteRequest } from '@/types';

export const votesApi = {
  // Vote on a chapter
  vote: async (chapterId: string): Promise<void> => {
    const request: VoteRequest = {
      chapter_id: chapterId
    };

    await apiClient.post('/votes', request);
  },

  // Unvote a chapter
  unvote: async (chapterId: string): Promise<void> => {
    const request: VoteRequest = {
      chapter_id: chapterId
    };

    await apiClient.delete('/votes', { data: request });
  }
};