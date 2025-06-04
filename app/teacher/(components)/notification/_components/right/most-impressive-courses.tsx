import { MessageSquare, Heart, MessageSquareMore, Image } from "lucide-react"

type Course = {
  id: string
  title: string
  color: string
  comments: number
  likes: string
}

const courses: Course[] = [
  {
    id: "1",
    title: "UI/UX Prototyping with Proto.io",
    color: "bg-gray-910",
    comments: 614,
    likes: "2,841",
  },
  {
    id: "2",
    title: "How to Make UX Case Study for Beginner",
    color: "bg-emerald-500",
    comments: 415,
    likes: "1,765",
  },
]

export default function MostImpressiveCourses() {
  return (
    <div className="rounded-lg">
      <div className="mb-4">
        <h2 className="text-lg text-gray-910 font-semibold">Most Impressive Course</h2>
      </div>
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="flex items-center justify-between space-x-3">
            <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-md flex items-center justify-center ${course.color} flex-shrink-0`}> 
              <Image className="text-white" />
            </div>
            <p className="text-xs font-medium text-gray-910">{course.title}</p>
            </div>
             
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-xs text-gray-910/40">
                <MessageSquareMore size={16} />
                <span>{course.comments}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-910/40">
                <Heart size={16} />
                <span>{course.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
