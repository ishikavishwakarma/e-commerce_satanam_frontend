import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";
import { getUserAllCard, removeItem, updateItem } from "../store/Actions/CardAction";

import { Link, useNavigate } from "react-router-dom";
import { GridLoader } from "react-spinners";
import Navbar from "./Nav";
import Footer from "./Footer";



const Card = () => {
    const [open, setOpen] = useState(true);
    const { allCard: items, loadingCard } = useSelector((state) => state.Card);
    const { user } = useSelector((state) => state.Auth);
    
    const dispatch = useDispatch();
const navigate = useNavigate()
  
    const totalItem = items.reduce((accumulator, currentValue) => {
      return accumulator + 1 * currentValue.quantity;
    }, 0);
  
    const totalPrice = items.reduce((accumulator, currentValue) => {
      // multiply quentiy in price
      return accumulator + currentValue.quantity * currentValue.product.price;
    }, 0);
  
    function handelRemover(e, item) {
      e.preventDefault();
      dispatch(removeItem(item.id));
     
    }
  
    /* handel update qty */
    function handelUpdate(type, item) {
      if (type == "add" && item.quantity < item.product.stock) {
        dispatch(updateItem({ quantity: item.quantity + 1 }, { id: item.id }));
      }
      if (type == "sub" && item.quantity > 1) {
        dispatch(updateItem({ quantity: item.quantity - 1 }, { id: item.id }));
      }
    }
  
    useEffect(() => {
      dispatch(getUserAllCard());
    }, [dispatch, updateItem]);
  
   
  return (
    <div>
     {loadingCard && (
        <div className="w-full  flex items-center justify-center">
          <GridLoader color="#36d7b7"></GridLoader>
        </div>
      )}
      <>
      <Navbar/>
        {items?.length ? (
          // <div className="mx-auto w-full lg:max-w-[60vw]  px-4 sm:px-6 sm:py-20  lg:px-8">
          //   <div className="border-t border-gray-200 px-0 py-6 sm:px-6">
          //     <div className="flow-root">
          //       <ul role="list" className="-my-6 divide-y  divide-gray-200">
          //         <h1 className="text-xl  lg:text-4xl font-bold tracking-tight text-seconddary p-4">
          //           Cart
          //         </h1>
          //         {items.map((product) => {
          //           return (
          //             <div className="w-fit" key={product.id}>
          //               <li key={product.id} className="flex lg:flex-row flex-col gap-3 py-6">
          //                 <div className="h-full lg:h-24 lg:w-24 w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          //                   <img
          //                     src={product.product.thumbnail}
          //                     alt={product.product.title}
          //                     className="h-full w-screen lg:w-full object-cover object-center"
          //                   />
          //                 </div>
          //                 <div className="lg:ml-4 ml-0 flex  flex-1 w-full  flex-col">
          //                   <div>
          //                     <div className="flex justify-between w-full lg:w-[44vw] text-base font-medium text-seconddary">
          //                       <h3 className="flex lg:block flex-col ">
          //                         <a href={product.href}>
          //                           {product.product.title}
          //                         </a>
          //                         <span
          //                           className={` ml-0 lg:ml-2 ${
          //                             product.product.stock
          //                               ? "bg-green-200 text-green-600 py-1"
          //                               : "bg-red-200 text-red-600 py-1"
          //                           }  px-3 rounded-full text-xs`}
          //                         >
          //                           stock : {product.product.stock}
          //                         </span>
          //                         <br />

          //                         {/*     <p className="text-sm opacity-20">
          //                       Qty :{product?.quantity}
          //                     </p> */}
          //                       </h3>
          //                       <p className="ml-4 text-seconddary">
          //                       ₹{product.product.price * product.quantity}
          //                       </p>
          //                     </div>
          //                     <p className="mt-1 text-sm text-gray-500">
          //                       {product.color}
          //                     </p>
          //                   </div>
          //                   {/* <h1>{product?.}</h1> */}
          //                   <div className="flex flex-1 justify-between items-end  text-sm">
          //                     <div className="text-gray-500 -ml-6">
          //                       <label
          //                         htmlFor="quentity"
          //                         className="inline-block mr-5 text-sm font-medium leading-6 text-gray-900"
          //                       ></label>
          //                       <button
          //                         className="p-2 text-2xl"
          //                         onClick={(e) => handelUpdate("add", product)}
          //                       >
          //                         +
          //                       </button>
          //                       <span>{product.quantity}</span>
          //                       <button
          //                         className="px-2 text-2xl"
          //                         onClick={(e) => handelUpdate("sub", product)}
          //                       >
          //                         -
          //                       </button>
          //                     </div>
          //                     <div className="flex">
          //                       <button
          //                         type="button"
          //                         onClick={(e) => handelRemover(e, product)}
          //                         className="font-medium px-2 py-1 rounded bg-[#0c26412f] text-seconddary hover:text-seconddary"
          //                       >
          //                         Remove
          //                       </button>
          //                     </div>
          //                   </div>
          //                 </div>
          //               </li>
          //             </div>
          //           );
          //         })}
          //       </ul>
          //     </div>
          //   </div>
          //   <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          //     <div className="flex justify-between text-base font-medium text-gray-900">
          //       <p className="capitalize">Total Item</p>
          //       <p>{totalItem}</p>
          //     </div>
          //     <div className="flex justify-between text-base font-medium text-gray-900">
          //       <p className="capitalize">Total Price</p>
          //       <p>₹{totalPrice}</p>
          //     </div>
          //     <div className="mt-6">
          //       <Link
          //         to="/cheackOutPage"
          //         className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          //       >
          //         Checkout
          //       </Link>
          //     </div>
          //     <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          //       <p className="text-lg">
          //         or &nbsp;
          //         <Link to="/store">
          //           <button
          //             type="button"
          //             className="font-medium text-indigo-600 hover:text-indigo-500"
          //             onClick={() => setOpen(false)}
          //           >
          //             Continue Shopping
          //             <span aria-hidden="true"> &rarr;</span>
          //           </button>
          //         </Link>
          //       </p>
          //     </div>
          //   </div>
          // </div>
          <div className="h-full flex py-5 flex-col md:flex-row  w-full">
            <div className="left w-full md:w-[70%]  p-8 xl:p-20">
              <h1 className="text-3xl pb-5">CART</h1>
              <div className="box flex h-full flex-col gap-5 ">
              {items.map((product) => {
                    return (
                      <div className="  w-fit" key={product.id}>
                        <li key={product.id} className="flex rounded px-5  lg:flex-row border flex-col gap-1 py-6">
                          <div className="h-full lg:h-44 lg:w-44 w-full flex-shrink-0 overflow-hidden rounded-md ">
                            <img
                              src={product.product.thumbnail}
                              alt={product.product.title}
                              className="h-full w-screen lg:w-full object-cover object-center"
                            />
                          </div>
                          <div className="lg:ml-4 ml-0 flex  flex-1 w-full  flex-col">
                            <div>
                              <div className="flex justify-between w-full lg:w-[44vw] text-base font-medium text-seconddary">
                                <h3 className="flex lg:block flex-col ">
                                  <a >
                                    {product.product.title}
                                  </a>
                                  <span
                                    className={` ml-0 lg:ml-2 ${
                                      product.product.stock
                                        ? "bg-green-200 text-green-600 py-1"
                                        : "bg-red-200 text-red-600 py-1"
                                    }  px-3 rounded-full text-xs`}
                                  >
                                    stock : {product.product.stock}
                                  </span>
                                  <br />

                                  {/*     <p className="text-sm opacity-20">
                                Qty :{product?.quantity}
                              </p> */}
                                </h3>
                                <p className="ml-4 text-seconddary">
                                ₹{product.product.price * product.quantity}
                                </p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.color}
                              </p>
                            </div>
                            {/* <h1>{product?.}</h1> */}
                            <div className="flex flex-1 justify-between items-end  text-sm">
                              <div className="text-gray-500 -ml-6">
                                <label
                                  htmlFor="quentity"
                                  className="inline-block mr-5 text-sm font-medium leading-6 text-gray-900"
                                ></label>
                                <button
                                  className="p-2 text-2xl"
                                  onClick={(e) => handelUpdate("add", product)}
                                >
                                  +
                                </button>
                                <span>{product.quantity}</span>
                                <button
                                  className="px-2 text-2xl"
                                  onClick={(e) => handelUpdate("sub", product)}
                                >
                                  -
                                </button>
                              </div>
                              <div className="flex">
                                <button
                                  type="button"
                                  onClick={(e) => handelRemover(e, product)}
                                  className="font-medium px-2 py-1 rounded bg-[#0c26412f] text-seconddary hover:text-seconddary"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="left h-full w-full md:w-[40%] lg:w-[30%]  xl:py-32 md:pr-10 md:py-24 lg:py-24 px-5 ">
              <div className="box h-fit border rounded ">
              <div className=" px-4 py-6 sm:px-6">
             <div className="flex pb-5 justify-between text-base font-medium text-gray-900">
                <p className="capitalize">Total Item</p>
                <p>{totalItem}</p>
              </div>
              <hr />
              <div className="flex pt-5 justify-between text-base font-medium text-gray-900">
                 <p className="capitalize">Total Price</p>
                 <p>₹{totalPrice}</p>
               </div>
               <div className="mt-6">
                 <Link
                  to="/cheackOutPage"
                  className="flex items-center justify-center rounded-md border border-transparent bg-[#0C2641] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#0c2641c0]"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p className="text-lg">
                  or &nbsp;
                  <Link to="/store">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => setOpen(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
              </div>
            </div>

          </div>
        ) : (
          <div className=" p-10  text-seconddary h-full">
         <h3 className="text-4xl font-[600] pl-10 ">Cart</h3>
         <div className="div flex items-center flex-col justify-center  ">
          <div className="div h-72 w-80 ">
            <img className="w-full h-full object-cover" src="../../images/cart-removebg-preview.png" alt="" />
            {/* <video className="h-full w-full" loop autoPlay muted src="../../images/Animation - 1711016071579.mp4"></video> */}
          </div>
          <h2 className="text-2xl font-[500]">Oops! Your Cart is empty!</h2>
          <p className="text-center pb-2 pt-2">Looks like you haven&apos;t added <br />
anything to your cart yet</p>
<button className="bg-seconddary px-5 py-2 text-white">SHOP NOW</button>
         </div>
          </div>
        )}
      </>
      <Footer/>
       </div>
  )
}

export default Card
