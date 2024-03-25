import React, { useEffect, useState } from 'react'
import { getAllUsers, getUserInfo, logoutAyc } from "../store/Actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
const AllAdminUsers = () => {
    const menus = [
        { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "Users", link: "/allusers", icon: AiOutlineUser },
        { name: "Products", link: "/adminProducts", icon: GiShoppingBag , margin: true },
      
        { name: "Cart", link: "/", icon: FiShoppingCart },
    
      ];
      const [open, setOpen] = useState(false);
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const handleLogout = () => {
        navigate("/login") // Dispatch the logout action when the button is clicked
        dispatch(logoutAyc());
      };
    const {user, allUser,ischeckUser } = useSelector((state) => state.Auth);
    useEffect(() => {
        dispatch(getAllUsers());
      }, []);
      useEffect(() => {
        if (!user) dispatch(getUserInfo());
      }, [user, ischeckUser]);
  return user && (
    <div className='relative '>
        <div
        className={`bg-[#0C2641] absolute z-20 min-h-full ${
          open ? "w-72" : "w-16"
        }  duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4  h-screen flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="div h-[100vh] top-0 pl-20 absolute w-full p-5">
      <div className="flex justify-between top-0 gap-3 sm:gap-5 w-full h-fit ">
             
             <div className="relative w-[50%] sm:w-[22vw] h-10">
               <input
                 className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                 placeholder=" "
               />
               <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                 Type here
               </label>
             </div>
           
          <div className="div h-10 sm:w-[30%] w-[50%]  gap-5 flex">

         
             <button
             onClick={handleLogout}
               className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 hidden items-center gap-1 px-4 xl:flex"
               type="button"
             >
              
              
               Sign Out{" "}
             </button>
             <button
              onClick={handleLogout}
               className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none sm:w-10 w-20   max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
               type="button"
             > 
               <span className="absolute w-12 text-center text-[10px] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                Sign Out
               </span>
             </button>
           
     

          <div className="div rounded-full bg-seconddary   h-7 w-7 ">
<img className="h-full object-cover rounded-full w-full" src="https://pujacraft.com/cdn/shop/articles/Krishna-Janmashtami--2023-date1_64f79e1e5e4f8.jpg?v=1693982466" alt="" />
          </div>
           <button
             aria-expanded="false"
             aria-haspopup="menu"
             id=":r2:"
             className="relative middle sm:pl-5 pr-2 none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none   h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
             type="button"
           >
             <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 aria-hidden="true"
                 className="h-5 w-5 text-blue-gray-500"
               >
                 <path
                   fillRule="evenodd"
                   d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                   clipRule="evenodd"
                 />
               </svg>
             </span>
           </button>
          </div>
          
         </div>
         <div className="div p-0 top-1 lg:p-10 gap-5 flex flex-col  text-seconddary">
          <h1 className='text-3xl font-[700]'>All Users</h1>
          {allUser.users.map((user,index)=>{
return(

          <div key={index}  className="div h-[13vh] px-1 lg:p-10  items-center flex justify-between gap-32 w-fit ">
            <div className="div h-10 w-20 lg:h-[5vw] overflow-hidden rounded-full lg:w-[5vw] bg-yellow-200">
              <img className='h-full w-full object-cover ' src="/images/Krishna-Janmashtami--2023-date1_64f79e1e5e4f8.webp" alt="" />
            </div>
            <h2 className='uppercase text-[10px] lg:text-lg w-10  text-start  lg:w-80 font-[500]'>{user.name}</h2>
            <h2 className='w-52'>{user.email}</h2>
            <h2 >{user.phoneNo}</h2>
          </div>
)
          })}

         </div>
      </div>
        </div>
  )
}

export default AllAdminUsers