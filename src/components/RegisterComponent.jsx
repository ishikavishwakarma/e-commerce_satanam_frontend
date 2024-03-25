import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Nav';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUserInfo } from "../store/Actions/AuthAction";
import { useNavigate,Link  } from 'react-router-dom';

const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, error } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    dispatch(createUser(data));
  });
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  useEffect(() => {
    if (!user) {
      dispatch(getUserInfo());
    }
    if (localStorage.getItem("token") && user) {
      navigate("/"); // Use history.replace for navigation
    }
  }, [user]);

 
 
  return (
    <>
    <Navbar/>
    <div className='lg:pt-14 sm:p-16 p-6 lg:pl-14'>
      <p className=' text-[#00000088]'><a href="/home">Home </a> / Register</p>
<div className="div head flex-col gap-10 sm:gap-32 lg:flex-row flex">

<div className="flex items-center  w-full  h-fit">
      <form noValidate onSubmit={onSubmit} className="sm:w-[50vw] w-full  sm:h-fit   shadow-xl p-10 rounded ">
        <h2 className="sm:text-3xl text-xl text-[#001B38] font-bold ">Register</h2>
        <p className='mb-6 pt-5 text-sm sm:text-lg text-[#001B38] '>Create an account to get easy access to your orders, wishlist and recomendations.</p>
        
         <div className='grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2'>   
          
                 <div className="mb-4">
         
            <input
              type="text"
              id="name"
              placeholder='Name'
              name="name"
              {...register("name", {
                required: "Name id is required",
                // pattern: {
                //   // value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                //   message: "please enter valid Name ",
                // },
              })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
           
            />
            {errors?.name && (
            <p className="text-sm capitalize text-red-500">
              {errors?.name.message}
            </p>
          )}
          </div>
        <div className="mb-4">  
          <input
            id="email"
            placeholder='Email'
            name="email"
            type="email"
            {...register("email", {
              required: "email id is required",
              // pattern: {
              //   value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              //   message: "please enter valid email id",
              // },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
          />
          {errors?.email && (
            <p className="text-sm capitalize text-red-500">
              {errors?.email.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          
          <input
            type="number"
            id="phoneNo"
            name="phoneNo"
            placeholder='PhoneNo'
            {...register("phoneNo", {
              required: "phoneNo id is required",
              // pattern: {
              //   value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              //   message: "please enter valid phone No",
              // },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
           
          />
          {errors?.email && (
            <p className="text-sm capitalize text-red-500">
              {errors?.email.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          
          <input placeholder='Password'
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "password id is required",
              // pattern: {
              //   value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              //   message: "please enter valid password ",
              // },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
         
          />
           {errors?.password && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.password.message}
                  </p>
                )}
        </div>
        <div className="mb-6">
          
          <input placeholder='Password'
            id="password-conform"
            name="password-conform"
            type="password"
            {...register("passwordConform", {
              required: "Conform password is required",
              validate: (value, formValues) =>
                value === formValues.password || "password not match",
            })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
         
          />
            {errors?.passwordConform && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.passwordConform.message}
                  </p>
                )}
        </div>
        {/* {error} */}
        </div>
       
        
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#001B38] text-white px-4 py-2 rounded hover:bg-[#001B38] focus:outline-none"
        >
     Sign Up
        </button>
        <p className="text-sm text-[#000000c7] mt-4">
          Already have an account?
          <a
            href='/login'
            className="text-[#001B38] font-[600] hover:underline focus:outline-none"
          >
            Log In
          </a>
        </p>
      </form>
    </div>
    <div className="img h-96 w-88 sm:h-[400px] sm:w-[450px] ">
        <img src="/images/image1.jpeg" className='h-full object-cover w-full' alt="" />
       </div>
</div>
    </div>
    <Footer/>
    </>
    
  )
}

export default RegisterComponent