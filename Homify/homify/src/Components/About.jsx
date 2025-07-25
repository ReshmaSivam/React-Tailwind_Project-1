/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
 

const About = () => {
  return (
    <motion.div
        initial={{opacity:0, x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}} 
    id='About' className='flex flex-col items-center justify-center container mx-auto
                     p-14 md:px-20 lg:px-32 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'> About 
                <span className='underline underline-offset-4 decoration-1 under font-light'> Our Brand </span>
        </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'> Passionate about Properties, Dedicated to you Vision </p>
        
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
          <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
          <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'> 
              <div>
                <p className='text-4xl font-medium text-gray-800'> 10+ </p>
                <p> Years of Excellence </p>
              </div>
              <div>
                <p className='text-4xl font-medium text-gray-800'> 12+ </p>
                <p> Projects Completed </p>
              </div>
              <div>
                <p className='text-4xl font-medium text-gray-800'> 20+ </p>
                <p> Mn. Sqft. Completed </p>
              </div>
              <div>
                <p className='text-4xl font-medium text-gray-800'> 25+ </p>
                <p> Ongoing Projects </p>
              </div>
            </div>
            <p className='my-10 max-w-lg'>
               Coldwell Banker is an International brokerage firm headquartered in 
                the United States of America. Having a presence in over 44+ countries 
                with 3000+ offices with 92000+ agents serving worldwide. Coldwell Banker
                Value Add Realty is one of its top-performing franchise partners here
                in Bangalore, India. over the years, we found that many individuals 
                struggle to BUY, SELL or even RENT their property simply because the
                decision process isn’t easy to adapt to and time spent on contemplating
                was way too expensive. So we started with a simple goal: build a simple
                information process combined with world-class customer experience to 
                help individuals achieve what they want effortlessly.
              </p>
              <button className='bg-blue-600 text-white px-8 py-2 rounded'> Learn More </button>
          </div>
        </div>

    </motion.div>
  )
}

export default About
