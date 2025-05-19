import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-light-gray pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="py-8 text-center">
              <Skeleton className="h-16 w-16 rounded-full mx-auto mb-6" />
              <Skeleton className="h-8 w-1/2 mx-auto mb-4" />
              <Skeleton className="h-4 w-3/4 mx-auto mb-2" />
              <Skeleton className="h-4 w-2/3 mx-auto mb-6" />
              <Skeleton className="h-10 w-32 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 