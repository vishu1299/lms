import { Button } from "@/components/ui/button"
import TeacherHandbook from "../upload-course/components/rightbar/teacher-handbook"
import CreateQuiz from "./_components/create-quiz"
import { Plus } from "lucide-react"
import QuizGuideSection from "./_components/quiz-guide-section"

 const page = () => {
     return (
       <div className='flex space-x-8'>
         <div className='flex-[2]'>
             <CreateQuiz />
             <div className="flex justify-end my-10">
                <Button size="sm" className="bg-blue-600 text-white"><Plus />Submit Quiz</Button>
             </div>
         </div>
         <div className='flex-[1] space-y-10'>
            <QuizGuideSection />
            <TeacherHandbook />
        </div>
       </div>
     )
   }
   
   export default page