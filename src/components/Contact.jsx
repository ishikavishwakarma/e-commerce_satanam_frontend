import React from 'react'
import Nav from './Nav'
import Navbar from './Nav'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-[100vw] max-sm:w-full   h-[60vh] relative '>
      <div className="w-full h-full  max-sm:w-full  bg-cover opacity-95 bg-center "
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
      <div className='h-fit flex flex-col gap-10  w-full  '>
        <div className="div sm:flex-row flex-col flex h-[80vh] w-full ">
          <div className="left flex w-full  flex-col gap-5 py-10 pl-7 sm:w-[42vw] ">
<h3 className='text-lg   text-[#001B38]'>Have a question?</h3>
       <h3 className='text-4xl font-[600]  text-[#001B38]'>Let&lsquo;s get in touch</h3>
       <p className='text-gray-700'>Need to connect? Feel free to reach out! Our entire team is eager to engage with you. Whether you prefer a phone call or a conversation via email, the contact details provided below are at your disposal. <br /><br />
      <p>Don&lsquo;t hesitate to get in touch – we look forward to hearing from you!</p>
       </p>
       <p className='text-gray-700'></p>
       <div className='flex gap-44 pt-3 '>
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
          <div className="right w-[60vw] py-10 px-14 ">
<div className="div h-full bg-[#001b3818] px-4 py-7 w-full">
<h3 className='text-lg   text-[#001B38]'>Have a question?</h3>
<p className='text-gray-700'>Tell us how you like our products or how we could improve them or leave us a message to revert to you.</p>
<form className='flex items-center flex-col gap-10' action="">
  <div  className='pt-10 grid grid-cols-2 grid-rows-2 gap-10'>
  <input className='w-[23vw] h-14 p-2 rounded focus:outline-none border focus:border-[#001b38ab]' type="text" placeholder='FullName*'/>
  <input className='w-[23vw] h-14 p-2 rounded focus:outline-none border focus:border-[#001b38ab]' type="text" placeholder='E-mail*' />
  <input className='w-[23vw] h-14 p-2 rounded focus:outline-none border focus:border-[#001b38ab]' type="text" placeholder='Mobile Number*' />
  <input className='w-[23vw] h-14 p-2 rounded focus:outline-none border focus:border-[#001b38ab]' type="text" placeholder='Subject*' />
  </div>
  <textarea className='' placeholder='' name="" id="" cols="100" rows="3"></textarea>
  <button className='py-3 text-white rounded w-[15vw] bg-[#001b38cb]'>SUBMIT</button>
</form>
</div>
          </div>
        </div>
      
    </div>
    <div className="div bg-[#001b387e] h-[50vh]"></div>
        <Footer/>
    </>
  )
}

export default Contact