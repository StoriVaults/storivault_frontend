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
import { LoadingSpinner } from "@/components/ui/loading-spinner";
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

// Writing tools features
const writingTools = [
  {
    title: "Story Planner",
    description: "Organize your plot with our intuitive story mapping tool",
    icon: FileText,
    color: literaryColors.peach,
  },
  {
    title: "Character Builder",
    description: "Create deep, memorable characters with guided templates",
    icon: Users,
    color: literaryColors.mint,
  },
  {
    title: "Writing Prompts",
    description: "Never run out of ideas with daily writing inspiration",
    icon: Lamp,
    color: literaryColors.lavender,
  },
  {
    title: "Grammar Guide",
    description: "Perfect your prose with intelligent writing assistance",
    icon: Glasses,
    color: literaryColors.skyBlue,
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
        {/* Hero Section - Cozy Library Theme */}
        <section className="relative overflow-hidden py-20 px-4">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            <div className="mb-8">
              <Badge
                className="px-4 py-2 text-sm font-medium rounded-full"
                style={{
                  backgroundColor: literaryColors.gold,
                  color: literaryColors.coffee,
                }}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Welcome to Your Literary Haven
              </Badge>
            </div>

            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-serif mb-6 fade-in-up"
              style={{ color: literaryColors.coffee }}
            >
              Where Stories
              <span
                className="block text-glow"
                style={{ color: literaryColors.gold }}
              >
                Come to Life
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto handwritten fade-in-up"
              style={{ color: literaryColors.ink, animationDelay: "0.2s" }}
            >
              "{inspiringQuotes[currentQuote].text}"
              <span className="block text-sm mt-2 font-serif">
                — {inspiringQuotes[currentQuote].author}
              </span>
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {isAuthenticated ? (
                <>
                  <Button
                    size="lg"
                    className="group px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
                    style={{
                      backgroundColor: literaryColors.coffee,
                      color: literaryColors.cream,
                    }}
                    asChild
                  >
                    <Link to="/stories">
                      <Library className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Explore Library
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg rounded-full border-2 transform hover:scale-105 transition-all"
                    style={{
                      borderColor: literaryColors.gold,
                      color: literaryColors.coffee,
                    }}
                    asChild
                  >
                    <Link to="/stories/create">
                      <PenTool className="mr-3 h-5 w-5" />
                      Start Writing
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    size="lg"
                    className="group px-10 py-6 text-xl rounded-full book-shadow transform hover:scale-105 transition-all"
                    style={{
                      backgroundColor: literaryColors.gold,
                      color: literaryColors.coffee,
                    }}
                    asChild
                  >
                    <Link to="/stories">
                      <BookOpen className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                      Start Reading Free
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg rounded-full border-2"
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

            {/* Live Reading Stats */}
            <div
              className="flex flex-wrap justify-center gap-8 fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center">
                <div
                  className="text-4xl font-bold"
                  style={{ color: literaryColors.gold }}
                >
                  2.5M+
                </div>
                <div className="text-sm" style={{ color: literaryColors.ink }}>
                  Pages Read Today
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-4xl font-bold"
                  style={{ color: literaryColors.dustyRose }}
                >
                  850K+
                </div>
                <div className="text-sm" style={{ color: literaryColors.ink }}>
                  Active Readers
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-4xl font-bold"
                  style={{ color: literaryColors.sage }}
                >
                  125K+
                </div>
                <div className="text-sm" style={{ color: literaryColors.ink }}>
                  Stories Published
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories Section - Showcase */}
        {featuredStories.length > 0 && (
          <section
            className="py-20 px-4"
            style={{ backgroundColor: literaryColors.parchment }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge
                  className="mb-4 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: literaryColors.gold,
                    color: literaryColors.coffee,
                  }}
                >
                  <Star className="h-4 w-4 mr-2" />
                  Editor's Choice
                </Badge>
                <h2
                  className="text-4xl md:text-5xl font-serif mb-4"
                  style={{ color: literaryColors.coffee }}
                >
                  Featured Stories This Week
                </h2>
                <p className="text-lg" style={{ color: literaryColors.ink }}>
                  Handpicked tales that will captivate your imagination
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            style={{
                              backgroundColor: literaryColors.gold,
                              color: literaryColors.coffee,
                            }}
                          >
                            {story.genre}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-xl font-serif font-bold mb-2">
                            {story.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {(story.reads_count / 1000).toFixed(1)}K
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {(story.votes_count / 1000).toFixed(1)}K
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="rounded-full border-2"
                  style={{
                    borderColor: literaryColors.gold,
                    color: literaryColors.coffee,
                  }}
                  asChild
                >
                  <Link to="/stories?sort=popular">
                    View All Featured Stories
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Genre Discovery Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-serif mb-4"
                style={{ color: literaryColors.coffee }}
              >
                Find Your Perfect Genre
              </h2>
              <p className="text-lg" style={{ color: literaryColors.ink }}>
                Every reader has a story waiting to be discovered
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                        "p-6 h-full border-0 text-center book-shadow",
                        genre.shape
                      )}
                      style={{
                        backgroundColor:
                          hoveredGenre === genre.name ? genre.color : "white",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Icon
                        className="h-10 w-10 mx-auto mb-3"
                        style={{
                          color:
                            hoveredGenre === genre.name ? "white" : genre.color,
                        }}
                      />
                      <h3
                        className="font-bold text-sm mb-1"
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
                        className="text-xs"
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

        {/* Popular Stories Carousel */}
        {popularStories.length > 0 && (
          <section className="py-20 px-4" style={{ backgroundColor: "white" }}>
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2
                    className="text-4xl font-serif flex items-center gap-3"
                    style={{ color: literaryColors.coffee }}
                  >
                    <Flame
                      className="h-10 w-10"
                      style={{ color: literaryColors.dustyRose }}
                    />
                    Most Popular Stories
                  </h2>
                  <p className="mt-2" style={{ color: literaryColors.ink }}>
                    All-time reader favorites
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularStories.map((story, index) => (
                  <StoryCard key={story.id} story={story} variant="default" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trending Stories Section */}
        {trendingStories.length > 0 && (
          <section
            className="py-20 px-4"
            style={{ backgroundColor: literaryColors.parchment }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2
                    className="text-4xl font-serif flex items-center gap-3"
                    style={{ color: literaryColors.coffee }}
                  >
                    <TrendingUp
                      className="h-10 w-10"
                      style={{ color: literaryColors.sage }}
                    />
                    Trending This Week
                  </h2>
                  <p className="mt-2" style={{ color: literaryColors.ink }}>
                    Stories gaining momentum right now
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="rounded-full border-2"
                  style={{
                    borderColor: literaryColors.sage,
                    color: literaryColors.coffee,
                  }}
                  asChild
                >
                  <Link to="/stories?sort=trending">
                    View All Trending
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {trendingStories.slice(0, 8).map((story, index) => (
                  <Card
                    key={story.id}
                    className="group border-0 overflow-hidden book-shadow hover:scale-105 transition-all"
                  >
                    <Link to={`/stories/${story.id}`}>
                      <div className="p-4" style={{ backgroundColor: "white" }}>
                        <div className="flex items-start gap-3">
                          <span
                            className="text-2xl font-bold"
                            style={{ color: literaryColors.sage }}
                          >
                            #{index + 1}
                          </span>
                          <div className="flex-1">
                            <h3
                              className="font-serif font-bold line-clamp-2 group-hover:text-primary transition-colors"
                              style={{ color: literaryColors.coffee }}
                            >
                              {story.title}
                            </h3>
                            <p
                              className="text-sm mt-1 line-clamp-2"
                              style={{ color: literaryColors.ink }}
                            >
                              {story.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {story.genre}
                              </Badge>
                              <span
                                className="text-xs flex items-center gap-1"
                                style={{ color: literaryColors.ink }}
                              >
                                <Eye className="h-3 w-3" />
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

        {/* New Stories Section */}
        {newStories.length > 0 && (
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2
                    className="text-4xl font-serif flex items-center gap-3"
                    style={{ color: literaryColors.coffee }}
                  >
                    <Sparkles
                      className="h-10 w-10"
                      style={{ color: literaryColors.lavender }}
                    />
                    Fresh Off the Press
                  </h2>
                  <p className="mt-2" style={{ color: literaryColors.ink }}>
                    Discover new stories published this week
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
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
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-xs text-white font-bold line-clamp-2">
                            {story.title}
                          </p>
                          <Badge
                            className="mt-1 text-xs"
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

        {/* Reading Challenge Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Card
              className="p-12 border-0 paper-texture relative overflow-hidden"
              style={{ backgroundColor: literaryColors.lavender }}
            >
              <Bookmark className="absolute top-10 right-10 h-32 w-32 opacity-10 -rotate-12" />
              <div className="relative z-10 text-center">
                <h2
                  className="text-4xl font-serif mb-4"
                  style={{ color: literaryColors.coffee }}
                >
                  Join the Monthly Reading Challenge
                </h2>
                <p
                  className="text-lg mb-8 max-w-2xl mx-auto"
                  style={{ color: literaryColors.ink }}
                >
                  Read 10 stories this month and earn exclusive badges, unlock
                  special features, and join our community of passionate
                  readers!
                </p>
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg book-shadow"
                  style={{
                    backgroundColor: literaryColors.coffee,
                    color: literaryColors.cream,
                  }}
                >
                  <Trophy className="mr-3 h-5 w-5" />
                  Start Challenge
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-4 relative overflow-hidden">
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
              className="h-20 w-20 mx-auto mb-8 text-glow"
              style={{ color: literaryColors.gold }}
            />
            <h2
              className="text-5xl md:text-6xl font-serif mb-6"
              style={{ color: literaryColors.coffee }}
            >
              Your Next Great Story Awaits
            </h2>
            <p
              className="text-xl mb-10 handwritten"
              style={{ color: literaryColors.ink }}
            >
              "The journey of a thousand pages begins with a single click"
            </p>
            <Button
              size="lg"
              className="px-12 py-7 text-xl rounded-full book-shadow transform hover:scale-105 transition-all"
              style={{
                backgroundColor: literaryColors.coffee,
                color: literaryColors.cream,
              }}
              asChild
            >
              <Link to="/stories">
                <Sparkles className="mr-3 h-6 w-6" />
                Begin Your Journey
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
