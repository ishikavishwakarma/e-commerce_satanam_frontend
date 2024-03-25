import React, { useEffect, useRef, useState  } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../store/Actions/AuthAction';
import {
    removeAddress,
    updateProfile,
    uploadImage,
    userAddressUpdate,
  } from "../store/Actions/AuthAction";

  

  import { useForm } from "react-hook-form";
  import { AiOutlineClose } from "react-icons/ai";
 
  
const EditProfile = () => {
  
  
    const [editProfile, setEditProfile] = useState({});
  
   
    const { user, loadingUser, error,ischeckUser } = useSelector((state) => state.Auth);
  
    const dispatch = useDispatch();
  

    function handelProfile() {
      dispatch(updateProfile(editProfile));
     
    }
  
    /* Image */
    const ref = useRef();
  
    function handleChange(e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("avatar", file);
      dispatch(uploadImage(formData));
      dispatch(getUserInfo());
    }
    function handelClickOnImage() {
      ref.current.click();
    }
  
  
      useEffect(() => {
        if (user) {
          setEditProfile({
            name: user.name || '',
            email: user.email || '',
            phoneNo: user.phoneNo || '',
          });
        }
      }, [user]);

      
      useEffect(() => {
        if (!user) dispatch(getUserInfo());
      }, [user, ischeckUser]);
      
  return (
    <div className=' bg-[#0c264114] w-full'>
        
        <>
      {!loadingUser ? (
        <div>
          <input
            className="hidden"
            name="avatar"
            ref={ref}
            onChange={handleChange}
            type="file"
          />

          <div className={`  text-black min-h-fit p-1  `}>
           
              <div >
                <div className="bottom-2 rounded-lg p-5  m-1 selection-none">
                  
                  <div className="flex items-center justify-center">
                    <img
                     onClick={handelClickOnImage}
                      className="rounded-full w-[100px] h-[100px]"
                      src={
                        user.image && user.image
                          ? `${"http://localhost:8080"}/${user.image && user.image}`
                          : "/images/thali.jpg"
                      }
                    ></img>
                  </div>
                  <div className="grid lg:gap-5 lg:grid-cols-2 space-y-3">
                    <input
                      onChange={(e) =>
                        setEditProfile({
                          ...editProfile,
                          [e.target.name]: e.target.value,
                        })
                      }
                      type="text"
                      name="name"
                      value={editProfile.name}
                      className="border-2 focus:border-seconddary focus:outline-none border-[#001b3850] rounded px-2 py-3 text-sm mt-[.7vw] bg-transparent "
                      placeholder="Name"
                    />
                    <input
                      onChange={(e) => {
                        setEditProfile({
                          ...editProfile,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      type="text"
                      name="email"
                      value={editProfile.email}
                      className="border-2 focus:border-seconddary focus:outline-none border-[#001b3850] rounded px-2 py-3 text-sm mt-2 bg-transparent "
                      placeholder="E-mail"
                    />
                    <input
                      onChange={(e) => {
                        setEditProfile({
                          ...editProfile,
                          phoneNo: e.target.value,
                        });
                      }}
                      type="text"
                      name="phoneNo"
                      className="border-2 focus:border-seconddary focus:outline-none border-[#001b3850] rounded px-2 py-3 text-sm mt-2 bg-transparent "
                      placeholder="Phone No"
                      value={user.phoneNo}
                    />
                  </div>
                    <button className='bg-seconddary  text-center py-2 rounded text-white text-lg w-32 mt-6' onClick={handelProfile}>UPDATE</button>
                </div>
              </div>
     
            <div>
                            
            </div>
          </div>
        </div>
      ) : (
       "loading"
      )}
     
    </>
        </div>
  )
}

export default EditProfile