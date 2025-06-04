
import { FileIcon, Image, Users } from "lucide-react"

type Course = {
    title: string
    instructor: string
}

export default function CourseCards() {
    const courses: Course[] = [
        {
            title: "User Experience Design Masterclass",
            instructor: "Kathryn Murphy",
        },
        {
            title: "How To Stop Procrastinating",
            instructor: "Theresa Webb",
        },
    ]

    return (
        <div className="flex items-center space-x-8">
            {courses.map((course, idx) => (
                <div key={idx} className="flex items-center space-x-8 justify-between">
                    <div className="bg-neutral-400 h-40 w-30 rounded flex items-center justify-center">
                        <Image />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-lg font-medium w-40 text-neutral-700">{course.title}</h1>
                        <p className="text-neutral-400">{course.instructor}</p>
                        <div className="flex items-center rounded justify-center h-10 w-20 bg-neutral-400">
                            <Image />
                            <Image />
                            <Image />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
