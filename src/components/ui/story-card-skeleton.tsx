// src/components/ui/story-card-skeleton.tsx
import { Skeleton } from "./skeleton";
import { Card } from "./card";

interface StoryCardSkeletonProps {
  variant?: "default" | "compact" | "list" | "featured";
}

export function StoryCardSkeleton({
  variant = "default",
}: StoryCardSkeletonProps) {
  if (variant === "compact" || variant === "list") {
    return (
      <div className="flex gap-3 p-3">
        <Skeleton width={64} height={80} variant="rounded" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" variant="text" />
          <Skeleton className="h-3 w-full" variant="text" />
          <Skeleton className="h-3 w-1/2" variant="text" />
        </div>
      </div>
    );
  }

  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-[2/3] w-full" variant="rectangular" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-3/4" variant="text" />
        <Skeleton className="h-4 w-full" variant="text" />
        <Skeleton className="h-4 w-2/3" variant="text" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" variant="rounded" />
          <Skeleton className="h-6 w-16" variant="rounded" />
        </div>
      </div>
    </Card>
  );
}
