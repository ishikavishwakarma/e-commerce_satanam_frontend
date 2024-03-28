import React from 'react'
import Nav from './Nav'
import Navbar from './Nav'
import Footer from './Footer'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiWaterRecycling } from 'react-icons/gi'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-[100vw] max-sm:w-full  h-full  lg:h-[60vh] relative '>
      <div className="w-full h-56 sm:h-[60vh] h-full  max-sm:w-full  bg-cover opacity-95 bg-center "
          style={{
            backgroundImage: "url('/images/contacct.webp')",
            // backgroundAttachment: "fixed",
            
          }}
        />
        <div className="div w-full h-full bg-[#0000003f] flex flex-col pt-10 items-start gap-2 justify-center  absolute top-0">
             <h1 className='text-white font-["gilroy"] text-4xl pl-[4vw] font-[700]'>Contact Us</h1>
             <h1 className='text-white font-["gilroy"] text-lg pl-[4vw] font-[500]'><a className='hover:text-[#6a94c1]' href="/">Home </a> / <a className='hover:text-[#6a94c1]' href="/contact">Contact</a></h1>
        </div>
      </div>
      <div className='h-fit flex flex-col lg:gap-10 lg: w-full  '>
        <div className="div sm:flex-row flex-col lg:h-full flex h-full sm:h-[80vh] w-full ">
          <div className="left flex w-full flex-col h-full p-3 gap-5 py-10 lg:pl-7 sm:w-[42vw] ">
<h3 className='text-lg   text-[#001B38]'>Have a question?</h3>
       <h3 className='text-4xl font-[600]  text-[#001B38]'>Let&lsquo;s get in touch</h3>
       <p className='text-gray-700'>Need to connect? Feel free to reach out! Our entire team is eager to engage with you. Whether you prefer a phone call or a conversation via email, the contact details provided below are at your disposal. <br /><br />
      <p>Don&lsquo;t hesitate to get in touch – we look forward to hearing from you!</p>
       </p>
       <p className='text-gray-700'></p>
       <div className='flex flex-col gap-5 sm:flex-row md:flex:row lg:flex:row lg:gap-44 pt-3 '>
        <div className="box">
          <h1 className='text-[#001B38] text-lg'>Email</h1>
          <p className='text-gray-700'>info@saisandesh.org</p>
        </div>
        <div className="box">
          <h1 className='text-[#001B38] text-lg '>Contact No</h1>
          <p className='text-gray-700'>831-806-3629</p>
        </div>
       </div>
          </div>
          <div className="right w-full md:w-[60vw] md:h-fit lg:w-[60vw] h-full md:py-10 lg:py-10 lg:px-5 md:px-5 px-2 sm:px-14 ">
<div className="div h-full bg-[#001b3818] px-4 py-7 w-full">
<h3 className='text-lg   text-[#001B38]'>Have a question?</h3>
<p className='text-gray-700'>Tell us how you like our products or how we could improve them or leave us a message to revert to you.</p>
<form className='flex items-center flex-col md:gap-3 lg:gap-10 gap-10' action="">
  <div  className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 grid-rows-2 md:gap-2 lg:gap-10 gap-3'>
  <input className='xl:w-[25vw] md:h-10 md:w-full lg:w-[24vw] w-[80vw]  h-14 p-2 rounded focus:outline-none border focus:border-[#001b38ab]' type="text" placeholder='FullName*'/>
  <input className='xl:w-[25vw] md:h-10 lg:w-[24vw] h-14 p-2 rounded focus:outline-none border focus:border-[#001b38ab]' type="text" placeholder='E-mail*' />
  <input className='xl:w-[25vw] md:h-10 lg:w-[24vw] h-14 p-2 rounded focus:outline-none border focus:border-[#001b38ab]' type="text" placeholder='Mobile Number*' />
  <input className='xl:w-[25vw] md:h-10 lg:w-[24vw] h-14 p-2 rounded focus:outline-none border focus:border-[#001b38ab]' type="text" placeholder='Subject*' />
  </div>
  <textarea className=' w-full' placeholder='' name="" id=""  rows="3"></textarea>
  <button className='py-3 text-white rounded w-32 lg:w-[15vw] bg-[#001b38cb]'>SUBMIT</button>
</form>
</div>
          </div>
        </div>
      
    </div>
    <div className="div p-5 "> <div className="div flex lg:flex-row flex-col lg:pt-16 gap-10 lg:gap-5 xl:gap-20 h-full lg:h-[50vh] xl:h-[45vh] w-full ">
        <div className="div h-full p-3 rounded-lg border-2 border-[#001b382f] w-full xl:w-[400px]  gap-7 flex flex-col items-center justify-center ">
          <div className="div gap-2 flex flex-col items-center justify-center">
          <div className="div lg:h-16 w-7 lg:w-16 ">
          <GiWaterRecycling className='h-full w-full  text-[#001b38be]' />
          </div>
          <p className='text-xl text-center lg:text-lg font-[600] text-[#787878]'>Green Cycle: Sustainable Solutions</p>
          </div>
          <p className="text-base xl:text-base lg:text-sm lg:w-full leading-5 w-[90%] font-['gilroy']  font-[700] text-center">Revolutionizing sustainability through our product recycling initiatives, we turn today's waste into tomorrow's resources, creating a greener and cleaner world</p>
        
        </div>
        <div className="div h-full p-3 rounded-lg border-2 border-[#001b382f] xl:w-[400px]  gap-7 flex flex-col items-center justify-center ">
        <div className="div gap-2 flex flex-col items-center justify-center">
          <div className="div lg:h-16 w-10 lg:w-16 ">
          <TbTruckDelivery  className='h-full w-full  text-[#001b38be]' />
          </div>
          <p className='text-xl text-center font-[600] text-[#787878]'> Ensuring Safe Delivery Head for Products</p>
          </div>
          <p className="text-base xl:text-base leading-5  lg:text-sm lg:w-full font-['gilroy']  font-[700] text-center">We ensures the secure delivery of your products with advanced security features, providing peace of mind throughout the shipping process.</p>
        
        </div>
        <div className="div h-full p-3 rounded-lg border-2 border-[#001b382f] xl:w-[400px]  gap-7 flex flex-col items-center justify-center ">
        <div className="div gap-2 flex flex-col items-center justify-center">
          <div className="div lg:h-16 w-10 lg:w-16 ">
          <AiOutlineShoppingCart className='h-full w-full  text-[#001b38be]' />
          </div>
          <p className='text-xl text-center font-[600] text-[#787878]'>Unveiling the Pinnacle of Quality Products</p>
          </div>
          <p className="text-base xl:text-base leading-5 lg:text-sm lg:w-full font-['gilroy']  font-[700] text-center">Elevate your standards with our meticulously crafted quality products, setting the benchmark for excellence in every aspect.</p>
        
        </div>
       </div></div>
        <Footer/>
    </>
  )
}

export default Contact