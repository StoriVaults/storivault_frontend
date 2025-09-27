import { authApi } from '@/apis';
import { useAuthStore } from '@/store/authStore';
import { useUiStore } from '@/store/uiStore';

export class AuthController {
  static async loginWithToast(email: string, password: string): Promise<boolean> {
    const { login } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();
    
    try {
      await login(email, password);
      addToast({
        title: 'Welcome back!',
        description: 'You have successfully signed in.',
        type: 'success'
      });
      return true;
    } catch (error: any) {
      addToast({
        title: 'Login failed',
        description: error.message || 'Please check your credentials and try again.',
        type: 'error'
      });
      return false;
    }
  }

  static async signupWithToast(username: string, email: string, password: string): Promise<boolean> {
    const { signup } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();
    
    try {
      await signup(username, email, password);
      addToast({
        title: 'Welcome to StoriVault!',
        description: 'Your account has been created successfully.',
        type: 'success'
      });
      return true;
    } catch (error: any) {
      addToast({
        title: 'Signup failed',
        description: error.message || 'Please check your information and try again.',
        type: 'error'
      });
      return false;
    }
  }

  static logoutWithToast(): void {
    const { logout } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();
    
    logout();
    addToast({
      title: 'Signed out',
      description: 'You have been successfully signed out.',
      type: 'success'
    });
  }
}