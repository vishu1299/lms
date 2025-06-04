import {Image, Eye } from "lucide-react"

type courseInfo = {
    title: string
    time: string
    enrolled: string
    bgcolor: string
}

const course: courseInfo[]= [
    {
        title: "Get Started with Figma",
        time: "2 months ago",
        enrolled: "2,440",
        bgcolor: ""
    },
    {
        title: "Principle Advanced Prototyping",
        time: "3 months ago",
        enrolled: "1,947",
        bgcolor: "bg-stone-600"
    },
    {
        title: "Sketch 101 -UI Design",
        time: "2 months ago",
        enrolled: "1,731",
        bgcolor: "bg-emerald-600"
    }
]

const  TopPerformCourse = () => {
  return (
    <div className="rounded py-4 px-2 text-gray-910">
        <h1 className="mb-4 text-lg font-semibold">Top Performing Course</h1>
        <div className="space-y-4">
            {course.map((c, idx) => (
                <div key={idx} className="flex items-center justify-between space-y-3">
                    <div className="flex space-x-3">
                    <div className={`${c.bgcolor} flex items-center justify-center h-8 w-8 rounded-full`}>
                        <Image size={18} />
                    </div>
                    <div className="flex flex-col text-xs space-y-1 ">
                        <h3 className="font-medium">{c.title}</h3>
                        <p>{c.time}</p>
                    </div>
                    </div>
                    <div className="flex space-x-2 text-xs items-center text-transparent-30">
                        <Eye size={12} />
                        <p>{c.enrolled}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default  TopPerformCourse