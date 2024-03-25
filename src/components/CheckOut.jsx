// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
// import { FaBagShopping, FaUser } from "react-icons/fa6";
// import { Link, useNavigate } from "react-router-dom";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserInfo, logoutAyc, removeAddress, userAddressUpdate } from "../store/Actions/AuthAction";
// import { useForm } from "react-hook-form";

// const CheckOut = () => {
//     const [navbar, setNavbar] = useState(false);
//     // const history = useHistory();
  
//     const dropdownRef = useRef(null);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
  
//     const { user,ischeckUser, error, LoginUser, loadingUser } = useSelector(
//       (state) => state.Auth
//     );
//     useEffect(() => {
//       if (!user) dispatch(getUserInfo());
//     }, [user, ischeckUser]);
   
  
  
//     useEffect(() => {
//       const handleScroll = () => {
//         const scrollY = window.scrollY;
//         const shouldBeVisible = scrollY <= 0; // Hide when scrolled down 1px or more
     
//       };
  
//       window.addEventListener("scroll", handleScroll);
  
//       return () => window.removeEventListener("scroll", handleScroll);
//     }, []);
   
   
//     const handleMenuClick = () => {
//       setNavbar(!navbar);
//     };
  
//     const handleLinkClick = (path) => {
//       history.push(path);
//       setNavbar(false);
//     };
//     const [editForm, setEditForm] = useState(false);
//     const [createAddress, setCreateAddress] = useState(false);
//     const {
//         register,
//         handleSubmit,
//         reset,
//         setValue,
//         formState: { errors }
//     } = useForm();

//     useEffect(() => {
//         if (!user) dispatch(getUserInfo());
//     }, [user, ischeckUser]);

//     const handelAddressUpdate = (index) => {
//         setEditForm(true);
//         setCreateAddress(false);
//         const address = user.addresses[index];
//         setValue("firstName", address.firstName || '');
//         setValue("lastName", address.lastName || '');
//         setValue("email", address.email || '');
//         setValue("phone", address.phone || '');
//         setValue("houseNo", address.houseNo || '');
//         setValue("streetAddress", address.streetAddress || '');
//         setValue("region", address.region || '');
//         setValue("postalCode", address.postalCode || '');
//         setValue("city", address.city || '');
//         setValue("landmark", address.landmark || '');
//         setValue("index", index);
//     };

//     const onSubmit = handleSubmit((data) => {
//         if (createAddress) {
//             const newData = [...user.addresses, { ...data }];
//             dispatch(userAddressUpdate({ addresses: newData }, user?.id));
//         } else {
//             const userAddress = [...user.addresses];
//             const index = userAddress.findIndex((e) => e.id === data.id);
//             userAddress.splice(index, 1, data);
//             dispatch(userAddressUpdate({ addresses: userAddress }, user?.id));
//         }
//         reset();
//         setCreateAddress(false);
//         setEditForm(false);
//     });

//     const handelAddressRemove = (index) => {
//         const newData = [...user.addresses];
//         newData.splice(index, 1);
//         dispatch(removeAddress({ addresses: newData }));
//     };

//     const handelCreateAddress = () => {
//         setEditForm(!editForm);
//         setCreateAddress(true);
//         reset();
//     };
//     const slideImages = [
//       {
//         // url:'https://images.unsplash.com/photo-1558659616-7742131dcfbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         caption: "Sanatan Sandesh",
//       },
//       {
//         // url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//         caption: "Sanatan Sandesh",
//       },
//       {
//         caption: "Sanatan Sandesh",
//       },
//     ];
//   return (
//     <div>
//     <div className="">
//     <div className="nav-1 lg:w-full  bg-[#f0eaea] overflow-hidden">
//       <div className="slide-container w-full bg-[#001B38]  h-[7vh] pt-1 bg-cover max-sm:w-full  opacity-95 bg-center">
//         <Slide indicators={false}>
//           {slideImages.map((slideImage, index) => (
//             <div
//               className="flex justify-center h-full w-full pt-1 items-center"
//               key={index}
//             >
              
//               <span className="text-xl text-white">{slideImage.caption}</span>
//             </div>
//           ))}
//         </Slide>
//       </div>
//     </div>
//     <nav className=" shadow-xl w-full z-20 top-8 start-0  h-fit  bg-white  bg-opacity-15">
//       {/* <div className="bg-white w-full hidden md:block"></div> */}

//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 relative ">
//         <section>
//           <div className="img h-20 w-24 rounded overflow-hidden  ">
//             <img
//               className="h-full w-full  object-cover"
//               src="../../images/_54fbb8cd-2b3e-4482-b647-743e65c35bd1-removebg.png"
//               alt=""
//             />
//           </div>
//         </section>
//         <div
//           className="items-center font-[900] justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-sticky"
//         >
//           <nav>
//             <ul className="font-[650]  md:flex flex-col text-[#001b38d4] text-xl  bg-transparent p-4 md:p-0 mt-4 border  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
             

//               <li className="flex items-center hover:text-[#001B38] gap-2">
//                 {" "}
//                 <Link to="/AddtoCart">
//                   <FaBagShopping />
//                 </Link>
//               </li>
//               <li className="flex hover:text-[#001B38] items-center gap-2">
//                 {" "}
//                 <Link to={user?"/profile":"/register"}>
//                   <FaUser />
//                 </Link>
//               </li>
             
//             </ul>
//           </nav>
//         </div>

//         <div>
//           {navbar ? (
//             <RxCross2
//               onClick={handleMenuClick}
//               className="cursor-pointer text-[24px] md:hidden"
//             />
//           ) : (
//             <ul className="text-seconddary w-16  md:hidden flex gap-4 text-2xl">
             

//             <li className="flex  items-center hover:text-[#001B38] gap-2">
//               {" "}
//               <Link to="/AddtoCart">
//                 <FaBagShopping />
//               </Link>
//             </li>
//             <li className="flex hover:text-[#001B38] items-center gap-2">
//               {" "}
//               <Link to={user?"/profile":"/register"}>
//                 <FaUser />
//               </Link>
//             </li>
           
//           </ul>
            
//           )}
//         </div>
//       </div>

//     </nav>
//   </div>
//   <div className="div h-screen w-full ">
// <div className="left text-seconddary h-full w-[50%] p-10 ">
//     <div className="div p-5">
//  <h1 className="text-2xl font-[600]">Contact Information</h1>
//  <p className="py-5 px-1 w-full border-b-2">{user.email}</p>
//     </div>
//     <div className="div px-5 pb-6 py-1">
//  <h1 className="text-2xl font-[600] pb-3">Your Address</h1>

//  {user?.address?.length > 0 ? (
//     user.address.map((address, index) => (
//         <p  key={index} className="py-2 px-1 w-full  rounded border-2  ">{address}</p>

//     ))
// ) : (
//     <p   className="py-5 px-1 w-full  rounded border-2  "></p>
   
// )}

//     </div>
//     <div className="div">
//     <form   
//                       className="bg-white px-5"
//                       onSubmit={onSubmit}
//                     >
//                       <div className="space-y-12">
//                         <div className="space-y-12">
//                           <div className=" ">
//                             <h2 className="text-2xl font-semibold leading-7 text-gray-900">
//                              Shipping Address
//                             </h2>
//                             <p className="mt-1 text-sm leading-6 text-gray-600">
//                               Use a permanent address where you can receive
//                               mail.
//                             </p>

//                             <div className="mt-10 grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-6">
//                               <div className="sm:col-span-3">
                               
//                                 <div className="mt-2">
//                                   <input
//                                     type="text"
//                                     name="first-name"
//                                     placeholder="FIRSTNAME"
//                                     id="first-name"
//                                     {...register("firstName", {
//                                       required: "please enter first name",
//                                     })}
//                                     className="block w-full rounded-md border-2 p-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary sm:text-sm sm:leading-6"
//                                   />
//                                 </div>
//                                 {errors?.firstName && (
//                                   <p className="text-sm capitalize text-red-500">
//                                     {errors?.firstName.message}
//                                   </p>
//                                 )}
//                               </div>

//                               <div className="sm:col-span-3">
                                
//                                 <div className="mt-2">
//                                   <input
//                                   placeholder="LASTNAME"
//                                     type="text"
//                                     name="last-name"
//                                     id="last-name"
//                                     {...register("lastName", {
//                                       required: "please enter lastName name",
//                                     })}
//                                     className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
//                                   />
//                                 </div>
//                                 {errors?.lastName && (
//                                   <p className="text-sm capitalize text-red-500">
//                                     {errors?.lastName.message}
//                                   </p>
//                                 )}
//                               </div>

//                               <div className="sm:col-span-6">
                                
//                                 <div className="mt-2">
//                                   <input
//                                   placeholder="ADDRESS"
//                                     id="street-address"
//                                     name="street-address"
//                                     {...register("streetAddress", {
//                                       required: "streetAddress  is required",
//                                       pattern: {
//                                         value:
//                                           /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//                                         message: "please enter valid streetAddress ",
//                                       },
//                                     })}
//                                     className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
//                                   />
//                                 </div>
//                                 {errors?.streetAddress && (
//                                   <p className="text-sm capitalize text-red-500">
//                                     {errors?.streetAddress.message}
//                                   </p>
//                                 )}
//                               </div>
//                               <div className="sm:col-span-2">
                                
//                                 <div className="mt-2">
//                                   <input
//                                     id="postalCode"
//                                     name="postal-code"
//                                     placeholder="POSTAL-CODE"
//                                     {...register("postalCode", {
//                                       required: "postalCode is required",
                                     
//                                     })}
//                                     className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
//                                   />
//                                 </div>
//                                 {errors?.postalCode && (
//                                   <p className="text-sm capitalize text-red-500">
//                                     {errors?.postalCode.message}
//                                   </p>
//                                 )}
//                               </div>

//                               <div className="sm:col-span-2">
                               
//                                 <div className="mt-2">
//                                   <input
//                                   placeholder="CITY"
//                                     id="city"
//                                     name="city"
//                                     type="text"
//                                     {...register("city", {
//                                       required: "please enter city",
//                                     })}
//                                     className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
//                                   ></input>
//                                 </div>
//                                 {errors?.city && (
//                                   <p className="text-sm capitalize text-red-500">
//                                     {errors?.city.message}
//                                   </p>
//                                 )}
//                               </div>
//                               <div className="sm:col-span-2">
                               
//                                 <div className="mt-2">
//                                   <input
//                                   placeholder="STATE"
//                                     id="region"
//                                     name="region"
//                                     type="text"
//                                     {...register("region", {
//                                       required: "please enter region",
//                                     })}
//                                     className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
//                                   ></input>
//                                 </div>
//                                 {errors?.region && (
//                                   <p className="text-sm capitalize text-red-500">
//                                     {errors?.region.message}
//                                   </p>
//                                 )}
//                               </div>

//                               <div className="col-span-full">
                                
//                                 <div className="mt-2">
//                                   <input
//                                     type="number"
//                                     name="phone"
//                                     id="phone"
//                                     placeholder="MOBILE NO"
//                                     {...register("phone", {
//                                       required: "please enter street address",
//                                     })}
//                                     className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
//                                   />
//                                 </div>
//                                 {errors?.phone && (
//                                   <p className="text-sm capitalize text-red-500">
//                                     {errors?.phone.message}
//                                   </p>
//                                 )}
//                               </div>

                            
//                             </div>
//                           </div>
//                           <div className="mt-6 flex items-center justify-end gap-x-6">
//                             <button
//                               type="button"
//                               onClick={() => {
//                                 reset();
//                                 setEditForm(false);
//                                 setCreateAddress(false);
//                               }}
//                               className="text-sm font-semibold leading-6 text-gray-900"
//                             >
//                               Reset
//                             </button>
//                             <button
//                               type="submit"
//                               className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                             >
//                               {createAddress ? "create" : " Edit Address"}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//     </div>
// </div>
//   </div>
//     </div>
//   )
// }

// export default CheckOut
import React, { useState, Fragment, useEffect } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";

import {
  getUserAllCard,
  removeItem,
  removeAllCard,
  updateItem,
} from "../store/Actions/CardAction";
import { useForm } from "react-hook-form";
import { AycSetOrder } from "../store/Actions/OrderAction";
// import { getUserInfo, userAddressUpdate } from "@/components/auth/apiCall";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { userAddressUpdate } from "../store/Actions/AuthAction";
import { Link } from "react-router-dom";

const CheackOutPage = () => {
  const [open, setOpen] = useState(true);
  const { allCard: items } = useSelector((state) => state.Card);
  const { user } = useSelector((state) => state.Auth);
  console.log(user, "lala");
  const dispatch = useDispatch();

  function handelUpdate(type, item) {
    if (type == "add" && item.quantity < item.product.stock)
      dispatch(updateItem({ quantity: item.quantity + 1 }, { id: item.id }));
    if (type == "sub" && item.quantity > 1)
      dispatch(updateItem({ quantity: item.quantity - 1 }, { id: item.id }));
  }

  const totalItem = items?.reduce((accumulator, currentValue) => {
    return accumulator + 1 * currentValue.quantity;
  }, 0);
  const totalPrice = items?.reduce((accumulator, currentValue) => {
    // multiply quentiy in price
    return accumulator + currentValue.quantity * currentValue.product.price;
  }, 0);

  function handelRemover(e, item) {
    e.preventDefault();
    dispatch(removeItem(item.id));
  }

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    dispatch(userAddressUpdate({ addresses: [...user.addresses, data] }));
    reset();
  });

  const [Address, setAddress] = useState();
  const [payment, setPayment] = useState("");
 

  console.log(items, "===");
  /* Razor Pay  paymentHandler*/

  const paymentHandler = async () => {
    if (!user || !items) return;
    if (!Address) {
      toast.error("please select address");
      return;
    }

    const {
      data: { order },
    } = await axios.post(
      "http://localhost:8080/orders/checkout",
      {
        amount: totalPrice,
      },
      {
        headers: {
          "content-type": "application/json",
          authorization: `${localStorage.getItem("token")}`,
        },
      }
    );

    const options = {
      key: "rzp_test_nTBvOTLgE6fNLn",
      amount: order.amount,
      currency: "INR",
      name: "E-commerce",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: "http://localhost:8080/orders/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  /* handelOrder */
  function handelOrder(e) {
    if (!Address) {
      toast.error("please select address");
      return;
    }
    if (!payment) {
      toast.error("please select Payment Method");
      return;
    }

    const orderDetails = {
      user: user?.id,
      items,
      selectedAddress: Address,
      totalAmount: totalItem,
      totalItems: totalPrice,
      paymentMethod: payment,
    };

    // dispatch(AycSetOrder(orderDetails));
    // items.forEach((element) => {
    //   dispatch(removeItem(element?.id));
    // });
    // if (currentOrder?.id && currentOrder?.paymentMethod == "cash") {
    //   router.push("/OderSuccessfull/" + currentOrder?.id);
    // }
  }



  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
          <div className="lg:col-span-3 ">
            <form className="bg-white mt-12 px-5 py-10" onSubmit={onSubmit}>
              <div className="space-y-12">
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                      Personal Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            {...register("firstName", {
                              required: "please enter first name",
                            })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        {errors?.firstName && (
                          <p className="text-sm capitalize text-red-500">
                            {errors?.firstName.message}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            {...register("lastName", {
                              required: "please enter lastName name",
                            })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        {errors?.lastName && (
                          <p className="text-sm capitalize text-red-500">
                            {errors?.lastName.message}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            {...register("email", {
                              required: "email id is required",
                              pattern: {
                                value:
                                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: "please enter valid email id",
                              },
                            })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        {errors?.email && (
                          <p className="text-sm capitalize text-red-500">
                            {errors?.email.message}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Phone
                        </label>
                        <div className="mt-2">
                          <input
                            id="phone"
                            name="phone"
                            type="number"
                            {...register("phone", {
                              required: "please enter phone",
                            })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          ></input>
                        </div>
                        {errors?.phone && (
                          <p className="text-sm capitalize text-red-500">
                            {errors?.phone.message}
                          </p>
                        )}
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Street address
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            {...register("streetAddress", {
                              required: "please enter street address",
                            })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        {errors?.streetAddress && (
                          <p className="text-sm capitalize text-red-500">
                            {errors?.streetAddress.message}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            {...register("city", {
                              required: "please enter city",
                            })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        {errors?.city && (
                          <p className="text-sm capitalize text-red-500">
                            {errors?.city.message}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          State / Province
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="region"
                            id="region"
                            {...register("region", {
                              required: "please enter region",
                            })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        {errors?.region && (
                          <p className="text-sm capitalize text-red-500">
                            {errors?.region.message}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          ZIP / Postal code
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            {...register("postalCode", {
                              required: "please enter postal code",
                            })}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        {errors?.postalCode && (
                          <p className="text-sm capitalize text-red-500">
                            {errors?.postalCode.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Add Addresses
                    </button>
                  </div>
                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 space-y-10">
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Address
                        </legend>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Choose from existing address
                        </p>
                        <div className="mt-6 space-y-6">
                          <ul role="list" className="divide-y divide-gray-100">
                            {user?.addresses?.map((address, i) => (
                              <li
                                key={i}
                                className="flex justify-between gap-x-6 py-5"
                              >
                                <div className="flex min-w-0 gap-x-4">
                                  <input
                                    id="Address"
                                    name="Address"
                                    type="radio"
                                    onClick={(e) => setAddress(address)}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                  <div className="min-w-0 flex-auto">
                                    <p className=" text-sm font-semibold leading-6 text-gray-900">
                                      {address.email}
                                    </p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                      {address.streetAddress}
                                    </p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                      {address.pinCode}
                                    </p>
                                  </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                  <div>
                                    <p className="text-sm leading-6 text-gray-900">
                                      {address.phone}
                                    </p>
                                    <p className="text-sm leading-6 space-x-5 text-gray-500">
                                      <span>{address.region}</span>
                                      <span>{address.city}</span>
                                      <span>{address.postalCode}</span>
                                    </p>
                                  </div>
                                  <span
                                    className="text-red-300 cursor-pointer text-sm capitalize hover:text-red-500"
                                    // onClick={(e) =>
                                    //   handelAddressRemove(e, address)
                                    // }
                                  >
                                    remove
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Payment Methods
                        </legend>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Choose a payment Method
                        </p>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="Payment-cash"
                              name="paymentMethod"
                              type="radio"
                              checked={payment === "cash"}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              onClick={(e) => setPayment("cash")}
                            />
                            <label
                              htmlFor="cashPayment"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Cash
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="Card"
                              name="paymentMethod"
                              type="radio"
                              checked={payment === "card"}
                              onClick={(e) => setPayment("card")}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="push-email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Card
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2">
            <div className="mx-auto max-w-7xl  px-4 sm:px-6 sm:py-20  lg:px-8">
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 p-4">
                      Card
                    </h1>
                    {items?.map((product) => (
                      <li key={product.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.product.thumbnail}
                            alt={product.product.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={product.href}>
                                  {product.product.title}
                                </a>
                              </h3>
                              <p className="ml-4">
                                ${product.product.price * product.quantity}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {product.color}
                            </p>
                          </div>
                          <h1>{}</h1>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <label
                              htmlFor="quentity"
                              className="inline-block mr-5 text-sm font-medium leading-6 text-gray-900"
                            >
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="text-gray-500">
                                  Qty :
                                  <label
                                    htmlFor="quentity"
                                    className="inline-block mr-5 text-sm font-medium leading-6 text-gray-900"
                                  ></label>
                                  <button
                                    className="p-2 text-2xl"
                                    onClick={(e) =>
                                      handelUpdate("add", product)
                                    }
                                  >
                                    +
                                  </button>
                                  <span>{product.quantity}</span>
                                  <button
                                    className="px-2 text-2xl"
                                    onClick={(e) =>
                                      handelUpdate("sub", product)
                                    }
                                  >
                                    -
                                  </button>
                                </div>
                              </div>
                            </label>
                            <div className="text-gray-500"></div>

                            <div className="flex">
                              <button
                                type="button"
                                onClick={(e) => handelRemover(e, product)}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p className="capitalize">Total Item</p>
                  <p>{totalItem}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p className="capitalize">Total Price</p>
                  <p>${totalPrice}</p>
                </div>
                <div className="mt-6">
                  <div
                    onClick={payment == "cash" ? handelOrder : paymentHandler}
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    order
                  </div>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <Link href="/">
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
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default CheackOutPage;
