import React from 'react'

const HeroText = () => {
  return (
    <div className='content flex-col gap-9 my-36 flex items-center justify-center text-center'>
      <h1 className='uppercase text-white font-bold text-6xl'>Journey to Explore World</h1>
      <p className='max-w-[700px] text-xl'>Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos voluptatibus habitant? Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.</p>
      <div className="buttons flex gap-3 font-bold">
        <button className='border-solid border-blue-500 border-2 rounded-full bg-blue-500 text-white py-3 px-4'>Learn More</button>
        <button className='border-white border-solid text-white rounded-full border-2 py-3 px-5'>Book Now</button>
      </div>
    </div>
  )
}

export default HeroText
