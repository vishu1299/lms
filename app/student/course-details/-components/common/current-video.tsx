import Image from "next/image"
import { SquarePlay  } from "lucide-react"

const CurrentVideo = () => {
  return (
    <div className="space-y-3">
      <h2 className="font-semibold text-lg">Current Video</h2>
      <div className="relative">
      <Image src="/courseDetails/video.png" alt="video" width={670} height={40} className="w-full" />
      <SquarePlay size={37} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white   rounded-full" />
      </div>
      <h2 className="font-medium">Introduction to Advanced Concepts</h2>
      <h3 className="text-gray-500">Learn the fundamentals and explore practical applications with our expert instructor,</h3>
    </div>
  )
}

export default CurrentVideo