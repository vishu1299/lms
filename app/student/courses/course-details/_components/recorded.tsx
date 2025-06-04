import { Button } from '@/components/ui/button';
import { Clock3 } from 'lucide-react';
import React from 'react'

const Recorded = () => {
    const streams = [1, 2, 3];

    return (
        <div className='space-y-4'>
            <h1 className='text-xl font-medium '>Recorded Classes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {streams.map((_, index) => (
                    <div key={index}>
                        <LiveStream />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Recorded

function LiveStream() {
    return (
        <div className='border border-[#E0E0E0] rounded-xl p-4'>
            <div className='bg-[#F5F5F5] max-w-md h-50 rounded-xl'>
            </div>
            <div className='flex flex-col mt-5 space-y-4'>
                <h2 className='font-medium'>Adianced Data Analysis Wor chgp </h2>
                <div className='space-y-1'>
                    <p className='text-[#8C94A1] text-sm font-medium '>Join Prufessor Sarah Chen for a live workshop on advanced dala
                        analysis lechnigues.</p>

                    <div className='flex items-center space-x-2'>
                        <Clock3 size={14} />
                        <span className='text-[#8C94A1] text-sm font-medium'>1 day ago</span>
                    </div>
                </div>
                <Button size="sm" className=' bg-blue-600 text-white w-fit px-6'>Watch</Button>
            </div>
        </div>
    )
}