import { Progress } from "@/components/ui/progress"

type CourseProgressItemProps = {
    title: string
    percentage: number
}

const CourseProgressItem = ({ title, percentage }: CourseProgressItemProps) => {
    return (
        <div className="border-b border-[#EFEFEF] pb-6">
            <h1 className="font-semibold text-lg mb-3">{title}</h1>
            <p className="text-[#6A6A6A] mb-1">{percentage}% Complete</p>
            <div className="bg-[#A4A4A4] rounded shadow-sm h-3">
                <Progress className={`h-3 bg-blue-500`} style={{ width: `${percentage}%` }} />
            </div>
        </div>
    )
}

interface Course {
    title: string
    percentage: number
}

const courses: Course[] = [
    { title: "Website development & design", percentage: 82 },
    { title: "Website development & design", percentage: 82 },
    // Add more courses here
  ]



const CourseSidebar = () => {
    return (
        <div className="rounded-lg  border border-[#EFEFEF] space-y-6 p-6">
            <div className="flex justify-between">
                <h1 className="font-bold text-xl">My Course</h1>
                <p className="text-[#6A6A6A]">See all</p>
            </div>

            {courses.map((course, index) => (
                <CourseProgressItem
                    key={index}
                    title={course.title}
                    percentage={course.percentage}
                />
            ))}

        </div>
    )
}

export default CourseSidebar