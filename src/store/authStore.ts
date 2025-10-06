import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, ApiError } from '@/types';
import { authApi } from '@/apis/auth';

interface AuthState {
  // State
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: () => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  fetchMe: () => Promise<void>;
  updateUser: (user: User) => void;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      accessToken: null,
      refreshToken: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (email: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const tokenResponse = await authApi.login(email, password);
          const userResponse = await authApi.getMe(tokenResponse.access_token);
          
          set({
            accessToken: tokenResponse.access_token,
            refreshToken: null,
            user: userResponse,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });
        } catch (error: any) {
          const errorMessage = error.details?.message || error.message || 'Login failed';
          set({
            accessToken: null,
            refreshToken: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: errorMessage
          });
          throw error;
        }
      },

      signup: async (username: string, email: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const user = await authApi.signup(username, email, password);
          
          // Auto-login after signup
          await get().login(email, password);
          
          set({ isLoading: false, error: null });
        } catch (error: any) {
          const errorMessage = error.details?.message || error.message || 'Signup failed';
          set({
            isLoading: false,
            error: errorMessage
          });
          throw error;
        }
      },

      loginWithGoogle: () => {
        // Redirect to backend Google OAuth endpoint
        window.location.href = `${import.meta.env.VITE_API_URL || 'https://usman678zafar-storivault-backend.hf.space'}/auth/google/login`;
      },

      setTokens: (accessToken: string, refreshToken: string) => {
        set({
          accessToken,
          refreshToken,
          isAuthenticated: true
        });
      },

      logout: () => {
        set({
          accessToken: null,
          refreshToken: null,
          user: null,
          isAuthenticated: false,
          error: null
        });
      },

      fetchMe: async () => {
        const { accessToken } = get();
        if (!accessToken) return;

        try {
          set({ isLoading: true, error: null });
          const user = await authApi.getMe(accessToken);
          
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });
        } catch (error: any) {
          if (error.status === 401) {
            // Token expired, logout
            get().logout();
          } else {
            set({
              isLoading: false,
              error: error.message || 'Failed to fetch user'
            });
          }
        }
      },

      updateUser: (user: User) => {
        set({ user });
      },

      clearError: () => {
        set({ error: null });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);
