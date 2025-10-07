// API Response Types
export interface ApiEnvelope<T = any> {
  success: boolean;
  message: string;
  data: T;
  error?: {
    details?: Record<string, string[]>;
    message?: string;
  } | null;
}

export interface PaginatedResponse<T> {
  total: number;
  page: number;
  limit: number; 
  items: T[];
}

// Auth Types
export interface LoginRequest {
  username: string; // email
  password: string;
}

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

// User Types
export interface User {
  id: string;
  username: string;
  email: string;
  bio: string | null;
  profile_pic: string | null;
  cover_image: string | null;
  is_google_user?: boolean;
  followers_count: number;
  following_count: number;
  stories_count: number;
  created_at: string;
  updated_at: string;
}

export interface UpdateProfileRequest {
  bio?: string | null;
  profile_pic?: string | null;
  cover_image?: string | null;
}

export interface ChangePasswordRequest {
  old_password: string;
  new_password: string;
}

// Story Types
export interface Story {
  id: string;
  author_id: string;
  title: string;
  description: string;
  genre: string;
  tags: string[];
  cover_image: string | null;
  cover_key: string | null;
  visibility: "public" | "private";
  reads_count: number;
  votes_count: number;
  comments_count: number;
  created_at: string;
  updated_at: string;
}

export interface CreateStoryRequest {
  title: string;
  description?: string;
  genre: string;
  tags?: string[];
  visibility?: "public" | "private";
  cover_image?: string;
}

export interface UpdateStoryRequest {
  title?: string;
  description?: string;
  genre?: string;
  tags?: string[];
  visibility?: "public" | "private";
  cover_image?: string;
}

export interface StoriesQuery {
  page?: number;
  limit?: number;
  genre?: string;
  sort?: "latest" | "popular" | "trending";
}

export interface SearchQuery {
  q: string;
  page?: number;
  limit?: number;
}

// Upload Types
export interface UploadResponse {
  key: string;
  filename: string;
  content_type: string;
  public_url: string;
  read_url: string;
}

export interface PresignRequest {
  filename: string;
  content_type: string;
  folder?: "images" | "covers" | "media" | "avatars";
}

export interface PresignResponse {
  key: string;
  method: "PUT";
  headers: Record<string, string>;
  upload_url: string;
  public_url: string;
  read_url: string;
}

export interface GetUrlQuery {
  key: string;
  expires?: number;
}

export interface GetUrlResponse {
  key: string;
  signed_url: string;
  expires_in: number;
}

// Chapter Types
export interface Chapter {
  id: string;
  story_id: string;
  title: string;
  content: string | null;
  order: number;
  published: boolean;
  votes_count: number;
  reads_count: number;
  created_at: string;
  updated_at: string;
}

export interface CreateChapterRequest {
  story_id: string;
  title: string;
  content: string;
  order: number;
  published?: boolean;
}

export interface UpdateChapterRequest {
  title?: string;
  content?: string;
  order?: number;
  published?: boolean;
}

// Vote Types
export interface VoteRequest {
  chapter_id: string; // 24-hex ObjectId
}

// Error Types
export interface ApiError extends Error {
  status?: number;
  details?: Record<string, string[]>;
}