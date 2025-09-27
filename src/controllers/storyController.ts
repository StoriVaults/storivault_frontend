import { storiesApi, uploadsApi } from '@/apis';
import { useUiStore } from '@/store/uiStore';
import { Story, CreateStoryRequest } from '@/types';

export class StoryController {
  static async createStoryWithCover(
    data: Omit<CreateStoryRequest, 'cover_image'> & { cover?: File }
  ): Promise<Story | null> {
    const { addToast } = useUiStore.getState();
    
    try {
      let story: Story;
      
      if (data.cover) {
        // Upload cover and create story with multipart
        story = await storiesApi.createStoryMultipart({
          title: data.title,
          description: data.description,
          genre: data.genre,
          tags: data.tags?.join(','),
          visibility: data.visibility,
          cover: data.cover
        });
      } else {
        // Create story without cover
        story = await storiesApi.createStory({
          title: data.title,
          description: data.description,
          genre: data.genre,
          tags: data.tags,
          visibility: data.visibility
        });
      }
      
      addToast({
        title: 'Story created!',
        description: 'Your story has been published successfully.',
        type: 'success'
      });
      
      return story;
    } catch (error: any) {
      addToast({
        title: 'Failed to create story',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return null;
    }
  }

  static async updateStoryCover(storyId: string, cover: File): Promise<Story | null> {
    const { addToast } = useUiStore.getState();
    
    try {
      const story = await storiesApi.updateStoryCover(storyId, cover);
      
      addToast({
        title: 'Cover updated!',
        description: 'Your story cover has been updated successfully.',
        type: 'success'
      });
      
      return story;
    } catch (error: any) {
      addToast({
        title: 'Failed to update cover',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return null;
    }
  }

  static async deleteStoryWithConfirmation(storyId: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();
    
    const confirmed = window.confirm(
      'Are you sure you want to delete this story? This action cannot be undone.'
    );
    
    if (!confirmed) return false;
    
    try {
      await storiesApi.deleteStory(storyId);
      
      addToast({
        title: 'Story deleted',
        description: 'Your story has been deleted successfully.',
        type: 'success'
      });
      
      return true;
    } catch (error: any) {
      addToast({
        title: 'Failed to delete story',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return false;
    }
  }
}