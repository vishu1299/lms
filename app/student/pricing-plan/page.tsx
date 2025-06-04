'use client'
import { useState } from 'react'
import Footer from '../common/footer'
import HeroSection from '../common/hero-section'
import PlanOptions from './components/plan-options'
import TopBar from './components/top-bar'
import CategorySection from '../home/components/category-section'
 
const page = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div>
     <div className='px-4 mx-3 sm:mx-5 md:mx-8'>
     <TopBar isMonthly={isMonthly} togglePlan={() => setIsMonthly(!isMonthly)} />
    <PlanOptions isMonthly={isMonthly} />

     </div>
    <Footer />
    </div>
  )
}

export default page