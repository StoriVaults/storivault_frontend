import { create } from 'zustand';
import { Toast, Modal, Theme } from '@/types';

interface UiState {
  // Theme
  theme: Theme;
  
  // Toasts
  toasts: Toast[];
  
  // Modals
  modals: Modal[];
  
  // Loading states
  globalLoading: boolean;
  
  // Sidebar
  sidebarOpen: boolean;
  
  // Actions
  setTheme: (theme: Theme) => void;
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
  openModal: (component: React.ComponentType<any>, props?: any) => string;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
  setGlobalLoading: (loading: boolean) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

let toastIdCounter = 0;
let modalIdCounter = 0;

export const useUiStore = create<UiState>((set, get) => ({
  // Initial state
  theme: 'system',
  toasts: [],
  modals: [],
  globalLoading: false,
  sidebarOpen: false,

  // Theme actions
  setTheme: (theme: Theme) => {
    set({ theme });
    
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // System theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  },

  // Toast actions
  addToast: (toast: Omit<Toast, 'id'>) => {
    const id = `toast-${++toastIdCounter}`;
    const newToast: Toast = { ...toast, id };
    
    set((state) => ({
      toasts: [...state.toasts, newToast]
    }));

    // Auto-remove toast after duration
    const duration = toast.duration || 5000;
    setTimeout(() => {
      get().removeToast(id);
    }, duration);
  },

  removeToast: (id: string) => {
    set((state) => ({
      toasts: state.toasts.filter(toast => toast.id !== id)
    }));
  },

  clearToasts: () => {
    set({ toasts: [] });
  },

  // Modal actions
  openModal: (component: React.ComponentType<any>, props?: any) => {
    const id = `modal-${++modalIdCounter}`;
    const modal: Modal = { id, component, props };
    
    set((state) => ({
      modals: [...state.modals, modal]
    }));

    return id;
  },

  closeModal: (id: string) => {
    set((state) => ({
      modals: state.modals.filter(modal => modal.id !== id)
    }));
  },

  closeAllModals: () => {
    set({ modals: [] });
  },

  // Loading actions
  setGlobalLoading: (loading: boolean) => {
    set({ globalLoading: loading });
  },

  // Sidebar actions
  setSidebarOpen: (open: boolean) => {
    set({ sidebarOpen: open });
  },

  toggleSidebar: () => {
    set((state) => ({ sidebarOpen: !state.sidebarOpen }));
  }
}));

// Initialize theme on load
if (typeof window !== 'undefined') {
  const store = useUiStore.getState();
  store.setTheme(store.theme);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (store.theme === 'system') {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });
}