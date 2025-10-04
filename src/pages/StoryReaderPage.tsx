import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ReaderSkeleton } from "@/components/ui/reader-skeleton";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  List,
  Settings,
  Heart,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Badge } from "@/components/ui/badge";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { Chapter, Story } from "@/types/api";
import { chaptersApi, storiesApi } from "@/apis";
import { cn } from "@/lib/utils";

export function StoryReaderPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  const [story, setStory] = useState<Story | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fontSize, setFontSize] = useState(18);
  const [fontFamily, setFontFamily] = useState("serif");

  const currentChapter = chapters[currentChapterIndex];
  const hasNextChapter = currentChapterIndex < chapters.length - 1;
  const hasPreviousChapter = currentChapterIndex > 0;

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 32));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 12));
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

  return (
    <div className="min-h-screen bg-background">
      {/* Reader Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(`/stories/${id}`)}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              <div className="hidden md:block">
                <Link
                  to={`/stories/${id}`}
                  className="font-semibold hover:underline"
                >
                  {story.title}
                </Link>
                <p className="text-sm text-muted-foreground">
                  Chapter {currentChapterIndex + 1} of {chapters.length}:{" "}
                  {currentChapter.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Chapter List */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <List className="h-4 w-4 mr-2" />
                    Chapters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Chapters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-2">
                    {chapters.map((chapter, index) => (
                      <button
                        key={chapter.id}
                        onClick={() => goToChapter(index)}
                        className={cn(
                          "w-full text-left p-3 rounded-lg transition-colors",
                          index === currentChapterIndex
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        <div className="font-medium">Chapter {index + 1}</div>
                        <div className="text-sm opacity-90">
                          {chapter.title}
                        </div>
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Reading Settings */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Reading Settings</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div>
                      <label className="text-sm font-medium">Font Size</label>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={decreaseFontSize}
                        >
                          A-
                        </Button>
                        <span className="text-sm">{fontSize}px</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={increaseFontSize}
                        >
                          A+
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Font Family</label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <Button
                          variant={
                            fontFamily === "serif" ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setFontFamily("serif")}
                        >
                          Serif
                        </Button>
                        <Button
                          variant={
                            fontFamily === "sans-serif" ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setFontFamily("sans-serif")}
                        >
                          Sans
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Reader Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {currentChapter.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>
              Chapter {currentChapterIndex + 1} of {chapters.length}
            </span>
            <Badge variant="secondary">
              <BookOpen className="h-3 w-3 mr-1" />
              {currentChapter.reads_count} reads
            </Badge>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div
              style={{
                fontSize: `${fontSize}px`,
                fontFamily: fontFamily,
                lineHeight: 1.8,
              }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {currentChapter.content ? (
                <div className="whitespace-pre-wrap">
                  {currentChapter.content}
                </div>
              ) : (
                <p className="text-muted-foreground italic">
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
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous Chapter
          </Button>

          <span className="text-sm text-muted-foreground">
            {currentChapterIndex + 1} / {chapters.length}
          </span>

          <Button
            variant="outline"
            onClick={goToNextChapter}
            disabled={!hasNextChapter}
          >
            Next Chapter
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* End of Story */}
        {!hasNextChapter && (
          <Card className="bg-muted">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                You've reached the end!
              </h3>
              <p className="text-muted-foreground mb-4">
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
    </div>
  );
}
