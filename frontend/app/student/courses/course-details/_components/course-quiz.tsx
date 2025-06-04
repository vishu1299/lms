import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import React from 'react'

const CourseQuiz = () => {
  return (
    <Button className='w-full flex items-center justify-between border border-[#F0F0F0] py-8 rounded-full'>
        <span className='text-xl'>Quiz</span>
        <span className='rounded-full bg-blue-600 w-5 h-5 flex items-center justify-center text-white'><ChevronDown /></span>
    </Button>
  )
}

export default CourseQuiz