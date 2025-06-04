import { Button } from '@/components/ui/button'
import {Podcast, Video, UserRound, Clock3} from 'lucide-react'

const LiveStream = () => {
  return (
    <div className=''>
        <div className='bg-gray-100 h-50 sm:h-70 lg:h-90 rounded-xl'>
            <div className='flex'>
                <Button size="sm" className='bg-red-500 ml-auto mt-2 mr-2 rounded-full text-white text-xs font-medium'>
                    <Video strokeWidth={3} />
                    LIVE
                </Button>
            </div>
            <div className='flex flex-col items-center justify-center h-full pb-[5rem] '>
                <Podcast size={35} className='text-blue-700' />
                <span className='text-gray-400 font-medium mt-2'>Connecling lo live stream..</span>
            </div>
        </div>
        <div className='flex flex-col mt-5'>
            <h2 className='font-medium'>Adianced Data Analysis Wor chgp </h2>
            <p className='min-w-lg text-gray-400 text-sm font-medium'>Join Prufessor Sarah Chen for a live workshop on advanced dala
                 <br></br> analysis lechnigues.</p>
            <div className='flex space-x-3 mt-2 text-sm'>
                <div className='flex items-center space-x-1'>
                    <UserRound size={14} />
                    <span className='text-gray-400 font-medium'>128 Viewers</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <Clock3 size={14}/>
                    <span className='text-gray-400 font-medium'>Started 15 minutes ago</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveStream