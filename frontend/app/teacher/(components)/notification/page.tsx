import TodayActivity from "./_components/left/today-activity"
import YesterdayActivity from "./_components/left/yesterday-activity"
import FilterSection from "./_components/right/filter"
import ImpressionStatistics from "./_components/right/impression-statistics"
import MostImpressiveCourses from "./_components/right/most-impressive-courses"

const page = () => {
    return (
      <div className='flex space-x-8 mb-9'>
        <div className='flex-[2] flex flex-col space-y-[4rem]'>
           <TodayActivity />
           <YesterdayActivity />
        </div>
        <div className='flex-[1] flex flex-col space-y-6'>
           <FilterSection />
           <ImpressionStatistics />
           <MostImpressiveCourses />
       </div>
      </div>
    )
  }
  
  export default page