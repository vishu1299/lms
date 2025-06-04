import TotalCourses from "../dashboard/components/total-courses"
import AverageRating from "./components/average-rating"
import CourseReviewsTable from "./components/course-review/course-reviews-table"
import Sentiment from "./components/sentiment"
import Statscard from "./components/stats-card"

const page = () => {
    return (
      <div className='flex space-x-8'>
        <div className='flex-[2] space-y-[3rem]'>
            <div>
            <Statscard />
            </div>
            <div className="w-full">
            <CourseReviewsTable />
            </div>
        </div>
        <div className='flex-[1] flex flex-col space-y-8'>
           <TotalCourses />
           <AverageRating />
           <Sentiment />
       </div>
      </div>
    )
  }
  
  export default page