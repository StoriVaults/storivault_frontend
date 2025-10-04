import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function ReaderSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Reader Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-20" variant="rounded" />
              <div className="hidden md:block space-y-1">
                <Skeleton className="h-5 w-48" variant="text" />
                <Skeleton className="h-4 w-32" variant="text" />
              </div>
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-8 w-24" variant="rounded" />
              <Skeleton className="h-8 w-8" variant="rounded" />
            </div>
          </div>
        </div>
      </header>

      {/* Reader Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Skeleton className="h-10 w-3/4 mb-2" variant="text" />
          <div className="flex gap-4">
            <Skeleton className="h-5 w-32" variant="text" />
            <Skeleton className="h-5 w-24" variant="rounded" />
          </div>
        </div>

        <Card>
          <div className="p-8 space-y-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-4 w-full"
                variant="text"
                style={{ width: `${Math.random() * 20 + 80}%` }}
              />
            ))}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Skeleton className="h-10 w-36" variant="rounded" />
          <Skeleton className="h-5 w-12" variant="text" />
          <Skeleton className="h-10 w-36" variant="rounded" />
        </div>
      </main>
    </div>
  );
}
