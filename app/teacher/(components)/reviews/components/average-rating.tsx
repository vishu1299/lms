"use client"

import { Star, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AverageRating() {
  return (
    <div>
      <h3 className="text-lg text-gray-910 font-medium mb-2">Average Rating</h3>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < 4
                  ? "text-blue-600 fill-blue-600"
                  : i === 4
                  ? "text-blue-600"
                  : "text-gray-300"
              )}
            />
          ))}
        </div>
        <span className="text-lg text-gray-910">4.3/5</span>
        <TrendingDown className="text-orange-400" />
      </div>

      <div className="space-y-3">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-3">
            <Star className="h-4 w-4 text-blue-500 fill-blue-500" />
            <span className="w-12 text-sm text-gray-910 font-medium">{rating} Star</span>
            <div className="h-3 flex-1 bg-gray-10 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full bg-emerald-500",
                  rating === 5
                    ? "w-[80%]"
                    : rating === 4
                    ? "w-[60%]"
                    : rating === 3
                    ? "w-[30%]"
                    : rating === 2
                    ? "w-[5%]"
                    : "w-[5%]"
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
