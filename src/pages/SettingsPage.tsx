"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Lock,
  Bell,
  Eye,
  Shield,
  Trash2,
  Save,
  ChevronLeft,
  Mail,
  Smartphone,
  Moon,
  Sun,
  Monitor,
  Globe,
  BookOpen,
  Download,
  AlertCircle,
  Check,
  X,
  Key,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MainLayout } from "@/components/layout/main-layout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { usersApi } from "@/apis";
import { cn } from "@/lib/utils";

interface SettingsState {
  // Account Settings
  email: string;
  username: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;

  // Privacy Settings
  profileVisibility: "public" | "private" | "friends";
  showEmail: boolean;
  showReadingActivity: boolean;
  allowMessages: "everyone" | "following" | "none";
  defaultStoryVisibility: "public" | "private";

  // Notifications
  emailNotifications: boolean;
  pushNotifications: boolean;
  notifyNewFollower: boolean;
  notifyNewComment: boolean;
  notifyNewVote: boolean;
  notifyStoryUpdate: boolean;
  notifyWeeklyDigest: boolean;

  // Display
  theme: "light" | "dark" | "system";
  fontSize: "small" | "medium" | "large";
  readingMode: boolean;
  showMatureContent: boolean;

  // Security
  twoFactorEnabled: boolean;
  sessionTimeout: number;
  loginAlerts: boolean;
}

export function SettingsPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { addToast, theme, setTheme } = useUiStore();

  const [activeTab, setActiveTab] = useState("account");
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");

  // Load saved preferences
  const [settings, setSettings] = useState<SettingsState>({
    // Account
    email: user?.email || "",
    username: user?.username || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",

    // Privacy
    profileVisibility: "public",
    showEmail: false,
    showReadingActivity: true,
    allowMessages: "everyone",
    defaultStoryVisibility: "public",

    // Notifications
    emailNotifications: true,
    pushNotifications: false,
    notifyNewFollower: true,
    notifyNewComment: true,
    notifyNewVote: true,
    notifyStoryUpdate: true,
    notifyWeeklyDigest: false,

    // Display
    theme: theme || "system",
    fontSize: "medium",
    readingMode: false,
    showMatureContent: false,

    // Security
    twoFactorEnabled: false,
    sessionTimeout: 30,
    loginAlerts: true,
  });

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem("user-settings");
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings((prev) => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error("Failed to load settings:", error);
      }
    }

    // Load reading preferences
    const readingPrefs = localStorage.getItem("reading-preferences");
    if (readingPrefs) {
      try {
        const parsed = JSON.parse(readingPrefs);
        setSettings((prev) => ({
          ...prev,
          fontSize:
            parsed.fontSize === 18
              ? "small"
              : parsed.fontSize === 22
              ? "large"
              : "medium",
        }));
      } catch (error) {
        console.error("Failed to load reading preferences:", error);
      }
    }
  }, []);

  // Save settings to localStorage when they change
  useEffect(() => {
    if (hasChanges) {
      const settingsToSave = { ...settings };
      delete settingsToSave.currentPassword;
      delete settingsToSave.newPassword;
      delete settingsToSave.confirmPassword;
      localStorage.setItem("user-settings", JSON.stringify(settingsToSave));
    }
  }, [settings, hasChanges]);

  const handleSettingChange = (key: keyof SettingsState, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      // Save settings to backend (when API is available)
      // For now, just save to localStorage
      const settingsToSave = { ...settings };
      delete settingsToSave.currentPassword;
      delete settingsToSave.newPassword;
      delete settingsToSave.confirmPassword;

      localStorage.setItem("user-settings", JSON.stringify(settingsToSave));

      // Apply theme
      setTheme(settings.theme as any);

      addToast({
        title: "Settings saved",
        description: "Your preferences have been updated successfully.",
        type: "success",
      });
      setHasChanges(false);
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordChange = async () => {
    // Validation
    if (!settings.currentPassword || !settings.newPassword) {
      addToast({
        title: "Required fields",
        description: "Please fill in all password fields",
        type: "error",
      });
      return;
    }

    if (settings.newPassword !== settings.confirmPassword) {
      addToast({
        title: "Passwords don't match",
        description: "New password and confirmation must match",
        type: "error",
      });
      return;
    }

    if (settings.newPassword.length < 8) {
      addToast({
        title: "Password too short",
        description: "Password must be at least 8 characters",
        type: "error",
      });
      return;
    }

    setIsSaving(true);
    try {
      await usersApi.changePassword({
        old_password: settings.currentPassword,
        new_password: settings.newPassword,
      });

      addToast({
        title: "Password changed",
        description: "Your password has been updated successfully.",
        type: "success",
      });

      // Clear password fields
      setSettings((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
      setShowPasswordDialog(false);
    } catch (error: any) {
      addToast({
        title: "Error",
        description: error.message || "Failed to change password",
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== user?.username) {
      addToast({
        title: "Confirmation required",
        description: "Please type your username to confirm deletion",
        type: "error",
      });
      return;
    }

    try {
      await usersApi.deleteAccount();
      logout();
      navigate("/");
      addToast({
        title: "Account deleted",
        description: "Your account has been permanently deleted.",
        type: "info",
      });
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to delete account. Please try again.",
        type: "error",
      });
    }
  };

  const handleExportData = () => {
    // Create a data export
    const exportData = {
      user: {
        username: user?.username,
        email: user?.email,
        bio: user?.bio,
        created_at: user?.created_at,
      },
      settings: settings,
      readingHistory: JSON.parse(localStorage.getItem("read_stories") || "[]"),
      savedStories: JSON.parse(localStorage.getItem("saved_stories") || "[]"),
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `storivault_data_${user?.username}_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    addToast({
      title: "Data exported",
      description: "Your data has been downloaded successfully.",
      type: "success",
    });
  };

  if (!isAuthenticated) {
    navigate("/auth/login");
    return null;
  }

  return (
    <MainLayout showFooter={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <h1 className="text-xl font-bold">Settings</h1>
              </div>
              {hasChanges && (
                <Button
                  onClick={handleSaveSettings}
                  disabled={isSaving}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isSaving ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 bg-white">
              <TabsTrigger value="account">
                <User className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="privacy">
                <Eye className="h-4 w-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="display">
                <Monitor className="h-4 w-4 mr-2" />
                Display
              </TabsTrigger>
              <TabsTrigger value="security">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
            </TabsList>

            {/* Account Settings */}
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>
                    Manage your basic account details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={settings.username}
                      disabled
                      className="mt-1 bg-gray-50"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Usernames cannot be changed
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="email"
                        type="email"
                        value={settings.email}
                        disabled
                        className="flex-1 bg-gray-50"
                      />
                      <Button variant="outline" size="sm" disabled>
                        <Mail className="h-4 w-4 mr-2" />
                        Verify
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Contact support to change your email
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-3">Password</h3>
                    <Button
                      variant="outline"
                      onClick={() => setShowPasswordDialog(true)}
                    >
                      <Key className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Manage your public profile information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/profile/${user?.username}`)}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>
                    Export or delete your account data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Button variant="outline" onClick={handleExportData}>
                      <Download className="h-4 w-4 mr-2" />
                      Export My Data
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Download a copy of your StoriVault data
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <Button
                      variant="destructive"
                      onClick={() => setShowDeleteDialog(true)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Permanently delete your account and all data
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Privacy</CardTitle>
                  <CardDescription>
                    Control who can see your profile and activity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Profile Visibility</Label>
                    <RadioGroup
                      value={settings.profileVisibility}
                      onValueChange={(value) =>
                        handleSettingChange("profileVisibility", value)
                      }
                      className="mt-2 space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="public" id="public" />
                        <Label htmlFor="public" className="font-normal">
                          <div>
                            <Globe className="h-4 w-4 inline mr-2" />
                            Public
                          </div>
                          <p className="text-xs text-gray-500">
                            Anyone can view your profile
                          </p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="friends" id="friends" />
                        <Label htmlFor="friends" className="font-normal">
                          <div>
                            <User className="h-4 w-4 inline mr-2" />
                            Following Only
                          </div>
                          <p className="text-xs text-gray-500">
                            Only people you follow can see your full profile
                          </p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="private" id="private" />
                        <Label htmlFor="private" className="font-normal">
                          <div>
                            <Lock className="h-4 w-4 inline mr-2" />
                            Private
                          </div>
                          <p className="text-xs text-gray-500">
                            Only you can see your profile
                          </p>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="show-email">Show Email Address</Label>
                        <p className="text-xs text-gray-500">
                          Display your email on your profile
                        </p>
                      </div>
                      <Switch
                        id="show-email"
                        checked={settings.showEmail}
                        onCheckedChange={(checked) =>
                          handleSettingChange("showEmail", checked)
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="show-activity">
                          Show Reading Activity
                        </Label>
                        <p className="text-xs text-gray-500">
                          Let others see what you're reading
                        </p>
                      </div>
                      <Switch
                        id="show-activity"
                        checked={settings.showReadingActivity}
                        onCheckedChange={(checked) =>
                          handleSettingChange("showReadingActivity", checked)
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Messaging</CardTitle>
                  <CardDescription>
                    Control who can send you messages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="messages">Allow messages from</Label>
                    <Select
                      value={settings.allowMessages}
                      onValueChange={(value) =>
                        handleSettingChange("allowMessages", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="everyone">Everyone</SelectItem>
                        <SelectItem value="following">
                          People I follow
                        </SelectItem>
                        <SelectItem value="none">No one</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Story Defaults</CardTitle>
                  <CardDescription>
                    Default settings for new stories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="story-visibility">
                      Default Story Visibility
                    </Label>
                    <Select
                      value={settings.defaultStoryVisibility}
                      onValueChange={(value) =>
                        handleSettingChange("defaultStoryVisibility", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Channels</CardTitle>
                  <CardDescription>
                    Choose how you want to receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="email-notif">Email Notifications</Label>
                      <p className="text-xs text-gray-500">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch
                      id="email-notif"
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) =>
                        handleSettingChange("emailNotifications", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="push-notif">Push Notifications</Label>
                      <p className="text-xs text-gray-500">
                        Browser push notifications
                      </p>
                    </div>
                    <Switch
                      id="push-notif"
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) =>
                        handleSettingChange("pushNotifications", checked)
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Activity Notifications</CardTitle>
                  <CardDescription>
                    Get notified about interactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="follower-notif">New Followers</Label>
                    <Switch
                      id="follower-notif"
                      checked={settings.notifyNewFollower}
                      onCheckedChange={(checked) =>
                        handleSettingChange("notifyNewFollower", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="comment-notif">New Comments</Label>
                    <Switch
                      id="comment-notif"
                      checked={settings.notifyNewComment}
                      onCheckedChange={(checked) =>
                        handleSettingChange("notifyNewComment", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="vote-notif">New Votes</Label>
                    <Switch
                      id="vote-notif"
                      checked={settings.notifyNewVote}
                      onCheckedChange={(checked) =>
                        handleSettingChange("notifyNewVote", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="update-notif">Story Updates</Label>
                    <Switch
                      id="update-notif"
                      checked={settings.notifyStoryUpdate}
                      onCheckedChange={(checked) =>
                        handleSettingChange("notifyStoryUpdate", checked)
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Email Digests</CardTitle>
                  <CardDescription>Periodic summary emails</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="weekly-digest">Weekly Digest</Label>
                      <p className="text-xs text-gray-500">
                        Get a weekly summary of activity
                      </p>
                    </div>
                    <Switch
                      id="weekly-digest"
                      checked={settings.notifyWeeklyDigest}
                      onCheckedChange={(checked) =>
                        handleSettingChange("notifyWeeklyDigest", checked)
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Display Settings */}
            <TabsContent value="display" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Theme</CardTitle>
                  <CardDescription>
                    Choose your preferred color theme
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={settings.theme}
                    onValueChange={(value) => {
                      handleSettingChange("theme", value);
                      setTheme(value as any);
                    }}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light" className="font-normal">
                        <Sun className="h-4 w-4 inline mr-2" />
                        Light
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="dark" />
                      <Label htmlFor="dark" className="font-normal">
                        <Moon className="h-4 w-4 inline mr-2" />
                        Dark
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="system" id="system" />
                      <Label htmlFor="system" className="font-normal">
                        <Monitor className="h-4 w-4 inline mr-2" />
                        System
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reading Preferences</CardTitle>
                  <CardDescription>
                    Default settings for the story reader
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="font-size">Default Font Size</Label>
                    <Select
                      value={settings.fontSize}
                      onValueChange={(value) =>
                        handleSettingChange("fontSize", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="reading-mode">
                        Simplified Reading Mode
                      </Label>
                      <p className="text-xs text-gray-500">
                        Hide distractions while reading
                      </p>
                    </div>
                    <Switch
                      id="reading-mode"
                      checked={settings.readingMode}
                      onCheckedChange={(checked) =>
                        handleSettingChange("readingMode", checked)
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Preferences</CardTitle>
                  <CardDescription>
                    Control what content you see
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="mature-content">
                        Show Mature Content
                      </Label>
                      <p className="text-xs text-gray-500">
                        Display stories marked as mature
                      </p>
                    </div>
                    <Switch
                      id="mature-content"
                      checked={settings.showMatureContent}
                      onCheckedChange={(checked) =>
                        handleSettingChange("showMatureContent", checked)
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Coming Soon</AlertTitle>
                    <AlertDescription>
                      Two-factor authentication will be available in a future
                      update.
                    </AlertDescription>
                  </Alert>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="2fa">Enable 2FA</Label>
                    <Switch
                      id="2fa"
                      checked={settings.twoFactorEnabled}
                      disabled
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Session Management</CardTitle>
                  <CardDescription>Control your login sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="session-timeout">
                      Auto-logout after inactivity (days)
                    </Label>
                    <Select
                      value={settings.sessionTimeout.toString()}
                      onValueChange={(value) =>
                        handleSettingChange("sessionTimeout", parseInt(value))
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="login-alerts">Login Alerts</Label>
                      <p className="text-xs text-gray-500">
                        Get notified of new login attempts
                      </p>
                    </div>
                    <Switch
                      id="login-alerts"
                      checked={settings.loginAlerts}
                      onCheckedChange={(checked) =>
                        handleSettingChange("loginAlerts", checked)
                      }
                    />
                  </div>

                  <Separator />

                  <div>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out of All Devices
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Change Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              Enter your current password and choose a new one
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={settings.currentPassword}
                onChange={(e) =>
                  handleSettingChange("currentPassword", e.target.value)
                }
                placeholder="Enter current password"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={settings.newPassword}
                onChange={(e) =>
                  handleSettingChange("newPassword", e.target.value)
                }
                placeholder="Enter new password"
                className="mt-1"
              />
              {settings.newPassword && settings.newPassword.length < 8 && (
                <p className="text-xs text-red-500 mt-1">
                  Password must be at least 8 characters
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={settings.confirmPassword}
                onChange={(e) =>
                  handleSettingChange("confirmPassword", e.target.value)
                }
                placeholder="Confirm new password"
                className="mt-1"
              />
              {settings.confirmPassword &&
                settings.newPassword !== settings.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">
                    Passwords don't match
                  </p>
                )}
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowPasswordDialog(false);
                setSettings((prev) => ({
                  ...prev,
                  currentPassword: "",
                  newPassword: "",
                  confirmPassword: "",
                }));
              }}
            >
              Cancel
            </Button>
            <Button onClick={handlePasswordChange} disabled={isSaving}>
              {isSaving ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Changing...
                </>
              ) : (
                "Change Password"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Account Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              All your stories, comments, and data will be permanently deleted.
            </AlertDescription>
          </Alert>

          <div>
            <Label htmlFor="delete-confirm">
              Type <strong>{user?.username}</strong> to confirm
            </Label>
            <Input
              id="delete-confirm"
              value={deleteConfirmText}
              onChange={(e) => setDeleteConfirmText(e.target.value)}
              placeholder="Enter your username"
              className="mt-1"
            />
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowDeleteDialog(false);
                setDeleteConfirmText("");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteAccount}
              disabled={deleteConfirmText !== user?.username}
            >
              Delete My Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}
