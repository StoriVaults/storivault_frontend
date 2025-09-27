'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Grid, List, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { StoryCard } from '@/components/ui/story-card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { MainLayout } from '@/components/layout/main-layout';
import { Story, PaginatedResponse } from '@/types';
import { storiesApi } from '@/apis';
import { cn } from '@/lib/utils';

const genres = [
  'All',
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
];

const sortOptions = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'trending', label: 'Trending' },
];

export function StoriesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState<Pick<PaginatedResponse<any>, 'total' | 'page' | 'limit'>>({
    total: 0,
    page: 1,
    limit: 12
  });
  
  // Filters from URL
  const searchQuery = searchParams.get('q') || '';
  const selectedGenre = searchParams.get('genre') || 'All';
  const sortBy = searchParams.get('sort') || 'latest';
  const currentPage = parseInt(searchParams.get('page') || '1');
  const viewMode = searchParams.get('view') || 'grid';

  const [localSearch, setLocalSearch] = useState(searchQuery);

  const updateSearchParams = (updates: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams);
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === '') {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    
    // Reset page when filters change
    if (Object.keys(updates).some(key => key !== 'page')) {
      newParams.set('page', '1');
    }
    
    setSearchParams(newParams);
  };

  const fetchStories = async () => {
    setIsLoading(true);
    try {
      let response: PaginatedResponse<Story>;
      
      if (searchQuery) {
        response = await storiesApi.searchStories({
          q: searchQuery,
          page: currentPage,
          limit: pagination.limit
        });
      } else {
        response = await storiesApi.getStories({
          page: currentPage,
          limit: pagination.limit,
          genre: selectedGenre === 'All' ? undefined : selectedGenre,
          sort: sortBy as any
        });
      }
      
      setStories(response.items);
      setPagination({
        total: response.total,
        page: response.page,
        limit: response.limit
      });
    } catch (error) {
      console.error('Failed to fetch stories:', error);
      setStories([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, [searchQuery, selectedGenre, sortBy, currentPage]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams({ q: localSearch.trim() || null });
  };

  const handleGenreChange = (genre: string) => {
    updateSearchParams({ genre: genre === 'All' ? null : genre });
  };

  const handleSortChange = (sort: string) => {
    updateSearchParams({ sort });
  };

  const handleViewModeChange = (mode: string) => {
    updateSearchParams({ view: mode });
  };

  const handlePageChange = (page: number) => {
    updateSearchParams({ page: page.toString() });
  };

  const totalPages = Math.ceil(pagination.total / pagination.limit);

  return (
    <MainLayout>
      <div className="space-y-6 p-4">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Discover Stories'}
            </h1>
          </div>
          <p className="text-muted-foreground">
            {pagination.total} {pagination.total === 1 ? 'story' : 'stories'} found
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto">
          <Card className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search stories, authors..."
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </form>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                {/* Genre Filter */}
                <Select value={selectedGenre} onValueChange={handleGenreChange}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {genres.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort Filter */}
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => handleViewModeChange('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => handleViewModeChange('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  Search: {searchQuery}
                  <button
                    onClick={() => {
                      setLocalSearch('');
                      updateSearchParams({ q: null });
                    }}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedGenre !== 'All' && (
                <Badge variant="secondary" className="gap-1">
                  Genre: {selectedGenre}
                  <button
                    onClick={() => handleGenreChange('All')}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {sortBy !== 'latest' && (
                <Badge variant="secondary" className="gap-1">
                  Sort: {sortOptions.find(opt => opt.value === sortBy)?.label}
                  <button
                    onClick={() => handleSortChange('latest')}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          </Card>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : stories.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No stories found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria to find more stories.
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Stories Grid/List */}
              <div className={cn(
                viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              )}>
                {stories.map((story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    variant={viewMode === 'list' ? 'compact' : 'default'}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                    const page = Math.max(1, currentPage - 2) + i;
                    if (page > totalPages) return null;
                    
                    return (
                      <Button
                        key={page}
                        variant={page === currentPage ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </Button>
                    );
                  })}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
}