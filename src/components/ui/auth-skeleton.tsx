import { Skeleton } from "./skeleton";

export function AuthFormSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
          {/* Logo Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-10" variant="rounded" />
              <div className="space-y-1">
                <Skeleton className="h-6 w-24" variant="text" />
                <Skeleton className="h-3 w-20" variant="text" />
              </div>
            </div>
          </div>

          {/* Header Skeleton */}
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-48 mx-auto mb-2" variant="text" />
            <Skeleton className="h-4 w-64 mx-auto" variant="text" />
          </div>

          {/* Form Fields Skeleton */}
          <div className="space-y-5">
            {/* Field 1 */}
            <div>
              <Skeleton className="h-4 w-24 mb-2" variant="text" />
              <Skeleton className="h-10 w-full" variant="rounded" />
            </div>

            {/* Field 2 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Skeleton className="h-4 w-24" variant="text" />
                <Skeleton className="h-4 w-28" variant="text" />
              </div>
              <Skeleton className="h-10 w-full" variant="rounded" />
            </div>

            {/* Field 3 */}
            <div>
              <Skeleton className="h-4 w-32 mb-2" variant="text" />
              <Skeleton className="h-10 w-full" variant="rounded" />
            </div>

            {/* Submit Button */}
            <Skeleton className="h-10 w-full" variant="rounded" />
          </div>

          {/* Divider and Footer Link */}
          <div className="mt-6">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <Skeleton className="h-px w-full" />
              </div>
              <div className="relative flex justify-center">
                <div className="px-2 bg-white">
                  <Skeleton className="h-4 w-32" variant="text" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Skeleton className="h-4 w-32 mx-auto" variant="text" />
            </div>
          </div>
        </div>

        {/* Terms and Privacy Links */}
        <div className="text-center">
          <Skeleton className="h-3 w-64 mx-auto" variant="text" />
        </div>
      </div>
    </div>
  );
}
