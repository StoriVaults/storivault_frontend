import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function StoryDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="relative">
        <Skeleton
          className="absolute inset-0 h-[500px]"
          variant="rectangular"
        />
        <div className="absolute inset-0 h-[500px] bg-gradient-to-b from-black/70 via-black/50 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-20">
          <Skeleton className="h-9 w-20 mb-4" variant="rounded" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex justify-center lg:justify-start">
              <Skeleton className="w-64 h-96 rounded-xl" variant="rounded" />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <Skeleton className="h-12 w-3/4 mb-3" variant="text" />
                <Skeleton className="h-6 w-full mb-2" variant="text" />
                <Skeleton className="h-6 w-5/6" variant="text" />
              </div>

              {/* Author Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-14 w-14" variant="circular" />
                  <div>
                    <Skeleton className="h-5 w-32 mb-2" variant="text" />
                    <Skeleton className="h-4 w-48" variant="text" />
                  </div>
                  <Skeleton className="h-9 w-24 ml-auto" variant="rounded" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-24 rounded-lg"
                    variant="rounded"
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Skeleton className="h-11 w-36" variant="rounded" />
                <Skeleton className="h-11 w-24" variant="rounded" />
                <Skeleton className="h-11 w-24" variant="rounded" />
                <Skeleton className="h-11 w-24" variant="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Card className="bg-white p-6">
          <Skeleton className="h-6 w-32 mb-4" variant="text" />
          <Skeleton className="h-4 w-full mb-2" variant="text" />
          <Skeleton className="h-4 w-full mb-2" variant="text" />
          <Skeleton className="h-4 w-3/4" variant="text" />
        </Card>
      </div>
    </div>
  );
}
