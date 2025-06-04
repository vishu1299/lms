import CourseCards from "./_components/leftbar/courses/course-cards"
import CourseTabs from "./_components/leftbar/courses/course-tabs"
import Calendar from "./_components/leftbar/schedule-calender"
import HoursSpentChart from "./_components/rightbar/hours-spent"
import MonthlyCalendar from "./_components/rightbar/monthly-calender"
import UpcomingEvents from "./_components/rightbar/upcoming-events"


const page = () => {
    return (
      <div className='flex space-x-8'>
        <div className='flex-[2] flex flex-col space-y-[3rem]'>
           <Calendar />
           <CourseTabs />
           <CourseCards />
        </div>
        <div className='flex-[1] space-y-10'>
           <MonthlyCalendar />
           <UpcomingEvents />
           <HoursSpentChart />
       </div>
      </div>
    )
  }
  
  export default page