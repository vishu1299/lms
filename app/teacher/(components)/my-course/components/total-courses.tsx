import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const info = [
    {title: "Total Courses", number: "5"},
    {title: "Hours Taught", number: "14hr"},
    {title: "Enrolled Students", number: "400"}
]

const TotalCourses = () => {
    return (
        <div className="flex flex-col space-y-3 shadow-md pt-4 bg-gray-100 rounded-2xl p-4">
            <div className="flex justify-between">
            <h1 className="font-semibold text-lg">Total Courses</h1>
            <TrendingUp />
            </div>
            <div className="flex items-center justify-between">
            {info.map((i, idx) => (
                 <div key={idx} className="flex flex-col items-start gap-1">
                    <p className="text-sm w-20">{i.title}</p>
                    <p className="text-lg">{i.number}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default TotalCourses