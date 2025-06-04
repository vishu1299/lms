import { Progress } from "@/components/ui/progress"
import { Flame, Clock, Award } from "lucide-react"

export default function ProfileStats() {
  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="space-y-5">
        <div className="space-y-4 text-[#161616]">
          <div className="flex justify-between">
            <p className="font-medium">Total Courses</p>
            <p className="font-medium text-lg">6</p>
          </div>
          <div className="flex justify-between">
            <p>Completed</p>
            <p className="text-green-500 font-medium text-lg">2</p>
          </div>
          <div className="flex justify-between">
            <p>In Progress</p>
            <p className="font-medium text-lg text-orange-500">4</p>
          </div>
        </div>


        <div>
          <p className=" text-[#161616] mb-2">Overall Prograss</p>
          <div className="bg-gray-200 rounded shadow-sm h-2">
            <Progress className="w-[65%] h-2 bg-sky-600 shadow-sm shadow-sky-600" />
          </div>
          <p className="mt-1 text-[#161616] font-medium">65% Complete</p>
        </div>
      </div>
    </div>
  )
}
