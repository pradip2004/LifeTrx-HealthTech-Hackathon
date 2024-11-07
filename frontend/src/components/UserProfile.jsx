import React from 'react'

function UserProfile({Name, Url}) {
  return (
    <div className='flex items-center gap-3 p-2'>
      <img className='w-12' src={Url} alt="" />
      <p className='text-sm'>Dr. {Name}</p>
    </div>
  )
}

export default UserProfile