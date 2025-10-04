"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  Eye,
  Bookmark,
  Share2,
  ChevronLeft,
  MessageCircle,
  Calendar,
  Edit,
  Lock,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainLayout } from "@/components/layout/main-layout";
import { StoryDetailSkeleton } from "@/components/ui/story-detail-skeleton";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { Story, User } from "@/types";
import { storiesApi, usersApi } from "@/apis";
import { formatNumber, formatDate } from "@/helper/formatting";
import { cn } from "@/lib/utils";

interface ExtendedAuthor extends User {
  is_following?: boolean;
  total_stories?: number;
  total_reads?: number;
}

export function StoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  // Story data states
  const [story, setStory] = useState<Story | null>(null);
  const [author, setAuthor] = useState<ExtendedAuthor | null>(null);
  const [relatedStories, setRelatedStories] = useState<Story[]>([]);

  // UI states
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  // Is this the author's own story?
  const isOwnStory = user?.id === story?.author_id;

  useEffect(() => {
    if (!id) return;
    fetchStoryDetails();
    trackReadingHistory();
  }, [id]);

  const fetchStoryDetails = async () => {
    if (!id) return;

    try {
      setIsLoading(true);

      // Fetch story details
      const storyData = await storiesApi.getStory(id);

      // Check if story is private and user is not the owner
      if (
        storyData.visibility === "private" &&
        storyData.author_id !== user?.id
      ) {
        addToast({
          title: "Private Story",
          description: "This story is private and cannot be accessed",
          type: "error",
        });
        navigate("/stories");
        return;
      }

      setStory(storyData);

      // Fetch author details
      try {
        const authorData = await usersApi.getUserByUsername(
          storyData.author_id
        );
        const extendedAuthor: ExtendedAuthor = {
          ...authorData,
          total_stories: Math.floor(Math.random() * 50) + 5,
          total_reads: Math.floor(Math.random() * 100000) + 10000,
        };
        setAuthor(extendedAuthor);

        // Check following status
        const followingList = JSON.parse(
          localStorage.getItem("following_users") || "[]"
        );
        setIsFollowing(followingList.includes(authorData.id));
      } catch {
        // Create fallback author if API fails
        const fallbackAuthor: ExtendedAuthor = {
          id: storyData.author_id,
          username: `author_${storyData.author_id.slice(0, 8)}`,
          email: "",
          bio: "Storyteller",
          profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${storyData.author_id}`,
          followers_count: 0,
          following_count: 0,
          stories_count: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          total_stories: 1,
          total_reads: storyData.reads_count,
        };
        setAuthor(fallbackAuthor);
      }

      // Check if user has liked/saved this story
      if (isAuthenticated && user) {
        const likedStories = JSON.parse(
          localStorage.getItem("liked_stories") || "[]"
        );
        const savedStories = JSON.parse(
          localStorage.getItem("saved_stories") || "[]"
        );
        setIsLiked(likedStories.includes(id));
        setIsSaved(savedStories.includes(id));
      }

      // Fetch related stories (only public ones)
      const relatedRes = await storiesApi.getStories({
        genre: storyData.genre,
        limit: 4,
      });
      setRelatedStories(
        relatedRes.items.filter((s) => s.id !== id && s.visibility === "public")
      );
    } catch (error) {
      console.error("Failed to fetch story details:", error);
      addToast({
        title: "Error",
        description: "Failed to load story details",
        type: "error",
      });
      navigate("/stories");
    } finally {
      setIsLoading(false);
    }
  };

  const trackReadingHistory = () => {
    if (!id) return;

    const readStories = JSON.parse(
      localStorage.getItem("read_stories") || "[]"
    );
    if (!readStories.includes(id)) {
      readStories.push(id);
      localStorage.setItem("read_stories", JSON.stringify(readStories));
    }
  };

  const handleFollow = async () => {
    if (!isAuthenticated || !author) {
      navigate("/auth/login");
      return;
    }

    const followingUsers = JSON.parse(
      localStorage.getItem("following_users") || "[]"
    );

    if (isFollowing) {
      const updated = followingUsers.filter((uid: string) => uid !== author.id);
      localStorage.setItem("following_users", JSON.stringify(updated));
      setAuthor({
        ...author,
        followers_count: Math.max(0, author.followers_count - 1),
      });
    } else {
      followingUsers.push(author.id);
      localStorage.setItem("following_users", JSON.stringify(followingUsers));
      setAuthor({
        ...author,
        followers_count: author.followers_count + 1,
      });
    }

    setIsFollowing(!isFollowing);
  };

  const handleLike = async () => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }

    const likedStories = JSON.parse(
      localStorage.getItem("liked_stories") || "[]"
    );

    if (isLiked) {
      const updated = likedStories.filter((sid: string) => sid !== id);
      localStorage.setItem("liked_stories", JSON.stringify(updated));
    } else {
      likedStories.push(id);
      localStorage.setItem("liked_stories", JSON.stringify(likedStories));
    }

    setIsLiked(!isLiked);
    if (story) {
      setStory({
        ...story,
        votes_count: isLiked ? story.votes_count - 1 : story.votes_count + 1,
      });
    }
  };

  const handleSave = async () => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }

    const savedStories = JSON.parse(
      localStorage.getItem("saved_stories") || "[]"
    );

    if (isSaved) {
      const updated = savedStories.filter((sid: string) => sid !== id);
      localStorage.setItem("saved_stories", JSON.stringify(updated));
    } else {
      savedStories.push(id);
      localStorage.setItem("saved_stories", JSON.stringify(savedStories));
    }

    setIsSaved(!isSaved);
  };

  const handleShare = async () => {
    if (navigator.share && story) {
      try {
        await navigator.share({
          title: story.title,
          text: story.description,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      addToast({
        title: "Link copied!",
        description: "Story link copied to clipboard",
        type: "success",
      });
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <StoryDetailSkeleton />
      </MainLayout>
    );
  }

  if (!story) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">Story not found</h2>
          <Button onClick={() => navigate("/stories")}>Browse Stories</Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Mobile-Optimized Story Header */}
        <div className="relative">
          {/* Hero Background - Hidden on mobile to improve readability */}
          <div
            className="absolute inset-0 h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center hidden sm:block"
            style={{
              backgroundImage: `url(${
                story.cover_image ||
                "https://source.unsplash.com/1600x500/?book,library"
              })`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 pt-4 sm:pt-8 pb-8 sm:pb-20">
            <Button
              variant="ghost"
              className="mb-4 text-gray-700 sm:text-white hover:bg-gray-100 sm:hover:bg-white/10"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>

            {/* Mobile Layout - Better readability */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
              {/* Cover Image - Centered on mobile */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative group">
                  <img
                    src={
                      story.cover_image ||
                      "https://source.unsplash.com/400x600/?book,novel"
                    }
                    alt={story.title}
                    className="w-48 h-72 sm:w-64 sm:h-96 object-cover rounded-xl shadow-2xl"
                  />
                  {story.visibility === "private" && (
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded px-3 py-1">
                      <Lock className="h-4 w-4 text-white inline mr-1" />
                      <span className="text-sm text-white">Private</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Story Info - Optimized for mobile */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {/* Title and Description - Better contrast on mobile */}
                <div className="bg-white sm:bg-transparent rounded-lg p-4 sm:p-0 shadow-sm sm:shadow-none">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 text-gray-900 sm:text-white">
                    {story.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-700 sm:text-gray-200 leading-relaxed">
                    {story.description}
                  </p>
                </div>

                {/* Author Info - Better mobile styling */}
                {author && (
                  <div className="bg-white sm:bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-sm sm:shadow-none">
                    <Link
                      to={`/profile/${author.username}`}
                      className="flex items-center gap-4 group"
                    >
                      <Avatar className="h-12 sm:h-14 w-12 sm:w-14 border-2 border-gray-200 sm:border-white/20">
                        <AvatarImage src={author.profile_pic || undefined} />
                        <AvatarFallback className="bg-orange-100 text-orange-700 sm:bg-primary/20 sm:text-white">
                          {author.username?.[0]?.toUpperCase() || "A"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-base sm:text-lg text-gray-900 sm:text-white group-hover:text-orange-600 sm:group-hover:text-primary-light transition-colors">
                          @{author.username}
                        </p>
                        <p className="text-sm text-gray-600 sm:text-gray-300">
                          {formatNumber(author.followers_count)} followers •{" "}
                          {author.total_stories || 0} stories
                        </p>
                      </div>
                      {author.username !== user?.username && (
                        <Button
                          variant={isFollowing ? "secondary" : "default"}
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            handleFollow();
                          }}
                          className={cn(
                            "ml-auto",
                            isFollowing
                              ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                              : "bg-orange-500 hover:bg-orange-600 text-white sm:bg-white sm:hover:bg-gray-100 sm:text-gray-900"
                          )}
                        >
                          {isFollowing ? "Following" : "Follow"}
                        </Button>
                      )}
                    </Link>
                  </div>
                )}

                {/* Stats Grid - Mobile optimized */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-white sm:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-gray-200 sm:border-gray-700 shadow-sm sm:shadow-none">
                    <Eye className="h-5 sm:h-6 w-5 sm:w-6 mx-auto mb-1 sm:mb-2 text-gray-700 sm:text-white" />
                    <p className="text-lg sm:text-2xl font-bold text-gray-900 sm:text-white">
                      {formatNumber(story.reads_count)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 sm:text-gray-300">
                      Reads
                    </p>
                  </div>
                  <div className="bg-white sm:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-gray-200 sm:border-gray-700 shadow-sm sm:shadow-none">
                    <Heart className="h-5 sm:h-6 w-5 sm:w-6 mx-auto mb-1 sm:mb-2 text-gray-700 sm:text-white" />
                    <p className="text-lg sm:text-2xl font-bold text-gray-900 sm:text-white">
                      {formatNumber(story.votes_count)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 sm:text-gray-300">
                      Likes
                    </p>
                  </div>
                  <div className="bg-white sm:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-gray-200 sm:border-gray-700 shadow-sm sm:shadow-none">
                    <MessageCircle className="h-5 sm:h-6 w-5 sm:w-6 mx-auto mb-1 sm:mb-2 text-gray-700 sm:text-white" />
                    <p className="text-lg sm:text-2xl font-bold text-gray-900 sm:text-white">
                      {formatNumber(story.comments_count)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 sm:text-gray-300">
                      Comments
                    </p>
                  </div>
                  <div className="bg-white sm:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-gray-200 sm:border-gray-700 shadow-sm sm:shadow-none">
                    <Calendar className="h-5 sm:h-6 w-5 sm:w-6 mx-auto mb-1 sm:mb-2 text-gray-700 sm:text-white" />
                    <p className="text-xs sm:text-sm font-bold text-gray-900 sm:text-white">
                      {formatDate(story.created_at)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 sm:text-gray-300">
                      Published
                    </p>
                  </div>
                </div>

                {/* Tags - Mobile friendly */}
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-700 border-orange-200 sm:bg-white/20 sm:text-white sm:border-white/30"
                  >
                    {story.genre}
                  </Badge>
                  {story.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-gray-700 border-gray-300 bg-white/50 sm:text-white sm:border-white/30 sm:bg-white/10"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons - Mobile optimized */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {isOwnStory ? (
                    <>
                      <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg w-full sm:w-auto"
                        onClick={() => navigate(`/stories/${id}/edit`)}
                      >
                        <Edit className="h-5 w-5 mr-2" />
                        Edit Story
                      </Button>
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white hover:bg-gray-100 text-gray-800 shadow-lg w-full sm:w-auto"
                        onClick={handleShare}
                      >
                        <Share2 className="h-5 w-5 mr-2" />
                        Share
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg w-full sm:w-auto"
                        onClick={() => navigate(`/stories/${id}/read`)}
                      >
                        <BookOpen className="h-5 w-5 mr-2" />
                        Start Reading
                      </Button>

                      <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row">
                        <Button
                          size="lg"
                          variant={isLiked ? "default" : "secondary"}
                          className={cn(
                            "shadow-lg",
                            isLiked
                              ? "bg-red-500 hover:bg-red-600 text-white"
                              : "bg-white hover:bg-gray-100 text-gray-800"
                          )}
                          onClick={handleLike}
                        >
                          <Heart
                            className={cn(
                              "h-5 w-5 sm:mr-2",
                              isLiked ? "fill-current" : ""
                            )}
                          />
                          <span className="hidden sm:inline">
                            {isLiked ? "Liked" : "Like"}
                          </span>
                        </Button>

                        <Button
                          size="lg"
                          variant={isSaved ? "default" : "secondary"}
                          className={cn(
                            "shadow-lg",
                            isSaved
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : "bg-white hover:bg-gray-100 text-gray-800"
                          )}
                          onClick={handleSave}
                        >
                          <Bookmark
                            className={cn(
                              "h-5 w-5 sm:mr-2",
                              isSaved ? "fill-current" : ""
                            )}
                          />
                          <span className="hidden sm:inline">
                            {isSaved ? "Saved" : "Save"}
                          </span>
                        </Button>

                        <Button
                          size="lg"
                          variant="secondary"
                          className="bg-white hover:bg-gray-100 text-gray-800 shadow-lg"
                          onClick={handleShare}
                        >
                          <Share2 className="h-5 w-5 sm:mr-2" />
                          <span className="hidden sm:inline">Share</span>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Tabs defaultValue="about" className="space-y-6">
            <TabsList className="bg-white border w-full justify-start">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="space-y-6">
              <Card className="bg-white">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold mb-4">Story Summary</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {story.description || "No description available."}
                  </p>
                </CardContent>
              </Card>

              {author && (
                <Card className="bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 sm:h-16 w-12 sm:w-16 flex-shrink-0">
                        <AvatarImage src={author.profile_pic || undefined} />
                        <AvatarFallback>
                          {author.username?.[0]?.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold">@{author.username}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {author.bio || "No bio available"}
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-4 mt-3 text-sm">
                          <span>
                            <strong>
                              {formatNumber(author.followers_count)}
                            </strong>{" "}
                            followers
                          </span>
                          <span>
                            <strong>{author.total_stories}</strong> stories
                          </span>
                          <span className="hidden sm:inline">
                            <strong>
                              {formatNumber(author.total_reads || 0)}
                            </strong>{" "}
                            total reads
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Details Tab */}
            <TabsContent value="details" className="space-y-6">
              <Card className="bg-white">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold mb-4">Story Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Genre</span>
                      <span>{story.genre}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Published</span>
                      <span>{formatDate(story.created_at)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Last Updated
                      </span>
                      <span>{formatDate(story.updated_at)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Visibility</span>
                      <Badge
                        variant={
                          story.visibility === "private"
                            ? "secondary"
                            : "default"
                        }
                      >
                        {story.visibility === "private" ? (
                          <>
                            <Lock className="h-3 w-3 mr-1" />
                            Private
                          </>
                        ) : (
                          <>
                            <Globe className="h-3 w-3 mr-1" />
                            Public
                          </>
                        )}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Reads</span>
                      <span>{formatNumber(story.reads_count)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Likes</span>
                      <span>{formatNumber(story.votes_count)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Stories */}
          {relatedStories.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                More Like This
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {relatedStories.map((relatedStory) => (
                  <Link
                    key={relatedStory.id}
                    to={`/stories/${relatedStory.id}`}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all bg-white">
                      <div className="aspect-[2/3] relative">
                        <img
                          src={
                            relatedStory.cover_image ||
                            `https://source.unsplash.com/400x600/?book,${relatedStory.genre}`
                          }
                          alt={relatedStory.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <CardContent className="p-3 sm:p-4">
                        <h3 className="font-semibold line-clamp-2 text-sm sm:text-base">
                          {relatedStory.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                          {formatNumber(relatedStory.reads_count)} reads
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
