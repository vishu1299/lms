import React from 'react'
import Stats from './components/stats'
import CourseState from './components/course-state'
import WeeklyStats from './components/weekly-stats'
import TotalCourses from './components/total-courses'
import TopPerformCourse from './components/top-performing-courses'
import ScheduledClasses from './components/scheduled-classes'
import TopStudentLocation from './components/top-student-loc'

const page = () => {
  return (
    <div className='flex space-x-8'>
      <div className='flex-[2] flex flex-col space-y-[3rem]'>
        <Stats />
        <ScheduledClasses />
        <div className='flex space-x-7'>
          <div className='flex-[1]'>
            <CourseState />
          </div>
          <div className='flex-[2]'>
            <WeeklyStats />
          </div>
        </div>
      </div>
      <div className='flex-[1] flex flex-col space-y-9'>
        <TotalCourses />
        <TopPerformCourse />
        <TopStudentLocation />
     </div>
    </div>
  )
}

export default page