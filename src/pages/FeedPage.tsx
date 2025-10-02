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
  Check,
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
import { useUiStore } from "@/store/uiStore";
import { Story, User } from "@/types";
import { storiesApi, usersApi } from "@/apis";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/helper/formatting";

interface StoryPost extends Story {
  author?: User;
  is_liked?: boolean;
  is_saved?: boolean;
}

interface UserStats {
  storiesRead: number;
  readingList: number;
  following: number;
  readTime?: number;
  favoriteGenre?: string;
}

interface ReadingHistoryItem {
  lastRead?: string;
  progress?: number;
  lastChapter?: number;
  readTime?: number;
}

export function FeedPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  const [stories, setStories] = useState<StoryPost[]>([]);
  const [followingStories, setFollowingStories] = useState<StoryPost[]>([]);
  const [trendingStories, setTrendingStories] = useState<StoryPost[]>([]);
  const [suggestedAuthors, setSuggestedAuthors] = useState<User[]>([]);
  const [followingStatus, setFollowingStatus] = useState<
    Record<string, boolean>
  >({});
  const [userStats, setUserStats] = useState<UserStats>({
    storiesRead: 0,
    readingList: 0,
    following: 0,
    readTime: 0,
    favoriteGenre: "Romance",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("for-you");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }
    fetchFeedData();
    fetchSuggestedAuthors();
    fetchUserStats();
  }, [isAuthenticated]);

  const fetchFeedData = async () => {
    try {
      setIsLoading(true);
      const [forYouRes, followingRes, trendingRes] = await Promise.all([
        storiesApi.getStories({ page: 1, limit: 20, sort: "popular" }),
        storiesApi.getStories({ page: 1, limit: 20, sort: "latest" }),
        storiesApi.getStories({ page: 1, limit: 10, sort: "trending" }),
      ]);

      const enrichStory = async (story: Story): Promise<StoryPost> => {
        let author: User;
        try {
          author = await usersApi.getUserByUsername(story.author_id);
        } catch {
          author = {
            id: story.author_id,
            username: `author_${story.author_id.slice(0, 8)}`,
            email: "",
            bio: "Passionate storyteller",
            profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${story.author_id}`,
            followers_count: Math.floor(Math.random() * 50000),
            following_count: Math.floor(Math.random() * 1000),
            stories_count: Math.floor(Math.random() * 100),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
        }

        const savedStories = JSON.parse(
          localStorage.getItem("saved_stories") || "[]"
        );
        const likedStories = JSON.parse(
          localStorage.getItem("liked_stories") || "[]"
        );

        return {
          ...story,
          author,
          is_liked: likedStories.includes(story.id),
          is_saved: savedStories.includes(story.id),
        };
      };

      const enrichedStories = await Promise.all(
        forYouRes.items.map(enrichStory)
      );
      const enrichedFollowing = await Promise.all(
        followingRes.items.map(enrichStory)
      );
      const enrichedTrending = await Promise.all(
        trendingRes.items.map(enrichStory)
      );

      setStories(enrichedStories);
      setFollowingStories(enrichedFollowing);
      setTrendingStories(enrichedTrending);
    } catch (error) {
      console.error("Failed to fetch feed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSuggestedAuthors = async () => {
    try {
      const response = await storiesApi.getStories({
        limit: 20,
        sort: "popular",
      });

      const authorIds = [...new Set(response.items.map((s) => s.author_id))];
      const authors: User[] = [];
      const followStatus: Record<string, boolean> = {};

      const followingList = JSON.parse(
        localStorage.getItem("following_users") || "[]"
      );

      for (const authorId of authorIds.slice(0, 5)) {
        if (authorId === user?.id) continue;

        try {
          const author = await usersApi.getUserByUsername(authorId);
          authors.push(author);
          followStatus[author.id] = followingList.includes(author.id);
        } catch {
          const mockAuthor: User = {
            id: authorId,
            username: `author_${authorId.slice(0, 8)}`,
            email: `author_${authorId.slice(0, 8)}@storivault.com`,
            bio: "📚 Passionate storyteller | ✍️ Creating worlds with words",
            profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${authorId}`,
            followers_count: Math.floor(Math.random() * 50000) + 1000,
            following_count: Math.floor(Math.random() * 1000) + 50,
            stories_count: Math.floor(Math.random() * 50) + 5,
            created_at: new Date(
              Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
            ).toISOString(),
            updated_at: new Date().toISOString(),
          };
          authors.push(mockAuthor);
          followStatus[mockAuthor.id] = followingList.includes(mockAuthor.id);
        }
      }

      setSuggestedAuthors(authors);
      setFollowingStatus(followStatus);
    } catch (error) {
      console.error("Failed to fetch suggested authors:", error);
    }
  };

  const fetchUserStats = async () => {
    if (!user) return;

    try {
      const readStories = JSON.parse(
        localStorage.getItem("read_stories") || "[]"
      );
      const savedStories = JSON.parse(
        localStorage.getItem("saved_stories") || "[]"
      );
      const followingUsers = JSON.parse(
        localStorage.getItem("following_users") || "[]"
      );

      // Parse reading history with proper type handling
      const readingHistoryRaw = localStorage.getItem("reading_history");
      let totalMinutes = 0;

      if (readingHistoryRaw) {
        try {
          const readingHistory = JSON.parse(readingHistoryRaw) as Record<
            string,
            ReadingHistoryItem
          >;

          // Calculate total read time safely
          totalMinutes = Object.values(readingHistory).reduce<number>(
            (acc, item) => {
              if (item && typeof item.readTime === "number") {
                return acc + item.readTime;
              }
              return acc;
            },
            0
          );
        } catch (parseError) {
          console.error("Failed to parse reading history:", parseError);
        }
      }

      setUserStats({
        storiesRead: readStories.length,
        readingList: savedStories.length,
        following: followingUsers.length,
        readTime: Math.round(totalMinutes / 60), // Convert minutes to hours
        favoriteGenre: "Romance",
      });
    } catch (error) {
      console.error("Failed to fetch user stats:", error);
    }
  };

  const handleFollowAuthor = async (author: User) => {
    try {
      const followingUsers = JSON.parse(
        localStorage.getItem("following_users") || "[]"
      );
      const isFollowing = followingUsers.includes(author.id);

      if (isFollowing) {
        const updated = followingUsers.filter((id: string) => id !== author.id);
        localStorage.setItem("following_users", JSON.stringify(updated));

        setSuggestedAuthors((prev) =>
          prev.map((a) =>
            a.id === author.id
              ? { ...a, followers_count: Math.max(0, a.followers_count - 1) }
              : a
          )
        );

        setFollowingStatus((prev) => ({ ...prev, [author.id]: false }));
        setUserStats((prev) => ({
          ...prev,
          following: Math.max(0, prev.following - 1),
        }));

        await usersApi.unfollowUser(author.username);

        addToast({
          title: "Unfollowed",
          description: `You unfollowed @${author.username}`,
          type: "info",
        });
      } else {
        followingUsers.push(author.id);
        localStorage.setItem("following_users", JSON.stringify(followingUsers));

        setSuggestedAuthors((prev) =>
          prev.map((a) =>
            a.id === author.id
              ? { ...a, followers_count: a.followers_count + 1 }
              : a
          )
        );

        setFollowingStatus((prev) => ({ ...prev, [author.id]: true }));
        setUserStats((prev) => ({ ...prev, following: prev.following + 1 }));

        await usersApi.followUser(author.username);

        addToast({
          title: "Following!",
          description: `You are now following @${author.username}`,
          type: "success",
        });
      }
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to update follow status",
        type: "error",
      });
    }
  };

  const handleLike = (storyId: string) => {
    const likedStories = JSON.parse(
      localStorage.getItem("liked_stories") || "[]"
    );
    const isLiked = likedStories.includes(storyId);

    if (isLiked) {
      const updated = likedStories.filter((id: string) => id !== storyId);
      localStorage.setItem("liked_stories", JSON.stringify(updated));
    } else {
      likedStories.push(storyId);
      localStorage.setItem("liked_stories", JSON.stringify(likedStories));
    }

    const updateStoryList = (list: StoryPost[]) =>
      list.map((story) =>
        story.id === storyId
          ? {
              ...story,
              is_liked: !isLiked,
              votes_count: isLiked
                ? story.votes_count - 1
                : story.votes_count + 1,
            }
          : story
      );

    setStories(updateStoryList(stories));
    setFollowingStories(updateStoryList(followingStories));
    setTrendingStories(updateStoryList(trendingStories));
  };

  const handleSave = (storyId: string) => {
    const savedStories = JSON.parse(
      localStorage.getItem("saved_stories") || "[]"
    );
    const isSaved = savedStories.includes(storyId);

    if (isSaved) {
      const updated = savedStories.filter((id: string) => id !== storyId);
      localStorage.setItem("saved_stories", JSON.stringify(updated));
      setUserStats((prev) => ({
        ...prev,
        readingList: Math.max(0, prev.readingList - 1),
      }));
    } else {
      savedStories.push(storyId);
      localStorage.setItem("saved_stories", JSON.stringify(savedStories));
      setUserStats((prev) => ({
        ...prev,
        readingList: prev.readingList + 1,
      }));
    }

    const updateStoryList = (list: StoryPost[]) =>
      list.map((story) =>
        story.id === storyId ? { ...story, is_saved: !isSaved } : story
      );

    setStories(updateStoryList(stories));
    setFollowingStories(updateStoryList(followingStories));
    setTrendingStories(updateStoryList(trendingStories));

    addToast({
      title: isSaved ? "Removed from library" : "Added to library",
      description: isSaved ? "" : "Story saved to your reading list",
      type: "success",
    });
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

        <p className="text-sm font-semibold">
          {formatNumber(story.votes_count)} likes
        </p>

        <div>
          <h3 className="font-semibold">{story.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {story.description}
          </p>
        </div>

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

  const getCurrentStories = () => {
    switch (activeTab) {
      case "for-you":
        return stories;
      case "following":
        return followingStories;
      case "trending":
        return trendingStories;
      default:
        return stories;
    }
  };

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
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Your Feed</h1>
          <div className="flex items-center gap-2">
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

              <div className="mt-6">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {getCurrentStories().map((story) => (
                      <StoryGridItem key={story.id} story={story} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 max-w-xl mx-auto">
                    {getCurrentStories().map((story) => (
                      <StoryListItem key={story.id} story={story} />
                    ))}
                  </div>
                )}
              </div>
            </Tabs>
          </div>

          <div className="hidden lg:block space-y-4">
            {/* User Card */}
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
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0"
                  onClick={() => navigate("/authors")}
                >
                  See All
                </Button>
              </div>
              <div className="space-y-3">
                {suggestedAuthors.map((author) => (
                  <div
                    key={author.id}
                    className="flex items-center justify-between"
                  >
                    <Link
                      to={`/profile/${author.username}`}
                      className="flex items-center gap-3 flex-1 min-w-0"
                    >
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src={author.profile_pic || undefined} />
                        <AvatarFallback>
                          {author.username[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">
                          @{author.username}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatNumber(author.followers_count)} followers •{" "}
                          {author.stories_count} stories
                        </p>
                      </div>
                    </Link>
                    <Button
                      variant={
                        followingStatus[author.id] ? "secondary" : "outline"
                      }
                      size="sm"
                      className="ml-2 flex-shrink-0"
                      onClick={() => handleFollowAuthor(author)}
                    >
                      {followingStatus[author.id] ? (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          Following
                        </>
                      ) : (
                        "Follow"
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* User Stats */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Your Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Stories Read
                  </span>
                  <span className="font-medium">{userStats.storiesRead}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Reading List
                  </span>
                  <span className="font-medium">{userStats.readingList}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Following
                  </span>
                  <span className="font-medium">{userStats.following}</span>
                </div>
                {userStats.readTime !== undefined && userStats.readTime > 0 && (
                  <div className="pt-3 border-t">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Total Read Time
                      </span>
                      <span className="font-medium">{userStats.readTime}h</span>
                    </div>
                    {userStats.favoriteGenre && (
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-muted-foreground">
                          Favorite Genre
                        </span>
                        <Badge variant="secondary">
                          {userStats.favoriteGenre}
                        </Badge>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
