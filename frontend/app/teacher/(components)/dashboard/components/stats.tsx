import { CircleDollarSign, UserRoundPen, Users } from "lucide-react"

 interface stats {
    icon: React.ElementType
    title: string
    number: string
}

const StatsCard: stats[]  = [
    {
        icon: CircleDollarSign , title: "Total Courses", number: "24"
    },
    {
        icon: UserRoundPen , title: "Average Rating", number: "4.8/5"
    },
    {
        icon: Users , title: "Total Student", number: "5,622"
    }
]

const  Stats = () => {
  return (
    <div className="grid grid-cols-3 justify-center gap-4">
        {StatsCard.map((stat, idx) => {
            const Icon = stat.icon
            return(
                <div key={idx} className="flex items-start justify-between shadow px-3 py-6">
                    <div className="flex flex-col space-y-2 text-darkGray">
                        <Icon className=""  size={20}/>
                        <span className="text-xs font-medium whitespace-nowrap">{stat.title}</span>
                    </div>
                    <div className={`text-lg font-medium ${stat.title !== "Total Student" ? "text-emerald-500" : "text-blue-600"}`}>{stat.number}</div>
                </div>
            )
        })}
    </div>
  )
}

export default  Stats