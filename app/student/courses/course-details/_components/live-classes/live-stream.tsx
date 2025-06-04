import { Button } from '@/components/ui/button'
import { Video, UserRound, Clock3, Radio } from 'lucide-react'

const LiveStream = () => {
    return (
        <div className='border border-[#E0E0E0] rounded-xl p-4'>
            <div className='bg-[#F5F5F5] max-w-md rounded-xl'>
                <div className='flex'>
                    <Button size="sm" className='bg-red-500 ml-auto mt-2 mr-2 rounded-full text-white text-xs font-medium py-1'>
                        <Video strokeWidth={3} />
                        LIVE
                    </Button>
                </div>
                <div className='flex flex-col items-center justify-center h-full pb-[5rem] '>
                    <Radio size={35} className='text-[#3247E6]' />
                    <span className='text-[#ABABB5] font-medium mt-2'>Connecling lo live stream..</span>
                </div>
            </div>
            <div className='flex flex-col mt-5 space-y-4'>
                <h2 className='font-medium'>Adianced Data Analysis Wor chgp </h2>
                <div>
                    <p className='text-[#8C94A1] text-sm font-medium '>Join Prufessor Sarah Chen for a live workshop on advanced dala
                        analysis lechnigues.</p>
                    <div className='flex space-x-3 text-sm font-medium'>
                        <div className='flex items-center space-x-1'>
                            <UserRound size={14} />
                            <span className='text-[#8C94A1]'>128 Viewers</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Clock3 size={14} />
                            <span className='text-[#8C94A1]'>Started 15 minutes ago</span>
                        </div>
                    </div>
                </div>
                <Button size="sm" className=' bg-blue-600 text-white w-fit'>Join Class</Button>
            </div>
        </div>
    )
}

export default LiveStream