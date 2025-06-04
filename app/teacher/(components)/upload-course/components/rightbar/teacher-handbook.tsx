import { ChevronRight,NotebookPen } from "lucide-react"
const  TeacherHandbook = () => {
  return (
    <div className="flex items-center justify-between bg-[#3F3F44] h-25 rounded-2xl px-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
        <NotebookPen fill="#3F3F44" className="text-[#3F3F44]" />
        </div>
         <div className="text-white">
            <h3 className="font-semibold text-sm">Teacher Handbook</h3>
            <p className="text-xs text-gray-300">Must Read if You are a Teacher</p>
          </div>
        <ChevronRight  className="h-5 w-5 text-white" />
    </div>
    
  )
}

export default  TeacherHandbook