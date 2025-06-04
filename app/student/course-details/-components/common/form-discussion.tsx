import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {MessageSquareMore, Heart} from "lucide-react"

const FormDiscussion = () => {
  return (
    <div className="space-y-3 my-11">
      <h2 className="font-semibold text-lg">Form Discussion</h2>
      <Textarea placeholder="Share your thoughts or questions about this lesson.." className="border-gray-200 border-2 text-gray-600 h-30"/>
      <div className="flex items-center justify-between">
      <Button size="sm" className="bg-blue-500 text-white sm:px-4">Submit Question</Button>
      <div className="flex items-center justify-center space-x-4">
      <div className="flex items-center gap-1">
            <MessageSquareMore className="w-4 h-4" />
            <span className="text-gray-500">Comments; 0</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span className="text-gray-500">Likes: 25</span>
          </div>
      </div>
      </div>
    </div>
  )
}

export default FormDiscussion