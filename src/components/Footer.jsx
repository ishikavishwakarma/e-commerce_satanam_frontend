// components/Footer.js

import React from "react";
import { MdEmail } from "react-icons/md";
import { RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { IoRemoveOutline } from "react-icons/io5";
import {
  RiFacebookCircleFill,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  const backgroundImageUrl = 'https://static.vecteezy.com/system/resources/previews/002/965/575/non_2x/modern-shiny-gradient-blue-banner-background-free-vector.jpg';
  return (
    <div className=" h-fit w-full">
      <div className="flex h-fit w-full bg-[#001B38] text-[#fff] items-center p-4 justify-center"  style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover' }} >
        <div className="sub-footer  justify-between flex-col flex w-full sm:flex-row  max-w-screen-xl">
          {/* <div className="flex gap-[34px] flex-wrap"> */}
         <div className="div flex sm:mt-1 items-start justify-start lg:gap-32 lg:items-center flex-wrap xl:gap-32 w-full gap-[14px]">
          <div className="extra justify-center  items-center  flex gap-4 flex-col  sm:w-60  h-fit ">
            <img src="/images/_54fbb8cd-2b3e-4482-b647-743e65c35bd1-removebg.png" className="h-32 rounded-full bg-white   w-[150px] md:w-32 object-cover  " alt="Logo" />
            {/* <h1 className="text-md uppercase font-[500]">fitness Icon Gym</h1> */}
            {/* <div className="part-4 flex flex-col gap-2 relative right-0">
            <h1 className="font-[900] ">Let&apos;s Talk</h1>
            <div className=" flex gap-2  flex-col">
              <div className="flex items-center gap-1 ">
                <RiMapPinLine className="text-[#FAB207] cursor-pointer" /> GOKUL
                MARKET, MITTAL COLLEGE
              </div>
              <div className="flex items-center gap-1 ">
                <MdEmail className="text-[#FAB207] cursor-pointer" />{" "}
                icongym@gmail.com
              </div>
              <div className="flex items-center gap-1 ">
                <RiPhoneLine className="text-[#FAB207] cursor-pointer" />{" "}
                9827566365
              </div>
             
            </div>
          </div> */}
          <p className=" text-center sm:text-center sm:w-[20vw] text-sm">आप सभी लोगो को जय श्री राम शिरडी साई बाबा के आदेश से अब से इस पेज का नाम सनातन संदेश होगा जैसे बाबा ने शिरडी में शिव मंदिर गणेश मंदिर लक्ष्मी मंदिर बनवाकर सनातन धर्म को बढ़ाने का संदेश दिया है अब से सनातन संदेश भी यही कार्य करेगा | </p>
          </div>
<div className="div gap-14 p-2 xl:gap-44  lg:gap-20  lg:p-0 sm:gap-3  flex flex-wrap">

          <div className="part-2   ">
            <h1 className="text-xl font-[600]">Main Links</h1>
           <div className="div sm:text-[15px] text-[12px]  pt-4 sm:pt-6 flex flex-col gap-2">
              <a href="/" className="flex items-center gap-1 "><IoRemoveOutline />Home</a>
              <a href="/store" className="flex items-center gap-1 "><IoRemoveOutline />Product</a>
              <a href="" className="flex items-center gap-1 "><IoRemoveOutline />Store Locations</a>
              <a href="/contact" className="flex items-center gap-1 "><IoRemoveOutline />Contact Page</a>
              <a href="/about" className="flex items-center gap-1 "><IoRemoveOutline />About us</a>
           </div>
       
          </div>
          <div className="part-2  ">
            <h1 className="text-xl font-[600]">Our Product</h1>
           <div className="div sm:text-[15px] text-[12px]  pt-4 sm:pt-6 flex flex-col gap-2">

              <h4 className="flex items-center gap-1 "><IoRemoveOutline />Agarbatti</h4>
              <h4 className="flex items-center gap-1 "><IoRemoveOutline />Dhoop</h4>
              <h4 className="flex items-center gap-1 "><IoRemoveOutline />Dry Sticks</h4>
              <h4 className="flex items-center gap-1 "><IoRemoveOutline />Incense Cones</h4>
              <h4 className="flex items-center gap-1 "><IoRemoveOutline />Hawan Samagri</h4>
           </div>
       
          </div>
          <div className="part-1   lg:px-0 ">
          <h1 className="sm:text-xl   text-sm font-[600] pb-5">Contact</h1>
           <div className="div xl:w-[20vw] lg:w-[20vw]  text-[15px] sm:w-[20vw]  pt-6J flex flex-col gap-3">

           <h4 className="flex items-center gap-1 "><IoRemoveOutline />Email : <span className="sm:text-sm text-[11px]">info@saisandesh.org</span> </h4>
           <h4  className="flex text-[12px] sm:text-[15px] items-center gap-1 "><IoRemoveOutline />Contact No : <span className="sm:text-sm text-[11px] ">831-806-3629</span> </h4>
           </div>
            
            
          </div>
</div>
         
          
         </div>
          {/* </div> */}
          
          
        </div>
      </div>

      <div className="flex items-center justify-center  bg-white">
        <footer className="text-[#001B38] py-2  max-w-screen-xl ">
          <div className="flex w-[85vw] items-center justify-between   ">
            <div className="md:-ml-[30px]">
              <h1 className="">© Sanatan Sandesh</h1>
            </div>

            <div className="flex items-center gap-4">
                <Link to="https://www.facebook.com/profile.php?id=100063776167660&sk=reviews">
              <RiFacebookCircleFill className="hover:text-[#001b38cc] cursor-pointer" />
                </Link>
                <Link to={`https://www.youtube.com/@divyaishwariyasandesh`}>
              <FaYoutube className="hover:text-[#001b38cc] cursor-pointer"  /> 
                </Link>
              <RiInstagramLine className="hover:text-[#001b38cc] cursor-pointer" />
              <RiLinkedinFill className="hover:text-[#001b38cc] cursor-pointer" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
