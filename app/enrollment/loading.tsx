import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="h-6 w-28 mb-6">
            <Skeleton className="h-full w-full" />
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <Skeleton className="h-10 w-3/4 mb-2" />
            <Skeleton className="h-6 w-1/2 mb-8" />

            <div className="space-y-6">
              {Array(10)
                .fill(null)
                .map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-5 w-1/4 mb-1" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}

              <Skeleton className="h-12 w-full mt-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 