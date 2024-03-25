import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getSingleProduct,
  getAllBrands,
  getAllCategories,
  updateProduct,
} from "../store/Actions/AdminProductsActions";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { RiSettings4Line } from "react-icons/ri";



const Createproduct = () => {
    const navigate = useNavigate();
    // const { categories, brands } = useSelector((state) => state.Product);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const {
    productById,
    products,
    product,
    totalItems,
    categories,
    brands,
    description,
  } = useSelector((state) => state.admin);
  const { user } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
   
    // if (!user || user !== "admin") {
    //   router.push("/loginPage");
    // }
    dispatch(getAllCategories());
    dispatch(getAllBrands());
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, []);
  useEffect(() => {
    if (id && productById) {
      const {
        title,
        description,
        price,
        discountPercentage,
        stock,
        brand,
        category,
        thumbnail,
        images,
      } = productById;
      setValue("title", title);
      setValue("description", description);
      setValue("discountPercentage", discountPercentage);
      setValue("stock", stock);
      setValue("price", price);
      setValue("brand", brand);
      setValue("category", category);
      setValue("thumbnail", thumbnail);

      if (Array.isArray(images)) {
        setValue("Image1", images[0]);
        setValue("Image2", images[1]);
        setValue("Image3", images[2]);
        setValue("Image4", images[3]);
      }
    }else{
      console.log("heloo");
    }
  }, [productById]);
  const [open, setOpen] = useState(false);
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Users", link: "/", icon: AiOutlineUser },
    { name: "Products", link: "/adminProducts", icon: GiShoppingBag , margin: true },
  
    { name: "Cart", link: "/", icon: FiShoppingCart },

  ];
  const onSubmit = handleSubmit((data) => {
    let newPro = { ...data, user: user.id };
    newPro.discountPercentage = +newPro.discountPercentage;
    newPro.price = +newPro.price;
    newPro.stockCode = +newPro.stockCode;

    let images = [newPro.Image1, newPro.Image2, newPro.Image3, newPro.Image4];
    delete newPro.Image1;
    delete newPro.Image2;
    delete newPro.Image3;
    delete newPro.Image4;
    newPro = { ...newPro, images };
    // if (id) {
    //   dispatch(updateProduct({ ...id, ...newPro }));
    // } else {
      dispatch(createProduct({ ...newPro, rating: 0 }));
    // }
    // reset();
    navigate("/adminProducts");
  });
  return (
    <div className="flex">
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
        <div className="px-20 py-15 w-full capitalize">
        {(productById || !id) && (
          <form
            onSubmit={onSubmit}
            className="border-b border-gray-900/10 pb-12"
          >
            <Link href="/">Home</Link>
            <h2 className="text-2xl text-black font-semibold leading-7 mt-5 ">
              Create New Product
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  title
                </label>
                <div className="mt-2">
                  <input
                    value={id && productById.title}
                    type="text"
                    name="title"
                    id="title"
                    {...register("title", { required: "title is required" })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors?.title && (
                  <p className="text-sm capitalize ">
                    {errors?.title.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="brands"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    autoComplete="category-name"
                    {...register("category", {
                      required: "category is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {categories.map((item, index) => {
                      return <option value={item.value} className="h-44 w-full" key={index}>{item.value}</option>;
                    })}
                  </select>
                </div>
                {errors?.categories && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.categories.message}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="brands"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  brands
                </label>
                <div className="mt-2">
                  <select
                    id="brand"
                    name="brand"
                    {...register("brand", { required: "brands is required" })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {brands.msg.map((item, index) => {
                      return <option value={item.value} key={index}>{item.value}</option>;
                    })}
                  </select>
                </div>
                {errors?.categories && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.categories.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  price
                </label>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="price"
                    autoComplete="price"
                    {...register("price", { required: "price is required" })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors?.price && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.price.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="discountPercentage"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  discount Percentage
                </label>
                <div className="mt-2">
                  <input
                    id="discountPercentage"
                    name="discountPercentage"
                    type="discountPercentage"
                    {...register("discountPercentage", {
                      required: "discountPercentage is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors?.discountPercentage && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.discountPercentage.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  stock
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="stock"
                    id="stock"
                    {...register("stock", {
                      required: "stock is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors?.stock && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.stock.message}
                  </p>
                )}
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="thumbnail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  thumbnail
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="thumbnail"
                    id="thumbnail"
                    {...register("thumbnail", {
                      required: "thumbnail is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors?.thumbnail && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.thumbnail.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-full sm:col-start-1">
                <label
                  htmlFor="Image1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image1
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Image1"
                    id="Image1"
                    {...register("Image1", {
                      required: "Image1 is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors?.Image1 && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.Image1.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="Image2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image2
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Image2"
                    id="Image2"
                    {...register("Image2", {
                      required: "Image2 is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors?.Image2 && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.Image2.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="Image3"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image3
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Image3"
                    id="Image3"
                    {...register("Image3", {
                      required: "Image3 is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors?.Image3 && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.Image3.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="Image4"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image4
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Image4"
                    id="Image4"
                    {...register("Image4", {
                      required: "Image4 is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors?.Image4 && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.Image4.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="textarea"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  description
                </label>
                <div className="mt-2">
                  <textarea
                    type="text"
                    name="textarea"
                    id="textarea"
                    autoComplete="textarea"
                    {...register("description", {
                      required: "description is required",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                  />
                </div>
                {errors?.description && (
                  <p className="text-sm capitalize text-red-500">
                    {errors?.description.message}
                  </p>
                )}
              </div>
            </div>

            <button className="mt-5 bg-green-500 text-white p-2 text-light text-sm rounded-sm">
              Submit
            </button>
          </form>
        )}
      </div>
      </div>
  )
}

export default Createproduct