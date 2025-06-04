import { Input } from '@/components/ui/input'
import React from 'react'
import { Progress } from '@/components/ui/progress'
import { Minus, Plus, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CourseContentResources = () => {
  return (
    <div className=''>
      <h1>Course Content & Resources</h1>
      <div className='space-y-4'>
        <div className='flex items-center text-sm space-x-5 '>
          <h1>Lesson 1</h1>
          <div className='flex items-center'>
            <h1>Title</h1>
            <Input placeholder='Section 1' />
          </div>
          <div>
            <div className='flex items-center justify-between'>
              <p>Uploading...</p>
              <p className='text-emerald-600 font-medium'>85%</p>
            </div>
            <div className="bg-gray-200 rounded-xl h-4">
              <Progress className="w-[85%] h-4 bg-emerald-600" />
            </div>
          </div>
        </div>
        <div className='flex text-sm space-x-5 '>
          <h1 className='mt-2'>Lesson 2</h1>
          <div className='space-y-3'>
            <div className='flex items-center space-x-2'>
              <p className='text-[#3F3F44]'>Title</p>
              <Input placeholder='Type Here' className='bg-[#F6F6F6]' />
              <Plus />
            </div>
            <div className='flex items-center space-x-2'>
              <p className='text-[#3F3F44]'>Title</p>
              <Input placeholder='Type Here' className='bg-[#F6F6F6]' />
              <Plus />
            </div>
            <div className='flex items-center space-x-2'>
              <p className='text-[#3F3F44]'>Title</p>
              <Input placeholder='Type Here' className='bg-[#F6F6F6]' />
              <Minus />
            </div>
          </div>
          <div className='flex flex-col space-y-3'>
            {Array.from({ length: 3 }).map((_, index) => (
              <Button className="text-orange-600 bg-orange-100" key={index}><Video className="mr-2" />Upload Resource</Button>
            ))}
          </div>
        </div>
        <Button size="sm" className='bg-blue-600 text-white'><Plus />Add Lesson</Button>
      </div>
    </div>

  )
}

export default CourseContentResources