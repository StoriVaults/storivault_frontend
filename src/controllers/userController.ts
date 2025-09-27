import { usersApi } from '@/apis';
import { useAuthStore } from '@/store/authStore';
import { useUiStore } from '@/store/uiStore';
import { User, UpdateProfileRequest } from '@/types';

export class UserController {
  static async updateProfileWithToast(data: UpdateProfileRequest): Promise<User | null> {
    const { updateUser } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();
    
    try {
      const user = await usersApi.updateProfile(data);
      updateUser(user);
      
      addToast({
        title: 'Profile updated!',
        description: 'Your profile has been updated successfully.',
        type: 'success'
      });
      
      return user;
    } catch (error: any) {
      addToast({
        title: 'Failed to update profile',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return null;
    }
  }

  static async uploadProfilePictureWithToast(file: File): Promise<User | null> {
    const { updateUser } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();
    
    try {
      const user = await usersApi.uploadProfilePicture(file);
      updateUser(user);
      
      addToast({
        title: 'Profile picture updated!',
        description: 'Your profile picture has been updated successfully.',
        type: 'success'
      });
      
      return user;
    } catch (error: any) {
      addToast({
        title: 'Failed to update profile picture',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return null;
    }
  }

  static async followUserWithToast(username: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();
    
    try {
      await usersApi.followUser(username);
      
      addToast({
        title: 'Following!',
        description: `You are now following @${username}.`,
        type: 'success'
      });
      
      return true;
    } catch (error: any) {
      addToast({
        title: 'Failed to follow user',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return false;
    }
  }

  static async unfollowUserWithToast(username: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();
    
    try {
      await usersApi.unfollowUser(username);
      
      addToast({
        title: 'Unfollowed',
        description: `You have unfollowed @${username}.`,
        type: 'success'
      });
      
      return true;
    } catch (error: any) {
      addToast({
        title: 'Failed to unfollow user',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return false;
    }
  }

  static async changePasswordWithToast(oldPassword: string, newPassword: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();
    
    try {
      await usersApi.changePassword({ old_password: oldPassword, new_password: newPassword });
      
      addToast({
        title: 'Password changed!',
        description: 'Your password has been updated successfully.',
        type: 'success'
      });
      
      return true;
    } catch (error: any) {
      addToast({
        title: 'Failed to change password',
        description: error.message || 'Please check your current password and try again.',
        type: 'error'
      });
      return false;
    }
  }
}