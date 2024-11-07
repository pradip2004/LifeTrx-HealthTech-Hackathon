import React from 'react'
import DoctorSidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

function Doctor() {
  return (
    <div>
      <div className='overflow-hidden h-screen bg-white flex'>
       <DoctorSidebar />
      <div className='flex bg-[#FFE6E8] h-[100vh] w-full'>
        <Outlet />
      </div>

    </div>
    </div>
  )
}

export default Doctor