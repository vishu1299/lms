import { Image } from "lucide-react"

type ActivityItem = {
  id: string
  avatar: {
    color: string
    icon: "user" | "dot"
    iconColor: string
  }
  user: string
  action: string
  course: string
  time: string
}

const yesterdayActivities: ActivityItem[] = [
  {
    id: "1",
    avatar: { color: "bg-emerald-500", icon: "dot", iconColor: "bg-blue-500" },
    user: "Lazzuardi Giamani",
    action: "liked",
    course: "How to Make UX Case Study for Beginner",
    time: "12.40 AM",
  },
  {
    id: "2",
    avatar: { color: "bg-gray-910", icon: "user", iconColor: "bg-emerald-500" },
    user: "Alice Brooklyn",
    action: "purchased",
    course: "UI/UX Prototyping with Proto.io",
    time: "09.45 AM",
  },
  {
    id: "3",
    avatar: { color: "bg-blue-500", icon: "user", iconColor: "bg-emerald-500" },
    user: "Diego Lopez",
    action: "purchased",
    course: "Intro to UI/UX Design for Graphic Designer",
    time: "06.55 AM",
  },
]

export default function YesterdayActivity() {
  return (
    <div>
      <div>
        <h1 className="mb-6 font-semibold text-gray-910 text-lg">Yesterday</h1>
      </div>
      <div className="space-y-6">
        {yesterdayActivities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className={`w-10 h-10 rounded-md flex justify-center items-center text-white ${activity.avatar.color} flex-shrink-0`}>
                  <Image />
                </div>
                <div
                  className={`w-4 h-4 rounded-full ${activity.avatar.iconColor} absolute -top-1 -right-1 border-2 border-white`}
                ></div>
              </div>
              <div className="text-xs xl:text-sm">
                <p className="max-w-lg text-gray-910">
                  <span className="">{activity.user} {activity.action}{" "}</span>
                  <span className="font-medium">{activity.course}</span>
                </p>
              </div>
            </div>
            <div className="text-xs xl:text-sm text-gray-910/40 whitespace-nowrap">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
