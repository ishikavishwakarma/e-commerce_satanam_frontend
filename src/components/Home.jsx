import React, { useEffect } from 'react'
import Nav from './Nav'
import Product from './Product'
import HomeMid from './HomeMid'
import RegisterComponent from './RegisterComponent'
import HomeCenter from './HomeCenter'
import Footer from './Footer'
import Navbar from './Nav'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import LastHome from './LastHome'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../store/Actions/AuthAction'


const Home = () => {

  const { user, loadingUser, error } = useSelector((state) => state.Auth);
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }



  const slideImages = [
    {
// url:'https://images.unsplash.com/photo-1558659616-7742131dcfbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
url: '/images/New_Project.webp',

},
{
  // url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  url: '/images/Web_blog_Essential_Pooja_Samagri_1500x.webp',
  // url:'/images/pso-contact-page-banner.jpg',
  
},
{
      url:'https://shop.dharmsaar.com/cdn/shop/collections/imgpsh_fullsize_anim-4-min.jpg?v=1685678118',
     
    },
  ];
  return (
    <>
    <Navbar/>
    <div className='w-full bg-[#F8F9FA] max-sm:w-full  h-[60vh] relative '>
 
    {/* <div
    
        className="w-full h-[80vh] bg-cover max-sm:w-full  opacity-95 bg-center absolute top-0"
        style={{
          backgroundImage: "url('images/banner2m.webp')",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="div w-full h-[80vh] flex flex-col items-start gap-8 justify-center bg-[#0000003f] absolute top-0">
           <h1 className='text-white font-["gilroy"] text-6xl pl-[10vw] font-[700]'>Santan Sandesh</h1>
           <h1 className='text-white font-["gilroy"] text-3xl pl-[10vw] font-[700]'>25% Off On All Products</h1>
      </div> */}
      <div className="slide-container w-full h-[50vh] bg-cover max-sm:w-full  opacity-95 bg-center absolute top-0">
        <Slide indicators={false}  >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='h-[50vh]  bg-cover  w-[100vw]' style={{  'backgroundImage': `url(${slideImage.url})`, 'backgroundAttachment': 'fixed', }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>
    <HomeMid/>
    <HomeCenter/>
    <LastHome/>
  <Footer/>
    </>
  )
}

export default Home