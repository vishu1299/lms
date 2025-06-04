import CourseHeader from "./components/course-header"
import CourseSidebar from "./components/course-sidebar"
import DownloadCoursePdf from "./components/download-course.pdf"
import WhatYoullLearn from "./components/what-to-learn"

 
const page = () => {
  return (
    <div className='flex space-x-8'>
      <div className='flex-[2] flex flex-col space-y-8'>
        <CourseHeader />
         <WhatYoullLearn />
         <DownloadCoursePdf />
      </div>
      <div className='flex-[1] flex flex-col space-y-4'>
        <CourseSidebar />
    </div>
    </div>
  )
}

export default page