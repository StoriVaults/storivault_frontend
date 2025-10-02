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
  Camera,
  X,
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
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MainLayout } from "@/components/layout/main-layout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { useAuthStore } from "@/store/authStore";
import { Story, User } from "@/types";
import { storiesApi, usersApi } from "@/apis";
import { UserController } from "@/controllers/userController";
import { useUiStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

export function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated, updateUser } = useAuthStore();
  const { addToast } = useUiStore();

  const [profileUser, setProfileUser] = useState<User | null>(null);
  const [userStories, setUserStories] = useState<Story[]>([]);
  const [savedStories, setSavedStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("stories");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);

  // Edit form state
  const [editForm, setEditForm] = useState({
    username: "",
    email: "",
    bio: "",
  });
  const [newProfilePic, setNewProfilePic] = useState<File | null>(null);
  const [profilePicPreview, setProfilePicPreview] = useState<string>("");

  const isOwnProfile = user?.username === username;

  useEffect(() => {
    fetchProfileData();
  }, [username]);

  const fetchProfileData = async () => {
    if (!username) return;

    try {
      setIsLoading(true);

      // Fetch user profile
      let userData: User;
      if (isOwnProfile && user) {
        // Use current user data if viewing own profile
        userData = user;
      } else {
        // Fetch user data by username
        try {
          userData = await usersApi.getUserByUsername(username);
        } catch (error) {
          // If user not found, use mock data for demo
          userData = {
            id: username,
            username: username,
            email: `${username}@storivault.com`,
            bio: "📚 Passionate storyteller | ✍️ Creating worlds with words",
            profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
            followers_count: Math.floor(Math.random() * 10000),
            following_count: Math.floor(Math.random() * 1000),
            stories_count: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
        }
      }
      setProfileUser(userData);

      // Initialize edit form with user data
      if (isOwnProfile) {
        setEditForm({
          username: userData.username,
          email: userData.email,
          bio: userData.bio || "",
        });
        if (userData.profile_pic) {
          setProfilePicPreview(userData.profile_pic);
        }
      }

      // Fetch user's stories - Filter by author_id
      const storiesResponse = await storiesApi.getStories({
        page: 1,
        limit: 100, // Get all user stories
        sort: "latest",
      });

      // Filter stories to only show this user's stories
      const filteredStories = storiesResponse.items.filter(
        (story) => story.author_id === userData.id
      );

      setUserStories(filteredStories);
      setProfileUser((prev) =>
        prev
          ? {
              ...prev,
              stories_count: filteredStories.length,
            }
          : null
      );

      // For saved stories (only for own profile)
      if (isOwnProfile) {
        // In a real app, this would fetch the user's saved stories
        // For now, we'll just show some popular stories as placeholder
        const savedResponse = await storiesApi.getStories({
          page: 1,
          limit: 12,
          sort: "popular",
        });
        setSavedStories(savedResponse.items.slice(0, 6));
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      addToast({
        title: "Error",
        description: "Failed to load profile data",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFollowToggle = async () => {
    if (!profileUser) return;

    try {
      if (isFollowing) {
        await usersApi.unfollowUser(profileUser.username);
      } else {
        await usersApi.followUser(profileUser.username);
      }

      setIsFollowing(!isFollowing);
      setProfileUser((prev) =>
        prev
          ? {
              ...prev,
              followers_count: isFollowing
                ? prev.followers_count - 1
                : prev.followers_count + 1,
            }
          : null
      );

      addToast({
        title: isFollowing ? "Unfollowed" : "Following",
        description: isFollowing
          ? `You unfollowed @${profileUser.username}`
          : `You are now following @${profileUser.username}`,
        type: "success",
      });
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to update follow status",
        type: "error",
      });
    }
  };

  const handleProfilePicSelect = (file: File) => {
    setNewProfilePic(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpdateProfile = async () => {
    try {
      setIsUpdatingProfile(true);

      // Update profile picture if changed
      if (newProfilePic) {
        const updatedUser = await UserController.uploadProfilePictureWithToast(
          newProfilePic
        );
        if (updatedUser) {
          setProfileUser(updatedUser);
          updateUser(updatedUser);
        }
      }

      // Update profile info if changed
      const updates: any = {};
      if (editForm.bio !== profileUser?.bio) {
        updates.bio = editForm.bio || null;
      }

      if (Object.keys(updates).length > 0) {
        const updatedUser = await UserController.updateProfileWithToast(
          updates
        );
        if (updatedUser) {
          setProfileUser(updatedUser);
          updateUser(updatedUser);
        }
      }

      setEditDialogOpen(false);
      setNewProfilePic(null);

      if (!newProfilePic && Object.keys(updates).length === 0) {
        addToast({
          title: "No changes",
          description: "No changes were made to your profile",
          type: "info",
        });
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setIsUpdatingProfile(false);
    }
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

  if (!profileUser) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">User not found</h2>
          <p className="text-muted-foreground">This user doesn't exist</p>
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
              <AvatarImage src={profileUser.profile_pic || undefined} />
              <AvatarFallback className="text-3xl">
                {profileUser.username?.[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Profile Info */}
          <div className="flex-1 w-full">
            {/* Username and Actions */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h1 className="text-2xl font-medium">{profileUser.username}</h1>
              <div className="flex items-center gap-2">
                {isOwnProfile ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => setEditDialogOpen(true)}
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
                  {profileUser.stories_count}
                </span>
                <span className="text-gray-600 ml-1">
                  {profileUser.stories_count === 1 ? "story" : "stories"}
                </span>
              </div>
              <button className="text-center md:text-left hover:underline">
                <span className="font-semibold">
                  {formatCount(profileUser.followers_count)}
                </span>
                <span className="text-gray-600 ml-1">followers</span>
              </button>
              <button className="text-center md:text-left hover:underline">
                <span className="font-semibold">
                  {formatCount(profileUser.following_count)}
                </span>
                <span className="text-gray-600 ml-1">following</span>
              </button>
            </div>

            {/* Bio */}
            {profileUser.bio && (
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
                <h3 className="text-lg font-medium mb-2">
                  {isOwnProfile ? "No stories yet" : "No stories published"}
                </h3>
                {isOwnProfile ? (
                  <>
                    <p className="text-muted-foreground mb-4">
                      Start sharing your stories with the world
                    </p>
                    <Button onClick={() => navigate("/stories/create")}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Story
                    </Button>
                  </>
                ) : (
                  <p className="text-muted-foreground">
                    This user hasn't published any stories yet
                  </p>
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
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => navigate("/stories")}
                  >
                    Explore Stories
                  </Button>
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

      {/* Edit Profile Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your profile information and picture
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Profile Picture */}
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={
                    profilePicPreview || profileUser?.profile_pic || undefined
                  }
                />
                <AvatarFallback>
                  {editForm.username?.[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>

              {profilePicPreview && newProfilePic && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setNewProfilePic(null);
                    setProfilePicPreview(profileUser?.profile_pic || "");
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              )}

              <FileDropzone
                onFileSelect={handleProfilePicSelect}
                accept="image/*"
                maxSize={5 * 1024 * 1024}
                className="w-full"
              />
            </div>

            {/* Username (read-only) */}
            <div className="space-y-2">
              <Label htmlFor="edit-username">Username</Label>
              <Input
                id="edit-username"
                value={editForm.username}
                disabled
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">
                Username cannot be changed
              </p>
            </div>

            {/* Email (read-only) */}
            <div className="space-y-2">
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                type="email"
                value={editForm.email}
                disabled
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">
                Email can be changed in settings
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="edit-bio">Bio</Label>
              <Textarea
                id="edit-bio"
                value={editForm.bio}
                onChange={(e) =>
                  setEditForm({ ...editForm, bio: e.target.value })
                }
                placeholder="Tell us about yourself..."
                rows={4}
                maxLength={160}
              />
              <p className="text-xs text-muted-foreground text-right">
                {editForm.bio.length}/160 characters
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setEditDialogOpen(false);
                setNewProfilePic(null);
                setProfilePicPreview(profileUser?.profile_pic || "");
                setEditForm({
                  username: profileUser?.username || "",
                  email: profileUser?.email || "",
                  bio: profileUser?.bio || "",
                });
              }}
              disabled={isUpdatingProfile}
            >
              Cancel
            </Button>
            <Button onClick={handleUpdateProfile} disabled={isUpdatingProfile}>
              {isUpdatingProfile ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}
