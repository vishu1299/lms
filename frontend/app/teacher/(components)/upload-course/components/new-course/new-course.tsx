import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import ImageUploader from './upload-image'
import LanguageSelect from './language-select'

const  NewCourse = () => {
  return (
    <div className='flex justify-between space-x-4'>
        <div className='flex-1 space-y-4 text-[#3F3F44]'>
        <h2 className='text-lg font-semibold'>Upload New course</h2>
        <div>
            <Label className='text-sm font-normal'>Title</Label>
            <Input placeholder="Type Here" className='border-none mt-2 bg-[#F6F6F6] placeholder:text-sm' />
        </div>
        <div>
            <Label className='text-sm font-normal'>Description</Label>
            <Textarea placeholder='Type Here' className='h-25 mt-2 border-none bg-[#F6F6F6] placeholder:text-sm' />
        </div>
        </div>
        <div className='flex-1 mt-auto space-y-5'>
            <ImageUploader />
            <LanguageSelect />
        </div>
    </div>
  )
}

export default  NewCourse