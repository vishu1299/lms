import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { MessageCircle, Star } from 'lucide-react'
import React from 'react'

const MyCourses = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">My Courses</h1>
      
      {[...Array(7)].map((_, index) => {
  const isChecked = index === 4 || index === 5  

  return (
    <div key={index}>
      <div className="flex items-center justify-between p-4 mb-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <Checkbox 
            checked={isChecked} 
            className={isChecked ? "bg-blue-600 text-white border-blue-600" : ""}
          />
          <p className="text-sm">UI/UX Designer</p>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1 text-sm">
            <p>4.5</p>
            <Star size={12} fill="#FACC15" className="text-yellow-500" />
          </div>
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <MessageCircle size={14} fill="gray" />
            <p>6</p>
          </div>
          <Badge className="bg-emerald-100 text-emerald-600 p-2">View details</Badge>
        </div>
      </div>
      <div className="border-t border-gray-200 mx-4" />
    </div>
  )
})}

    </div>
  )
}

export default MyCourses
