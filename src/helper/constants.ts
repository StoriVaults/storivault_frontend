// Application constants

export const API_BASE_URL = 'https://usman678zafar-storivault-backend.hf.space';

export const GENRES = [
  'Romance',
  'Fantasy',
  'Mystery',
  'Sci-Fi',
  'Horror',
  'Adventure',
  'Drama',
  'Comedy',
  'Thriller',
  'Historical',
  'Young Adult',
  'Literary Fiction',
  'Poetry',
  'Non-Fiction'
] as const;

export const STORY_VISIBILITY = {
  PUBLIC: 'public',
  PRIVATE: 'private'
} as const;

export const SORT_OPTIONS = {
  LATEST: 'latest',
  POPULAR: 'popular',
  TRENDING: 'trending'
} as const;

export const FILE_LIMITS = {
  IMAGE_MAX_SIZE: 5 * 1024 * 1024, // 5MB
  COVER_MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
} as const;

export const PAGINATION = {
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 50
} as const;

export const QUERY_KEYS = {
  STORIES: 'stories',
  STORY: 'story',
  USER: 'user',
  USERS: 'users',
  SEARCH: 'search',
  FOLLOWERS: 'followers',
  FOLLOWING: 'following'
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  STORIES: '/stories',
  STORY_DETAIL: '/stories/:id',
  STORY_CREATE: '/stories/create',
  STORY_EDIT: '/stories/:id/edit',
  USER_PROFILE: '/users/:username',
  SETTINGS: '/settings',
  LIBRARY: '/library'
} as const;