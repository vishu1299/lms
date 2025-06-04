import { Clock, Star, User } from 'lucide-react'

const CourseHeader = () => {
  return (
    <div className="rounded-xl p-6 mx-auto mb-6">
      <h2 className="text-xl font-medium mb-1 text-gray-950">Master Digital Product Design: UX Research & UI Design</h2>
      <p className="text-gray-20 text-sm mb-4">
        A complete design education for product designers: Research the user experience, then design a great user interface
      </p>

      <div className="flex flex-wrap items-center gap-6 text-sm mb-2">
        {/* Ratings */}
        <div className="flex items-center space-x-1 text-gray-950">
          <p className="font-medium">4.6</p>
          <div className="flex text-golden-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} fill="#FACC15" stroke="#FACC15" />
            ))}
          </div>
          <p className=" font-medium">(2,104 ratings)</p>
        </div>

        {/* Students */}
        <p className="text-zinc-750">12,034 students</p>
      </div>

        <div className="flex items-start space-x-2 text-sm">
          <Clock size={20} className='text-gray-20' />
          <p className='text-zinc-750'>25.5 total hour</p>
        </div>
    </div>
  )
}

export default CourseHeader
