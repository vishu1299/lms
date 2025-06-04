import { Image, Star } from "lucide-react"

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
  stars?: number
  comment?: string
}

const todayActivities: ActivityItem[] = [
  {
    id: "1",
    avatar: { color: "bg-gray-910", icon: "user", iconColor: "bg-emerald-500" },
    user: "Nicolas Bekker",
    action: "purchased",
    course: "Designing with User Centered Approach",
    time: "10.12 PM",
  },
  {
    id: "2",
    avatar: { color: "bg-emerald-500", icon: "dot", iconColor: "bg-blue-500" },
    user: "Bukayo Saka",
    action: "commented",
    course: "Creating Design System for Easier and Faster Design",
    time: "07.54 PM",
    comment: "thank you so much!",
  },
  {
    id: "3",
    avatar: { color: "bg-emerald-500", icon: "dot", iconColor: "bg-blue-500" },
    user: "Leonardi Bernado",
    action: "liked",
    course: "Creating Design System for Easier and Faster Design",
    time: "12.40 AM",
  },
  {
    id: "4",
    avatar: { color: "bg-gray-910", icon: "dot", iconColor: "bg-blue-500" },
    user: "Isabelle Octav",
    action: "reviewed",
    course: "UI/UX Prototyping with Proto.io",
    time: "08.30 AM",
    stars: 4,
  },
]

export default function TodayActivity() {
  return (
    < div>
      < div>
        <h1 className="mb-6 font-semibold text-gray-910 text-lg">Today</h1 >
      </ div >
      < div  className="space-y-6">
        {todayActivities.map((activity) => (
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
            <div className="text-xs">
            {activity.stars && (
                <div className="flex mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < activity.stars! ? "fill-blue-500 text-blue-500" : "fill-gray-200 text-gray-200"}
                    />
                  ))}
                </div>
              )}
              <p className="text-xs xl:text-sm max-w-lg text-gray-910">
                <span className="">{activity.user} {activity.action}{" "}</span> 
                <span className="font-medium">{activity.course}</span>
                {activity.comment && <span> "{activity.comment}"</span>}
              </p>
            </div>
            </div>
            <div className="text-xs xl:text-sm text-gray-910/40 whitespace-nowrap">{activity.time}</div>
          </div>
          
        ))}
      </ div >
    </ div>
  )
}
