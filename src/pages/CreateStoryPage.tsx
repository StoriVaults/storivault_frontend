"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Image as ImageIcon,
  BookOpen,
  Settings,
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MainLayout } from "@/components/layout/main-layout";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { CreateStorySkeleton } from "@/components/ui/create-story-skeleton";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { storiesApi, chaptersApi } from "@/apis";
import { GENRES } from "@/helper/constants";

interface Chapter {
  id: string;
  title: string;
  content: string;
  order: number;
}

export function CreateStoryPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  // Add initialization state for loading skeleton
  const [isInitializing, setIsInitializing] = useState(true);

  const [storyData, setStoryData] = useState({
    title: "",
    description: "",
    genre: "",
    tags: [] as string[],
    visibility: "public" as "public" | "private",
  });

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>("");
  const [chapters, setChapters] = useState<Chapter[]>([
    { id: "1", title: "Chapter 1", content: "", order: 1 },
  ]);
  const [activeChapter, setActiveChapter] = useState("1");
  const [currentTag, setCurrentTag] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  // Initialize component and check authentication
  useEffect(() => {
    // Simulate initialization time for components to load
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 500);

    // Check authentication
    if (!isAuthenticated) {
      navigate("/auth/login");
    }

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  const handleCoverSelect = (file: File) => {
    setCoverImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const addTag = () => {
    if (currentTag.trim() && !storyData.tags.includes(currentTag.trim())) {
      setStoryData({
        ...storyData,
        tags: [...storyData.tags, currentTag.trim()],
      });
      setCurrentTag("");
    }
  };

  const removeTag = (tag: string) => {
    setStoryData({
      ...storyData,
      tags: storyData.tags.filter((t) => t !== tag),
    });
  };

  const addChapter = () => {
    const newChapter: Chapter = {
      id: Date.now().toString(),
      title: `Chapter ${chapters.length + 1}`,
      content: "",
      order: chapters.length + 1,
    };
    setChapters([...chapters, newChapter]);
    setActiveChapter(newChapter.id);
  };

  const updateChapter = (id: string, updates: Partial<Chapter>) => {
    setChapters(
      chapters.map((ch) => (ch.id === id ? { ...ch, ...updates } : ch))
    );
  };

  const deleteChapter = (id: string) => {
    if (chapters.length > 1) {
      setChapters(chapters.filter((ch) => ch.id !== id));
      if (activeChapter === id) {
        setActiveChapter(chapters[0].id);
      }
    }
  };

  const handleFormatting = (format: string) => {
    // Simple formatting implementation
    const textarea = document.getElementById(
      `chapter-${activeChapter}`
    ) as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    let formattedText = selectedText;
    switch (format) {
      case "bold":
        formattedText = `**${selectedText}**`;
        break;
      case "italic":
        formattedText = `*${selectedText}*`;
        break;
      case "underline":
        formattedText = `__${selectedText}__`;
        break;
      case "quote":
        formattedText = `> ${selectedText}`;
        break;
    }

    const newText =
      textarea.value.substring(0, start) +
      formattedText +
      textarea.value.substring(end);

    const chapter = chapters.find((ch) => ch.id === activeChapter);
    if (chapter) {
      updateChapter(activeChapter, { content: newText });
    }
  };

  const handleSubmit = async () => {
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

    // Validate that at least one chapter has content
    const hasContent = chapters.some((ch) => ch.content.trim().length > 0);
    if (!hasContent) {
      addToast({
        title: "Content Required",
        description: "Please write content for at least one chapter",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Step 1: Create story with cover image
      const story = await storiesApi.createStoryMultipart({
        title: storyData.title,
        description: storyData.description,
        genre: storyData.genre,
        tags: storyData.tags.join(","),
        visibility: storyData.visibility,
        cover: coverImage || undefined,
      });

      // Step 2: Create chapters for the story
      const chapterPromises = chapters
        .filter((ch) => ch.content.trim().length > 0) // Only save chapters with content
        .map((chapter) =>
          chaptersApi.createChapter({
            story_id: story.id,
            title: chapter.title,
            content: chapter.content,
            order: chapter.order,
            published: true, // Auto-publish chapters when story is published
          })
        );

      await Promise.all(chapterPromises);

      addToast({
        title: "Story Created!",
        description: `Your story has been published with ${chapterPromises.length} chapter(s)`,
        type: "success",
      });

      navigate(`/stories/${story.id}`);
    } catch (error: any) {
      console.error("Failed to create story:", error);

      // Get detailed error message
      let errorMessage = "Failed to create story. Please try again.";
      if (error.response) {
        console.error("Error response:", error.response.data);
        errorMessage =
          error.response.data?.message ||
          error.response.data?.detail ||
          `Server error: ${error.response.status}`;
      } else if (error.message) {
        errorMessage = error.message;
      }

      addToast({
        title: "Error",
        description: errorMessage,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading skeleton while initializing
  if (isInitializing) {
    return (
      <MainLayout showFooter={false}>
        <CreateStorySkeleton />
      </MainLayout>
    );
  }

  // Redirect if not authenticated (this shouldn't show due to useEffect redirect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <MainLayout showFooter={false}>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        {/* Header */}
        <div className="bg-white border-b shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => navigate(-1)}>
                  <X className="h-5 w-5" />
                </Button>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Create New Story
                  </h1>
                  <p className="text-xs text-gray-500">Share your creativity with the world</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Publishing..." : "Publish Story"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-1 min-[450px]:grid-cols-3 bg-white shadow-sm rounded-xl p-1 mb-8">
            <TabsTrigger
              value="details"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg transition-all"
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Story Details
            </TabsTrigger>
            <TabsTrigger
              value="chapters"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg transition-all"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Chapters
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg transition-all"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Story Details Tab */}
          <TabsContent value="details" className="space-y-6 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cover Image */}
              <Card className="bg-white shadow-md border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-orange-600" />
                    Cover Image
                  </CardTitle>
                  <p className="text-xs text-gray-600">Add an eye-catching cover for your story</p>
                </CardHeader>
                <CardContent className="pt-6">
                  {coverPreview ? (
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={coverPreview}
                        alt="Cover preview"
                        className="h-full w-full object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setCoverImage(null);
                          setCoverPreview("");
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
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
              <Card className="bg-white shadow-md border-0">
                <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
                  <CardTitle className="text-lg">Story Information</CardTitle>
                  <p className="text-xs text-gray-600">Tell readers what your story is about</p>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-sm font-semibold text-gray-700">
                      Title *
                    </Label>
                    <Input
                      id="title"
                      value={storyData.title}
                      onChange={(e) =>
                        setStoryData({ ...storyData, title: e.target.value })
                      }
                      placeholder="Enter a captivating title..."
                      className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-sm font-semibold text-gray-700">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={storyData.description}
                      onChange={(e) =>
                        setStoryData({
                          ...storyData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Describe what makes your story unique..."
                      rows={4}
                      className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                    />
                  </div>

                  <div>
                    <Label htmlFor="genre" className="text-sm font-semibold text-gray-700">
                      Genre *
                    </Label>
                    <Select
                      value={storyData.genre}
                      onValueChange={(value) =>
                        setStoryData({ ...storyData, genre: value })
                      }
                    >
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Choose a genre..." />
                      </SelectTrigger>
                      <SelectContent>
                        {GENRES.map((genre) => (
                          <SelectItem key={genre} value={genre}>
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="tags" className="text-sm font-semibold text-gray-700">
                      Tags
                    </Label>
                    <p className="text-xs text-gray-500 mb-2">Help readers discover your story</p>
                    <div className="flex gap-2">
                      <Input
                        id="tags"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        placeholder="e.g., romance, adventure..."
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addTag();
                          }
                        }}
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                      <Button
                        type="button"
                        onClick={addTag}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {storyData.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 hover:from-orange-200 hover:to-amber-200"
                        >
                          {tag}
                          <button className="ml-2" onClick={() => removeTag(tag)}>
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chapters Tab */}
          <TabsContent value="chapters" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Chapter List */}
              <div className="md:col-span-1">
                <div className="space-y-2">
                  {chapters.map((chapter) => (
                    <Card
                      key={chapter.id}
                      className={`cursor-pointer ${
                        activeChapter === chapter.id
                          ? "ring-2 ring-primary"
                          : ""
                      }`}
                      onClick={() => setActiveChapter(chapter.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{chapter.title}</span>
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
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={addChapter}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Chapter
                  </Button>
                </div>
              </div>

              {/* Chapter Editor */}
              <div className="md:col-span-3">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    className={
                      activeChapter === chapter.id ? "block" : "hidden"
                    }
                  >
                    <Card>
                      <CardHeader>
                        <Input
                          value={chapter.title}
                          onChange={(e) =>
                            updateChapter(chapter.id, { title: e.target.value })
                          }
                          className="text-lg font-semibold"
                        />
                      </CardHeader>
                      <CardContent>
                        {/* Editor Toolbar */}
                        <div className="flex items-center gap-1 p-2 border rounded-t-lg bg-gray-50">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFormatting("bold")}
                          >
                            <Bold className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFormatting("italic")}
                          >
                            <Italic className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFormatting("underline")}
                          >
                            <Underline className="h-4 w-4" />
                          </Button>
                          <div className="w-px h-6 bg-gray-300 mx-1" />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFormatting("quote")}
                          >
                            <Quote className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <List className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <ListOrdered className="h-4 w-4" />
                          </Button>
                          <div className="w-px h-6 bg-gray-300 mx-1" />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <AlignLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <AlignCenter className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <AlignRight className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Chapter Content */}
                        <Textarea
                          id={`chapter-${chapter.id}`}
                          value={chapter.content}
                          onChange={(e) =>
                            updateChapter(chapter.id, {
                              content: e.target.value,
                            })
                          }
                          placeholder="Start writing your chapter..."
                          className="min-h-[500px] rounded-t-none border-t-0 resize-none font-serif text-lg leading-relaxed"
                        />

                        {/* Word Count */}
                        <div className="text-sm text-muted-foreground mt-2">
                          Words:{" "}
                          {chapter.content.split(/\s+/).filter(Boolean).length}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Story Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="visibility">Visibility</Label>
                  <Select
                    value={storyData.visibility}
                    onValueChange={(value: "public" | "private") =>
                      setStoryData({ ...storyData, visibility: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground mt-1">
                    {storyData.visibility === "public"
                      ? "Anyone can read your story"
                      : "Only you can see this story"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </MainLayout>
  );
}
