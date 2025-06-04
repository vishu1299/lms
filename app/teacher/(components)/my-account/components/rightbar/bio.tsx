import { Badge } from '@/components/ui/badge'
import React from 'react'

const  Bio = () => {
  return (
    <div className='space-y-3 p-6 bg-[#F7F7F7B2] rounded-lg'>
        <h1 className='text-lg font-semibold'>Bio</h1>
        <p className='text-sm text-neutral-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <div className='flex items-center justify-between'>
            <Badge className='bg-emerald-100 text-emerald-500 px-4 py-2 '>Designer</Badge>
            <Badge className='bg-emerald-100 text-emerald-500 px-4 py-2'>Figma</Badge>
            <Badge className='bg-emerald-100 text-emerald-500 px-4 py-2'>Web Design</Badge>
        </div>
    </div>
  )
}

export default Bio