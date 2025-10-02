"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Save,
  Eye,
  Upload,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Plus,
  X,
  ChevronLeft,
  Settings,
  FileText,
  Lock,
  Globe,
  Trash2,
  Edit2,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { MainLayout } from "@/components/layout/main-layout";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { storiesApi } from "@/apis";
import { Story } from "@/types";
import { GENRES } from "@/helper/constants";
import { cn } from "@/lib/utils";

interface Chapter {
  id: string;
  title: string;
  content: string;
  order: number;
  isPublished: boolean;
  publishedAt?: string;
}

export function EditStoryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  const [story, setStory] = useState<Story | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  // Story data
  const [storyData, setStoryData] = useState({
    title: "",
    description: "",
    genre: "",
    tags: [] as string[],
    visibility: "public" as "public" | "private",
  });

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>("");

  // Chapters
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [currentTag, setCurrentTag] = useState("");

  // Settings
  const [storySettings, setStorySettings] = useState({
    allowComments: true,
    matureContent: false,
    completionStatus: "ongoing" as "ongoing" | "completed",
    language: "English",
    copyright: "All Rights Reserved",
  });

  useEffect(() => {
    if (!id || !isAuthenticated) {
      navigate("/stories");
      return;
    }
    fetchStoryDetails();
  }, [id, isAuthenticated]);

  // Warn about unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const fetchStoryDetails = async () => {
    if (!id) return;

    try {
      setIsLoading(true);
      const storyResponse = await storiesApi.getStory(id);

      // Check if user is the author
      if (storyResponse.author_id !== user?.id) {
        addToast({
          title: "Unauthorized",
          description: "You can only edit your own stories",
          type: "error",
        });
        navigate(`/stories/${id}`);
        return;
      }

      setStory(storyResponse);
      setStoryData({
        title: storyResponse.title,
        description: storyResponse.description,
        genre: storyResponse.genre,
        tags: storyResponse.tags,
        visibility: storyResponse.visibility,
      });

      if (storyResponse.cover_image) {
        setCoverPreview(storyResponse.cover_image);
      }

      // Initialize with at least one chapter
      if (chapters.length === 0) {
        const initialChapter: Chapter = {
          id: "chapter-1",
          title: "Chapter 1",
          content: "",
          order: 1,
          isPublished: false,
        };
        setChapters([initialChapter]);
        setActiveChapter(initialChapter.id);
      }
    } catch (error) {
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

  const handleCoverSelect = (file: File) => {
    setCoverImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    setHasUnsavedChanges(true);
  };

  const addTag = () => {
    if (currentTag.trim() && !storyData.tags.includes(currentTag.trim())) {
      setStoryData({
        ...storyData,
        tags: [...storyData.tags, currentTag.trim()],
      });
      setCurrentTag("");
      setHasUnsavedChanges(true);
    }
  };

  const removeTag = (tag: string) => {
    setStoryData({
      ...storyData,
      tags: storyData.tags.filter((t) => t !== tag),
    });
    setHasUnsavedChanges(true);
  };

  const addChapter = () => {
    const newChapter: Chapter = {
      id: `chapter-${Date.now()}`,
      title: `Chapter ${chapters.length + 1}`,
      content: "",
      order: chapters.length + 1,
      isPublished: false,
    };
    setChapters([...chapters, newChapter]);
    setActiveChapter(newChapter.id);
    setHasUnsavedChanges(true);
  };

  const updateChapter = (id: string, updates: Partial<Chapter>) => {
    setChapters(
      chapters.map((ch) => (ch.id === id ? { ...ch, ...updates } : ch))
    );
    setHasUnsavedChanges(true);
  };

  const deleteChapter = (id: string) => {
    if (chapters.length > 1) {
      const updatedChapters = chapters.filter((ch) => ch.id !== id);
      setChapters(updatedChapters);
      if (activeChapter === id) {
        setActiveChapter(updatedChapters[0].id);
      }
      setHasUnsavedChanges(true);
    } else {
      addToast({
        title: "Cannot delete",
        description: "You must have at least one chapter",
        type: "error",
      });
    }
  };

  const reorderChapter = (id: string, direction: "up" | "down") => {
    const index = chapters.findIndex((ch) => ch.id === id);
    if (
      (direction === "up" && index > 0) ||
      (direction === "down" && index < chapters.length - 1)
    ) {
      const newChapters = [...chapters];
      const swapIndex = direction === "up" ? index - 1 : index + 1;
      [newChapters[index], newChapters[swapIndex]] = [
        newChapters[swapIndex],
        newChapters[index],
      ];
      // Update order numbers
      newChapters.forEach((ch, i) => {
        ch.order = i + 1;
      });
      setChapters(newChapters);
      setHasUnsavedChanges(true);
    }
  };

  const handleSave = async () => {
    // Validation
    if (!storyData.title.trim()) {
      addToast({
        title: "Title Required",
        description: "Please enter a title for your story",
        type: "error",
      });
      return;
    }

    if (!storyData.genre) {
      addToast({
        title: "Genre Required",
        description: "Please select a genre for your story",
        type: "error",
      });
      return;
    }

    setIsSaving(true);
    try {
      // Update story
      await storiesApi.updateStory(id!, {
        title: storyData.title,
        description: storyData.description,
        genre: storyData.genre,
        tags: storyData.tags,
        visibility: storyData.visibility,
      });

      // Update cover if changed
      if (coverImage) {
        await storiesApi.updateStoryCover(id!, coverImage);
      }

      setHasUnsavedChanges(false);
      addToast({
        title: "Story Updated!",
        description: "Your changes have been saved successfully",
        type: "success",
      });
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      await storiesApi.deleteStory(id!);
      addToast({
        title: "Story Deleted",
        description: "Your story has been permanently deleted",
        type: "success",
      });
      navigate(`/profile/${user?.username}`);
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to delete story. Please try again.",
        type: "error",
      });
    }
    setDeleteDialogOpen(false);
  };

  const handlePublishChapter = (chapterId: string) => {
    updateChapter(chapterId, {
      isPublished: true,
      publishedAt: new Date().toISOString(),
    });
    addToast({
      title: "Chapter Published!",
      description: "Your chapter is now live for readers",
      type: "success",
    });
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
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (hasUnsavedChanges) {
                      if (
                        confirm(
                          "You have unsaved changes. Are you sure you want to leave?"
                        )
                      ) {
                        navigate(`/stories/${id}`);
                      }
                    } else {
                      navigate(`/stories/${id}`);
                    }
                  }}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Story
                </Button>
                <Separator orientation="vertical" className="h-8" />
                <div>
                  <h1 className="text-xl font-bold">Edit Story</h1>
                  {hasUnsavedChanges && (
                    <p className="text-xs text-orange-600">Unsaved changes</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => navigate(`/stories/${id}`)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={isSaving || !hasUnsavedChanges}
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
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 bg-white">
              <TabsTrigger value="details" className="gap-2">
                <FileText className="h-4 w-4" />
                Story Details
              </TabsTrigger>
              <TabsTrigger value="chapters" className="gap-2">
                <Edit2 className="h-4 w-4" />
                Chapters
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Story Details Tab */}
            <TabsContent value="details" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cover Image */}
                <Card className="lg:col-span-1 bg-white">
                  <CardHeader>
                    <CardTitle>Cover Image</CardTitle>
                    <CardDescription>
                      Upload an eye-catching cover for your story
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {coverPreview ? (
                      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={coverPreview}
                          alt="Cover preview"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <label>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="cursor-pointer"
                              asChild
                            >
                              <span>
                                <Upload className="h-4 w-4 mr-2" />
                                Replace
                              </span>
                            </Button>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleCoverSelect(file);
                              }}
                              className="hidden"
                            />
                          </label>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              setCoverImage(null);
                              setCoverPreview("");
                              setHasUnsavedChanges(true);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <FileDropzone
                        onFileSelect={handleCoverSelect}
                        accept="image/*"
                        className="aspect-[2/3]"
                      />
                    )}
                  </CardContent>
                </Card>

                {/* Story Info */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Basic Information</CardTitle>
                      <CardDescription>
                        Update your story's title, description, and genre
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={storyData.title}
                          onChange={(e) => {
                            setStoryData({
                              ...storyData,
                              title: e.target.value,
                            });
                            setHasUnsavedChanges(true);
                          }}
                          placeholder="Enter your story title"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={storyData.description}
                          onChange={(e) => {
                            setStoryData({
                              ...storyData,
                              description: e.target.value,
                            });
                            setHasUnsavedChanges(true);
                          }}
                          placeholder="Write a compelling description of your story"
                          rows={5}
                          className="mt-1"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          {storyData.description.length}/2000 characters
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="genre">Genre</Label>
                        <Select
                          value={storyData.genre}
                          onValueChange={(value) => {
                            setStoryData({ ...storyData, genre: value });
                            setHasUnsavedChanges(true);
                          }}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a genre" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {GENRES.map((genre) => (
                              <SelectItem key={genre} value={genre}>
                                {genre}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="tags">Tags</Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            id="tags"
                            value={currentTag}
                            onChange={(e) => setCurrentTag(e.target.value)}
                            placeholder="Add tags to help readers find your story"
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                addTag();
                              }
                            }}
                          />
                          <Button
                            type="button"
                            onClick={addTag}
                            variant="secondary"
                          >
                            Add
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {storyData.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                              <button
                                className="ml-2 hover:text-destructive"
                                onClick={() => removeTag(tag)}
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Visibility</CardTitle>
                      <CardDescription>
                        Control who can see your story
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div
                          className={cn(
                            "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors",
                            storyData.visibility === "public"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-gray-300"
                          )}
                          onClick={() => {
                            setStoryData({
                              ...storyData,
                              visibility: "public",
                            });
                            setHasUnsavedChanges(true);
                          }}
                        >
                          <div className="pt-1">
                            <Globe className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">Public</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Anyone can find and read your story
                            </p>
                          </div>
                          <input
                            type="radio"
                            checked={storyData.visibility === "public"}
                            onChange={() => {}}
                            className="mt-1"
                          />
                        </div>

                        <div
                          className={cn(
                            "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors",
                            storyData.visibility === "private"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-gray-300"
                          )}
                          onClick={() => {
                            setStoryData({
                              ...storyData,
                              visibility: "private",
                            });
                            setHasUnsavedChanges(true);
                          }}
                        >
                          <div className="pt-1">
                            <Lock className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">Private</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Only you can see this story
                            </p>
                          </div>
                          <input
                            type="radio"
                            checked={storyData.visibility === "private"}
                            onChange={() => {}}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Chapters Tab */}
            <TabsContent value="chapters" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Chapter List */}
                <div className="lg:col-span-1">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="text-lg">Chapters</CardTitle>
                      <CardDescription>
                        Organize your story into chapters
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {chapters.map((chapter, index) => (
                        <div
                          key={chapter.id}
                          className={cn(
                            "group relative p-3 rounded-lg border cursor-pointer transition-colors",
                            activeChapter === chapter.id
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-gray-300"
                          )}
                          onClick={() => setActiveChapter(chapter.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="font-medium text-sm">
                                {chapter.title}
                              </p>
                              {chapter.isPublished && (
                                <Badge
                                  variant="secondary"
                                  className="mt-1 text-xs"
                                >
                                  Published
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              {index > 0 && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    reorderChapter(chapter.id, "up");
                                  }}
                                >
                                  <ChevronLeft className="h-3 w-3 rotate-90" />
                                </Button>
                              )}
                              {index < chapters.length - 1 && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    reorderChapter(chapter.id, "down");
                                  }}
                                >
                                  <ChevronLeft className="h-3 w-3 -rotate-90" />
                                </Button>
                              )}
                              {chapters.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteChapter(chapter.id);
                                  }}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={addChapter}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Chapter
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Chapter Editor */}
                <div className="lg:col-span-3">
                  {chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className={
                        activeChapter === chapter.id ? "block" : "hidden"
                      }
                    >
                      <Card className="bg-white">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <Input
                                value={chapter.title}
                                onChange={(e) =>
                                  updateChapter(chapter.id, {
                                    title: e.target.value,
                                  })
                                }
                                className="text-xl font-semibold"
                                placeholder="Chapter Title"
                              />
                            </div>
                            {!chapter.isPublished && (
                              <Button
                                variant="outline"
                                onClick={() => handlePublishChapter(chapter.id)}
                              >
                                Publish Chapter
                              </Button>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Textarea
                            value={chapter.content}
                            onChange={(e) =>
                              updateChapter(chapter.id, {
                                content: e.target.value,
                              })
                            }
                            placeholder="Start writing your chapter..."
                            className="min-h-[500px] font-serif text-lg leading-relaxed"
                          />
                          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                            <div>
                              Words:{" "}
                              {
                                chapter.content.split(/\s+/).filter(Boolean)
                                  .length
                              }
                            </div>
                            {chapter.isPublished && chapter.publishedAt && (
                              <div>
                                Published:{" "}
                                {new Date(
                                  chapter.publishedAt
                                ).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Story Settings</CardTitle>
                  <CardDescription>
                    Configure advanced settings for your story
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="comments">Allow Comments</Label>
                      <p className="text-sm text-gray-600">
                        Let readers comment on your chapters
                      </p>
                    </div>
                    <Switch
                      id="comments"
                      checked={storySettings.allowComments}
                      onCheckedChange={(checked) => {
                        setStorySettings({
                          ...storySettings,
                          allowComments: checked,
                        });
                        setHasUnsavedChanges(true);
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="mature">Mature Content</Label>
                      <p className="text-sm text-gray-600">
                        Mark if your story contains mature themes
                      </p>
                    </div>
                    <Switch
                      id="mature"
                      checked={storySettings.matureContent}
                      onCheckedChange={(checked) => {
                        setStorySettings({
                          ...storySettings,
                          matureContent: checked,
                        });
                        setHasUnsavedChanges(true);
                      }}
                    />
                  </div>

                  <div>
                    <Label htmlFor="status">Completion Status</Label>
                    <Select
                      value={storySettings.completionStatus}
                      onValueChange={(value: "ongoing" | "completed") => {
                        setStorySettings({
                          ...storySettings,
                          completionStatus: value,
                        });
                        setHasUnsavedChanges(true);
                      }}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select
                      value={storySettings.language}
                      onValueChange={(value) => {
                        setStorySettings({ ...storySettings, language: value });
                        setHasUnsavedChanges(true);
                      }}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Spanish">Spanish</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="German">German</SelectItem>
                        <SelectItem value="Italian">Italian</SelectItem>
                        <SelectItem value="Portuguese">Portuguese</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="copyright">Copyright</Label>
                    <Select
                      value={storySettings.copyright}
                      onValueChange={(value) => {
                        setStorySettings({
                          ...storySettings,
                          copyright: value,
                        });
                        setHasUnsavedChanges(true);
                      }}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="All Rights Reserved">
                          All Rights Reserved
                        </SelectItem>
                        <SelectItem value="Creative Commons">
                          Creative Commons
                        </SelectItem>
                        <SelectItem value="Public Domain">
                          Public Domain
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">Danger Zone</CardTitle>
                  <CardDescription>
                    Irreversible actions for your story
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="destructive"
                    onClick={() => setDeleteDialogOpen(true)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Story
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Delete Story</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{story?.title}"? This action
              cannot be undone and will permanently delete your story and all
              its chapters.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete Story
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}
