import Footer from "../common/footer"
import CourseSidebar from "./_components/course-sidebar"
import CoursesList from "./_components/courses-list"
import DonateButton from "../_components/donate"
 import { Button } from "@/components/ui/button"
 import { Input } from "@/components/ui/input"
import { ChevronDown } from "lucide-react"
import { Search } from "lucide-react"


const page = () => {
  return (
    <div className="space-y-10">
      <div className="flex-row space-y-4 md:space-y-0 md:flex justify-between items-center px-16">
        <div className="flex items-center space-x-3">
          <Button className="bg-blue-500 text-white">Courses</Button>
          <Button className="bg-[#F3F4F6] text-[#888E98] font-normal">Be a teacher</Button>
          <DonateButton />
        </div>
        <div className="flex space-x-3">
          <div className="relative w-full md:w-auto md:flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search Courses"
              className="pl-8 w-full border border-gray-6 placeholder:text-gray-7"
              />
          </div>
          <Button
            variant="outline"
            className="rounded-lg bg-[#F3F4F6] border border-[#F7F7F9] text-gray-400 mb-4"
          >
            Sort <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex px-16 items-start gap-4">
        <div className="w-[70%]">
          <CoursesList />
        </div>
        <div className="w-[30%]">
          <CourseSidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page