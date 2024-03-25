import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { FaBagShopping, FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, logoutAyc } from "../store/Actions/AuthAction";


// import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  // const history = useHistory();

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user,ischeckUser, error, LoginUser, loadingUser } = useSelector(
    (state) => state.Auth
  );
  useEffect(() => {
    if (!user) dispatch(getUserInfo());
  }, [user, ischeckUser]);
  const handleLogout = () => {
    navigate("/login") // Dispatch the logout action when the button is clicked
    dispatch(logoutAyc());
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeVisible = scrollY <= 0; // Hide when scrolled down 1px or more
   
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
 
  const handleMenuClick = () => {
    setNavbar(!navbar);
  };

  const handleLinkClick = (path) => {
    history.push(path);
    setNavbar(false);
  };

  const slideImages = [
    {
      // url:'https://images.unsplash.com/photo-1558659616-7742131dcfbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      url: "../../images/_54fbb8cd-2b3e-4482-b647-743e65c35bd1-removebg.png",
      caption: "Sanatan Sandesh",
    },
    {
      // url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      url: "../../images/_54fbb8cd-2b3e-4482-b647-743e65c35bd1-removebg.png",
      caption: "Sanatan Sandesh",
    },
    {
      url: "../../images/_54fbb8cd-2b3e-4482-b647-743e65c35bd1-removebg.png",
      caption: "Sanatan Sandesh",
    },
  ];

  return (
    <div className="">
      <div className="nav-1 lg:w-full  bg-[#f0eaea] overflow-hidden">
        {/* <motion.div
      className="marquee bg-[#f0eaea] p-1 overflow-hidden whitespace-nowrap flex items-center gap-3 font-semibold"
      animate={{ x: '0%' }}
      initial={{ x: '100%' }}
      transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
    >
      <img className="h-5 w-5 bg-red-300 rounded-full" src="../../images/Untitled-design-1.png" alt="" />
      <h1 className="text-base">Sanatan Sandesh</h1>
    </motion.div> */}
        <div className="slide-container w-full bg-[#001B38]  h-[7vh] pt-1 bg-cover max-sm:w-full  opacity-95 bg-center">
          <Slide indicators={false}>
            {slideImages.map((slideImage, index) => (
              <div
                className="flex justify-center h-full w-full pt-1 items-center"
                key={index}
              >
                {/* <div className='h-[5vh]  object-cover w-[2.5vw]'  
              >
                <img className="h-full w-full object-cover" src={slideImage.url} alt="" />
              </div> */}
                <span className="text-xl text-white">{slideImage.caption}</span>
              </div>
            ))}
          </Slide>
        </div>
      </div>
      <nav className=" shadow-xl w-full z-20 top-8 start-0  h-fit  bg-white  bg-opacity-15">
        {/* <div className="bg-white w-full hidden md:block"></div> */}

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 relative ">
          <section>
            <div className="img h-20 w-24 rounded overflow-hidden  ">
              <img
                className="h-full w-full  object-cover"
                src="../../images/_54fbb8cd-2b3e-4482-b647-743e65c35bd1-removebg.png"
                alt=""
              />
            </div>
          </section>
          <div
            className="items-center font-[900] justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <nav>
              <ul className="font-[650]  md:flex flex-col text-[#001b38d4] text-xl  bg-transparent p-4 md:p-0 mt-4 border  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li className="flex  items-center gap-2">
                  <Link
                    to="/"
                    onClick={() => handleLinkClick("/")}
                    className={`block py-2 px-3  md:bg-transparent md:p-0 hoverable-text`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link
                    to="/about"
                    onClick={() => handleLinkClick("/about")}
                    className={`block  py-2 px-3 md:bg-transparent md:p-0 hoverable-text `}
                  >
                    About
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link
                    to="/store"
                    onClick={() => handleLinkClick("/store")}
                    className={`block  py-2 px-3  md:bg-transparent md:p-0 hoverable-text `}
                  >
                    Store
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link
                    to="/contact"
                    onClick={() => handleLinkClick("/contact")}
                    className={`block  py-2 px-3  md:bg-transparent md:p-0 hoverable-text `}
                  >
                    Contact
                  </Link>
                </li>

                <li className="flex items-center hover:text-[#001B38] gap-2">
                  {" "}
                  <Link to="/cardPage">
                    <FaBagShopping />
                  </Link>
                </li>
                <li className="flex hover:text-[#001B38] items-center gap-2">
                  {" "}
                  {/* <Link to={"/register"}> */}
                  <Link to={user? "/profile" :"/register"}>
                    <FaUser />
                  </Link>
                </li>
                {/* {user &&<li>
                <button
                        
                        onClick={handleLogout}
                        className="block text-base text-seconddary px-4 py-2 hover:text-black hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                </li>} */}
                {/* <li
                  className="flex hover:text-[#C0800A] items-center gap-2 relative"
                  ref={dropdownRef}
                >
                  <button
                    onClick={handleDropdownToggle}
                    className="block  h-8 w-8 bg-black rounded-full md:bg-black md:p-0 hoverable-text"
                  ></button>
                  {isDropdownOpen && (
                    <div className="absolute top-14 text-black right z-40 bg-white  w-40  mt-1">
                      <Link
                        to="/Profile"
                        onClick={() => handleLinkClick("/dropdown-link-1")}
                        className="block text-base text-seconddary px-4 py-2 hover:text-black hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      
                      <button
                        
                        onClick={handleLogout}
                        className="block text-base text-seconddary px-4 py-2 hover:text-black hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </li> */}
              </ul>
            </nav>
          </div>

          <div>
            {navbar ? (
              <RxCross2
                onClick={handleMenuClick}
                className="cursor-pointer text-[24px] md:hidden"
              />
            ) : (
              <RxHamburgerMenu
                onClick={handleMenuClick}
                className="cursor-pointer text-[24px] md:hidden"
              />
            )}
          </div>
        </div>

        {navbar && (
          <div className="md:hidden bg-[#0C2641] text-white flex flex-col px-[10px] py-[20px] text-sm gap-3 absolute w-full z-30 animateNav overflow-hidden">
            <div className="flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#0C2641]  h-full hover:bg-[#fff] items-center ">
                <Link
                  to="/"
                  onClick={() => handleLinkClick("/")}
                  className="px-[10px] w-full"
                >
                  Home
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className="flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#0C2641]  h-full hover:bg-[#fff] items-center ">
                <Link
                  to="/about"
                  onClick={() => handleLinkClick("/about")}
                  className="px-[10px] w-full"
                >
                  About
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className="flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#0C2641]  h-full hover:bg-[#fff] items-center ">
                <Link
                  to="/store"
                  onClick={() => handleLinkClick("/store")}
                  className="px-[10px] w-full"
                >
                  Store
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className="flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#0C2641]  h-full hover:bg-[#fff] items-center ">
                <Link
                  to="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className="w-full px-[10px]"
                >
                  Contact Us
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>
            <div className="flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#0C2641]  h-full hover:bg-[#fff] items-center ">
                <Link
                 to={user? "/profile" :"/register"}
                  onClick={() => handleLinkClick("/contact")}
                  className="w-full px-[10px]"
                >
                  {user ?"Profile":"Register"}
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>
            <div className="flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#0C2641]  h-full hover:bg-[#fff] items-center ">
                <Link
                
                 
                  className=" w-full px-[10px]"
                >
                  Sign Out
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
