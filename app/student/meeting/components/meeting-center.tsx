import React from 'react'
import DonateButton from '../../_components/donate'
import MeetingTable from './meeting-table'


const MeetingCenter = () => {
  return (
    <div className='px-10 space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Meeting Center</h1>
        <DonateButton />
      </div>
      <MeetingTable />
    </div>
  )
}

export default MeetingCenter
