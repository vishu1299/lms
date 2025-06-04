import React from 'react'
import LiveStream from './live-stream'; 

const LiveClasses = () => {
  const streams = [1, 2, 3];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {streams.map((_, index) => (
        <div key={index}>
          <LiveStream />
        </div>
      ))}
    </div>

  )
}

export default LiveClasses
