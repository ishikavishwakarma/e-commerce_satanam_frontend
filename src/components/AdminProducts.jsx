/* admin */

import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteProduct,
  getAllBrands,
  getAllCategories,
  getAllProducts,
  getFilterProduct,
} from "../store/Actions/AdminProductsActions";

import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Nav";
import { setUserInfo } from "../store/Reducers/AuthSlice";
import { MdDelete, MdEdit, MdOutlineDashboard } from "react-icons/md";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { RiSettings4Line } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
const AdminProducts = () => {
  const ITEMS_PER_PAGE = 10;
    // const { products, product, totalItems } = useSelector((state) => state.admin);
    const navigate = useNavigate();
   
    const { user, ischeckUser } = useSelector((state) => state.Auth);
    const dispatch = useDispatch();
    const {products, categories, brands , product, totalItems } = useSelector((state) => state.admin);
    const menus = [
      { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
      { name: "Users", link: "/allusers", icon: AiOutlineUser },
      { name: "Products", link: "/adminProducts", icon: GiShoppingBag , margin: true },
    
      { name: "Cart", link: "/", icon: FiShoppingCart },
  
    ];
    const [filterValue, setFilterValue] = useState({});
    const [sort, setSort] = useState({});
    const [page, setPage] = useState(1);
  
    // useEffect(() => {
    //   const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    //   dispatch(getFilterProduct(filterValue, sort, pagination));
    // }, [dispatch, sort, filterValue, page]);
  
    // useEffect(() => {
    //   setPage(1);
    // }, [totalItems, sort]);
  
    const sortOptions = [
      { name: "Best Rating", sort: "rating", order: "desc", current: false },
      { name: "Price: Low to High", sort: "price", order: "asc", current: false },
      {
        name: "Price: High to Low",
        sort: "price",
        order: "desc",
        current: false,
      },
    ];
  
    /* filter */
    const filters = [
      {
        id: "Category",
        name: "Category",
        options:categories,
      },
      {
        id: "Brand",
        name: "Brand",
        options: [],
      },
    ];
    
    function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
    /* filter------------------------ */
    function handelFilter(e, section, value) {
      let newFilter = { ...filterValue };
      if (e.target.checked) {
        if (newFilter[section]) {
          newFilter[section].push(value);
        } else {
          newFilter[section] = [value];
        }
      } else {
        const index = newFilter[section].findIndex((el) => el == value);
        newFilter[section].splice(index, 1);
      }
      // console.log();
      setFilterValue(newFilter);
    }
  
    function handelSort(e, option) {
      let newSort = {
        _sort: option.sort,
        _order: option.order,
      };
      console.log(newSort);
      setSort(newSort);
    }
    useEffect(() => {
      dispatch(getAllCategories());
      dispatch(getAllBrands());
    }, []);
  
    
    const [open, setOpen] = useState(false);
  const handelRemoveProduct=(product)=> {
    // console.log(product)
    navigate("/adminProducts");
      dispatch(deleteProduct(product));
      dispatch(getFilterProduct());
    }
    
    // function handelRemoveProduct(product) {
    // console.log(product)
    //   dispatch(deleteProduct(product.id));
    // }
    
    function handelEditProduct(product) {
      console.log(product, "edit");
    }
    useEffect(() => {
      dispatch(getFilterProduct());
    }, []);
  return (
    <div>
        <div>
        <div className="bg-white text-seconddary">
          
          <div>
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-40 lg:hidden"
                onClose={setMobileFiltersOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                      <div className="flex items-center justify-between px-4">
                        <h2 className="text-lg font-medium text-gray-900">
                          Filters
                        </h2>
                        <button
                          type="button"
                          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                          onClick={() => setMobileFiltersOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Filters */}
                      <form className="mt-4 border-t border-gray-200">
                        <h3 className="sr-only">Categories</h3>
                        <ul
                          role="list"
                          className="px-2 py-3 font-medium text-gray-900"
                        ></ul>

                        {filters.map((section,index) => (
                          <Disclosure
                            as="div"
                            key={index}
                            className="border-t border-gray-200 px-4 py-6"
                          >
                            {({ open }) => (
                              <>
                                <h3 className="-mx-2 -my-3 flow-root">
                                  <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">
                                      {section.name}
                                    </span>
                                    <span className="ml-6 flex items-center">
                                      {open ? (
                                        <MinusIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <PlusIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </span>
                                  </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                  <div className="space-y-6">
                                    {section?.options?.map(
                                      (option, optionIdx) => (
                                        <div
                                          key={option.value}
                                          className="flex items-center"
                                        >
                                          <input
                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                            name={`${section.id}[]`}
                                            defaultValue={option.value}
                                            type="checkbox"
                                            defaultChecked={option.checked}
                                            onClick={(e) =>
                                              handelFilter(
                                                e,
                                                section.id,
                                                option.value
                                              )
                                            }
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                          />
                                          <label
                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                          >
                                            {option.label}
                                          </label>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ))}
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
<div className="div flex">

<div
        className={`bg-[#0C2641] fixed z-20 min-h-full ${
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
            <main className=" w-fit  pt-10 h-fit px-5 sm:px-6 lg:px-10">
              <div className="flex pl-10 items-baseline justify-between border-b border-gray-200 pb-6 ">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  Admin Products
                </h1>

                <div className="flex  items-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {sortOptions.map((option,index) => (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <p
                                  onClick={(e) => handelSort(e, option)}
                                  className={classNames(
                                    option.current
                                      ? "font-medium text-gray-900"
                                      : "text-gray-500",
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {option.name}
                                </p>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <button
                    type="button"
                    className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                  >
                    <span className="sr-only">View grid</span>
                    <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <span className="sr-only">Filters</span>
                    <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 pl-10 gap-x-4 gap-y-10 lg:grid-cols-4">
                  {/* Filters */}
                  <form className="hidden lg:block">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                    ></ul>

                    {filters.map((section,index) => (
                      <Disclosure
                        as="div"
                        key={index}
                        className="border-b border-gray-200 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex  items-center w-full justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className=" flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                { section?.options?.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      onClick={(e) =>
                                        handelFilter(
                                          e,
                                          section.id,
                                          option.value
                                        )
                                      }
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>

                  {/* Product grid */}
                  <div className="lg:col-span-3">
                    {/* product grid */}

                    <Link
                      to={"/CreateAdminProducts"}
                      className="p-2 ml-8  rounded-md text-black bg-zinc-300 font-bold"
                    >
                      New Product
                    </Link>

                    <div className="bg-white">
                      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                          {products && products.map((product, index) => (
                       
                              <div key={index} className="relative ">
                                <div  className="group ">
                                  <div className="aspect-h-1 h-60 w-full aspect-w-1  overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 ">
                                    <img
                                      src={product.thumbnail}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                  </div>
                                  <div className="mt-4 flex justify-between">
                                    <div>
                                      <h3 className="text-sm text-gray-700">
                                        <Link
                                          to={`/productDetails/${product.id}`}
                                        >
                                          <span
                                            aria-hidden="true"
                                            className="inset-0"
                                          />
                                          {product.title}
                                        </Link>
                                      </h3>
                                      <p className="mt-1 text-sm text-gray-500">
                                        <StarIcon className="w-6 h-6 inline"></StarIcon>
                                        <span className="align-bottom">
                                          {product.rating}
                                        </span>{" "}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-sm   font-medium text-gray-900">
                                      ₹
                                        {(
                                          product.price *
                                          (1 - product.discountPercentage / 100)
                                        ).toFixed(2)}
                                      </p>
                                      <p className="text-sm line-through font-medium text-gray-500">
                                      ₹{product.price}
                                      </p>
                                    </div>
                                    
                                  </div>
                                </div>
                                <div className="absolute right-0 top-0 flex flex-col">
                                  <div
                                    // onClick={() => handelRemoveProduct(product.id)}
                                    // onClick={()=>console.log(product)}
                                    onClick={() => handelRemoveProduct(product.id)}
                                    className="p-2 cursor-pointer text-2xl bottom-0 rounded-md  font-bold  "
                                  >
                                    <MdDelete />
                                  </div>
                                  <Link
                                    to={"/editproducts/" + product.id}
                                    className="p-2 cursor-pointer text-xl bottom-0 rounded-md  font-bold "
                                  >
                                  <MdEdit />
                                  </Link>
                                </div>
                              </div>
                         
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* pagination */}
               
              </section>
            </main>
</div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default AdminProducts