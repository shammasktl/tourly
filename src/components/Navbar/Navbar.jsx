import { media } from '@/assets/assets'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar border-y-2 py-3'>
      <div className="navcontent w-[80%] my-0 mx-auto flex justify-between items-center">
        <div className="icons flex gap-1">
          <img src={media.fb} className='w-10 cursor-pointer' alt="" />
          <img src={media.insta} className='w-10 cursor-pointer' alt="" />
          <img src={media.linkedin} className='w-10 cursor-pointer' alt="" />
        </div>
        <div className="links">
          <ul className='hidden md:flex gap-2 font-medium text-md text-white'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Destination</li>
            <li className='cursor-pointer'>Packages</li>
            <li className='cursor-pointer'>Gallery</li>
            <li className='cursor-pointer'>Contact Us</li>
          </ul>
        </div>
        <div className="book">
          <button className='py-2 px-3 cursor-pointer rounded-full bg-blue-500 text-white'>Book Now</button>
        </div>
      </div>
    </div>

  )
}

export default Navbar
