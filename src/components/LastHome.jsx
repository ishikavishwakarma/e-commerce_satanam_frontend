import React from 'react'
import { Link } from 'react-router-dom'

const LastHome = () => {
  const backgroundImageUrl = 'https://img.freepik.com/free-photo/blue-watercolor-leaf-background-aesthetic-winter-season_53876-143135.jpg'
  return (
    <>
    <div style={{ backgroundImage: `linear-gradient(rgba(-10, 0, 0, -20), rgba(-10, 27, 56, -30)),url(${backgroundImageUrl})`, }} className='h-[40vh]  bg-[#001b3822] gap-6 flex-col flex items-center justify-center  w-full'>
<h3 className='text-xl sm:text-3xl text-[#001B38] text-center sm:w-[52vw] w-[72vw]'>We are committed to create a space full of fragrance where our naturally made incenses are kind to your senses and leave a feeling of purity in your home.</h3>
<a href={`/about`} className=' text-white px-4 py-3 bg-[#001b38cb]'>Read More</a>
    </div>
    <div className="div h-[30vh] w-full"></div>
    </>
  )
}

export default LastHome