
import Nav from './Nav'
import Navbar from './Nav'
import React, { useEffect } from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedProduct } from "../store/Actions/ProductAction";
import {
 
  createAddTOCard,
  getUserAllCard,
} from "../store/Actions/CardAction";
import SetColor from "./Setcolor";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GridLoader } from "react-spinners";
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';
import { FiFolder, FiShoppingCart } from 'react-icons/fi';
import { RiSettings4Line } from 'react-icons/ri';
import { HiMenuAlt3 } from 'react-icons/hi';

const Product = () => {
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
    const newAddToCard = { user: user?.id, product: product?.id, quantity: 2 };
    dispatch(createAddTOCard(newAddToCard));
    navigate("/cardPage");
  }

  // in server datae will add color high light size etc.
  const [open, setOpen] = useState(false);
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Users", link: "/", icon: AiOutlineUser },
    { name: "Products", link: "/adminProducts", icon: GiShoppingBag , margin: true },
    { name: "Cart", link: "/", icon: FiShoppingCart },

  ];
  useEffect(() => {
    dispatch(getUserAllCard());
  }, [handelSubmit, dispatch]);

  console.log(product);

  return (
    <div className='flex h-full'>
    <div
        className={`bg-[#0C2641]  h-screen z-20 min-h-full ${
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
        <div className="mt-4 flex flex-col gap-4 relative">
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
    <div className='h-[100vh] w-full  '>
       
    <div>
    {product ? (
        <div className="div flex h-[100vh] w-full">
          <div className="left flex flex-col gap-5 h-full w-1/2 bg-[#0c26411d] pl-20 pr-5 py-10 pb-5 ">
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
          <div className="left text-seconddary bg-[#0c26411d] flex flex-col gap-5 h-full w-1/2 pr-20 pl-5 py-10 ">
            <div className="div gap-80 flex">
            <h2>
                <a href="/">Home</a> / product 
            </h2>
            {/* <div>edit</div> */}
            </div>
            <h2 className="text-4xl font-[700] uppercase">{product.title}</h2>
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
                      <h3>{product.stock}</h3>
                      
                      <div className="div">
                      <h3  className="text-xl font-[500]">Description</h3>
                      <p className="text-lg">Light the end of incense sticks / Agarbatti, allow flame to catch; gently blow out the flame and place it incense stick holder to keep it away from surface.</p>
                      {/* <p>{product.description}</p> */}
                      </div>
                      <div className="div">
                      <h3  className="text-xl font-[500]">Highlights</h3>
                      {/* <p>{product.description}</p> */}
                      {product.highlights?.map((highlight, index) => (
        <p key={index}>{highlight}</p>
      ))}
                      {/* <p><li></li></p> */}
                      </div>
                      
          </div>
        </div>
      ) : (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
          <GridLoader color="#36d7b7" />
        </div>
      )}
      </div>
      </div>
    </div>
  )
}

export default Product