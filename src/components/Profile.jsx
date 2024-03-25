import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import EditProfile from './EditProfile'
import MyOrders from './MyOrders'
import MyWishlist from './MyWishlist'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, logoutAyc } from '../store/Actions/AuthAction'
import EditAddress from './EditAddress'

const Profile = () => {
  const [activeItem, setActiveItem] = useState('profile'); // State to track active navigation item
  const ref = useRef();
  const handleItemClick = (item) => {
    setActiveItem(item); // Set the active navigation item when clicked
  };
  function handelClickOnImage() {
    ref.current.click();
  }
  const { user,ischeckUser, loadingUser, error } = useSelector((state) => state.Auth);
  // console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login") // Dispatch the logout action when the button is clicked
    dispatch(logoutAyc());
  };
  useEffect(() => {
    if (!user && !ischeckUser) {
      dispatch(getUserInfo());
    }
  }, [user, ischeckUser, dispatch]);
  if (loadingUser || !user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
         <Navbar/>
<div className="div flex flex-col h-fit p-2 sm:p-10 w-full">
      <div className="div">

      <Link className= 'hover:text-[#2B415A]  text-[#1F0B0C] text-lg' to={`/`}>Home</Link> / <Link className='text-[#1F0B0C] hover:text-[#2B415A]  text-lg' to={`/profile`}> Profile</Link>
      </div>
  <div className="div h-fit p-5 w-full flex-col  gap-20 sm:gap-0 sm:flex-row flex">

    <div className="left w-full lg:w-[60%] xl:w-[30%] h-full gap-5 flex  flex-col p-1 ">
        <h1 className='text-3xl text-seconddary font-[600]'>My Profile</h1>
      <div className="div h-fit w-full sm:w-96 p-5 gap-5 flex flex-col  rounded-lg  bg-[#0c264114]">
        <div className="div  text-seconddary gap-10 flex">
          <div className="box h-20 w-20 overflow-hidden rounded-full ">
          <img
                    onClick={handelClickOnImage}
                    className="h-full w-full object-cover "
                    src={
                      // user.image && user.image ? `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/${user.image && user.image}`:
                       "/images/thali.jpg"
                    }
                  />
          </div>
          <div className="div">
            <h2 className='text-lg font-[500] '>{user.name}</h2>
            <p className='text-sm'>{user.phoneNo}</p>
            <p>{user.email}</p>
          </div>
        </div>
        <hr className='w-full h-[1px] bg-violet-300' />
        <button onClick={handleLogout} className="button  bg-seconddary text-center py-2 rounded text-white text-lg w-32">LOGOUT</button>
      </div>
    </div>
    <div className="div sm:w-[70%]  rounded-lg   ">
    <nav className=' h-12 flex text-seconddary px-1 items-center sm:px-5'>
        <ul className='flex gap-2 sm:gap-10'>
          <li>
            <button className='sm:text-base  text-[14px] sm:w-fit' onClick={() => handleItemClick('profile')}>My Profile</button>
          </li>
          <li>
            <button className='sm:text-base text-[14px] sm:w-fit' onClick={() => handleItemClick('orders')}>My Orders</button>
          </li>
          <li>
            <button className='sm:text-base text-[14px] sm:w-fit' onClick={() => handleItemClick('wishlist')}>Wishlist</button>
          </li>
          <li>
            <button className='sm:text-base text-[14px] sm:w-fit' onClick={() => handleItemClick('address')}>Address</button>
          </li>
        </ul>
      </nav>
      {activeItem === 'profile' && <EditProfile />}
      {activeItem === 'orders' && <MyOrders />}
      {activeItem === 'wishlist' && <MyWishlist />}
      {activeItem === 'address' && <EditAddress />}
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Profile