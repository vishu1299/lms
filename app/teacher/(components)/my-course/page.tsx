import React from 'react'
import StatsCards from './components/stats-cards'
import TopPerformCourse from '../dashboard/components/top-performing-courses'
import { CourseTable } from './components/course-status/course-table'
import TotalCourses from './components/total-courses'
import TopRating from './components/top-rating'

const page = () => {
  return (
    <div className='flex space-x-8'>
      <div className='flex-[2] space-y-8'>
        <StatsCards />
        <CourseTable />
       </div>
      <div className='flex-[1] flex flex-col space-y-4'>
        <TotalCourses />
        <TopPerformCourse />
         <TopRating />
      </div>
    </div>
  )
}

export default page