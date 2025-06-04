import { BookOpen } from "lucide-react"
import { Progress } from "@/components/ui/progress"

type Course = {
  title: string
  progress: number
  bg: string
  text: string
  progressC: string
}

const recommendedCourses: Course[] = [
  {
    title: "Complete Backend Development",
    progress: 30,
    bg: "bg-purple-100",
    text: "text-purple-600",
    progressC: "bg-purple-600",
  },
  {
    title: "Continue React Hooks Masterclass",
    progress: 50,
    bg: "bg-sky-100",
    text: "text-sky-600",
    progressC: "bg-sky-600",
   },
]

export default function RecommendedCourses() {
  return (
    <div className="p-4 mt-4 border border-1.5 border-gray-200 rounded-lg bg-white">
      <div className="space-y-4">
        <p className="text-lg font-semibold">Recommended Next</p>
        {recommendedCourses.map((course, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className={`flex items-center justify-center ${course.bg} rounded-lg w-10 h-10`}>
              <BookOpen className={`h-5 w-5 ${course.text}`} />
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">{course.title}</p>
              <div className="bg-gray-200 rounded shadow-sm">
                <Progress style={{ width: `${course.progress}%` }} className={`${course.progressC} shadow-sm`} />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
