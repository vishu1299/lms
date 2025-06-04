 "use client"

import { useState } from "react"
import HeroSection from "../common/hero-section"
import LiveClasses from "./live-classes/live-classes"
import Footer from "../common/footer"
import UpcomingClasses from "./upcoming/upcoming-classes"
import UserProfile from "./common/user-profile"
import ProfileStats from "./common/profile-status"
import RecommendedCourses from "./common/recommended-next"
import MyCourses from "./my-courses/my-courses"
import UserCalender from "./upcoming/user-calender"
import CategorySection from "../home/components/category-section"

const Page = () => {
  const [activeTab, setActiveTab] = useState("myCourses")

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "liveClasses":
        return <LiveClasses />
      case "upcoming":
        return <UpcomingClasses />
      default:
        return <MyCourses />
    }
  }

  const tabClass = (tab: string) =>
    `font-semibold px-4 py-2 cursor-pointer ${
      activeTab === tab ? "text-sky-600" : "text-gray-400 border-transparent"
    }`

  return (
    <div className="">

       <div className="flex flex-col sm:flex-row justify-between gap-4 px-7 sm:px-9 md:px-12 pt-4 pb-30 mt-5">
        <div className="flex flex-col justify-start lg::w-1/5 space-y-3 max-w-sm">
          <UserProfile />
          <ProfileStats />
         
        </div>
        <div className="lg:w-4/5 rounded bg-white">
        <div className="">
          <div className="flex mb-4">
            <button className={tabClass("myCourses")} onClick={() => setActiveTab("myCourses")}>
              MY COURSES
            </button>
            <button className={tabClass("liveClasses")} onClick={() => setActiveTab("liveClasses")}>
              LIVE CLASSES
            </button>
            <button className={tabClass("upcoming")} onClick={() => setActiveTab("upcoming")}>
              UPCOMING CLASSES
            </button>
            </div>
          </div>
          {renderActiveComponent()}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page
