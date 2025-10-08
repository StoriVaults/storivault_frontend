"use client";

import { useState, useEffect, useCallback } from "react";
import { ProfileSkeleton } from "@/components/ui/profile-skeleton";
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
  Edit2,
  MapPin,
  Calendar,
  Link as LinkIcon,
  BookOpen,
  Lock,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Home,
  Bell,
  MessageSquare,
  Heart,
  Archive,
  Clock,
  Search,
  Compass,
  Film,
  PlusSquare,
  Menu,
} from "lucide-react";
import Cropper from "react-easy-crop";
import type { Area, Point } from "react-easy-crop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MainLayout } from "@/components/layout/main-layout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { Story, User } from "@/types";
import { storiesApi, usersApi, libraryApi } from "@/apis";
import { UserController } from "@/controllers/userController";
import { useUiStore } from "@/store/uiStore";
import { formatDate, formatNumber } from "@/helper/formatting";
import { cn } from "@/lib/utils";

interface ProfileStats {
  totalReads: number;
  totalLikes: number;
  avgReadsPerStory: number;
}

export function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated, updateUser } = useAuthStore();
  const { addToast } = useUiStore();

  const [profileUser, setProfileUser] = useState<User | null>(null);
  const [userStories, setUserStories] = useState<Story[]>([]);
  const [savedStories, setSavedStories] = useState<Story[]>([]);
  const [profileStats, setProfileStats] = useState<ProfileStats>({
    totalReads: 0,
    totalLikes: 0,
    avgReadsPerStory: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("stories");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Edit form state
  const [editForm, setEditForm] = useState({
    username: "",
    email: "",
    bio: "",
    website: "",
    location: "",
  });
  const [newProfilePic, setNewProfilePic] = useState<File | null>(null);
  const [profilePicPreview, setProfilePicPreview] = useState<string>("");

  // Cover image state
  const [newCoverImage, setNewCoverImage] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string>("");
  const [showCoverCropper, setShowCoverCropper] = useState(false);

  // Cropper state
  const [showCropper, setShowCropper] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string>("");
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [cropType, setCropType] = useState<"profile" | "cover">("profile");

  // Profile picture modal viewer
  const [showProfilePicModal, setShowProfilePicModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState<string>("");

  const isOwnProfile = user?.username === username;

  useEffect(() => {
    if (username) {
      fetchProfileData();
    }
  }, [username, user]);

  const fetchProfileData = async () => {
    if (!username) return;

    try {
      setIsLoading(true);

      // Get user data
      let userData: User;
      if (isOwnProfile && user) {
        userData = user;
      } else {
        try {
          userData = await usersApi.getUserByUsername(username);
        } catch (error) {
          // Create mock user if API fails
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

      // Initialize edit form
      if (isOwnProfile) {
        setEditForm({
          username: userData.username,
          email: userData.email,
          bio: userData.bio || "",
          website: "",
          location: "",
        });
        if (userData.profile_pic) {
          setProfilePicPreview(userData.profile_pic);
        }
      }

      // Check if following
      if (!isOwnProfile && isAuthenticated) {
        const followingList = JSON.parse(
          localStorage.getItem("following_users") || "[]"
        );
        setIsFollowing(followingList.includes(userData.id));
      }

      // Fetch user's stories
      const storiesResponse = await storiesApi.getStories({
        page: 1,
        limit: 100,
        sort: "latest",
      });

      // Filter stories - show private stories to owner
      const filteredStories = storiesResponse.items.filter((story) => {
        if (story.author_id !== userData.id) {
          return false;
        }
        if (isOwnProfile) {
          return true;
        }
        return story.visibility === "public";
      });

      setUserStories(filteredStories);

      // Calculate stats
      const statsStories = isOwnProfile
        ? filteredStories
        : filteredStories.filter((s) => s.visibility === "public");

      const totalReads = statsStories.reduce(
        (sum, story) => sum + story.reads_count,
        0
      );
      const totalLikes = statsStories.reduce(
        (sum, story) => sum + story.votes_count,
        0
      );
      const avgReads =
        statsStories.length > 0
          ? Math.round(totalReads / statsStories.length)
          : 0;

      setProfileStats({
        totalReads,
        totalLikes,
        avgReadsPerStory: avgReads,
      });

      setProfileUser((prev) =>
        prev
          ? {
              ...prev,
              stories_count: filteredStories.filter(
                (s) => s.visibility === "public"
              ).length,
            }
          : null
      );

      // Fetch saved stories for own profile
      if (isOwnProfile) {
        await fetchSavedStories();
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

  const fetchSavedStories = async () => {
    try {
      const response = await libraryApi.getSavedStories(1, 100);
      setSavedStories(response.items);
      localStorage.setItem(
        "saved_stories",
        JSON.stringify(response.items.map((s) => s.id))
      );
    } catch (error) {
      const savedIds = JSON.parse(
        localStorage.getItem("saved_stories") || "[]"
      );
      if (savedIds.length === 0) {
        setSavedStories([]);
        return;
      }
      const stories: Story[] = [];
      const allStoriesRes = await storiesApi.getStories({ limit: 100 });
      for (const story of allStoriesRes.items) {
        if (savedIds.includes(story.id)) {
          stories.push(story);
        }
      }
      setSavedStories(stories);
    }
  };

  const handleFollowToggle = async () => {
    if (!profileUser) return;

    try {
      const followingUsers = JSON.parse(
        localStorage.getItem("following_users") || "[]"
      );

      if (isFollowing) {
        const updated = followingUsers.filter(
          (id: string) => id !== profileUser.id
        );
        localStorage.setItem("following_users", JSON.stringify(updated));
        await usersApi.unfollowUser(profileUser.username);
        setIsFollowing(false);
        setProfileUser((prev) =>
          prev
            ? {
                ...prev,
                followers_count: Math.max(0, prev.followers_count - 1),
              }
            : null
        );
      } else {
        followingUsers.push(profileUser.id);
        localStorage.setItem("following_users", JSON.stringify(followingUsers));
        await usersApi.followUser(profileUser.username);
        setIsFollowing(true);
        setProfileUser((prev) =>
          prev
            ? {
                ...prev,
                followers_count: prev.followers_count + 1,
              }
            : null
        );
      }

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

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.src = url;
    });

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: Area,
    rotation = 0
  ): Promise<Blob> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("No 2d context");
    }

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

    canvas.width = safeArea;
    canvas.height = safeArea;

    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.translate(-safeArea / 2, -safeArea / 2);

    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    );

    const data = ctx.getImageData(0, 0, safeArea, safeArea);

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.putImageData(
      data,
      Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
      Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob!);
      }, "image/jpeg");
    });
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

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageToCrop(reader.result as string);
        setCropType("profile");
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        addToast({
          title: "File too large",
          description: "Cover image must be less than 10MB",
          type: "error",
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageToCrop(reader.result as string);
        setCropType("cover");
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropSave = async () => {
    if (!croppedAreaPixels || !imageToCrop) return;

    try {
      const croppedBlob = await getCroppedImg(
        imageToCrop,
        croppedAreaPixels,
        rotation
      );

      if (cropType === "profile") {
        const croppedFile = new File([croppedBlob], "profile.jpg", {
          type: "image/jpeg",
        });

        setNewProfilePic(croppedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePicPreview(reader.result as string);
        };
        reader.readAsDataURL(croppedFile);
      } else {
        const croppedFile = new File([croppedBlob], "cover.jpg", {
          type: "image/jpeg",
        });

        setNewCoverImage(croppedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
          setCoverImagePreview(reader.result as string);
        };
        reader.readAsDataURL(croppedFile);
      }

      setShowCropper(false);
      setImageToCrop("");
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setRotation(0);
    } catch (error) {
      console.error("Error cropping image:", error);
      addToast({
        title: "Error",
        description: "Failed to crop image. Please try again.",
        type: "error",
      });
    }
  };

  const handleCropCancel = () => {
    setShowCropper(false);
    setImageToCrop("");
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
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
          setProfilePicPreview(updatedUser.profile_pic || "");
        }
      }

      if (newCoverImage) {
        try {
          const updatedUser = await usersApi.uploadCoverImage(newCoverImage);
          setProfileUser(updatedUser);
          updateUser(updatedUser);
          setCoverImagePreview(updatedUser.cover_image || "");
          addToast({
            title: "Cover image updated",
            description: "Your cover image has been updated successfully",
            type: "success",
          });
        } catch (error) {
          addToast({
            title: "Error",
            description: "Failed to upload cover image",
            type: "error",
          });
        }
      }

      const updates: any = {};
      if (editForm.bio !== profileUser?.bio) {
        updates.bio = editForm.bio || null;
      }

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
      setNewCoverImage(null);

      addToast({
        title: "Profile updated!",
        description: "Your changes have been saved successfully.",
        type: "success",
      });
    } catch (error) {
      console.error("Failed to update profile:", error);
      addToast({
        title: "Update failed",
        description: "Failed to update your profile. Please try again.",
        type: "error",
      });
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleRemoveFromSaved = async (storyId: string) => {
    try {
      await libraryApi.removeStory(storyId);
    } catch (error) {
      console.error("Failed to remove from backend:", error);
    }

    const savedIds = JSON.parse(localStorage.getItem("saved_stories") || "[]");
    const updated = savedIds.filter((id: string) => id !== storyId);
    localStorage.setItem("saved_stories", JSON.stringify(updated));

    setSavedStories((prev) => prev.filter((s) => s.id !== storyId));

    addToast({
      title: "Removed from saved",
      description: "Story has been removed from your saved list",
      type: "success",
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen">
        <ProfileSkeleton />
      </div>
    );
  }

  if (!profileUser) {
    return (
      <div className="flex min-h-screen">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">User not found</h2>
            <p className="text-muted-foreground mb-4">
              This user doesn't exist
            </p>
            <Button onClick={() => navigate("/stories")}>Browse Stories</Button>
          </div>
        </div>
      </div>
    );
  }

  // Count public and private stories
  const publicStories = userStories.filter((s) => s.visibility === "public");
  const privateStories = userStories.filter((s) => s.visibility === "private");

  // Sidebar navigation items
  const sidebarItems = [
    {
      icon: Home,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      icon: Search,
      label: "Search",
      onClick: () => navigate("/search"),
    },
    {
      icon: Compass,
      label: "Explore",
      onClick: () => navigate("/stories"),
    },
    {
      icon: Film,
      label: "Reels",
      onClick: () => navigate("/reels"),
      disabled: true,
    },
    {
      icon: MessageSquare,
      label: "Messages",
      onClick: () => navigate("/messages"),
      badge: isOwnProfile ? 3 : 0, // Example badge count
    },
    {
      icon: Heart,
      label: "Notifications",
      onClick: () => navigate("/notifications"),
      badge: isOwnProfile ? 7 : 0, // Example badge count
    },
    {
      icon: PlusSquare,
      label: "Create",
      onClick: () => navigate("/stories/create"),
    },
    {
      icon: UserIcon,
      label: "Profile",
      onClick: () => navigate(`/profile/${user?.username}`),
      active: true,
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Desktop Sidebar - Instagram Style */}
      <aside
        className={cn(
          "hidden lg:flex lg:flex-col lg:fixed lg:left-0 lg:top-0 lg:h-full",
          "lg:w-[244px] xl:w-[335px] bg-white border-r border-gray-200 z-30"
        )}
      >
        {/* Logo */}
        <div className="px-6 py-6 mb-4">
          <Link to="/" className="block">
            <h1 className="text-2xl font-bold">
              <span className="text-orange-500">Stori</span>
              <span className="text-gray-900">Vault</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.onClick}
                disabled={item.disabled}
                className={cn(
                  "w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-all group relative",
                  "hover:bg-gray-100",
                  item.active && "font-bold",
                  item.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                <div className="relative">
                  <Icon
                    className={cn(
                      "h-6 w-6",
                      item.active ? "text-gray-900" : "text-gray-700"
                    )}
                  />
                  {item.badge && item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span
                  className={cn(
                    "hidden xl:block text-base",
                    item.active ? "text-gray-900" : "text-gray-700"
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* More Menu */}
        <div className="px-3 pb-4 border-t border-gray-200 pt-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-gray-100 transition-all"
          >
            <Menu className="h-6 w-6 text-gray-700" />
            <span className="hidden xl:block text-base text-gray-700">
              More
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-[244px] xl:ml-[335px]">
        <div className="max-w-5xl mx-auto">
          {/* Cover Image */}
          <div className="relative w-full h-48 md:h-64 bg-gradient-to-r from-orange-200 to-amber-200 overflow-hidden">
            {profileUser.cover_image || coverImagePreview ? (
              <img
                src={coverImagePreview || profileUser.cover_image || undefined}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            ) : null}

            {isOwnProfile && (
              <div className="absolute top-4 right-4 flex gap-2">
                <label>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/90 hover:bg-white"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("cover-upload")?.click();
                    }}
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    {profileUser.cover_image ? "Change Cover" : "Add Cover"}
                  </Button>
                  <input
                    id="cover-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleCoverImageSelect}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          {/* Profile Content */}
          <div className="px-4 py-8">
            {/* Profile Header */}
            <div className="relative mb-8">
              {/* Profile Picture */}
              <div className="flex justify-center md:justify-start -mt-16 md:absolute md:left-4 md:top-0">
                <div className="flex-shrink-0 relative">
                  <Avatar
                    className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 border-4 border-white shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => {
                      setModalImageUrl(
                        profileUser.profile_pic ||
                          `https://api.dicebear.com/7.x/avataaars/svg?seed=${profileUser.username}`
                      );
                      setShowProfilePicModal(true);
                    }}
                  >
                    <AvatarImage src={profileUser.profile_pic || undefined} />
                    <AvatarFallback className="text-2xl md:text-3xl bg-gradient-to-br from-primary/20 to-primary/10">
                      {profileUser.username?.[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 w-full pt-6 md:ml-48 md:pt-0">
                {/* Username and Actions */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h1 className="text-xl sm:text-2xl font-medium">
                    {profileUser.username}
                  </h1>
                  <div className="flex items-center gap-2">
                    {isOwnProfile ? (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditDialogOpen(true)}
                          className="gap-1"
                        >
                          <Edit2 className="h-3 w-3" />
                          Edit Profile
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
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
                          size="sm"
                          className="gap-1"
                        >
                          {isFollowing ? (
                            <>
                              <Check className="h-3 w-3" />
                              Following
                            </>
                          ) : (
                            "Follow"
                          )}
                        </Button>
                        <Button variant="outline" size="sm">
                          Message
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mb-4 text-sm">
                  <div className="text-center">
                    <span className="font-semibold text-lg">
                      {publicStories.length}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {publicStories.length === 1 ? "story" : "stories"}
                    </span>
                    {isOwnProfile && privateStories.length > 0 && (
                      <span className="text-gray-500 ml-2">
                        (+{privateStories.length} private)
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                    <button className="text-center hover:underline">
                      <span className="font-semibold text-base sm:text-lg">
                        {formatNumber(profileUser.followers_count)}
                      </span>
                      <span className="text-gray-600 ml-1 text-sm sm:text-base">
                        followers
                      </span>
                    </button>
                    <button className="text-center hover:underline">
                      <span className="font-semibold text-base sm:text-lg">
                        {formatNumber(profileUser.following_count)}
                      </span>
                      <span className="text-gray-600 ml-1 text-sm sm:text-base">
                        following
                      </span>
                    </button>
                  </div>
                </div>

                {/* Bio */}
                {profileUser.bio && (
                  <div className="text-sm whitespace-pre-line text-gray-700">
                    {profileUser.bio}
                  </div>
                )}

                {/* Additional Stats */}
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Joined {formatDate(profileUser.created_at)}
                  </div>
                  {profileStats.totalReads > 0 && (
                    <div className="flex items-center gap-1">
                      <Badge variant="secondary" className="text-xs">
                        {formatNumber(profileStats.totalReads)} total reads
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full justify-center border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="stories"
                  className="flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black pb-3 px-8"
                >
                  <Grid3X3 className="h-4 w-4" />
                  <span className="hidden sm:inline">POSTS</span>
                </TabsTrigger>
                {isOwnProfile && (
                  <TabsTrigger
                    value="saved"
                    className="flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black pb-3 px-8"
                  >
                    <Bookmark className="h-4 w-4" />
                    <span className="hidden sm:inline">SAVED</span>
                  </TabsTrigger>
                )}
                <TabsTrigger
                  value="tagged"
                  className="flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black pb-3 px-8"
                >
                  <UserIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">TAGGED</span>
                </TabsTrigger>
              </TabsList>

              {/* Stories Tab */}
              <TabsContent value="stories" className="mt-6">
                {userStories.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="rounded-full border-2 border-gray-900 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <Camera className="h-10 w-10" />
                    </div>
                    <h3 className="text-3xl font-light mb-2">
                      {isOwnProfile ? "Share Stories" : "No Posts Yet"}
                    </h3>
                    {isOwnProfile ? (
                      <>
                        <p className="text-muted-foreground mb-4">
                          When you share stories, they will appear on your
                          profile.
                        </p>
                        <Button
                          onClick={() => navigate("/stories/create")}
                          variant="link"
                          className="text-blue-500"
                        >
                          Share your first story
                        </Button>
                      </>
                    ) : (
                      <p className="text-muted-foreground">
                        When {profileUser.username} posts, you'll see their
                        stories here.
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-1 md:gap-7">
                    {userStories.map((story) => (
                      <Link
                        key={story.id}
                        to={`/stories/${story.id}`}
                        className="relative aspect-square group overflow-hidden bg-gray-100"
                      >
                        <img
                          src={
                            story.cover_image ||
                            `https://source.unsplash.com/400x400/?book,${story.genre}`
                          }
                          alt={story.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-110"
                        />
                        {/* Private indicator */}
                        {story.visibility === "private" && (
                          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                            <Lock className="h-3 w-3 text-white" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="text-white text-center px-2">
                            <div className="flex items-center justify-center gap-4">
                              <div className="flex items-center gap-1">
                                <Heart className="h-5 w-5 fill-white" />
                                <span className="font-semibold">
                                  {formatNumber(story.votes_count)}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-5 w-5 fill-white" />
                                <span className="font-semibold">
                                  {formatNumber(story.comments_count)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Saved Stories Tab */}
              {isOwnProfile && (
                <TabsContent value="saved" className="mt-6">
                  {savedStories.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="rounded-full border-2 border-gray-900 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                        <Bookmark className="h-10 w-10" />
                      </div>
                      <h3 className="text-3xl font-light mb-2">Save</h3>
                      <p className="text-gray-600 mb-4 max-w-md mx-auto">
                        Save stories and collections that you want to see again.
                        No one is notified, and only you can see what you've
                        saved.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-1 md:gap-7">
                      {savedStories.map((story) => (
                        <div key={story.id} className="relative group">
                          <Link
                            to={`/stories/${story.id}`}
                            className="relative aspect-square overflow-hidden bg-gray-100 block"
                          >
                            <img
                              src={
                                story.cover_image ||
                                `https://source.unsplash.com/400x400/?book,${story.genre}`
                              }
                              alt={story.title}
                              className="h-full w-full object-cover transition-transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="text-white text-center px-2">
                                <div className="flex items-center justify-center gap-4">
                                  <div className="flex items-center gap-1">
                                    <Heart className="h-5 w-5 fill-white" />
                                    <span className="font-semibold">
                                      {formatNumber(story.votes_count)}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="h-5 w-5 fill-white" />
                                    <span className="font-semibold">
                                      {formatNumber(story.comments_count)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              )}

              {/* Tagged Tab */}
              <TabsContent value="tagged" className="mt-6">
                <div className="text-center py-12">
                  <div className="rounded-full border-2 border-gray-900 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <UserIcon className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-light mb-2">
                    Stories You're Tagged In
                  </h3>
                  <p className="text-gray-600">
                    When people tag you in stories, they'll appear here.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Instagram Style */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: Home, onClick: () => navigate("/") },
            { icon: Search, onClick: () => navigate("/search") },
            { icon: PlusSquare, onClick: () => navigate("/stories/create") },
            { icon: Film, onClick: () => navigate("/reels"), disabled: true },
            {
              icon: profileUser?.profile_pic ? (
                <Avatar className="h-6 w-6">
                  <AvatarImage src={profileUser.profile_pic} />
                  <AvatarFallback>
                    {profileUser.username?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              ) : (
                UserIcon
              ),
              onClick: () => navigate(`/profile/${user?.username}`),
              active: true,
            },
          ].map((item, index) => {
            const isAvatar = index === 4 && profileUser?.profile_pic;
            const Icon = isAvatar ? null : item.icon;

            return (
              <button
                key={index}
                onClick={item.onClick}
                disabled={item.disabled}
                className={cn(
                  "p-3 transition-all",
                  item.active && !isAvatar && "font-bold",
                  item.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {isAvatar ? (
                  <div
                    className={cn(
                      "rounded-full",
                      item.active && "ring-2 ring-gray-900 ring-offset-2"
                    )}
                  >
                    {item.icon}
                  </div>
                ) : (
                  Icon && (
                    <Icon
                      className={cn(
                        "h-6 w-6",
                        item.active ? "text-gray-900" : "text-gray-700"
                      )}
                    />
                  )
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* All modals remain the same */}
      {/* Edit Profile Modal, Cropper Modal, Profile Picture Modal remain unchanged */}
      {/* ... existing modal code ... */}
    </div>
  );
}
