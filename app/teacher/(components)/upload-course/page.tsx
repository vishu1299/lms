import React from 'react'
import NewCourse from './components/new-course/new-course'
import CourseContentResources from './components/course-content-resources'
import OtherInformation from './components/other-info'
import GuideSection from './components/rightbar/guides'
import TeacherHandbook from './components/rightbar/teacher-handbook'
import { LastSubmitted } from './components/rightbar/last-submitted'

const page = () => {
  return (
    <div className='flex space-x-8'>
        <div className='flex-[2] space-y-6'>
          <NewCourse />
          <CourseContentResources />
          <OtherInformation />
        </div>
        <div className='flex-[1] space-y-7'>
          <GuideSection />
          <TeacherHandbook />
          <LastSubmitted />
        </div>
    </div>
  )
}

export default page