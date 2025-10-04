import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function ProfileSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Profile Header Skeleton */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-8">
        <Skeleton
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40"
          variant="circular"
        />

        <div className="flex-1 w-full space-y-3">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Skeleton className="h-8 w-32" variant="text" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-24" variant="rounded" />
              <Skeleton className="h-8 w-8" variant="rounded" />
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6">
            <Skeleton className="h-5 w-20" variant="text" />
            <Skeleton className="h-5 w-24" variant="text" />
            <Skeleton className="h-5 w-24" variant="text" />
          </div>

          {/* Bio */}
          <Skeleton className="h-4 w-full max-w-md" variant="text" />
          <Skeleton className="h-4 w-3/4 max-w-md" variant="text" />

          {/* Additional Info */}
          <div className="flex gap-4">
            <Skeleton className="h-4 w-32" variant="text" />
            <Skeleton className="h-6 w-24" variant="rounded" />
          </div>
        </div>
      </div>

      {/* Tabs Skeleton */}
      <Skeleton className="h-10 w-full max-w-xs mb-6" variant="rounded" />

      {/* Stories Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/5]" variant="rounded" />
        ))}
      </div>
    </div>
  );
}
