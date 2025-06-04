"use client"
import { Star, Image } from "lucide-react"

interface RatingItemProps {
  title: string
  rating: number
  maxRating?: number
}

const RatingItem = ({ title, rating, maxRating = 5 }: RatingItemProps) => {
  const percentage = (rating / maxRating) * 100

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex-1 relative h-8">
        <div className="absolute inset-0 flex items-center">
          <div className="h-8 w-full rounded-md bg-gradient-to-r from-white to-[#e8f5e9] "           style={{ width: `${percentage}%` }}
          >
           </div>
        </div>
        <div className="absolute inset-0 flex items-center px-4">
        <Image size={15} />
          <span className="text-gray-800 text-sm ml-3">{title}</span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <span className="text-sm">{rating.toFixed(1)}</span>
        <Star size={12} className=" fill-yellow-400 text-yellow-400" />
      </div>
    </div>
  )
}

interface TopRatingProps {
  items?: RatingItemProps[]
}

export default function TopRating({ items }: TopRatingProps) {
  const defaultItems = [
    { title: "Web development", rating: 4.5 },
    { title: "React", rating: 3.5 },
    { title: "PHP", rating: 2.5 },
  ]

  const ratingItems = items || defaultItems

  return (
    <div className="rounded-lg py-2">
      <h2 className="text-lg font-semibold mb-6 text-gray-800">Top Rating</h2>

      <div className="">
        {ratingItems.map((item, index) => (
          <RatingItem key={index} title={item.title} rating={item.rating} />
        ))}
      </div>
    </div>
  )
}
