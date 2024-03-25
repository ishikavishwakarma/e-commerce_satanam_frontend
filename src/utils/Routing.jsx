import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Product from '../components/Product';
import Contact from '../components/Contact';
import AddCart from '../components/AddCart';
import RegisterComponent from '../components/RegisterComponent';
import AdminDashboard from '../components/AdminDashboard';
import LoginComponent from '../components/LoginComponent';
import Profile from '../components/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../store/Actions/AuthAction';
import AdminProducts from '../components/AdminProducts';
import Card from '../components/Card';
import Createproduct from '../components/Createproduct';
import UserProducts from '../components/UserProducts';
import EditProducts from '../components/EditProducts';
import MyOrders from '../components/MyOrders';
import UserProduct from '../components/UserProduct';
import AllAdminUsers from '../components/AllAdminUsers';
import CheckOut from '../components/CheckOut';

const Routing = () => {
  const { user,ischeckUser, loadingUser, error } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  useEffect(() => {
      if (!user) dispatch(getUserInfo());
    }, [user, ischeckUser]);
  return (
    <div>
    <Routes>
      
    {/* <Route path="/" element={<Home/>}/> */}
    {/* <Route path="/" element={if(user.role ==="user")}/> */}
    <Route path="/" element={user && user.role === "admin" ?<AdminDashboard/>:<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/store" element={<UserProducts/>}/>
    <Route path="/contact" element={<Contact/>}/>
    {/* <Route path="/card" element={<Card/>}/> */}
    <Route path="/register" element={<RegisterComponent/>}/>
    <Route path="/login" element={<LoginComponent/>}/>
    <Route path='/admin' element={<AdminDashboard/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/adminProducts' element={<AdminProducts/>}/>
    <Route path='/CreateAdminProducts' element={<Createproduct/>}/>
    <Route path='/cardPage' element={<Card/>}/>
    <Route path='/productDetails/:id' element={<Product/>}/>
    <Route path='/product/:id' element={<UserProduct/>}/>
    <Route path='/editproducts/:id' element={<EditProducts/>}/>
    <Route path='/order' element={<MyOrders/>}/>
    <Route path='/allusers' element={<AllAdminUsers/>}/>
    <Route path='/cheackOutPage' element={<CheckOut/>}/>
    {/* <Route path='/admin/createProduct' element={<Product/>}/> */}

    </Routes>
    </div>
  )
}

export default Routing