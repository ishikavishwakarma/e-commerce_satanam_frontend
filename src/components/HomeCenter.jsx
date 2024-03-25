import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands, getAllCategories, getFilterProduct } from '../store/Actions/ProductAction';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createAddTOCard } from '../store/Actions/CardAction';
import { ToastContainer, toast } from 'react-toastify'; 
const HomeCenter = () => {
  const { products, totalItems, categories, brands, searchText } = useSelector(
    (state) => state.Product
  );
  const { user } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBrands());
  }, []);
  useEffect(() => {
    dispatch(getFilterProduct());
}, []);

const navigate = useNavigate();
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
    
  return (
    <div className='h-fit  w-full flex items-center bg-[#F8F9FA] justify-start pt-5 lg:pt-16 flex-col'>
        <div className="div ">
            <h1 className='lg:text-5xl text-xl text-[#001B38] font-[700]'>ALL TIME BESTSELLER</h1>
        </div>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-7 sm:px-6 sm:py-24 bg-[#F8F9FA] lg:max-w-7xl lg:px-2">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:gap-5  gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-24">
          {products.map((product) => (
            <div key={product.id} className="group py-4 rounded-lg lg:w-[30vw] w-[80vw] xl:w-[20vw] bg-[#fff] px-6">
              <div  className="   h-72 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                 src={product.thumbnail}
                 alt={product.title}
                  className="h-full w-full transition-all ease-in-out object-cover object-center group-hover:scale-125"
                />
              </div>
              <Link
                                        to={`/product/${product.id}`}
                                      >
                                        <span
                                          aria-hidden="true"
                                          className="absolute mt-4 text-sm text-gray-700 inset-0"
                                        />
                                        {product.title}
                                      </Link>
              {/* <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
              <h3 className="mt-2 text-sm text-gray-700">In Stock</h3>
              <div className='flex items-center gap-2' >
                                    <p className="text-lg   font-medium text-gray-900">
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
                                  <form onSubmit={(e) => handelSubmit(e, product)} action="">

              <button className='w-full font-[600] text-[#001b38c3] py-2 rounded mt-5 shadow-sm hover:text-white  border-2 border-[#001b3861]  hover:bg-[#001b38bd] shadow-zinc-600 bg-zinc-100'>Add To Cart</button>
                                  </form>
            </div>
          ))}
          <ToastContainer />
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomeCenter