import React from 'react'
import Profile from './components/profile'
import Bio from './components/rightbar/bio'
import ProfileDetails from './components/rightbar/profile-details'
 import Upcomingclasses from './components/rightbar/upcoming-classes'
import MyCourses from './components/my-courses'
 

const page = () => {
  return (
    <div className='flex space-x-8'>
      <div className='flex-[2] flex flex-col space-y-[3rem]'>
        <Profile />
         <MyCourses />
      </div>
      <div className='flex-[1] flex flex-col space-y-11'>
       <Bio />
       <ProfileDetails />
       <Upcomingclasses />
     </div>
    </div>
  )
}

export default page