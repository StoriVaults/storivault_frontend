// src/components/ui/profile-skeleton.tsx
import { Skeleton } from "./skeleton";

export function ProfileSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-start gap-8 mb-8">
        <Skeleton className="h-32 w-32" variant="circular" />
        <div className="flex-1 space-y-3">
          <Skeleton className="h-8 w-48" variant="text" />
          <Skeleton className="h-4 w-32" variant="text" />
          <Skeleton className="h-4 w-full max-w-md" variant="text" />
          <div className="flex gap-4">
            <Skeleton className="h-9 w-24" variant="rounded" />
            <Skeleton className="h-9 w-24" variant="rounded" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/5]" variant="rounded" />
        ))}
      </div>
    </div>
  );
}
