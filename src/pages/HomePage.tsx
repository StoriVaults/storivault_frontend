'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Star, Users2, Sparkles, ArrowRight, BookOpen, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StoryCard } from '@/components/ui/story-card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { MainLayout } from '@/components/layout/main-layout';
import { useAuthStore } from '@/store/authStore';
import { Story } from '@/types';
import { storiesApi } from '@/apis';

export function HomePage() {
  const { isAuthenticated, user } = useAuthStore();
  const [featuredStories, setFeaturedStories] = useState<Story[]>([]);
  const [trendingStories, setTrendingStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        // Fetch featured and trending stories
        const [featuredResponse, trendingResponse] = await Promise.all([
          storiesApi.getStories({ page: 1, limit: 3, sort: 'popular' }),
          storiesApi.getStories({ page: 1, limit: 6, sort: 'trending' })
        ]);

        setFeaturedStories(featuredResponse.items);
        setTrendingStories(trendingResponse.items);
      } catch (error) {
        console.error('Failed to fetch home data:', error);
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
    <MainLayout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero rounded-2xl text-white mx-4 mt-6">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Gateway to
                <span className="block bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                  Infinite Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover captivating tales, connect with passionate writers, and immerse yourself in worlds beyond imagination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {isAuthenticated ? (
                  <>
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                      <Link to="/stories">
                        <BookOpen className="mr-2 h-5 w-5" />
                        Explore Stories
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                      <Link to="/stories/create">
                        <PenTool className="mr-2 h-5 w-5" />
                        Start Writing
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                      <Link to="/auth/signup">
                        Get Started Free
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                      <Link to="/stories">
                        Browse Stories
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories */}
        {featuredStories.length > 0 && (
          <section className="px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <Star className="h-8 w-8 text-primary" />
                    Featured Stories
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Hand-picked stories you'll love
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/stories?sort=popular">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredStories.map((story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    variant="featured"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Stats Section */}
        <section className="px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
              <p className="text-muted-foreground text-lg">
                Thousands of readers and writers sharing their passion for storytelling
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">10K+</h3>
                  <p className="text-muted-foreground">Stories Published</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent">25K+</h3>
                  <p className="text-muted-foreground">Active Readers</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PenTool className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-success">5K+</h3>
                  <p className="text-muted-foreground">Authors</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trending Stories */}
        {trendingStories.length > 0 && (
          <section className="px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    Trending Now
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Stories everyone's talking about
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/stories?sort=trending">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {trendingStories.map((story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        {!isAuthenticated && (
          <section className="px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-primary text-white border-0 shadow-strong">
                <CardContent className="p-12 text-center">
                  <Sparkles className="h-12 w-12 mx-auto mb-6 text-white" />
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Start Your Story?
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Join StoriVault today and become part of a vibrant community of storytellers and book lovers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                      <Link to="/auth/signup">
                        Create Free Account
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                      <Link to="/auth/login">
                        Sign In
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Personal Welcome */}
        {isAuthenticated && user && (
          <section className="px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-0 shadow-medium">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    Welcome back, {user.username}! 📚
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Ready to continue your reading journey or share a new story?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link to="/library">
                        <BookOpen className="mr-2 h-4 w-4" />
                        My Library
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/stories/create">
                        <PenTool className="mr-2 h-4 w-4" />
                        Write a Story
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </div>
    </MainLayout>
  );
}