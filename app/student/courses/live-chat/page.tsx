import React from 'react'
import Top from './-components/top'
import CourseActions from '../course-details/_components/course-actions'
import CourseQuiz from '../course-details/_components/course-quiz'
import CourseSidebar from '../_components/course-sidebar'
import Footer from '@/components/student/common/footer'
import Chat from './-components/chat'

const page = () => {
  return (
    <div>
      <div className='flex-row md:flex items-start px-26 gap-20 mb-10'>
        <div className="w-[70%] space-y-14">
          <Top />
          <Chat />
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