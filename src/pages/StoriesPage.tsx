"use client";

import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Search,
  Filter,
  Grid,
  List,
  BookOpen,
  Sparkles,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StoryCard } from "@/components/ui/story-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { MainLayout } from "@/components/layout/main-layout";
import { Story, PaginatedResponse } from "@/types";
import { storiesApi } from "@/apis";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";

const genres = [
  "All",
  "Romance",
  "Fantasy",
  "Mystery",
  "Sci-Fi",
  "Horror",
  "Adventure",
  "Drama",
  "Comedy",
  "Thriller",
  "Historical",
];

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "trending", label: "Trending" },
];

export function StoriesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stories, setStories] = useState<Story[]>([]);
  const [recommendedStories, setRecommendedStories] = useState<Story[]>([]);
  const [editorPicks, setEditorPicks] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingRecommendations, setIsLoadingRecommendations] =
    useState(true);
  const [pagination, setPagination] = useState<
    Pick<PaginatedResponse<any>, "total" | "page" | "limit">
  >({
    total: 0,
    page: 1,
    limit: 12,
  });

  const { isAuthenticated, user } = useAuthStore();

  // Filters from URL
  const searchQuery = searchParams.get("q") || "";
  const selectedGenre = searchParams.get("genre") || "All";
  const sortBy = searchParams.get("sort") || "latest";
  const currentPage = parseInt(searchParams.get("page") || "1");
  const viewMode = searchParams.get("view") || "grid";

  const [localSearch, setLocalSearch] = useState(searchQuery);

  const updateSearchParams = (updates: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });

    // Reset page when filters change
    if (Object.keys(updates).some((key) => key !== "page")) {
      newParams.set("page", "1");
    }

    setSearchParams(newParams);
  };

  // Fetch recommendations
  const fetchRecommendations = async () => {
    setIsLoadingRecommendations(true);
    try {
      // Fetch personalized recommendations (based on user preferences if logged in)
      const [recommendedResponse, editorResponse] = await Promise.all([
        storiesApi.getStories({
          page: 1,
          limit: 6,
          sort: isAuthenticated ? "popular" : "trending",
        }),
        storiesApi.getStories({
          page: 1,
          limit: 3,
          sort: "popular",
        }),
      ]);

      setRecommendedStories(recommendedResponse.items);
      setEditorPicks(editorResponse.items);
    } catch (error) {
      console.error("Failed to fetch recommendations:", error);
    } finally {
      setIsLoadingRecommendations(false);
    }
  };

  const fetchStories = async () => {
    setIsLoading(true);
    try {
      let response: PaginatedResponse<Story>;

      if (searchQuery) {
        response = await storiesApi.searchStories({
          q: searchQuery,
          page: currentPage,
          limit: pagination.limit,
        });
      } else {
        response = await storiesApi.getStories({
          page: currentPage,
          limit: pagination.limit,
          genre: selectedGenre === "All" ? undefined : selectedGenre,
          sort: sortBy as any,
        });
      }

      setStories(response.items);
      setPagination({
        total: response.total,
        page: response.page,
        limit: response.limit,
      });
    } catch (error) {
      console.error("Failed to fetch stories:", error);
      setStories([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, [searchQuery, selectedGenre, sortBy, currentPage]);

  useEffect(() => {
    fetchRecommendations();
  }, [isAuthenticated]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams({ q: localSearch.trim() || null });
  };

  const handleGenreChange = (genre: string) => {
    updateSearchParams({ genre: genre === "All" ? null : genre });
  };

  const handleSortChange = (sort: string) => {
    updateSearchParams({ sort });
  };

  const handleViewModeChange = (mode: string) => {
    updateSearchParams({ view: mode });
  };

  const handlePageChange = (page: number) => {
    updateSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(pagination.total / pagination.limit);

  return (
    <MainLayout>
      <div className="space-y-8 p-4">
        {/* Welcome Section for New Users */}
        {!isAuthenticated && !searchQuery && (
          <section className="max-w-7xl mx-auto">
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Welcome to StoriVault! 📚
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Dive into thousands of amazing stories from talented
                      writers worldwide. Create your free account to save
                      favorites, follow authors, and share your own stories!
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild>
                        <Link to="/auth/signup">Create Free Account</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/auth/login">Sign In</Link>
                      </Button>
                    </div>
                  </div>
                  <BookOpen className="h-24 w-24 text-orange-400 opacity-50" />
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Recommendations Section - Show before main content */}
        {!searchQuery &&
          !isLoadingRecommendations &&
          recommendedStories.length > 0 && (
            <section className="max-w-7xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
                  <Sparkles className="h-6 w-6 text-yellow-500" />
                  {isAuthenticated
                    ? "Recommended for You"
                    : "Popular Right Now"}
                </h2>
                <p className="text-muted-foreground">
                  {isAuthenticated
                    ? "Stories we think you'll love based on your reading history"
                    : "Trending stories loved by our community"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
                {recommendedStories.map((story) => (
                  <Card
                    key={story.id}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <Link to={`/stories/${story.id}`}>
                      <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                        <img
                          src={
                            story.cover_image ||
                            `https://source.unsplash.com/200x300/?book,${story.genre}`
                          }
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Badge className="absolute top-2 right-2 bg-white/90">
                          {story.genre}
                        </Badge>
                        <div className="absolute bottom-2 left-2 right-2">
                          <h3 className="text-white font-semibold text-sm line-clamp-2">
                            {story.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {(story.votes_count / 1000).toFixed(1)}K
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-3 w-3" />
                            {(story.reads_count / 1000).toFixed(1)}K
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          )}

        {/* Editor's Picks - Sidebar style for desktop */}
        {!searchQuery && editorPicks.length > 0 && (
          <section className="max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  Editor's Picks This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {editorPicks.map((story, index) => (
                    <Link key={story.id} to={`/stories/${story.id}`}>
                      <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-colors">
                        <span className="text-2xl font-bold text-purple-600">
                          #{index + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm line-clamp-2 hover:text-purple-600 transition-colors">
                            {story.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            by @{story.author_id.slice(0, 8)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {story.genre}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {(story.reads_count / 1000).toFixed(1)}K reads
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Main Header and Search */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : "Discover Stories"}
            </h1>
          </div>
          <p className="text-muted-foreground">
            {pagination.total} {pagination.total === 1 ? "story" : "stories"}{" "}
            found
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
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleViewModeChange("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleViewModeChange("list")}
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
                      setLocalSearch("");
                      updateSearchParams({ q: null });
                    }}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedGenre !== "All" && (
                <Badge variant="secondary" className="gap-1">
                  Genre: {selectedGenre}
                  <button
                    onClick={() => handleGenreChange("All")}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {sortBy !== "latest" && (
                <Badge variant="secondary" className="gap-1">
                  Sort: {sortOptions.find((opt) => opt.value === sortBy)?.label}
                  <button
                    onClick={() => handleSortChange("latest")}
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
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria to find more
                  stories.
                </p>
                {!isAuthenticated && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Sign up to get personalized recommendations!
                    </p>
                    <Button asChild>
                      <Link to="/auth/signup">Create Free Account</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Stories Grid/List */}
              <div
                className={cn(
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-4"
                )}
              >
                {stories.map((story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    variant={viewMode === "list" ? "compact" : "default"}
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

                  {Array.from({ length: Math.min(5, totalPages) }).map(
                    (_, i) => {
                      const page = Math.max(1, currentPage - 2) + i;
                      if (page > totalPages) return null;

                      return (
                        <Button
                          key={page}
                          variant={page === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </Button>
                      );
                    }
                  )}

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

        {/* Bottom CTA for non-authenticated users */}
        {!isAuthenticated && stories.length > 0 && (
          <section className="max-w-7xl mx-auto mt-12">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  Want Personalized Recommendations?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Join StoriVault to get story suggestions tailored to your
                  taste!
                </p>
                <Button size="lg" asChild>
                  <Link to="/auth/signup">Sign Up Free</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </MainLayout>
  );
}
