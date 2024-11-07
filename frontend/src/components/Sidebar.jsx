import React from 'react'
import Logo from './Logo.jsx'
import UserProfile from './UserProfile.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SearchBox from './SearchBox.jsx'
import { MdDashboard } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

function DoctorSidebar() {
      const NavBarContent = [{ icon: <MdDashboard />, title: 'Dashboard' },
      { icon: <MdDashboard />, title: 'Apponitment' },
      { icon: <MdDashboard />, title: 'Video Call' },
      { icon: <MdDashboard />, title: 'Case Study' }
      ]
      return (
            <div className='w-80 flex flex-col justify-between'>
                  <div>
                        <div className='border-b-2 pb-2'>
                              <Logo />
                              <div className='flex items-center gap-2'>
                                    <UserProfile Name={'Pradip Sadhukhan'} Url='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png' />
                                    <FontAwesomeIcon icon={faArrowRight} />
                              </div>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center py-5'>
                              <SearchBox />
                              {NavBarContent.map((nav, index) => (
                                    <div key={index} className={`w-52 flex items-center gap-3 py-3 border-b-2 ${nav.title === 'Dashboard' ? 'text-[#FF626D]' : 'text-gray-500'}`}>
                                          {nav.icon}
                                          <p className='text-md '>{nav.title}</p>
                                    </div>
                              ))}
                        </div>
                  </div>
                  <div className='w-full flex flex-col justify-center items-center py-5'>
                        <div className='w-52 flex items-center gap-3 py-3  text-gray-500'>
                              <FaHandsHelping />
                              <p className='text-md '>Help</p>
                        </div>
                        <div className='w-52 flex items-center gap-3 py-3  text-[#CE1A1A]'>
                              <TbLogout />
                              <p className='text-md '>Logout</p>
                        </div>
                  </div>

            </div>
      )
}

export default DoctorSidebar