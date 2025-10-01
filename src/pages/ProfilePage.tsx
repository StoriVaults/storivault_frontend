"use client";

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Grid3X3,
  Bookmark,
  Settings,
  MoreHorizontal,
  Plus,
  Edit,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MainLayout } from "@/components/layout/main-layout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { Story } from "@/types";
import { storiesApi } from "@/apis";
import { cn } from "@/lib/utils";

export function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const [profileUser, setProfileUser] = useState<any>(null);
  const [userStories, setUserStories] = useState<Story[]>([]);
  const [savedStories, setSavedStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [activeTab, setActiveTab] = useState("stories");

  const isOwnProfile = user?.username === username;

  useEffect(() => {
    fetchProfileData();
  }, [username]);

  const fetchProfileData = async () => {
    try {
      setIsLoading(true);

      // Mock profile data
      const mockUser = {
        id: username,
        username: username,
        bio: "📚 Passionate storyteller | ✍️ Creating worlds with words | 🌟 Fantasy & Romance",
        profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
        followers_count: Math.floor(Math.random() * 10000),
        following_count: Math.floor(Math.random() * 1000),
        stories_count: Math.floor(Math.random() * 50),
      };
      setProfileUser(mockUser);

      // Fetch user's stories
      const storiesRes = await storiesApi.getStories({
        page: 1,
        limit: 30,
        sort: "latest",
      });
      setUserStories(storiesRes.items);

      // Mock saved stories
      const savedRes = await storiesApi.getStories({
        page: 1,
        limit: 12,
        sort: "popular",
      });
      setSavedStories(savedRes.items);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    setProfileUser((prev: any) => ({
      ...prev,
      followers_count: isFollowing
        ? prev.followers_count - 1
        : prev.followers_count + 1,
    }));
  };

  const formatCount = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
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
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-gray-200">
              <AvatarImage src={profileUser?.profile_pic} />
              <AvatarFallback className="text-3xl">
                {profileUser?.username?.[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Profile Info */}
          <div className="flex-1 w-full">
            {/* Username and Actions */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h1 className="text-2xl font-medium">{profileUser?.username}</h1>
              <div className="flex items-center gap-2">
                {isOwnProfile ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => navigate("/settings/profile")}
                    >
                      Edit Profile
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => navigate("/settings")}
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={handleFollowToggle}
                      variant={isFollowing ? "outline" : "default"}
                    >
                      {isFollowing ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Following
                        </>
                      ) : (
                        "Follow"
                      )}
                    </Button>
                    <Button variant="outline">Message</Button>
                    <Button variant="outline" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mb-4">
              <div className="text-center md:text-left">
                <span className="font-semibold">
                  {profileUser?.stories_count}
                </span>
                <span className="text-gray-600 ml-1">stories</span>
              </div>
              <button className="text-center md:text-left hover:underline">
                <span className="font-semibold">
                  {formatCount(profileUser?.followers_count)}
                </span>
                <span className="text-gray-600 ml-1">followers</span>
              </button>
              <button className="text-center md:text-left hover:underline">
                <span className="font-semibold">
                  {formatCount(profileUser?.following_count)}
                </span>
                <span className="text-gray-600 ml-1">following</span>
              </button>
            </div>

            {/* Bio */}
            {profileUser?.bio && (
              <div className="text-sm whitespace-pre-line">
                {profileUser.bio}
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="stories"
              className="flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black pb-3"
            >
              <Grid3X3 className="h-4 w-4" />
              STORIES
            </TabsTrigger>
            {isOwnProfile && (
              <TabsTrigger
                value="saved"
                className="flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black pb-3"
              >
                <Bookmark className="h-4 w-4" />
                SAVED
              </TabsTrigger>
            )}
          </TabsList>

          {/* Stories Grid */}
          <TabsContent value="stories" className="mt-6">
            {userStories.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No stories yet</h3>
                {isOwnProfile && (
                  <Button onClick={() => navigate("/stories/create")}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Story
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-1 md:gap-4">
                {userStories.map((story) => (
                  <button
                    key={story.id}
                    onClick={() => navigate(`/stories/${story.id}`)}
                    className="relative aspect-[4/5] group overflow-hidden rounded-sm md:rounded-lg bg-gray-100"
                  >
                    <img
                      src={
                        story.cover_image ||
                        `https://source.unsplash.com/400x500/?book,${story.genre}`
                      }
                      alt={story.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center px-2">
                        <p className="font-semibold text-sm md:text-base line-clamp-2">
                          {story.title}
                        </p>
                        <p className="text-xs md:text-sm mt-1">
                          {formatCount(story.reads_count)} reads
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Saved Stories */}
          {isOwnProfile && (
            <TabsContent value="saved" className="mt-6">
              {savedStories.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No saved stories</h3>
                  <p className="text-gray-600">
                    Stories you save will appear here
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-1 md:gap-4">
                  {savedStories.map((story) => (
                    <button
                      key={story.id}
                      onClick={() => navigate(`/stories/${story.id}`)}
                      className="relative aspect-[4/5] group overflow-hidden rounded-sm md:rounded-lg bg-gray-100"
                    >
                      <img
                        src={
                          story.cover_image ||
                          `https://source.unsplash.com/400x500/?book,${story.genre}`
                        }
                        alt={story.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-white text-center px-2">
                          <p className="font-semibold text-sm md:text-base line-clamp-2">
                            {story.title}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </TabsContent>
          )}
        </Tabs>

        {/* Create Story FAB for own profile */}
        {isOwnProfile && (
          <Button
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
            size="icon"
            onClick={() => navigate("/stories/create")}
          >
            <Plus className="h-6 w-6" />
          </Button>
        )}
      </div>
    </MainLayout>
  );
}
