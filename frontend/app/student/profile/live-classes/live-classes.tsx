import React from 'react'
import LiveStream from './live-stream';
import { Button } from '@/components/ui/button'
 

const LiveClasses = () => {
  const streams = [1, 2, 3, 4, 5, 6];

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 space-y-6'>
      {streams.map((_, index) => (
        <div key={index}>
          <LiveStream />
          <Button size="sm" className='sm:px-4 mx-4 mt-5 bg-blue-600  text-white'>Join Class</Button>
        </div>
      ))}
    </div>

  )
}

export default LiveClasses
