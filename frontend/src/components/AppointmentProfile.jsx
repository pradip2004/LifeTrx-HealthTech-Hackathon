import React, { useState } from 'react'
import UserProfile from './UserProfile'

function AppointmentProfile() {
      
  return (
    <div className='w-full bg-gray-300 rounded-lg flex items-center justify-between px-5'>
      <UserProfile Name={'Pradip Sadhukhan'} Url='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png'/>
      <p className='text-sm'>4 Nov 2024</p>
      <p className='text-sm'>12.00 P.M</p>
      <input 
        type="checkbox" 
        className="w-4 h-4 accent-[#FF626D] rounded-lg"
      />
    </div>
  )
}

export default AppointmentProfile