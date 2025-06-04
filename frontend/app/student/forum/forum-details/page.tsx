import React from 'react'
import TopBar from '../components/top-bar'
import PostFeedDetails from './_components/post-feed-details'
import TopForums from '../components/top-forums'
import CommunityGuidelines from '../components/community-guidelines'
 
const page = () => {
  return (
     <div className='mb-4'>
      <TopBar />
      <div className="flex flex-col sm:flex-row gap-6 mx-5 md:px-8 mt-6">
        <div className="flex-1">
          <PostFeedDetails />
        </div>
        <div className="md:w-[25%] space-y-8">
          <TopForums />
          <CommunityGuidelines />
         </div>
      </div>
    </div>
  )
}

export default page