import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row  justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4 leading-7'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    In ipsa officiis vel ullam repellendus facere dolore consectetur
                     tenetur molestiae quaerat aspernatur delectus, nesciunt mollitia
                      sed non. Natus possimus laborum suscipit.
                </p>
            </div>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'> Company </h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='cursor-pointer hover:text-white'> Home </a>
                    <a href="#About" className='cursor-pointer hover:text-white'> About </a>
                    <a href="#Contacts" className='cursor-pointer hover:text-white'> Contact Us </a>
                    <a href="#" className='cursor-pointer hover:text-white'> Privacy Policy </a>
                </ul>
            </div>
            <div>
                <h3 className='text-white text-lg font-bold mb-4'> Subscribe to our Newsletter </h3>
                <p className='text-gray-400 mb-4 max-w-80'> The Latest News, Articles, and Resources, sent to your inbox weekly. </p>
                <div className='flex gap-2'>
                    <input type="email" name="email" placeholder='Enter Email ' className='p-2 rounded bg-gray-800 text-gray-400
                            border border-gray-700 focus:outline-none w-full md:w-auto' id="" 
                    />
                    <button className='py-2 px-4 rounded bg-blue-500 text-white'> Subscribe </button>
                </div>
            </div>
        </div>
        <div className='border-t  border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Copyright 2024. All right Reserved.
        </div>
    </div>
  )
}

export default Footer
