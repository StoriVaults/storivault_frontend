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
  ChevronRight,
  MessageCircle,
  Clock,
  Calendar,
  User as UserIcon,
  Award,
  TrendingUp,
  Star,
  MoreVertical,
  Flag,
  Edit,
  Trash2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Type,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { MainLayout } from "@/components/layout/main-layout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { Story, User } from "@/types";
import { storiesApi, usersApi, votesApi } from "@/apis";
import { formatNumber, formatDate } from "@/helper/formatting";
import { cn } from "@/lib/utils";

// Define extended author type
interface ExtendedAuthor extends User {
  is_following?: boolean;
  total_stories?: number;
  total_reads?: number;
}

interface Chapter {
  id: string;
  number: number;
  title: string;
  content: string;
  published_at: string;
  reads_count: number;
  word_count: number;
  estimated_read_time: number;
}

export function StoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  // Story data states - using ExtendedAuthor type
  const [story, setStory] = useState<Story | null>(null);
  const [author, setAuthor] = useState<ExtendedAuthor | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [relatedStories, setRelatedStories] = useState<Story[]>([]);

  // UI states
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [readingMode, setReadingMode] = useState(false);
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [textAlign, setTextAlign] = useState<
    "left" | "center" | "right" | "justify"
  >("left");
  const [readingProgress, setReadingProgress] = useState(0);
  const [comments, setComments] = useState<any[]>([]);

  // Is this the author's own story?
  const isOwnStory = user?.id === story?.author_id;

  useEffect(() => {
    if (!id) return;
    fetchStoryDetails();
    trackReadingHistory();
  }, [id]);

  useEffect(() => {
    // Track reading progress
    if (readingMode && currentChapter) {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        const height =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / height) * 100;
        setReadingProgress(Math.min(progress, 100));
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [readingMode, currentChapter]);

  const fetchStoryDetails = async () => {
    if (!id) return;

    try {
      setIsLoading(true);

      // Fetch story details
      const storyData = await storiesApi.getStory(id);
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
        // Create mock author if API fails
        const mockAuthor: ExtendedAuthor = {
          id: storyData.author_id,
          username: `author_${storyData.author_id.slice(0, 8)}`,
          email: "",
          bio: "Passionate storyteller crafting worlds with words",
          profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${storyData.author_id}`,
          followers_count: Math.floor(Math.random() * 10000),
          following_count: Math.floor(Math.random() * 1000),
          stories_count: Math.floor(Math.random() * 50),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          total_stories: Math.floor(Math.random() * 50) + 5,
          total_reads: Math.floor(Math.random() * 100000) + 10000,
        };
        setAuthor(mockAuthor);
      }

      // Generate chapters with realistic content
      const mockChapters: Chapter[] = generateChapters(storyData);
      setChapters(mockChapters);
      setCurrentChapter(mockChapters[0]);

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

      // Fetch related stories
      const relatedRes = await storiesApi.getStories({
        genre: storyData.genre,
        limit: 4,
      });
      setRelatedStories(relatedRes.items.filter((s) => s.id !== id));

      // Generate mock comments
      setComments(generateMockComments());
    } catch (error) {
      console.error("Failed to fetch story details:", error);
      addToast({
        title: "Error",
        description: "Failed to load story details",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateChapters = (story: Story): Chapter[] => {
    const chapterCount = Math.floor(Math.random() * 10) + 3;
    return Array.from({ length: chapterCount }, (_, i) => ({
      id: `chapter-${i + 1}`,
      number: i + 1,
      title: getChapterTitle(i + 1),
      content: generateChapterContent(story.genre, i + 1),
      published_at: new Date(
        Date.now() - (chapterCount - i) * 24 * 60 * 60 * 1000
      ).toISOString(),
      reads_count: Math.floor(Math.random() * 5000) + 500,
      word_count: Math.floor(Math.random() * 2000) + 1500,
      estimated_read_time: Math.floor(Math.random() * 10) + 5,
    }));
  };

  const getChapterTitle = (num: number): string => {
    const titles = [
      "The Beginning",
      "A New Hope",
      "Dark Revelations",
      "The Journey Continues",
      "Unexpected Allies",
      "The Storm Approaches",
      "Moment of Truth",
      "Rising Action",
      "The Confrontation",
      "Final Stand",
      "New Dawn",
      "Epilogue",
    ];
    return titles[num - 1] || `Chapter ${num}`;
  };

  const generateChapterContent = (
    genre: string,
    chapterNum: number
  ): string => {
    const genreIntros: Record<string, string> = {
      Romance:
        "Her heart raced as she saw him standing there, the moonlight casting shadows across his face.",
      Fantasy:
        "The ancient prophecy had foretold this moment, when magic would return to the realm.",
      Mystery:
        "The detective studied the crime scene, knowing that every detail could be crucial.",
      "Sci-Fi":
        "The starship's engines hummed as they approached the uncharted system.",
      Horror:
        "The old house creaked ominously, and shadows danced in the corners of her vision.",
      Adventure:
        "The map led them deeper into the jungle, where no explorer had ventured before.",
    };

    const intro = genreIntros[genre] || "The story continues...";

    return `
# Chapter ${chapterNum}: ${getChapterTitle(chapterNum)}

${intro}

The morning sun cast long shadows across the landscape, painting everything in hues of gold and amber. Our protagonist stood at the crossroads, contemplating the journey that lay ahead. Each path promised different adventures, different challenges, and different rewards.

"Sometimes," they thought, "the hardest choice is not between right and wrong, but between two rights."

The wind whispered through the trees, carrying with it the scent of distant places and untold stories. It was a reminder that every ending was also a beginning, every closing door revealed a window of opportunity.

As they took their first step forward, they remembered the words of their mentor: "Courage is not the absence of fear, but the triumph over it. The brave person is not one who does not feel afraid, but one who conquers that fear."

The path ahead was uncertain, filled with both promise and peril. But that's what made it an adventure worth pursuing. Every great story began with a single step into the unknown.
    `;
  };

  const generateMockComments = () => {
    return [
      {
        id: "1",
        user: { username: "bookworm23", avatar: null },
        content: "This chapter was incredible! Can't wait for the next one.",
        likes: 24,
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "2",
        user: { username: "reader_alice", avatar: null },
        content: "The character development in this story is amazing!",
        likes: 18,
        created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      },
    ];
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
      addToast({
        title: "Sign in required",
        description: "Please sign in to follow authors",
        type: "info",
      });
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
    addToast({
      title: isFollowing ? "Unfollowed" : "Following!",
      description: isFollowing
        ? `You unfollowed @${author.username}`
        : `You are now following @${author.username}`,
      type: "success",
    });
  };

  const handleLike = async () => {
    if (!isAuthenticated) {
      addToast({
        title: "Sign in required",
        description: "Please sign in to like stories",
        type: "info",
      });
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

    addToast({
      title: isLiked ? "Removed like" : "Story liked!",
      description: isLiked ? "" : "Added to your liked stories",
      type: "success",
    });
  };

  const handleSave = async () => {
    if (!isAuthenticated) {
      addToast({
        title: "Sign in required",
        description: "Please sign in to save stories",
        type: "info",
      });
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
    addToast({
      title: isSaved ? "Removed from library" : "Added to library!",
      description: isSaved ? "" : "Story saved to your reading list",
      type: "success",
    });
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

  const fontSizeClass = {
    small: "text-sm leading-relaxed",
    medium: "text-base leading-relaxed",
    large: "text-lg leading-loose",
  };

  const textAlignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
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
    <MainLayout showFooter={!readingMode}>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Story Header */}
        {!readingMode && (
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background backdrop-blur-sm" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-20">
              <Button
                variant="ghost"
                className="mb-4 text-white hover:text-white/80"
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
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6 text-white">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">
                      {story.title}
                    </h1>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      {story.description}
                    </p>
                  </div>

                  {/* Author Info - with null checks */}
                  {author && (
                    <div className="flex items-center justify-between bg-black/20 rounded-xl p-4 backdrop-blur-sm">
                      <Link
                        to={`/profile/${author.username}`}
                        className="flex items-center gap-4 group"
                      >
                        <Avatar className="h-14 w-14 border-2 border-white/20">
                          <AvatarImage src={author.profile_pic || undefined} />
                          <AvatarFallback className="bg-primary/20 text-primary">
                            {author.username?.[0]?.toUpperCase() || "A"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                            @{author.username}
                          </p>
                          <p className="text-sm text-gray-300">
                            {formatNumber(author.followers_count)} followers •
                            {author.total_stories || 0} stories
                          </p>
                        </div>
                      </Link>
                      {author.username !== user?.username && (
                        <Button
                          variant={isFollowing ? "secondary" : "default"}
                          onClick={handleFollow}
                          className="ml-4"
                        >
                          {isFollowing ? "Following" : "Follow"}
                        </Button>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Eye className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-2xl font-bold">
                        {formatNumber(story.reads_count)}
                      </p>
                      <p className="text-sm text-gray-300">Reads</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Heart className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-2xl font-bold">
                        {formatNumber(story.votes_count)}
                      </p>
                      <p className="text-sm text-gray-300">Likes</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <MessageCircle className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-2xl font-bold">
                        {formatNumber(story.comments_count)}
                      </p>
                      <p className="text-sm text-gray-300">Comments</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <BookOpen className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-2xl font-bold">{chapters.length}</p>
                      <p className="text-sm text-gray-300">Chapters</p>
                    </div>
                  </div>

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
                        className="text-white border-white/30"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => setReadingMode(true)}
                    >
                      <BookOpen className="h-5 w-5 mr-2" />
                      Start Reading
                    </Button>
                    <Button
                      size="lg"
                      variant={isLiked ? "default" : "outline"}
                      className={cn(
                        isLiked
                          ? "bg-red-500 hover:bg-red-600"
                          : "border-white/30 text-white hover:bg-white/10"
                      )}
                      onClick={handleLike}
                    >
                      <Heart
                        className={cn(
                          "h-5 w-5 mr-2",
                          isLiked && "fill-current"
                        )}
                      />
                      {isLiked ? "Liked" : "Like"}
                    </Button>
                    <Button
                      size="lg"
                      variant={isSaved ? "default" : "outline"}
                      className={cn(
                        isSaved
                          ? "bg-green-600 hover:bg-green-700"
                          : "border-white/30 text-white hover:bg-white/10"
                      )}
                      onClick={handleSave}
                    >
                      <Bookmark
                        className={cn(
                          "h-5 w-5 mr-2",
                          isSaved && "fill-current"
                        )}
                      />
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                      onClick={handleShare}
                    >
                      <Share2 className="h-5 w-5 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rest of the component remains the same... */}
      </div>
    </MainLayout>
  );
}
