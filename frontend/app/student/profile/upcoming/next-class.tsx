import { Clock, Laptop } from "lucide-react";

export interface ClassInfo {
  title: string;
  instructor: string;
  time: string;
  duration: string;
}

export const nextClass: ClassInfo = {
  title: "UX Design Basics",
  instructor: "Sarah Johnson",
  time: "Today at 2:00 PM",
  duration: "1.5h",
};


const NextClass = () => {
  return (
    <div className=" py-8 text-sm mx-4">
      <h3 className="text-gray-500 mb-4 text-lg">Your Next Class</h3>
      <div className="border border-gray-200 rounded px-2 py-4 space-y-2">
        <div className="flex space-x-2 items-center">
          <div className="bg-blue-100 p-2 rounded">
          <Laptop size={16} />
          </div>
          <div className="text-gray-500">
            <p className="text-sm">{nextClass.title}</p>
            <p className="text-xs">{nextClass.instructor}</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-md">
          <div className="flex items-center space-x-1 mt-1 text-xs">
            <Clock size={12} strokeWidth={3} />
            <p className="text-gray-500">
              {nextClass.time} ({nextClass.duration})
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextClass