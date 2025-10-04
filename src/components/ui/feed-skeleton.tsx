import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function FeedSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-8 w-32" variant="text" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-20" variant="rounded" />
          <Skeleton className="h-9 w-32" variant="rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {/* Tabs */}
          <Skeleton className="h-10 w-full mb-6" variant="rounded" />

          {/* Grid of story cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100"
              >
                <Skeleton className="h-full w-full" variant="rectangular" />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block space-y-4">
          {/* User Card */}
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-14 w-14" variant="circular" />
              <div className="flex-1">
                <Skeleton className="h-4 w-24 mb-2" variant="text" />
                <Skeleton className="h-3 w-32" variant="text" />
              </div>
            </div>
            <Skeleton className="h-9 w-full mt-4" variant="rounded" />
          </Card>

          {/* Suggested Authors */}
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Skeleton className="h-5 w-32" variant="text" />
              <Skeleton className="h-4 w-12" variant="text" />
            </div>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-8 w-8" variant="circular" />
                    <div>
                      <Skeleton className="h-3 w-20 mb-1" variant="text" />
                      <Skeleton className="h-3 w-28" variant="text" />
                    </div>
                  </div>
                  <Skeleton className="h-7 w-16" variant="rounded" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
