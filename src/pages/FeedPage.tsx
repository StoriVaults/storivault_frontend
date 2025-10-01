"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Plus,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  MoreVertical,
  TrendingUp,
  Users,
  Grid3X3,
  BookOpen,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MainLayout } from "@/components/layout/main-layout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { Story } from "@/types";
import { storiesApi } from "@/apis";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/helper/formatting";

interface StoryPost extends Story {
  author?: {
    id: string;
    username: string;
    profile_pic: string | null;
    is_following?: boolean;
  };
  is_liked?: boolean;
  is_saved?: boolean;
}

export function FeedPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const [stories, setStories] = useState<StoryPost[]>([]);
  const [followingStories, setFollowingStories] = useState<StoryPost[]>([]);
  const [trendingStories, setTrendingStories] = useState<StoryPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("for-you");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }
    fetchFeedData();
  }, [isAuthenticated]);

  const fetchFeedData = async () => {
    try {
      setIsLoading(true);
      const [forYouRes, followingRes, trendingRes] = await Promise.all([
        storiesApi.getStories({ page: 1, limit: 20, sort: "popular" }),
        storiesApi.getStories({ page: 1, limit: 20, sort: "latest" }),
        storiesApi.getStories({ page: 1, limit: 10, sort: "trending" }),
      ]);

      // Add mock author data for demo
      const enrichStory = (story: Story): StoryPost => ({
        ...story,
        author: {
          id: story.author_id,
          username: `author_${story.author_id.slice(0, 8)}`,
          profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${story.author_id}`,
          is_following: Math.random() > 0.5,
        },
        is_liked: Math.random() > 0.5,
        is_saved: Math.random() > 0.3,
      });

      setStories(forYouRes.items.map(enrichStory));
      setFollowingStories(followingRes.items.map(enrichStory));
      setTrendingStories(trendingRes.items.map(enrichStory));
    } catch (error) {
      console.error("Failed to fetch feed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = (storyId: string) => {
    setStories((prev) =>
      prev.map((story) =>
        story.id === storyId
          ? {
              ...story,
              is_liked: !story.is_liked,
              votes_count: story.is_liked
                ? story.votes_count - 1
                : story.votes_count + 1,
            }
          : story
      )
    );
  };

  const handleSave = (storyId: string) => {
    setStories((prev) =>
      prev.map((story) =>
        story.id === storyId ? { ...story, is_saved: !story.is_saved } : story
      )
    );
  };

  const StoryGridItem = ({ story }: { story: StoryPost }) => (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
      <Link to={`/stories/${story.id}`}>
        <img
          src={
            story.cover_image ||
            `https://source.unsplash.com/400x500/?book,${story.genre}`
          }
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Overlay Stats - Instagram Style */}
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2 text-white">
            <Heart className="h-6 w-6 fill-white" />
            <span className="font-bold">{formatNumber(story.votes_count)}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Eye className="h-6 w-6 fill-white" />
            <span className="font-bold">{formatNumber(story.reads_count)}</span>
          </div>
        </div>

        {/* Story Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <Badge className="mb-2 bg-white/20 backdrop-blur-sm border-0">
            {story.genre}
          </Badge>
          <h3 className="font-bold text-sm line-clamp-2">{story.title}</h3>
          <p className="text-xs opacity-90 mt-1">
            by @{story.author?.username}
          </p>
        </div>
      </Link>
    </div>
  );

  const StoryListItem = ({ story }: { story: StoryPost }) => (
    <Card className="overflow-hidden">
      {/* Author Header */}
      <div className="flex items-center justify-between p-3 border-b">
        <Link
          to={`/profile/${story.author?.username}`}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={story.author?.profile_pic || undefined} />
            <AvatarFallback>
              {story.author?.username?.[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{story.author?.username}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(story.created_at).toLocaleDateString()}
            </p>
          </div>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Copy Link</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Story Cover */}
      <Link to={`/stories/${story.id}`}>
        <div className="relative aspect-[4/5]">
          <img
            src={
              story.cover_image ||
              `https://source.unsplash.com/600x750/?book,${story.genre}`
            }
            alt={story.title}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => handleLike(story.id)}
            >
              <Heart
                className={cn(
                  "h-5 w-5",
                  story.is_liked && "fill-red-500 text-red-500"
                )}
              />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => navigate(`/stories/${story.id}`)}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => handleSave(story.id)}
          >
            <Bookmark
              className={cn("h-5 w-5", story.is_saved && "fill-current")}
            />
          </Button>
        </div>

        {/* Likes Count */}
        <p className="text-sm font-semibold">
          {formatNumber(story.votes_count)} likes
        </p>

        {/* Title and Description */}
        <div>
          <h3 className="font-semibold">{story.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {story.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {story.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs text-blue-600">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <LoadingSpinner size="lg" />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout showFooter={false}>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header with Create Button */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Your Feed</h1>
          <div className="flex items-center gap-2">
            {/* View Toggle */}
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <BookOpen className="h-4 w-4" />
              </Button>
            </div>

            {/* Create Story Button */}
            <Button
              onClick={() => navigate("/stories/create")}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Create Story
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="for-you" className="flex-1">
                  For You
                </TabsTrigger>
                <TabsTrigger value="following" className="flex-1">
                  Following
                </TabsTrigger>
                <TabsTrigger value="trending" className="flex-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Trending
                </TabsTrigger>
              </TabsList>

              <TabsContent value="for-you" className="mt-6">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {stories.map((story) => (
                      <StoryGridItem key={story.id} story={story} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 max-w-xl mx-auto">
                    {stories.map((story) => (
                      <StoryListItem key={story.id} story={story} />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="following" className="mt-6">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {followingStories.map((story) => (
                      <StoryGridItem key={story.id} story={story} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 max-w-xl mx-auto">
                    {followingStories.map((story) => (
                      <StoryListItem key={story.id} story={story} />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="trending" className="mt-6">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {trendingStories.map((story) => (
                      <StoryGridItem key={story.id} story={story} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 max-w-xl mx-auto">
                    {trendingStories.map((story) => (
                      <StoryListItem key={story.id} story={story} />
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Suggestions */}
          <div className="hidden lg:block space-y-4">
            {/* User Info */}
            <Card className="p-4">
              <Link
                to={`/profile/${user?.username}`}
                className="flex items-center gap-3"
              >
                <Avatar className="h-14 w-14">
                  <AvatarImage src={user?.profile_pic || undefined} />
                  <AvatarFallback>
                    {user?.username?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{user?.username}</p>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </Link>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => navigate(`/profile/${user?.username}`)}
              >
                View Profile
              </Button>
            </Card>

            {/* Suggested Authors */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Suggested Authors</h3>
                <Button variant="link" size="sm" className="h-auto p-0">
                  See All
                </Button>
              </div>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <Link
                      to={`/profile/author${i}`}
                      className="flex items-center gap-3"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=author${i}`}
                        />
                        <AvatarFallback>A{i}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">author_{i}</p>
                        <p className="text-xs text-muted-foreground">
                          {Math.floor(Math.random() * 50)}K followers
                        </p>
                      </div>
                    </Link>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Stats */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Your Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Stories Read
                  </span>
                  <span className="font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Reading List
                  </span>
                  <span className="font-medium">43</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Following
                  </span>
                  <span className="font-medium">89</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
