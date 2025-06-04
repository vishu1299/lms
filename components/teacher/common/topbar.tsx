import { Button } from "@/components/ui/button"
import { Video, Image, MessageSquareMore, Bell } from "lucide-react"

const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-4 space-x-8">
      <div className="flex flex-[2] justify-between">
      <div className="">
        <h1 className="text-lg">Good Morning, <span className="font-medium">Samantha</span></h1>
      </div>
      <div>
        <Button className="text-white bg-blue-600">
          <Video />
          New Course
        </Button>
      </div>
      </div>
      <div className="flex flex-[1] justify-between items-center ">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
            <Image />
          </div>
          <div>
            <div className="text-sm">
              <h1 className="font-medium">Samantha</h1>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <MessageSquareMore />
          <Bell />
        </div>
      </div>
    </div>
  )
}

export default Topbar