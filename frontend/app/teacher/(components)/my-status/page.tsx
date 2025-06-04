import TopStudentLocation from "../dashboard/components/top-student-loc"
import TotalCourses from "../dashboard/components/total-courses"
import ProfileVisitor from "./components/profile-visitor"
import StatsOverview from "./components/stats-overview"
import TopCourses from "./components/top-courses"
import WeeklyStatistic from "./components/weekly-stats"


const page = () => {
    return (
      <div className='flex space-x-8'>
        <div className='flex-[2] flex flex-col space-y-[3rem]'>
            <StatsOverview />
           <ProfileVisitor />
           <div className="flex space-x-4">
            <div className="flex-[1]">
            <WeeklyStatistic />
            </div>
            <div className="flex-[1]">
            <TopCourses />
            </div>
           </div>
        </div>
        <div className='flex-[1] flex flex-col space-y-8'>
           <TotalCourses />
           <TopStudentLocation />
       </div>
      </div>
    )
  }
  
  export default page