import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function UpcomingEvents() {
  return (
    <div className=" rounded-lg dark:bg-neutral-700">
      <div className="">
        <h2 className="text-lg text-neutral-700 font-semibold mb-4">Upcoming Events</h2>

        <div className="bg-gray-800 text-white rounded-lg">
          <div className="p-4 flex items-center space-x-4">
            <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg p-6 flex items-center justify-center">
              <Play className="h-6 w-6 text-white" />
            </div>

            <div className="flex-1">
              <h3 className="font-medium">Adobe XD For Beginner</h3>
              <p className="text-sm text-gray-300">Design</p>
            </div>

            <div className="text-right">
              <p className="text-sm">11:00 AM</p>
              <Button size="sm" className="mt-2 bg-blue-600 px-5">View</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
