import React from 'react'
import { GiWaterRecycling } from "react-icons/gi";
import Footer from './Footer'
import { TbTruckDelivery } from "react-icons/tb";
import Navbar from './Nav';
import { AiOutlineShoppingCart } from "react-icons/ai";
const About = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-[100vw] max-sm:w-full   h-[60vh] relative '>
      
    <div className="w-full h-full  max-sm:w-full  bg-cover opacity-95 bg-center absolute top-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552353290-f2a1ff0b5009?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundAttachment: "fixed",
          
        }}
      />
      <div className="div w-full h-full bg-[#0000003f] flex flex-col items-start gap-1 lg:gap-8 justify-center  absolute top-0">
           <h1 className='text-white font-["gilroy"] text-3xl lg:text-6xl pl-[8vw] font-[700]'>Santan Sandesh</h1>
           <h1 className='text-white font-["gilroy"] lg:text-3xl pl-[8vw] font-[700]'>25% Off On All Products</h1>
      </div>
    </div>
    <div className='h-fit  sm:pl-20 flex flex-col gap-10  w-full p-6 sm:p-10 '>
       <h3 className='text-xl   text-[#001B38]'>Company Profile</h3>
       <h1  className='lg:text-5xl text-3xl lg:text-start text-center  text-[#001B38] uppercase'>to serve more and spread more light</h1>
       <div className="head text-[#001B38] flex-col lg:gap-5 lg:flex-row flex">
        <p className='xl:w-[50vw] lg:w-[65vw] w-full lg:text-start text-center '>
"Swadesh Sandesh " appears to be a company that focuses on spreading awareness and consciousness (jaagrukta) among the people, along with selling products. The combination of the words "Swadesh" and "Sandesh" suggests a commitment to a message or communication that may be rooted in a sense of national identity or awareness. The company's mission could involve both educating and informing the public, as well as offering products for sale, creating a potential synergy between awareness campaigns and product offerings. <br />
<br />
<br />
Swadesh Sandesh is dedicated to fostering awareness and understanding among the community while simultaneously offering a diverse range of products. By delivering impactful messages that resonate with a sense of national identity, the company strives to contribute to the enlightenment and empowerment of individuals. Through its product offerings, Swadesh Sandesh aims to enhance the lives of its customers, providing valuable solutions that align with the principles of awareness, unity, and cultural significance. Rooted in a commitment to both education and commerce, Swadesh Sandesh endeavors to create a positive impact on society by combining informative communication with high-quality product experiences.
</p>
       <div className="img bg-red-300 lg:h-[300px] lg:w-[450px] ">
        <img src="/public/images/thali.jpg" className='h-full object-cover w-full' alt="" />
       </div>
       </div>
       <div className="div flex lg:flex-row flex-col lg:pt-16 gap-10 lg:gap-5 xl:gap-20 h-full lg:h-[50vh] xl:h-[45vh] w-full ">
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
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default About