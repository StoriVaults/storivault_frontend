import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  List,
  Settings,
  Heart,
  MessageCircle,
  Sun,
  Moon,
  Type,
  Minus,
  Plus,
  AlignLeft,
  AlignCenter,
  AlignJustify,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ReaderSkeleton } from "@/components/ui/reader-skeleton";
import { Badge } from "@/components/ui/badge";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { Chapter, Story } from "@/types/api";
import { chaptersApi, storiesApi } from "@/apis";
import { cn } from "@/lib/utils";

// Reading themes
const readingThemes = {
  light: {
    name: "Light",
    background: "#ffffff",
    text: "#1a1a1a",
    secondaryText: "#666666",
    sliderTrack: "#e5e5e5",
    sliderThumb: "#ff6b35",
  },
  sepia: {
    name: "Sepia",
    background: "#f7f1e8",
    text: "#5c4b37",
    secondaryText: "#8b7355",
    sliderTrack: "#e8dcc4",
    sliderThumb: "#8b7355",
  },
  dark: {
    name: "Dark",
    background: "#1a1a1a",
    text: "#e8e6e3",
    secondaryText: "#a8a29e",
    sliderTrack: "#404040",
    sliderThumb: "#ff6b35",
  },
  night: {
    name: "Night",
    background: "#0d1117",
    text: "#c9d1d9",
    secondaryText: "#8b949e",
    sliderTrack: "#30363d",
    sliderThumb: "#58a6ff",
  },
};

export function StoryReaderPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  const [story, setStory] = useState<Story | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Reading settings state
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.8);
  const [fontFamily, setFontFamily] = useState("serif");
  const [textAlign, setTextAlign] = useState<"left" | "center" | "justify">(
    "left"
  );
  const [theme, setTheme] = useState<keyof typeof readingThemes>("light");
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);
  const [showChapterList, setShowChapterList] = useState(false);

  const currentChapter = chapters[currentChapterIndex];
  const hasNextChapter = currentChapterIndex < chapters.length - 1;
  const hasPreviousChapter = currentChapterIndex > 0;

  // Load saved preferences
  useEffect(() => {
    const savedPreferences = localStorage.getItem("reading-preferences");
    if (savedPreferences) {
      try {
        const prefs = JSON.parse(savedPreferences);
        setFontSize(prefs.fontSize || 18);
        setLineHeight(prefs.lineHeight || 1.8);
        setFontFamily(prefs.fontFamily || "serif");
        setTextAlign(prefs.textAlign || "left");
        setTheme(prefs.theme || "light");
      } catch (error) {
        console.error("Failed to load reading preferences:", error);
      }
    }
  }, []);

  // Save preferences when they change
  useEffect(() => {
    const preferences = {
      fontSize,
      lineHeight,
      fontFamily,
      textAlign,
      theme,
    };
    localStorage.setItem("reading-preferences", JSON.stringify(preferences));
  }, [fontSize, lineHeight, fontFamily, textAlign, theme]);

  useEffect(() => {
    if (!id) return;
    fetchStoryAndChapters();
  }, [id]);

  useEffect(() => {
    if (currentChapter && isAuthenticated) {
      // Track reading progress
      chaptersApi.setReadProgress(currentChapter.id, id!).catch(console.error);
    }
  }, [currentChapter?.id, isAuthenticated, id]);

  const fetchStoryAndChapters = async () => {
    if (!id) return;

    try {
      setIsLoading(true);

      // Fetch story details
      const storyData = await storiesApi.getStory(id);

      // Check if story is private and user is not the owner
      if (
        storyData.visibility === "private" &&
        storyData.author_id !== user?.id
      ) {
        addToast({
          title: "Private Story",
          description: "This story is private and cannot be accessed",
          type: "error",
        });
        navigate("/stories");
        return;
      }

      setStory(storyData);

      // Fetch chapters
      const chaptersData = await chaptersApi.getChaptersByStory(id, true);

      if (chaptersData.length === 0) {
        addToast({
          title: "No Chapters",
          description: "This story doesn't have any published chapters yet",
          type: "info",
        });
        navigate(`/stories/${id}`);
        return;
      }

      // Sort chapters by order
      const sortedChapters = chaptersData.sort((a, b) => a.order - b.order);
      setChapters(sortedChapters);
    } catch (error) {
      console.error("Failed to fetch story and chapters:", error);
      addToast({
        title: "Error",
        description: "Failed to load story content",
        type: "error",
      });
      navigate("/stories");
    } finally {
      setIsLoading(false);
    }
  };

  const goToNextChapter = () => {
    if (hasNextChapter) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousChapter = () => {
    if (hasPreviousChapter) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToChapter = (index: number) => {
    setCurrentChapterIndex(index);
    setShowChapterList(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetSettings = () => {
    setFontSize(18);
    setLineHeight(1.8);
    setFontFamily("serif");
    setTextAlign("left");
    setTheme("light");
  };

  if (isLoading) {
    return <ReaderSkeleton />;
  }

  if (!story || !currentChapter) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Story not found</h2>
            <Button onClick={() => navigate("/stories")}>Browse Stories</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentTheme = readingThemes[theme];

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
      }}
    >
      {/* Custom Slider Styles */}
      <style>{`
        .custom-slider {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 2rem;
        }
        
        .custom-slider-track {
          position: relative;
          height: 6px;
          width: 100%;
          border-radius: 3px;
          background: ${currentTheme.sliderTrack};
        }
        
        .custom-slider-range {
          position: absolute;
          height: 100%;
          border-radius: 3px;
          background: ${currentTheme.sliderThumb};
        }
        
        .custom-slider-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: ${currentTheme.sliderThumb};
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        
        .custom-slider-thumb:hover {
          transform: scale(1.1);
        }
        
        .custom-slider-thumb:focus {
          outline: 2px solid ${currentTheme.sliderThumb};
          outline-offset: 2px;
        }
      `}</style>

      {/* Reader Header */}
      <header
        className="sticky top-0 z-40 border-b backdrop-blur-sm"
        style={{
          backgroundColor: `${currentTheme.background}ee`,
          borderColor:
            theme === "dark" || theme === "night" ? "#333" : "#e5e5e5",
        }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(`/stories/${id}`)}
                style={{ color: currentTheme.text }}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              <div className="hidden md:block">
                <Link
                  to={`/stories/${id}`}
                  className="font-semibold hover:underline"
                  style={{ color: currentTheme.text }}
                >
                  {story.title}
                </Link>
                <p
                  className="text-sm"
                  style={{ color: currentTheme.secondaryText }}
                >
                  Chapter {currentChapterIndex + 1} of {chapters.length}:{" "}
                  {currentChapter.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Chapter List */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowChapterList(true)}
                style={{
                  borderColor:
                    theme === "dark" || theme === "night" ? "#444" : "#d1d5db",
                  color: currentTheme.text,
                }}
              >
                <List className="h-4 w-4 mr-2" />
                Chapters
              </Button>

              {/* Reading Settings */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettingsDialog(true)}
                style={{
                  borderColor:
                    theme === "dark" || theme === "night" ? "#444" : "#d1d5db",
                  color: currentTheme.text,
                }}
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Reader Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: currentTheme.text }}
          >
            {currentChapter.title}
          </h1>
          <div
            className="flex items-center gap-4 text-sm"
            style={{ color: currentTheme.secondaryText }}
          >
            <span>
              Chapter {currentChapterIndex + 1} of {chapters.length}
            </span>
            <Badge
              variant="secondary"
              style={{
                backgroundColor:
                  theme === "dark" || theme === "night" ? "#333" : "#f3f4f6",
                color: currentTheme.secondaryText,
              }}
            >
              <BookOpen className="h-3 w-3 mr-1" />
              {currentChapter.reads_count} reads
            </Badge>
          </div>
        </div>

        <Card
          className="mb-8 border-0 shadow-none"
          style={{
            backgroundColor: currentTheme.background,
          }}
        >
          <CardContent className="p-0">
            <div
              style={{
                fontSize: `${fontSize}px`,
                fontFamily:
                  fontFamily === "serif"
                    ? "Georgia, 'Times New Roman', serif"
                    : fontFamily === "sans-serif"
                    ? "'Inter', system-ui, sans-serif"
                    : "'Courier New', monospace",
                lineHeight: lineHeight,
                textAlign: textAlign,
                color: currentTheme.text,
              }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {currentChapter.content ? (
                <div className="whitespace-pre-wrap">
                  {currentChapter.content}
                </div>
              ) : (
                <p
                  className="italic"
                  style={{ color: currentTheme.secondaryText }}
                >
                  No content available for this chapter.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Chapter Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={goToPreviousChapter}
            disabled={!hasPreviousChapter}
            style={{
              borderColor:
                theme === "dark" || theme === "night" ? "#444" : "#d1d5db",
              color: currentTheme.text,
              opacity: !hasPreviousChapter ? 0.5 : 1,
            }}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous Chapter
          </Button>

          <span
            className="text-sm"
            style={{ color: currentTheme.secondaryText }}
          >
            {currentChapterIndex + 1} / {chapters.length}
          </span>

          <Button
            variant="outline"
            onClick={goToNextChapter}
            disabled={!hasNextChapter}
            style={{
              borderColor:
                theme === "dark" || theme === "night" ? "#444" : "#d1d5db",
              color: currentTheme.text,
              opacity: !hasNextChapter ? 0.5 : 1,
            }}
          >
            Next Chapter
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* End of Story */}
        {!hasNextChapter && (
          <Card
            style={{
              backgroundColor:
                theme === "dark" || theme === "night" ? "#1f1f1f" : "#f9fafb",
              borderColor:
                theme === "dark" || theme === "night" ? "#333" : "#e5e5e5",
            }}
          >
            <CardContent className="p-6 text-center">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: currentTheme.text }}
              >
                You've reached the end!
              </h3>
              <p className="mb-4" style={{ color: currentTheme.secondaryText }}>
                Thanks for reading {story.title}
              </p>
              <div className="flex justify-center gap-2">
                <Button onClick={() => navigate(`/stories/${id}`)}>
                  Back to Story
                </Button>
                <Button variant="outline" onClick={() => navigate("/stories")}>
                  Browse More Stories
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Settings Dialog - Fixed with visible sliders */}
      <Dialog open={showSettingsDialog} onOpenChange={setShowSettingsDialog}>
        <DialogContent
          className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto"
          style={{
            backgroundColor:
              theme === "dark" || theme === "night" ? "#1f1f1f" : "white",
            color: currentTheme.text,
            borderColor:
              theme === "dark" || theme === "night" ? "#333" : "#e5e5e5",
          }}
        >
          <DialogHeader>
            <DialogTitle style={{ color: currentTheme.text }}>
              Reading Settings
            </DialogTitle>
            <DialogDescription style={{ color: currentTheme.secondaryText }}>
              Customize your reading experience
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Theme Selection */}
            <div>
              <Label
                className="text-base font-medium mb-3 block"
                style={{ color: currentTheme.text }}
              >
                Theme
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(readingThemes).map(([key, themeOption]) => (
                  <button
                    key={key}
                    onClick={() => setTheme(key as keyof typeof readingThemes)}
                    className={cn(
                      "p-3 rounded-lg border-2 transition-all",
                      theme === key
                        ? "border-orange-500 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    style={{
                      backgroundColor: themeOption.background,
                      color: themeOption.text,
                      borderColor:
                        theme === key ? currentTheme.sliderThumb : undefined,
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {key === "light" && <Sun className="h-4 w-4" />}
                      {key === "dark" && <Moon className="h-4 w-4" />}
                      {key === "sepia" && <BookOpen className="h-4 w-4" />}
                      {key === "night" && <Moon className="h-4 w-4" />}
                      <span className="text-sm font-medium">
                        {themeOption.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <Separator style={{ backgroundColor: currentTheme.sliderTrack }} />

            {/* Font Size with Fixed Slider */}
            <div>
              <Label
                className="text-base font-medium mb-3 block"
                style={{ color: currentTheme.text }}
              >
                Font Size: {fontSize}px
              </Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="h-9 w-9 p-0"
                  style={{
                    borderColor: currentTheme.sliderTrack,
                    color: currentTheme.text,
                  }}
                >
                  <Minus className="h-4 w-4" />
                </Button>

                {/* Custom HTML Range Input for better visibility */}
                <input
                  type="range"
                  min={12}
                  max={32}
                  step={1}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="flex-1"
                  style={{
                    background: `linear-gradient(to right, ${
                      currentTheme.sliderThumb
                    } 0%, ${currentTheme.sliderThumb} ${
                      ((fontSize - 12) / 20) * 100
                    }%, ${currentTheme.sliderTrack} ${
                      ((fontSize - 12) / 20) * 100
                    }%, ${currentTheme.sliderTrack} 100%)`,
                    height: "6px",
                    borderRadius: "3px",
                    outline: "none",
                    WebkitAppearance: "none",
                    cursor: "pointer",
                  }}
                />

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFontSize(Math.min(32, fontSize + 2))}
                  className="h-9 w-9 p-0"
                  style={{
                    borderColor: currentTheme.sliderTrack,
                    color: currentTheme.text,
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div
                className="mt-2 p-3 rounded-lg border"
                style={{
                  backgroundColor:
                    theme === "dark" || theme === "night"
                      ? "#2a2a2a"
                      : "#f9f9f9",
                  borderColor: currentTheme.sliderTrack,
                  color: currentTheme.text,
                }}
              >
                <p style={{ fontSize: `${fontSize}px` }}>
                  Preview: The quick brown fox jumps over the lazy dog.
                </p>
              </div>
            </div>

            <Separator style={{ backgroundColor: currentTheme.sliderTrack }} />

            {/* Line Height with Fixed Slider */}
            <div>
              <Label
                className="text-base font-medium mb-3 block"
                style={{ color: currentTheme.text }}
              >
                Line Height: {lineHeight.toFixed(1)}
              </Label>

              {/* Custom HTML Range Input */}
              <input
                type="range"
                min={1.2}
                max={2.5}
                step={0.1}
                value={lineHeight}
                onChange={(e) => setLineHeight(Number(e.target.value))}
                className="w-full"
                style={{
                  background: `linear-gradient(to right, ${
                    currentTheme.sliderThumb
                  } 0%, ${currentTheme.sliderThumb} ${
                    ((lineHeight - 1.2) / 1.3) * 100
                  }%, ${currentTheme.sliderTrack} ${
                    ((lineHeight - 1.2) / 1.3) * 100
                  }%, ${currentTheme.sliderTrack} 100%)`,
                  height: "6px",
                  borderRadius: "3px",
                  outline: "none",
                  WebkitAppearance: "none",
                  cursor: "pointer",
                }}
              />
            </div>

            <Separator style={{ backgroundColor: currentTheme.sliderTrack }} />

            {/* Font Family */}
            <div>
              <Label
                className="text-base font-medium mb-3 block"
                style={{ color: currentTheme.text }}
              >
                Font Family
              </Label>
              <RadioGroup value={fontFamily} onValueChange={setFontFamily}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="serif"
                      id="serif"
                      style={{
                        borderColor: currentTheme.sliderTrack,
                      }}
                    />
                    <Label
                      htmlFor="serif"
                      className="font-serif cursor-pointer"
                      style={{ color: currentTheme.text }}
                    >
                      Serif (Georgia)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="sans-serif"
                      id="sans-serif"
                      style={{
                        borderColor: currentTheme.sliderTrack,
                      }}
                    />
                    <Label
                      htmlFor="sans-serif"
                      className="cursor-pointer"
                      style={{ color: currentTheme.text }}
                    >
                      Sans-serif (Inter)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="monospace"
                      id="monospace"
                      style={{
                        borderColor: currentTheme.sliderTrack,
                      }}
                    />
                    <Label
                      htmlFor="monospace"
                      className="font-mono cursor-pointer"
                      style={{ color: currentTheme.text }}
                    >
                      Monospace (Courier)
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <Separator style={{ backgroundColor: currentTheme.sliderTrack }} />

            {/* Text Alignment */}
            <div>
              <Label
                className="text-base font-medium mb-3 block"
                style={{ color: currentTheme.text }}
              >
                Text Alignment
              </Label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={textAlign === "left" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTextAlign("left")}
                  className="w-full"
                  style={{
                    backgroundColor:
                      textAlign === "left"
                        ? currentTheme.sliderThumb
                        : "transparent",
                    borderColor: currentTheme.sliderTrack,
                    color: textAlign === "left" ? "white" : currentTheme.text,
                  }}
                >
                  <AlignLeft className="h-4 w-4 mr-2" />
                  Left
                </Button>
                <Button
                  variant={textAlign === "center" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTextAlign("center")}
                  className="w-full"
                  style={{
                    backgroundColor:
                      textAlign === "center"
                        ? currentTheme.sliderThumb
                        : "transparent",
                    borderColor: currentTheme.sliderTrack,
                    color: textAlign === "center" ? "white" : currentTheme.text,
                  }}
                >
                  <AlignCenter className="h-4 w-4 mr-2" />
                  Center
                </Button>
                <Button
                  variant={textAlign === "justify" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTextAlign("justify")}
                  className="w-full"
                  style={{
                    backgroundColor:
                      textAlign === "justify"
                        ? currentTheme.sliderThumb
                        : "transparent",
                    borderColor: currentTheme.sliderTrack,
                    color:
                      textAlign === "justify" ? "white" : currentTheme.text,
                  }}
                >
                  <AlignJustify className="h-4 w-4 mr-2" />
                  Justify
                </Button>
              </div>
            </div>
          </div>

          <div
            className="flex justify-between pt-4 border-t"
            style={{ borderColor: currentTheme.sliderTrack }}
          >
            <Button
              variant="outline"
              onClick={resetSettings}
              style={{
                borderColor: currentTheme.sliderTrack,
                color: currentTheme.text,
              }}
            >
              Reset to Default
            </Button>
            <Button
              onClick={() => setShowSettingsDialog(false)}
              style={{
                backgroundColor: currentTheme.sliderThumb,
                color: "white",
              }}
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Chapter List Sheet */}
      <Sheet open={showChapterList} onOpenChange={setShowChapterList}>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[400px]"
          style={{
            backgroundColor: currentTheme.background,
            color: currentTheme.text,
          }}
        >
          <SheetHeader>
            <SheetTitle style={{ color: currentTheme.text }}>
              Chapters
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => goToChapter(index)}
                className={cn(
                  "w-full text-left p-3 rounded-lg transition-colors",
                  index === currentChapterIndex
                    ? "bg-orange-500 text-white"
                    : theme === "dark" || theme === "night"
                    ? "hover:bg-gray-800"
                    : "hover:bg-gray-100"
                )}
                style={{
                  backgroundColor:
                    index === currentChapterIndex ? undefined : "transparent",
                  color:
                    index === currentChapterIndex
                      ? undefined
                      : currentTheme.text,
                }}
              >
                <div className="font-medium">Chapter {index + 1}</div>
                <div className="text-sm opacity-90">{chapter.title}</div>
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
