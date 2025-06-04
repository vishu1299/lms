 import { Clock, GraduationCap, ShoppingBag, LucideIcon } from "lucide-react"

type Stat = {
  icon: LucideIcon
  label: string
  value: string
  color: string
}

const stats: Stat[] = [
  { icon: ShoppingBag, label: "Course Views", value: "2,714", color: "text-blue-700" },
  { icon: Clock, label: "Average Watch Time", value: "$32,821", color: "text-emerald-500" },
  { icon: GraduationCap, label: "Course Completion Rate", value: "75%", color: "text-emerald-500" },
]

export default function StatsOverview() {
  return (
    <div className="flex justify-between mb-8 space-x-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <div key={idx} className="flex justify-between items-start shadow px-3 py-1 w-full">
            <div className="space-y-3 text-gray-910">
              <Icon size={25} />
              <p className="text-sm xl:text-base font-medium w-28 xl:w-full">{stat.label}</p>
            </div>
            <h3 className={`text-xl font-medium ${stat.color}`}>{stat.value}</h3>
          </div>
        )
      })}
    </div>
  )
}
