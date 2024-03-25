import Navbar from "./Nav";
import React, { useEffect } from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedProduct } from "../store/Actions/ProductAction";
import { createAddTOCard, getUserAllCard } from "../store/Actions/CardAction";
import SetColor from "./Setcolor";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { RiSettings4Line } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify';
const UserProduct = () => {
  const { user } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, product, totalItems, categories, brands } = useSelector(
    (state) => state.Product
  );

  const highlights = ["lalal", "ram ram", "lalal", "ram ram"];

  useEffect(() => {
    if (id) {
      dispatch(getSelectedProduct(id));
    }
  }, [id]);

  const colors = [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ];
  const sizes = [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);

  function handelSubmit(e, product) {
    e.preventDefault();
    /*  fixed to qty value letter */
    if (user) {
      const newAddToCard = { user: user.id, product: product.id, quantity: 1 };
      dispatch(createAddTOCard(newAddToCard));
      navigate("/cardPage");// Navigate to AddToCart page
    } else {
      console.log("not")
      toast.error('Please login first'); // Display toast message if user is not present
    }
  }
  // in server datae will add color high light size etc.

  useEffect(() => {
    dispatch(getUserAllCard());
  }, [ dispatch]);

  console.log(product);
  return (
    <div>
      <Navbar />
      {product ? (
        <div className="div flex lg:flex-row flex-col h-full w-full">
          <div className="left w-full flex flex-col gap-5 h-full pl-6 lg:w-1/2 bg-[#0c26411d] lg:pl-20 pr-5 py-5 ">
            <div className="img h-[70%] w-full ">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="div flex gap-10">
                <div className="box h-40 w-52 ">
                <img
                    src={product.images[0]}
                    alt={product.images[0]}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="box h-40 w-52 ">
                <img
                    src={product.images[1]}
                    alt={product.images[1]}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="box h-40 w-52 ">
                <img
                    src={product.images[2]}
                    alt={product.images[2]}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
            </div>
          </div>
          <div className="left text-seconddary flex flex-col gap-5 items-center lg:items-start w-full lg:w-1/2 lg:pr-20 px-3 py-10 ">
            <div className="div lg:items-start items-center lg:gap-80 flex">
            <h2>
                <a href="/">Home</a> / product 
            </h2>
            {/* <div>edit</div> */}
            </div>
            <h2 className="lg:text-4xl w-full text-lg text-center font-[700] uppercase">{product.title}</h2>
            <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating, index) => (
                          <StarIcon
                            key={index}
                            className={classNames(
                             
                              "h-5 w-5 text-yellow-500 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <div className="div flex items-end gap-3">

                      <h2 className="text-2xl">₹{product.price}.00 </h2>
                      <h3>({product.discountPercentage}% OFF)</h3>
                      </div>
                      <h3 className="border px-2 rounded">Stock-{product.stock}</h3>
                      <form onSubmit={(e) => handelSubmit(e, product)} action="">
                      <button
                      disabled={product.stock == 0}
                      className={`mt-10 flex w-72 items-center justify-center rounded-md border border-transparent bg-[#0C2641] ${
                        product.stock == 0 ? "bg-indigo-300" : "bg-indigo-600"
                      } px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    >
                      Add to cart
                    </button>
                      </form>
                      <div className="div">
                      <h3  className="text-xl font-[500]">Description</h3>
                      <p className="text-lg">Light the end of incense sticks / Agarbatti, allow flame to catch; gently blow out the flame and place it incense stick holder to keep it away from surface.</p>
                      <p>{product.description}</p>
                      <div className="div pt-5 ">
                      <h3  className="text-xl font-[500]">Highlights</h3>
                      {/* <p>{product.description}</p> */}
                      <p><li></li></p>
                      </div>
                      </div>
                      
          </div>
        </div>
      ) : (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
          <GridLoader color="#36d7b7" />
        </div>
      )}
      <Footer/>
      <ToastContainer />
    </div>
  );
};

export default UserProduct;
