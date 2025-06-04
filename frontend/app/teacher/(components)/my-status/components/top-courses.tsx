import { Star } from "lucide-react"

export default function TopCourses() {
    const courses = [
        {
            id: 1,
            title: "UI/UX Prototyping with Proto.io",
            students: 10,
            rating: 4.5,
            color: "bg-gray-910",
        },
        {
            id: 2,
            title: "How to Make UX Case Study for Beginner",
            students: 32,
            rating: 4.5,
            color: "bg-emerald-500",
        },
        {
            id: 3,
            title: "How to Conduct User Research from Scratch",
            students: 12,
            rating: 4.5,
            color: "bg-blue-600",
        },
    ]

    return (
        <div className="rounded-xl bg-white p-4 ">
            <h2 className="text-lg text-neutral-700 font-medium mb-4">Top Courses</h2>
            <div className="space-y-8">
                {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className={`w-9 h-10 rounded-lg ${course.color}`} />
                            <h4 className="text-sm font-medium text-gray-910 w-35">{course.title}</h4>
                        </div>
                        <div className="flex items-center space-x-9">
                            <span className="text-sm text-gray-910">{course.students}</span>
                            <div className="flex items-center">
                                <span className="text-sm mr-1 text-gray-910">{course.rating}</span>
                                <Star className="h-3 w-3 fill-golden-450 text-golden-450" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
