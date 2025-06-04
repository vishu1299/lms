import React from 'react'
import { Button } from '@/components/ui/button'
import DonateButton from '@/app/student/_components/donate'

const CourseActions = () => {
  return (
    <div className='space-y-5  sm:mx-8'>
      <h2 className='font-semibold text-xl mt-2'>Course Actions</h2>
      <div className='flex flex-col space-y-3'>
      <Button  size="sm" className='bg-blue-500 text-white w-full sm:py-5'>Schedule Meeting</Button>
       <DonateButton className='w-full sm:py-5' />
        <Button variant="outline" size="sm" className='bg-white border-gray-400 text-gray-600 w-full sm:py-5'>Enroll</Button>
       </div>
      
    </div>
  )
}
export default CourseActions