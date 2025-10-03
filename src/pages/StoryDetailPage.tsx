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
import { LoadingSpinner } from "@/components/ui/loading-spinner";
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
        <div className="flex items-center justify-center min-h-[60vh]">
          <LoadingSpinner size="lg" />
        </div>
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
        {/* Story Header */}
        <div className="relative">
          <div
            className="absolute inset-0 h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                story.cover_image ||
                "https://source.unsplash.com/1600x500/?book,library"
              })`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-20">
            <Button
              variant="ghost"
              className="mb-4 text-white hover:bg-white/10"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="flex justify-center lg:justify-start">
                <div className="relative group">
                  <img
                    src={
                      story.cover_image ||
                      "https://source.unsplash.com/400x600/?book,novel"
                    }
                    alt={story.title}
                    className="w-64 h-96 object-cover rounded-xl shadow-2xl"
                  />
                  {story.visibility === "private" && (
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded px-3 py-1">
                      <Lock className="h-4 w-4 text-white inline mr-1" />
                      <span className="text-sm text-white">Private</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
                    {story.title}
                  </h1>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {story.description}
                  </p>
                </div>

                {/* Author Info */}
                {author && (
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Link
                      to={`/profile/${author.username}`}
                      className="flex items-center gap-4 group"
                    >
                      <Avatar className="h-14 w-14 border-2 border-white/20">
                        <AvatarImage src={author.profile_pic || undefined} />
                        <AvatarFallback className="bg-primary/20 text-white">
                          {author.username?.[0]?.toUpperCase() || "A"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-lg text-white group-hover:text-primary-light transition-colors">
                          @{author.username}
                        </p>
                        <p className="text-sm text-gray-300">
                          {formatNumber(author.followers_count)} followers •{" "}
                          {author.total_stories || 0} stories
                        </p>
                      </div>
                    </Link>
                    {author.username !== user?.username && (
                      <Button
                        variant={isFollowing ? "secondary" : "default"}
                        onClick={handleFollow}
                        className={cn(
                          "ml-4",
                          isFollowing
                            ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                            : "bg-white hover:bg-gray-100 text-gray-900"
                        )}
                      >
                        {isFollowing ? "Following" : "Follow"}
                      </Button>
                    )}
                  </div>
                )}

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700">
                    <Eye className="h-6 w-6 mx-auto mb-2 text-white" />
                    <p className="text-2xl font-bold text-white">
                      {formatNumber(story.reads_count)}
                    </p>
                    <p className="text-sm text-gray-300">Reads</p>
                  </div>
                  <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700">
                    <Heart className="h-6 w-6 mx-auto mb-2 text-white" />
                    <p className="text-2xl font-bold text-white">
                      {formatNumber(story.votes_count)}
                    </p>
                    <p className="text-sm text-gray-300">Likes</p>
                  </div>
                  <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700">
                    <MessageCircle className="h-6 w-6 mx-auto mb-2 text-white" />
                    <p className="text-2xl font-bold text-white">
                      {formatNumber(story.comments_count)}
                    </p>
                    <p className="text-sm text-gray-300">Comments</p>
                  </div>
                  <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700">
                    <Calendar className="h-6 w-6 mx-auto mb-2 text-white" />
                    <p className="text-sm font-bold text-white">
                      {formatDate(story.created_at)}
                    </p>
                    <p className="text-sm text-gray-300">Published</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-white/20 text-white border-white/30"
                  >
                    {story.genre}
                  </Badge>
                  {story.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-white border-white/30 bg-white/10"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {isOwnStory ? (
                    <>
                      <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
                        onClick={() => navigate(`/stories/${id}/edit`)}
                      >
                        <Edit className="h-5 w-5 mr-2" />
                        Edit Story
                      </Button>
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white hover:bg-gray-100 text-gray-800 shadow-lg"
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
                        className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
                        onClick={() => navigate(`/stories/${id}/read`)}
                      >
                        <BookOpen className="h-5 w-5 mr-2" />
                        Start Reading
                      </Button>

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
                            "h-5 w-5 mr-2",
                            isLiked ? "fill-current" : ""
                          )}
                        />
                        {isLiked ? "Liked" : "Like"}
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
                            "h-5 w-5 mr-2",
                            isSaved ? "fill-current" : ""
                          )}
                        />
                        {isSaved ? "Saved" : "Save"}
                      </Button>

                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white hover:bg-gray-100 text-gray-800 shadow-lg"
                        onClick={handleShare}
                      >
                        <Share2 className="h-5 w-5 mr-2" />
                        Share
                      </Button>
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
            <TabsList className="bg-white border">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="space-y-6">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Story Summary</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {story.description || "No description available."}
                  </p>
                </CardContent>
              </Card>

              {author && (
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={author.profile_pic || undefined} />
                        <AvatarFallback>
                          {author.username?.[0]?.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold">@{author.username}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {author.bio || "No bio available"}
                        </p>
                        <div className="flex gap-4 mt-3 text-sm">
                          <span>
                            <strong>
                              {formatNumber(author.followers_count)}
                            </strong>{" "}
                            followers
                          </span>
                          <span>
                            <strong>{author.total_stories}</strong> stories
                          </span>
                          <span>
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
                <CardContent className="p-6">
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
              <h2 className="text-2xl font-bold mb-6">More Like This</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      <CardContent className="p-4">
                        <h3 className="font-semibold line-clamp-2">
                          {relatedStory.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
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
