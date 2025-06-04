import {CalendarDays} from "lucide-react"

type classInfo  = {
    date: string
    title: string
}

const classes: classInfo[] = [
    {
        date: "27 July 2022 at 09:00 AM",
        title: "Create E-Learning  Landing Page"
    },
    {
        date: "27 July 2022 at 09:00 AM",
        title: "Create E-Learning  Landing Page"
    }
]
const  Upcomingclasses = () => {
  return (
    <div className="space-y-7"> 
        <h1 className="font-semibold text-lg ">Upcoming Classes</h1>
        <div className="px-5 space-y-8">
             {classes.map((cls, idx) => (
                <div key={idx} className="space-y-2">
                    <div className="flex space-x-4 items-center text-[#00000066]">
                    <CalendarDays strokeWidth={3} />
                    <p className="">{cls.date}</p>
                    </div>
                    <p className="">{cls.title}</p>
                </div>
             ))}
        </div>
    </div>
  )
}

export default  Upcomingclasses
