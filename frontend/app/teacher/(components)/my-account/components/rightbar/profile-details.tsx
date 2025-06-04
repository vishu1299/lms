import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ProfileDetails = () => {
    return (
        <div className='space-y-4'>
            <h1 className='font-medium text-lg'>Profile Details</h1>
            <div className='flex items-center space-x-3'>
                <div className='h-9 w-9 bg-blue-600 rounded-full flex items-center justify-center'>
                    <Mail fill='white' strokeWidth={1} />
                </div>
                <p>alexarawles@gmail.com</p>
            </div>
            <div className='flex items-center space-x-3'>
                <div className='h-9 w-9 bg-blue-600 rounded-full flex items-center justify-center'>
                    <Phone fill='white' strokeWidth={1}  />
                </div>
                <p>+1234567890</p>
            </div>
            <div className='flex items-center space-x-3'>
                <div className='h-9 w-9 bg-blue-600 rounded-full flex items-center justify-center'>
                    <MapPin fill='white' strokeWidth={1}/>
                </div>
                <p>Toronto Street No. 87, CA</p>
            </div>
        </div>
    )
}

export default ProfileDetails