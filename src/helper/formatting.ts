// Formatting and utility helpers

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = diffInMs / (1000 * 60 * 60);
  const diffInDays = diffInHours / 24;

  if (diffInHours < 1) {
    const diffInMinutes = diffInMs / (1000 * 60);
    return `${Math.floor(diffInMinutes)}m ago`;
  }
  
  if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h ago`;
  }
  
  if (diffInDays < 7) {
    return `${Math.floor(diffInDays)}d ago`;
  }
  
  if (diffInDays < 30) {
    const diffInWeeks = diffInDays / 7;
    return `${Math.floor(diffInWeeks)}w ago`;
  }
  
  return date.toLocaleDateString();
};

export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  
  const diffInMs = date.getTime() - Date.now();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  
  return formatter.format(diffInDays, 'day');
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export const parseTagString = (tagString: string): string[] => {
  return tagString
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0);
};

export const formatTagsForDisplay = (tags: string[]): string => {
  if (tags.length === 0) return '';
  if (tags.length === 1) return tags[0];
  if (tags.length === 2) return tags.join(' and ');
  return `${tags.slice(0, -1).join(', ')}, and ${tags[tags.length - 1]}`;
};