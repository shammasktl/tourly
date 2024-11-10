import { media } from '@/assets/assets'
import React from 'react'
import { motion } from "framer-motion"

const Places = () => {
  const placeDescriptions = [
    {
      country: "Italy",
      place: "San Miguel",
      description: "San Miguel is a city in the northeastern part of Italy, situated on the border between France and Spain. It is the capital of the province of Lombardy."
    },
    {
      country: "France",
      place: "Paris",
      description: "Paris is the capital and most populous city of France, with an estimated population of over 2,200,000. It is the center of the country's economy, finance."
    },
    {
      country: "Japan",
      place: "Tokyo",
      description: "Tokyo is the capital and most populous metropolitan area of Japan. With a population of over 13.9 million people, it is the most populous city in the world."
    }
  ]
  return (
    <div className='w-[80%] my-0 mx-auto mt-24 flex flex-col gap-4 justify-center items-center text-center'>
      <p className='font-medium text-xl'>Uncover Place</p>
      <h1 className='md:text-6xl text-3xl font-bold'>Popular Destination</h1>
      <p className='max-w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus hic earum dicta reprehenderit maiores. Quod doloremque eum expedita minima magnam.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div className='image relative' initial={{
          opacity: 0,
          y:300
        }}
        whileInView={{
          opacity: 1,
          y:0
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{
          once: true,
        }}
        >
          <img src={media.popular1} className='rounded-xl' alt="" />
          <div className="content absolute flex flex-col gap-3 bottom-2 right-2 left-2 bg-white rounded-xl">
            <p className="text-xl font-semibold">{placeDescriptions[0].country}</p>
            <h3 className='text-3xl font-bold'>{placeDescriptions[0].place}</h3>
            <p>{placeDescriptions[0].description}</p>
          </div>
        </motion.div>
        <motion.div className='image relative' initial={{
          opacity: 0,
          y:300
        }}
        whileInView={{
          opacity: 1,
          y:0
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{
          once: true,
        }}
        >
          <img src={media.popular2} className='rounded-xl' alt="" />
          <div className="content absolute flex flex-col gap-3 bottom-2 right-2 left-2 bg-white rounded-xl">
            <p className="text-xl font-semibold">{placeDescriptions[1].country}</p>
            <h3 className='text-3xl font-bold'>{placeDescriptions[1].place}</h3>
            <p>{placeDescriptions[1].description}</p>
          </div>
        </motion.div>
        <motion.div className='image relative' initial={{
          opacity: 0,
          y:300
        }}
        whileInView={{
          opacity: 1,
          y:0
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{
          once: true,
        }}
        >
          <img src={media.popular3} className='rounded-xl' alt="" />
          <div className="content absolute flex flex-col gap-3 bottom-2 right-2 left-2 bg-white rounded-xl">
            <p className="text-xl font-semibold">{placeDescriptions[2].country}</p>
            <h3 className='text-3xl font-bold'>{placeDescriptions[2].place}</h3>
            <p>{placeDescriptions[2].description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Places
