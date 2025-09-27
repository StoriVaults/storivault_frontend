export * from './api';

// UI Types
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

export interface Toast {
  id: string;
  title: string;
  description?: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export interface Modal {
  id: string;
  component: React.ComponentType<any>;
  props?: any;
}

// Form Types
export interface FormField {
  name: string;
  value: string;
  error?: string;
  touched: boolean;
}

export interface FormState {
  fields: Record<string, FormField>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Theme Types
export type Theme = 'light' | 'dark' | 'system';

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  badge?: number;
}