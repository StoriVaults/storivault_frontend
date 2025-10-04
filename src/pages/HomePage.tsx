"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  PenTool,
  Heart,
  Eye,
  Star,
  Users,
  TrendingUp,
  Award,
  MessageCircle,
  ChevronRight,
  Feather,
  Coffee,
  Bookmark,
  Library,
  FileText,
  Glasses,
  Lamp,
  Trophy,
  Rocket,
  Scroll,
  Clock,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StoryCard } from "@/components/ui/story-card";
import { StoryCardSkeleton } from "@/components/ui/story-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { MainLayout } from "@/components/layout/main-layout";
import { useAuthStore } from "@/store/authStore";
import { Story } from "@/types";
import { storiesApi } from "@/apis";
import { cn } from "@/lib/utils";

// Literary color palette - warm and inviting
const literaryColors = {
  cream: "#FFF8E7",
  parchment: "#F4E8D0",
  coffee: "#6F4E37",
  ink: "#2C3E50",
  gold: "#D4A574",
  sage: "#87A96B",
  dustyRose: "#C08081",
  lavender: "#E6E6FA",
  mint: "#B5EAD7",
  peach: "#FFD3B6",
  skyBlue: "#A8DADC",
};

// Featured Authors with literary avatars
const featuredAuthors = [
  {
    id: 1,
    name: "Eleanor Whitmore",
    avatar:
      "https://api.dicebear.com/7.x/lorelei/svg?seed=Eleanor&backgroundColor=FFD3B6",
    genre: "Romance",
    stories: 47,
    followers: "15.2K",
    quote: "Every story begins with a single word...",
  },
  {
    id: 2,
    name: "Marcus Chen",
    avatar:
      "https://api.dicebear.com/7.x/lorelei/svg?seed=Marcus&backgroundColor=A8DADC",
    genre: "Mystery",
    stories: 32,
    followers: "12.8K",
    quote: "In the shadows of words, truth emerges.",
  },
  {
    id: 3,
    name: "Isabella Rose",
    avatar:
      "https://api.dicebear.com/7.x/lorelei/svg?seed=Isabella&backgroundColor=E6E6FA",
    genre: "Fantasy",
    stories: 68,
    followers: "28.5K",
    quote: "Magic lives between the lines.",
  },
  {
    id: 4,
    name: "Thomas Blackwood",
    avatar:
      "https://api.dicebear.com/7.x/lorelei/svg?seed=Thomas&backgroundColor=B5EAD7",
    genre: "Thriller",
    stories: 29,
    followers: "9.7K",
    quote: "Every chapter holds a secret.",
  },
];

// Reading quotes
const inspiringQuotes = [
  {
    text: "A reader lives a thousand lives before he dies.",
    author: "George R.R. Martin",
  },
  { text: "Books are a uniquely portable magic.", author: "Stephen King" },
  {
    text: "There is no friend as loyal as a book.",
    author: "Ernest Hemingway",
  },
  { text: "Reading is dreaming with open eyes.", author: "Unknown" },
];

// Genre cards with unique shapes and colors
const genreCards = [
  {
    name: "Romance",
    icon: Heart,
    color: literaryColors.dustyRose,
    stories: "5.2K",
    shape: "rounded-[30px]",
  },
  {
    name: "Mystery",
    icon: Glasses,
    color: literaryColors.ink,
    stories: "3.8K",
    shape: "rounded-tl-[40px] rounded-br-[40px]",
  },
  {
    name: "Fantasy",
    icon: Sparkles,
    color: literaryColors.lavender,
    stories: "7.1K",
    shape: "rounded-[20px_50px]",
  },
  {
    name: "Sci-Fi",
    icon: Rocket,
    color: literaryColors.skyBlue,
    stories: "2.9K",
    shape: "rounded-tr-[50px] rounded-bl-[50px]",
  },
  {
    name: "Poetry",
    icon: Feather,
    color: literaryColors.gold,
    stories: "1.5K",
    shape: "rounded-[40px_20px]",
  },
  {
    name: "Non-Fiction",
    icon: Library,
    color: literaryColors.sage,
    stories: "4.3K",
    shape: "rounded-[25px]",
  },
];

export function HomePage() {
  const { isAuthenticated, user } = useAuthStore();
  const [featuredStories, setFeaturedStories] = useState<Story[]>([]);
  const [trendingStories, setTrendingStories] = useState<Story[]>([]);
  const [newStories, setNewStories] = useState<Story[]>([]);
  const [popularStories, setPopularStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [hoveredGenre, setHoveredGenre] = useState<string | null>(null);

  // Rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspiringQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [
          featuredResponse,
          trendingResponse,
          newResponse,
          popularResponse,
        ] = await Promise.all([
          storiesApi.getStories({ page: 1, limit: 6, sort: "popular" }),
          storiesApi.getStories({ page: 1, limit: 12, sort: "trending" }),
          storiesApi.getStories({ page: 1, limit: 8, sort: "latest" }),
          storiesApi.getStories({ page: 1, limit: 4, sort: "popular" }),
        ]);

        setFeaturedStories(featuredResponse.items);
        setTrendingStories(trendingResponse.items);
        setNewStories(newResponse.items);
        setPopularStories(popularResponse.items);
      } catch (error) {
        console.error("Failed to fetch home data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  // Loading State
  if (isLoading) {
    return (
      <MainLayout>
        <div
          className="min-h-screen"
          style={{ backgroundColor: literaryColors.cream }}
        >
          {/* Hero Section Skeleton */}
          <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <Skeleton className="h-8 w-48 mx-auto mb-6" variant="rounded" />
              <Skeleton className="h-16 w-3/4 mx-auto mb-4" variant="text" />
              <Skeleton className="h-6 w-1/2 mx-auto mb-8" variant="text" />
              <div className="flex justify-center gap-4 mb-12">
                <Skeleton className="h-12 w-40" variant="rounded" />
                <Skeleton className="h-12 w-32" variant="rounded" />
              </div>
              {/* Stats Skeleton */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-sm sm:max-w-md md:max-w-none mx-auto">
                <div className="text-center">
                  <Skeleton className="h-10 w-24 mx-auto mb-2" variant="text" />
                  <Skeleton className="h-4 w-20 mx-auto" variant="text" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-10 w-24 mx-auto mb-2" variant="text" />
                  <Skeleton className="h-4 w-20 mx-auto" variant="text" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-10 w-24 mx-auto mb-2" variant="text" />
                  <Skeleton className="h-4 w-20 mx-auto" variant="text" />
                </div>
              </div>
            </div>
          </section>

          {/* Featured Stories Skeleton */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <Skeleton className="h-8 w-64 mx-auto mb-4" variant="text" />
                <Skeleton className="h-5 w-96 mx-auto" variant="text" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <StoryCardSkeleton key={index} variant="default" />
                ))}
              </div>
            </div>
          </section>

          {/* Genre Discovery Skeleton */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <Skeleton className="h-8 w-64 mx-auto mb-4" variant="text" />
                <Skeleton className="h-5 w-80 mx-auto" variant="text" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-32 rounded-lg"
                    variant="rounded"
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    );
  }

  // Main Content (existing code continues here...)
  return (
    <MainLayout showFooter={true}>
      {/* Custom Literary Styles */}
      <style>{`
        @keyframes page-float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes quill-write {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(10px) rotate(10deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(212, 165, 116, 0.5); }
          50% { text-shadow: 0 0 40px rgba(212, 165, 116, 0.8); }
        }
        
        .page-float { animation: page-float 6s ease-in-out infinite; }
        .quill-write { animation: quill-write 4s ease-in-out infinite; }
        .fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .text-glow { animation: text-glow 3s ease-in-out infinite; }
        
        .paper-texture {
          background-image: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(212, 165, 116, 0.03) 2px,
              rgba(212, 165, 116, 0.03) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(212, 165, 116, 0.03) 2px,
              rgba(212, 165, 116, 0.03) 4px
            );
        }
        
        .book-shadow {
          box-shadow: 
            0 2px 4px rgba(111, 78, 55, 0.1),
            0 8px 16px rgba(111, 78, 55, 0.1),
            0 16px 32px rgba(111, 78, 55, 0.1);
        }
        
        .handwritten {
          font-family: 'Kalam', cursive;
        }
        
        .gold-ring {
          box-shadow: 0 0 0 4px ${literaryColors.gold}, 0 0 0 8px rgba(212, 165, 116, 0.3);
        }
      `}</style>

      {/* Add Google Font for handwritten style */}
      <link
        href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen"
        style={{ backgroundColor: literaryColors.cream }}
      >
        {/* Hero Section - Cozy Library Theme - MOBILE OPTIMIZED */}
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          {/* Floating background elements - Hidden on mobile for performance */}
          <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-40 bg-white/40 rounded-lg rotate-12 page-float" />
            <div
              className="absolute top-20 right-20 w-28 h-36 bg-white/30 rounded-lg -rotate-6 page-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute bottom-10 left-1/4 w-24 h-32 bg-white/35 rounded-lg rotate-3 page-float"
              style={{ animationDelay: "4s" }}
            />
            <Feather className="absolute top-1/3 right-10 h-20 w-20 text-amber-700/20 quill-write" />
            <BookOpen className="absolute bottom-20 right-1/3 h-24 w-24 text-amber-600/15 rotate-12" />
            <Coffee className="absolute top-1/2 left-10 h-16 w-16 text-amber-800/20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <Badge
                className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full"
                style={{
                  backgroundColor: literaryColors.gold,
                  color: literaryColors.coffee,
                }}
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                Welcome to Your Literary Haven
              </Badge>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-4 sm:mb-6 fade-in-up leading-tight"
              style={{ color: literaryColors.coffee }}
            >
              Where Stories
              <span
                className="block text-glow mt-1 sm:mt-2"
                style={{ color: literaryColors.gold }}
              >
                Come to Life
              </span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto handwritten fade-in-up px-4"
              style={{ color: literaryColors.ink, animationDelay: "0.2s" }}
            >
              "{inspiringQuotes[currentQuote].text}"
              <span className="block text-xs sm:text-sm mt-2 font-serif">
                — {inspiringQuotes[currentQuote].author}
              </span>
            </p>

            <div
              className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center mb-8 sm:mb-12 fade-in-up px-4"
              style={{ animationDelay: "0.4s" }}
            >
              {isAuthenticated ? (
                <>
                  <Button
                    size="default"
                    className="group px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
                    style={{
                      backgroundColor: literaryColors.coffee,
                      color: literaryColors.cream,
                    }}
                    asChild
                  >
                    <Link to="/stories">
                      <Library className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                      Explore Library
                    </Link>
                  </Button>
                  <Button
                    size="default"
                    variant="outline"
                    className="px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full border-2 transform hover:scale-105 transition-all"
                    style={{
                      borderColor: literaryColors.gold,
                      color: literaryColors.coffee,
                    }}
                    asChild
                  >
                    <Link to="/stories/create">
                      <PenTool className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      Start Writing
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    size="default"
                    className="group px-8 py-5 sm:px-10 sm:py-6 text-lg sm:text-xl rounded-full book-shadow transform hover:scale-105 transition-all"
                    style={{
                      backgroundColor: literaryColors.gold,
                      color: literaryColors.coffee,
                    }}
                    asChild
                  >
                    <Link to="/stories">
                      <BookOpen className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform" />
                      Start Reading Free
                    </Link>
                  </Button>
                  <Button
                    size="default"
                    variant="outline"
                    className="px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full border-2"
                    style={{
                      borderColor: literaryColors.coffee,
                      color: literaryColors.coffee,
                    }}
                    asChild
                  >
                    <Link to="/auth/signup">Join as Writer</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Live Reading Stats - Mobile Optimized Grid */}
            <div
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-sm sm:max-w-md md:max-w-none mx-auto fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color: literaryColors.gold }}
                >
                  2.5M+
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: literaryColors.ink }}
                >
                  Pages Today
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color: literaryColors.dustyRose }}
                >
                  850K+
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: literaryColors.ink }}
                >
                  Active Readers
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color: literaryColors.sage }}
                >
                  125K+
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: literaryColors.ink }}
                >
                  Stories
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories Section - Mobile Responsive */}
        {featuredStories.length > 0 && (
          <section
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
            style={{ backgroundColor: literaryColors.parchment }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <Badge
                  className="mb-3 sm:mb-4 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full"
                  style={{
                    backgroundColor: literaryColors.gold,
                    color: literaryColors.coffee,
                  }}
                >
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  Editor's Choice
                </Badge>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4"
                  style={{ color: literaryColors.coffee }}
                >
                  Featured Stories This Week
                </h2>
                <p
                  className="text-sm sm:text-base md:text-lg px-4"
                  style={{ color: literaryColors.ink }}
                >
                  Handpicked tales that will captivate your imagination
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {featuredStories.slice(0, 6).map((story, index) => (
                  <div
                    key={story.id}
                    className="group fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="overflow-hidden border-0 book-shadow hover:scale-105 transition-all duration-300">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img
                          src={
                            story.cover_image ||
                            `https://source.unsplash.com/400x600/?book,library,${index}`
                          }
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge
                            className="text-xs"
                            style={{
                              backgroundColor: literaryColors.gold,
                              color: literaryColors.coffee,
                            }}
                          >
                            {story.genre}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-lg sm:text-xl font-serif font-bold mb-2">
                            {story.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs sm:text-sm">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                              {(story.reads_count / 1000).toFixed(1)}K
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                              {(story.votes_count / 1000).toFixed(1)}K
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6 sm:mt-8">
                <Button
                  variant="outline"
                  className="rounded-full border-2 text-sm sm:text-base"
                  style={{
                    borderColor: literaryColors.gold,
                    color: literaryColors.coffee,
                  }}
                  asChild
                >
                  <Link to="/stories?sort=popular">
                    View All Featured Stories
                    <ChevronRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Genre Discovery Section - Mobile Responsive */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4"
                style={{ color: literaryColors.coffee }}
              >
                Find Your Perfect Genre
              </h2>
              <p
                className="text-sm sm:text-base md:text-lg"
                style={{ color: literaryColors.ink }}
              >
                Every reader has a story waiting to be discovered
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {genreCards.map((genre) => {
                const Icon = genre.icon;
                return (
                  <Link
                    key={genre.name}
                    to={`/stories?genre=${genre.name}`}
                    className={cn(
                      "group cursor-pointer transform hover:scale-110 transition-all duration-300",
                      genre.shape
                    )}
                    onMouseEnter={() => setHoveredGenre(genre.name)}
                    onMouseLeave={() => setHoveredGenre(null)}
                  >
                    <Card
                      className={cn(
                        "p-3 sm:p-4 md:p-6 h-full border-0 text-center book-shadow",
                        genre.shape
                      )}
                      style={{
                        backgroundColor:
                          hoveredGenre === genre.name ? genre.color : "white",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Icon
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 mx-auto mb-2 sm:mb-3"
                        style={{
                          color:
                            hoveredGenre === genre.name ? "white" : genre.color,
                        }}
                      />
                      <h3
                        className="font-bold text-xs sm:text-sm mb-0.5 sm:mb-1"
                        style={{
                          color:
                            hoveredGenre === genre.name
                              ? "white"
                              : literaryColors.coffee,
                        }}
                      >
                        {genre.name}
                      </h3>
                      <p
                        className="text-[10px] sm:text-xs"
                        style={{
                          color:
                            hoveredGenre === genre.name
                              ? "rgba(255,255,255,0.8)"
                              : literaryColors.ink,
                        }}
                      >
                        {genre.stories} stories
                      </p>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Stories Carousel - Mobile Responsive */}
        {popularStories.length > 0 && (
          <section
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
            style={{ backgroundColor: "white" }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12">
                <div>
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif flex items-center gap-2 sm:gap-3"
                    style={{ color: literaryColors.coffee }}
                  >
                    <Flame
                      className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                      style={{ color: literaryColors.dustyRose }}
                    />
                    Most Popular Stories
                  </h2>
                  <p
                    className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base"
                    style={{ color: literaryColors.ink }}
                  >
                    All-time reader favorites
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {popularStories.map((story, index) => (
                  <StoryCard key={story.id} story={story} variant="default" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trending Stories Section - Mobile Responsive */}
        {trendingStories.length > 0 && (
          <section
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
            style={{ backgroundColor: literaryColors.parchment }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 md:mb-12 gap-4">
                <div>
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif flex items-center gap-2 sm:gap-3"
                    style={{ color: literaryColors.coffee }}
                  >
                    <TrendingUp
                      className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                      style={{ color: literaryColors.sage }}
                    />
                    Trending This Week
                  </h2>
                  <p
                    className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base"
                    style={{ color: literaryColors.ink }}
                  >
                    Stories gaining momentum right now
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="rounded-full border-2 text-xs sm:text-sm"
                  style={{
                    borderColor: literaryColors.sage,
                    color: literaryColors.coffee,
                  }}
                  asChild
                >
                  <Link to="/stories?sort=trending">
                    View All Trending
                    <ChevronRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {trendingStories.slice(0, 8).map((story, index) => (
                  <Card
                    key={story.id}
                    className="group border-0 overflow-hidden book-shadow hover:scale-105 transition-all"
                  >
                    <Link to={`/stories/${story.id}`}>
                      <div
                        className="p-3 sm:p-4"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span
                            className="text-lg sm:text-xl md:text-2xl font-bold"
                            style={{ color: literaryColors.sage }}
                          >
                            #{index + 1}
                          </span>
                          <div className="flex-1">
                            <h3
                              className="text-sm sm:text-base font-serif font-bold line-clamp-2 group-hover:text-primary transition-colors"
                              style={{ color: literaryColors.coffee }}
                            >
                              {story.title}
                            </h3>
                            <p
                              className="text-xs sm:text-sm mt-1 line-clamp-2"
                              style={{ color: literaryColors.ink }}
                            >
                              {story.description}
                            </p>
                            <div className="flex items-center gap-1.5 sm:gap-2 mt-2">
                              <Badge
                                variant="outline"
                                className="text-[10px] sm:text-xs"
                              >
                                {story.genre}
                              </Badge>
                              <span
                                className="text-[10px] sm:text-xs flex items-center gap-1"
                                style={{ color: literaryColors.ink }}
                              >
                                <Eye className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                {(story.reads_count / 1000).toFixed(1)}K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* New Stories Section - Mobile Responsive */}
        {newStories.length > 0 && (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12">
                <div>
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif flex items-center gap-2 sm:gap-3"
                    style={{ color: literaryColors.coffee }}
                  >
                    <Sparkles
                      className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                      style={{ color: literaryColors.lavender }}
                    />
                    Fresh Off the Press
                  </h2>
                  <p
                    className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base"
                    style={{ color: literaryColors.ink }}
                  >
                    Discover new stories published this week
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
                {newStories.map((story, index) => (
                  <Link
                    key={story.id}
                    to={`/stories/${story.id}`}
                    className="group cursor-pointer fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="aspect-[2/3] relative overflow-hidden rounded-lg book-shadow transform hover:scale-110 transition-all">
                      <img
                        src={
                          story.cover_image ||
                          `https://source.unsplash.com/200x300/?book,cover,${index}`
                        }
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 right-1.5 sm:right-2">
                          <p className="text-[10px] sm:text-xs text-white font-bold line-clamp-2">
                            {story.title}
                          </p>
                          <Badge
                            className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs px-1.5 py-0"
                            style={{ backgroundColor: literaryColors.lavender }}
                          >
                            {story.genre}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Reading Challenge Section - Mobile Responsive */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <Card
              className="p-6 sm:p-8 md:p-12 border-0 paper-texture relative overflow-hidden"
              style={{ backgroundColor: literaryColors.lavender }}
            >
              <Bookmark className="absolute top-5 right-5 sm:top-10 sm:right-10 h-20 w-20 sm:h-32 sm:w-32 opacity-10 -rotate-12" />
              <div className="relative z-10 text-center">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4"
                  style={{ color: literaryColors.coffee }}
                >
                  Join the Monthly Reading Challenge
                </h2>
                <p
                  className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
                  style={{ color: literaryColors.ink }}
                >
                  Read 10 stories this month and earn exclusive badges, unlock
                  special features, and join our community of passionate
                  readers!
                </p>
                <Button
                  size="default"
                  className="rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg book-shadow"
                  style={{
                    backgroundColor: literaryColors.coffee,
                    color: literaryColors.cream,
                  }}
                >
                  <Trophy className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Start Challenge
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA - Mobile Responsive */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${literaryColors.gold}20, ${literaryColors.dustyRose}20, ${literaryColors.lavender}20)`,
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <BookOpen
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mx-auto mb-6 sm:mb-8 text-glow"
              style={{ color: literaryColors.gold }}
            />
            <h2
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6 px-4"
              style={{ color: literaryColors.coffee }}
            >
              Your Next Great Story Awaits
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 handwritten px-4"
              style={{ color: literaryColors.ink }}
            >
              "The journey of a thousand pages begins with a single click"
            </p>
            <Button
              size="default"
              className="px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 text-base sm:text-lg md:text-xl rounded-full book-shadow transform hover:scale-105 transition-all"
              style={{
                backgroundColor: literaryColors.coffee,
                color: literaryColors.cream,
              }}
              asChild
            >
              <Link to="/stories">
                <Sparkles className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                Begin Your Journey
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
