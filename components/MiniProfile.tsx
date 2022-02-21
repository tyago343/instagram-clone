import React from 'react'
import img from '../images/profile-picture.png'
function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img src={img.src} alt="" className="h-16 w-16 rounded-full border p-[2px]" />
      <div className='flex-1 mx-4'>
          <h2 className='font-bold'>Santi</h2>
          <h3 className='text-gray-400 text-sm'>Welcome to Instagram</h3>
      </div>
      <button className='text-blue-400 text-sm font-semibold'>Sign out</button>
    </div>
  )
}

export default MiniProfile
