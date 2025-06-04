import React from 'react'
import { Button } from '@/components/ui/button'

const CourseActions = () => {
  return (
    <div className='space-y-5'>
      <h2 className='font-semibold text-lg mt-2'>Course Actions</h2>
      <div className='flex flex-col space-y-3'>
      <Button  size="sm" className='bg-blue-500 text-white sm:px-8'>Schedule Meeting</Button>
      <Button variant="destructive" size="sm" className='bg-green-500 text-white sm:px-8'>Donate</Button>
      <Button variant="outline" size="sm" className='bg-white border-gray-400 text-gray-600 sm:px-8'>Enroll</Button>
      <Button variant="outline" size="sm" className='bg-white border-gray-400  text-gray-600 sm:px-8'>Submit Questions</Button>
      </div>
      
    </div>
  )
}

export default CourseActions