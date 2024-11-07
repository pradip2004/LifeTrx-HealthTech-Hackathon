import React from 'react'
import AppointmentProfile from '../../components/AppointmentProfile'
import CalendarComponent from '../../components/CalendarComponent'

function DoctorDashboard() {
  return (
    <div className='w-full h-screen flex'>
      {/* left section  */}
      <div className='w-[56%] h-full flex flex-col items-center gap-5 py-5'>
        <div className='bg-custom-gradient w-3/4 h-32 rounded-lg flex flex-col justify-center px-5'>
          <h6 className='text-white text-lg'>Hello Doctor!</h6>
          <h1 className='text-white text-4xl font-semibold'>Welcome to Soulcare</h1>
        </div>
        <div className='w-3/4 bg-white flex flex-col rounded-lg px-4 py-2'>
          <h1 className='text-2xl font-semibold mb-2'>Offline Appointments</h1>
          <div className=' flex flex-col items-center h-52 overflow-y-scroll px-2 gap-2'>
            <AppointmentProfile />
            <AppointmentProfile />
            <AppointmentProfile />
            <AppointmentProfile />
          </div>
        </div>
        <div className='w-3/4 bg-white flex flex-col items-center h-64 rounded-lg overflow-y-scroll'>

        </div>

      </div>
      {/* right section  */}
      <div className='w-[42%] h-full flex flex-col justify-between py-5 pr-8 '>
        <CalendarComponent />
        <div className='bg-white w-full h-[38%] rounded-lg p-2'>
          <h1 className='text-2xl font-semibold mb-2'>Online Appointments</h1>
          <div className=' flex flex-col items-center h-48 overflow-y-scroll px-2 gap-2'>
            <AppointmentProfile />
            <AppointmentProfile />
            <AppointmentProfile />
            <AppointmentProfile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard