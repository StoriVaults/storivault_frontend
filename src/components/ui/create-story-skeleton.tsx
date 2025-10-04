import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function CreateStorySkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-8 w-48" variant="text" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-20" variant="rounded" />
          <Skeleton className="h-9 w-24" variant="rounded" />
          <Skeleton className="h-9 w-32" variant="rounded" />
        </div>
      </div>

      {/* Tabs */}
      <Skeleton className="h-10 w-full max-w-md mb-6" variant="rounded" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cover Upload */}
        <Card>
          <div className="p-4">
            <Skeleton className="h-6 w-32 mb-4" variant="text" />
            <Skeleton className="aspect-[2/3]" variant="rounded" />
          </div>
        </Card>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <Skeleton className="h-4 w-16 mb-2" variant="text" />
            <Skeleton className="h-10 w-full" variant="rounded" />
          </div>

          <div>
            <Skeleton className="h-4 w-24 mb-2" variant="text" />
            <Skeleton className="h-24 w-full" variant="rounded" />
          </div>

          <div>
            <Skeleton className="h-4 w-20 mb-2" variant="text" />
            <Skeleton className="h-10 w-full" variant="rounded" />
          </div>

          <div>
            <Skeleton className="h-4 w-12 mb-2" variant="text" />
            <div className="flex gap-2">
              <Skeleton className="h-10 flex-1" variant="rounded" />
              <Skeleton className="h-10 w-20" variant="rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
