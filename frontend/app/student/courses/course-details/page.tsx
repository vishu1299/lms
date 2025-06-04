import React from 'react'
import Footer from '../../common/footer'
 import CourseDetail from './_components/course-detail'
import CourseQuiz from './_components/course-quiz'
import CourseActions from './_components/course-actions'
import CourseSidebar from './_components/course-detail-sidebar'

const page = () => {
  return (
    <div>
      <div className='flex-row md:flex items-start gap-20 px-24'>
        <div className="w-[70%]">
          <CourseDetail />
        </div>
        <div className="w-[30%] space-y-8">
          <CourseActions />
          <CourseQuiz />
          <CourseSidebar />
         </div>
      </div>
      <Footer />
    </div>
  )
}

export default page