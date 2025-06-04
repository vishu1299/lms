import React from 'react'
import Courses from './courses'
import RecentActivities from './recent-activities'

const MyCourses = () => {
  return (
    <div>
      <div className='flex flex-col space-y-6'>
      <Courses />
      <Courses />
      </div>
        <RecentActivities />
    </div>
  )
}

export default MyCourses