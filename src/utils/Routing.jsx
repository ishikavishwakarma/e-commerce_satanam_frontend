import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Product from '../components/Product';
import Contact from '../components/Contact';
import AddCart from '../components/AddCart';
import RegisterComponent from '../components/RegisterComponent';
import AdminDashboard from '../components/AdminDashboard';

const Routing = () => {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/store" element={<Product/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/AddtoCart" element={<AddCart/>}/>
    <Route path="/register" element={<RegisterComponent/>}/>
    <Route path='/admin' element={<AdminDashboard/>}/>
    </Routes>
    </div>
  )
}

export default Routing