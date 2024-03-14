import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Nav';

const RegisterComponent = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to login

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Form Submitted:', formData);
  };

  const toggleAuthMode = () => {
    setIsLogin((prevMode) => !prevMode);
  };
  return (
    <>
    <Navbar/>
    <div className='lg:pt-14 p-16  lg:pl-14'>
      <p className=' text-[#00000088]'>Home / {isLogin ? 'Log In' : 'Register '}</p>
<div className="div head flex-col gap-32 lg:flex-row flex">

<div className="flex items-center  w-full  h-fit">
      <form className="w-[50vw]  h-[25vw]   shadow-xl p-8 rounded ">
        <h2 className="text-3xl text-[#001B38] font-bold ">{isLogin ? 'Log In' : 'Register '}</h2>
        <p className='mb-6 text-[#001B38] '>{isLogin ? 'Login to your account to get easy access to your orders, wishlist and recomendations.' : 'Create an account to get easy access to your orders, wishlist and recomendations.'}</p>
        {!isLogin && (
         <div className='grid grid-cols-2 gap-2'>   
          
                 <div className="mb-4">
         
            <input
              type="text"
              id="username"
              placeholder='Username'
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
              required
            />
          </div>
        <div className="mb-4">
          
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
            required
          />
        </div>
        <div className="mb-4">
          
          <input
            type="number"
            id="Mobile"
            name="mobile"
            placeholder='Mobile'
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
            required
          />
        </div>
        <div className="mb-6">
          
          <input placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
            required
          />
        </div>
        </div>
        )}
        {isLogin && (
          <div className="div grid grid-cols-2 gap-2">
             <div className="mb-4">
          
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
            required
          />
        </div>
     
        <div className="mb-6">
          
          <input placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#001B38]"
            required
          />
        </div>
          </div>
        )}
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#001B38] text-white px-4 py-2 rounded hover:bg-[#001B38] focus:outline-none"
        >
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
        <p className="text-sm text-[#000000c7] mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={toggleAuthMode}
            className="text-[#001B38] font-[600] hover:underline focus:outline-none"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </form>
    </div>
    <div className="img  h-[400px] w-[450px] ">
        <img src="/images/image1.jpeg" className='h-full object-cover w-full' alt="" />
       </div>
</div>
    </div>
    <Footer/>
    </>
    
  )
}

export default RegisterComponent