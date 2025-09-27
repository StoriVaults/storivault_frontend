'use client';

import { Link } from 'react-router-dom';
import { Eye, Heart, MessageCircle, Clock } from 'lucide-react';
import { Story } from '@/types';
import { ImageWithFallback } from './image-with-fallback';
import { Badge } from './badge';
import { cn } from '@/lib/utils';

interface StoryCardProps {
  story: Story;
  className?: string;
  showStats?: boolean;
  variant?: 'default' | 'compact' | 'featured';
}

export function StoryCard({ 
  story, 
  className, 
  showStats = true,
  variant = 'default' 
}: StoryCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
      'day'
    );
  };

  const formatCount = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  if (variant === 'compact') {
    return (
      <Link to={`/stories/${story.id}`}>
        <div className={cn(
          "group flex gap-3 p-3 rounded-lg transition-colors hover:bg-secondary/50",
          className
        )}>
          <div className="relative flex-shrink-0">
            <ImageWithFallback
              src={story.cover_image || '/placeholder.svg'}
              alt={story.title}
              className="w-16 h-20 object-cover rounded-md"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {story.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {story.description}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs px-2 py-0">
                {story.genre}
              </Badge>
              {showStats && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Eye className="h-3 w-3" />
                  {formatCount(story.reads_count)}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link to={`/stories/${story.id}`}>
        <div className={cn(
          "group relative overflow-hidden rounded-xl bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300",
          className
        )}>
          <div className="aspect-[16/9] relative">
            <ImageWithFallback
              src={story.cover_image || '/placeholder.svg'}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <Badge variant="secondary" className="mb-2 bg-primary text-primary-foreground">
                {story.genre}
              </Badge>
              <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary-light transition-colors">
                {story.title}
              </h3>
              <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                {story.description}
              </p>
            </div>
          </div>
          {showStats && (
            <div className="p-4 flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {formatCount(story.reads_count)}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {formatCount(story.votes_count)}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {formatCount(story.comments_count)}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {formatDate(story.updated_at)}
              </div>
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/stories/${story.id}`}>
      <div className={cn(
        "group bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden",
        className
      )}>
        <div className="aspect-[2/3] relative">
          <ImageWithFallback
            src={story.cover_image || '/placeholder.svg'}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-background/90 text-foreground">
              {story.genre}
            </Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {story.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {story.description}
          </p>
          {story.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {story.tags.slice(0, 2).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {story.tags.length > 2 && (
                <span className="text-xs text-muted-foreground">
                  +{story.tags.length - 2} more
                </span>
              )}
            </div>
          )}
          {showStats && (
            <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {formatCount(story.reads_count)}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {formatCount(story.votes_count)}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {formatDate(story.updated_at)}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}