import { media } from '@/assets/assets'
import React, { useState } from 'react'
import { X } from 'lucide-react'

const ContactDetails = () => {
  const [isopen, setOpen] = useState(false)
  return (
    <>
      <div className='details py-4 text-white border-b-solid'>
        <div className="content w-[80%] my-0 mx-auto flex justify-between items-center">
          <div className="number hidden md:flex gap-2 items-center font-medium text-xl">
            <img src={media.call} className=' cursor-pointerw-16 rounded-full bg-blue-500 p-4' alt="" />
            <div className="text hidden md:block">
              <p>For Further Inquires :</p>
              <p>+1 800 123 4567</p>
            </div>
          </div>
          <div className="logo">
            <img src={media.logo} alt="" />
          </div>
          <div className="icons flex gap-2">
            <img src={media.search} className='w-9 cursor-pointer' alt="" />
            <img src={media.hamburger} onClick={()=>setOpen(true)} className='w-9 block md:hidden cursor-pointer' alt="" />
          </div>
        </div>
      </div>
      {
        isopen ? 
        <div className="responsive text-black md:hidden">
          <div className="content fixed right-0 transition-all duration-700 w-80 overflow-hidden top-0 bottom-0 bg-white">
            <div className="logo px-6 py-3 border-b-2 flex justify-between items-center">
              <img src={media.logoBlue} alt="" />
              <X size={36} color='blue' onClick={()=>{setOpen(false)}} />
            </div>
            <div className="links">
              <ul className='font-medium text-4xl gap-4 flex flex-col mt-16'>
                <li className='cursor-pointer border-b-2 px-5 pb-2'>Home</li>
                <li className='cursor-pointer border-b-2 px-5 pb-2'>About</li>
                <li className='cursor-pointer border-b-2 px-5 pb-2'>Destination</li>
                <li className='cursor-pointer border-b-2 px-5 pb-2'>Packages</li>
                <li className='cursor-pointer border-b-2 px-5 pb-2'>Gallery</li>
                <li className='cursor-pointer border-b-2 px-5 pb-2'>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>:
      <div className="responsive text-black">
        <div className="content fixed right-0 transition-all duration-700 w-0 overflow-hidden top-0 bottom-0 bg-white">
          <div className="logo px-6 py-3 border-b-2 flex justify-between items-center">
            <img src={media.logoBlue} alt="" />
            <X size={36} color='blue' />
          </div>
          <div className="links">
            <ul className='font-medium text-4xl gap-4 flex flex-col mt-16'>
              <li className='cursor-pointer border-b-2 px-5 pb-2'>Home</li>
              <li className='cursor-pointer border-b-2 px-5 pb-2'>About</li>
              <li className='cursor-pointer border-b-2 px-5 pb-2'>Destination</li>
              <li className='cursor-pointer border-b-2 px-5 pb-2'>Packages</li>
              <li className='cursor-pointer border-b-2 px-5 pb-2'>Gallery</li>
              <li className='cursor-pointer border-b-2 px-5 pb-2'>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      }
    </>

  )
}

export default ContactDetails
