import { ThumbsDown, ThumbsUp } from 'lucide-react'
import React from 'react'

const Sentiment = () => {
  return (
    <div>
        <h1 className='text-lg font-medium text-gray-910'>Sentiment</h1>
        <div className='flex items-center space-x-4 mt-5'>
            <div className=' w-full flex items-center justify-between bg-green-35 rounded-lg p-2'>
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-green-20'>
                <ThumbsUp size={15} fill='white' />
                </div>
                <p className='text-green-10 font-thin text-2xl'>4,814</p>
            </div>
            <div className='w-full flex items-center justify-between bg-peach-300/15 rounded-lg p-2'>
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-orange-250'>
                <ThumbsDown size={15} fill='white' />
                </div>
                <p className='text-orange-275 font-thin text-2xl'>45</p>
            </div>
         </div>
    </div>
  )
}

export default Sentiment