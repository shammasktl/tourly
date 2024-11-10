import React from 'react'
import ContactDetails from '../ContactDetails/ContactDetails'
import Navbar from '../Navbar/Navbar'
import HeroText from '../HeroText/HeroText'

const Hero = () => {
  return (
    <>
    <div className="hero relative">
     <div className='h-[100vh] bg-cover bg-no-repeat w-full hero backdrop-opacity-20 brightness-50' style={{
        backgroundImage: "url('hero-banner.jpg')"
      }}>
      </div>
      <div className="text-white absolute top-0 w-full right-0 left-0 includer before:brightness-200">
          <ContactDetails />
          <Navbar />
          <HeroText />
        </div>
    </div>
     
    </>
  )
}

export default Hero
