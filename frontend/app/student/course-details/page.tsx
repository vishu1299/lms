"use client"

import { useState } from "react"
import HeroSection from "../common/hero-section"
import Video from "./-components/video/video"
import Live from "./-components/live-stream/live"
import CourseActions from "./-components/common/course-actions"
import YourProgress from "./-components/common/your-progress"
import Footer from "../common/footer"
import CategorySection from "../home/components/category-section"

const page = () => {
  const [tab, setTab] = useState("video")

  return (
    <div>
      <HeroSection />
      <div className="mx-4 px-3 sm:px-5 md:px-8">
      <CategorySection />
      </div>
      <div className="border-b border-gray-200 mt-4 flex gap-6 px-4 mx-3 sm:mx-5 md:mx-8">
        <button
          className={`pb-2 font-medium ${tab === "video" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
          onClick={() => setTab("video")}
        >
          Video
        </button>
        <button
          className={`pb-2 font-medium ${tab === "live" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
          onClick={() => setTab("live")}
        >
          Live Stream
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:gap-6 sm:space-x-4 md:space-x-4 px-4 mx-3 sm:mx-5 md:mx-8 py-4">
        <div className="md:w-2/3 w-full">
          {tab === "video" ? <Video /> : <Live />}
        </div>

        <div className="md:w-1/3 w-full flex flex-col justify-start items-start space-y-[6rem]">
          <div className="w-full">
            <CourseActions />
          </div>
          <div className="w-full">
            <YourProgress />
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default page