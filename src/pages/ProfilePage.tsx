"use client";

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Grid3X3,
  Bookmark,
  Settings,
  MoreHorizontal,
  Plus,
  Check,
  Camera,
  X,
  Trash2,
  Upload,
  User as UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MainLayout } from "@/components/layout/main-layout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
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

      let userData: User;
      if (isOwnProfile && user) {
        userData = user;
      } else {
        try {
          userData = await usersApi.getUserByUsername(username);
        } catch (error) {
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

      const storiesResponse = await storiesApi.getStories({
        page: 1,
        limit: 100,
        sort: "latest",
      });

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

      if (isOwnProfile) {
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

  const handleProfilePicSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        addToast({
          title: "File too large",
          description: "Profile picture must be less than 5MB",
          type: "error",
        });
        return;
      }

      setNewProfilePic(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfilePic = () => {
    setNewProfilePic(null);
    setProfilePicPreview("");
  };

  const handleUpdateProfile = async () => {
    try {
      setIsUpdatingProfile(true);

      if (newProfilePic) {
        const updatedUser = await UserController.uploadProfilePictureWithToast(
          newProfilePic
        );
        if (updatedUser) {
          setProfileUser(updatedUser);
          updateUser(updatedUser);
        }
      }

      const updates: any = {};
      if (editForm.bio !== profileUser?.bio) {
        updates.bio = editForm.bio || null;
      }

      // If removing profile pic
      if (!profilePicPreview && profileUser?.profile_pic) {
        updates.profile_pic = null;
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

      addToast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated.",
        type: "success",
      });
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
          <div className="flex-shrink-0">
            <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-gray-200">
              <AvatarImage src={profileUser.profile_pic || undefined} />
              <AvatarFallback className="text-3xl">
                {profileUser.username?.[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1 w-full">
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

      {/* Enhanced Edit Profile Modal */}
      {editDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setEditDialogOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Edit Profile</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setEditDialogOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-white/90 text-sm mt-1">
                Update your profile information and picture
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Profile Picture Section */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative group">
                  <Avatar className="h-32 w-32 border-4 border-orange-200 shadow-lg">
                    <AvatarImage
                      src={
                        profilePicPreview ||
                        profileUser?.profile_pic ||
                        undefined
                      }
                    />
                    <AvatarFallback className="bg-gradient-to-br from-orange-400 to-amber-400 text-white text-3xl">
                      {editForm.username?.[0].toUpperCase() || (
                        <UserIcon className="h-12 w-12" />
                      )}
                    </AvatarFallback>
                  </Avatar>

                  {/* Upload Overlay */}
                  <label className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="h-8 w-8 text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePicSelect}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <label className="inline-flex">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="border-orange-200 hover:bg-orange-50"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Photo
                    </Button>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePicSelect}
                      className="hidden"
                    />
                  </label>

                  {(profilePicPreview || profileUser?.profile_pic) && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleRemoveProfilePic}
                      className="border-red-200 hover:bg-red-50 text-red-600"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  )}
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Username Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="edit-username"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Username
                  </Label>
                  <Input
                    id="edit-username"
                    value={editForm.username}
                    disabled
                    className="bg-gray-50 border-gray-200 text-gray-600 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500">
                    Username cannot be changed
                  </p>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="edit-email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={editForm.email}
                    disabled
                    className="bg-gray-50 border-gray-200 text-gray-600 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500">
                    To change your email, go to account settings
                  </p>
                </div>

                {/* Bio Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="edit-bio"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Bio
                  </Label>
                  <Textarea
                    id="edit-bio"
                    value={editForm.bio}
                    onChange={(e) =>
                      setEditForm({ ...editForm, bio: e.target.value })
                    }
                    placeholder="Tell the world about yourself..."
                    rows={4}
                    maxLength={160}
                    className="resize-none border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                  />
                  <div className="flex justify-between">
                    <p className="text-xs text-gray-500">
                      Share your story, interests, or writing goals
                    </p>
                    <p
                      className={cn(
                        "text-xs font-medium",
                        editForm.bio.length > 140
                          ? "text-orange-500"
                          : "text-gray-500"
                      )}
                    >
                      {editForm.bio.length}/160
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t bg-gray-50 px-6 py-4">
              <div className="flex justify-end gap-3">
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
                  className="border-gray-300"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleUpdateProfile}
                  disabled={isUpdatingProfile}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                >
                  {isUpdatingProfile ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
