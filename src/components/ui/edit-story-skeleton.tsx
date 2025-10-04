import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function EditStorySkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-24" variant="rounded" />
              <Skeleton className="h-8 w-px" />
              <div>
                <Skeleton className="h-6 w-24" variant="text" />
                <Skeleton className="h-3 w-32 mt-1" variant="text" />
              </div>
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-9 w-24" variant="rounded" />
              <Skeleton className="h-9 w-32" variant="rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <Skeleton className="h-10 w-full max-w-md mb-6" variant="rounded" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cover Image Section */}
          <Card className="lg:col-span-1 bg-white">
            <div className="p-4">
              <Skeleton className="h-6 w-32 mb-2" variant="text" />
              <Skeleton className="h-4 w-full mb-4" variant="text" />
              <Skeleton className="aspect-[2/3]" variant="rounded" />
            </div>
          </Card>

          {/* Story Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white">
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-40 mb-4" variant="text" />

                {/* Title */}
                <div>
                  <Skeleton className="h-4 w-16 mb-2" variant="text" />
                  <Skeleton className="h-10 w-full" variant="rounded" />
                </div>

                {/* Description */}
                <div>
                  <Skeleton className="h-4 w-24 mb-2" variant="text" />
                  <Skeleton className="h-32 w-full" variant="rounded" />
                </div>

                {/* Genre */}
                <div>
                  <Skeleton className="h-4 w-16 mb-2" variant="text" />
                  <Skeleton className="h-10 w-full" variant="rounded" />
                </div>

                {/* Tags */}
                <div>
                  <Skeleton className="h-4 w-12 mb-2" variant="text" />
                  <div className="flex gap-2">
                    <Skeleton className="h-10 flex-1" variant="rounded" />
                    <Skeleton className="h-10 w-20" variant="rounded" />
                  </div>
                  <div className="flex gap-2 mt-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton
                        key={i}
                        className="h-6 w-16"
                        variant="rounded"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
