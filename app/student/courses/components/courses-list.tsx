import { Button } from "@/components/ui/button"
import Search from "@/components/ui/input-search"
import SortButton from "@/components/ui/sort-button"
import CoursesGrid from "./courses-grid"
import PaginatedControl from "./page-change"
import CategorySection from "../../home/components/category-section"

const CoursesList = () => {
  return (
    <div className="px-4 py-8 mx-3 sm:mx-5 md:mx-8">
      <CategorySection />
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between mb-4">
        <div className="flex space-x-2">
            <Button className="bg-blue-500 text-white px-2">Courses</Button>
            <Button className="bg-gray-300 text-gray-500 px-2">Be a teacher</Button>
            <Button className="px-2 bg-green-700 text-white">Donate</Button>
        </div>
        <div className="flex items-center space-x-2 mt-4">
            <Search placeholder="Search courses" />
            <SortButton />
        </div>
        </div>
        <CoursesGrid />
        <div className="flex justify-end">
        <PaginatedControl className="my-8" />
        </div>
    </div>
  )
}

export default CoursesList