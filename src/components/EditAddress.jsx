import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, removeAddress, userAddressUpdate } from '../store/Actions/AuthAction';
import { MdDelete, MdOutlineModeEdit } from 'react-icons/md';

const EditAddress = () => {
    const dispatch = useDispatch();
    const [editForm, setEditForm] = useState(false);
    const [createAddress, setCreateAddress] = useState(false);
    const { user, ischeckUser, loadingUser, error } = useSelector((state) => state.Auth);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm();

    useEffect(() => {
        if (!user) dispatch(getUserInfo());
    }, [user, ischeckUser]);

    const handelAddressUpdate = (index) => {
        setEditForm(true);
        setCreateAddress(false);
        const address = user.addresses[index];
        setValue("firstName", address.firstName || '');
        setValue("lastName", address.lastName || '');
        setValue("email", address.email || '');
        setValue("phone", address.phone || '');
        setValue("houseNo", address.houseNo || '');
        setValue("streetAddress", address.streetAddress || '');
        setValue("region", address.region || '');
        setValue("postalCode", address.postalCode || '');
        setValue("city", address.city || '');
        setValue("landmark", address.landmark || '');
        setValue("index", index);
    };

    const onSubmit = handleSubmit((data) => {
        if (createAddress) {
            const newData = [...user.addresses, { ...data }];
            dispatch(userAddressUpdate({ addresses: newData }, user?.id));
        } else {
            const userAddress = [...user.addresses];
            const index = userAddress.findIndex((e) => e.id === data.id);
            userAddress.splice(index, 1, data);
            dispatch(userAddressUpdate({ addresses: userAddress }, user?.id));
        }
        reset();
        setCreateAddress(false);
        setEditForm(false);
    });

    const handelAddressRemove = (index) => {
        const newData = [...user.addresses];
        newData.splice(index, 1);
        dispatch(removeAddress({ addresses: newData }));
    };

    const handelCreateAddress = () => {
        setEditForm(!editForm);
        setCreateAddress(true);
        reset();
    };
  return (
    <div>
        <div className="lg:p-10 p-1 h-fit w-full rounded-lg bg-[#0c264114] ">
                <p className="lg:mt-1 my-4 text-sm leading-6 text-white">
                  <button
                    className="p-2 text-sm bg-seconddary rounded"
                    onClick={handelCreateAddress}
                  >
                    Add New Address
                  </button>
                </p>
                <div>
                  {editForm && (
                    <form
                      className="bg-white mt-12 px-5 py-5 lg:py-10"
                      onSubmit={onSubmit}
                    >
                      <div className="space-y-12">
                        <div className="space-y-12">
                          <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                              Personal Information
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              Use a permanent address where you can receive
                              mail.
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
                                    className="block w-full rounded-md border-2 p-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary sm:text-sm sm:leading-6"
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
                                    className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
                                  />
                                </div>
                                {errors?.lastName && (
                                  <p className="text-sm capitalize text-red-500">
                                    {errors?.lastName.message}
                                  </p>
                                )}
                              </div>

                              <div className="sm:col-span-3">
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
                                    className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
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
                                  htmlFor="landmark"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  LandMark
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="landmark"
                                    name="landmark"
                                    {...register("landmark", {
                                      required: "landmark is required",
                                     
                                    })}
                                    className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
                                  />
                                </div>
                                {errors?.landmark && (
                                  <p className="text-sm capitalize text-red-500">
                                    {errors?.landmark.message}
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
                                    className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
                                  ></input>
                                </div>
                                {errors?.phone && (
                                  <p className="text-sm capitalize text-red-500">
                                    {errors?.phone.message}
                                  </p>
                                )}
                              </div>
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="country"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  House Number
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="houseNo"
                                    name="houseNo"
                                    type="number"
                                    {...register("houseNo", {
                                      required: "please enter houseNo",
                                    })}
                                    className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
                                  ></input>
                                </div>
                                {errors?.houseNo && (
                                  <p className="text-sm capitalize text-red-500">
                                    {errors?.houseNo.message}
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
                                    className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
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
                                    className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
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
                                    className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
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
                                    className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm focus:outline-none focus:border-seconddary placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
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
                              onClick={() => {
                                reset();
                                setEditForm(false);
                                setCreateAddress(false);
                              }}
                              className="text-sm font-semibold leading-6 text-gray-900"
                            >
                              Reset
                            </button>
                            <button
                              type="submit"
                              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              {createAddress ? "create" : " Edit Address"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}

                  {/* ........................... */}

                  <div className="mt-0 pt-5 space-y-6">
                    <ul role="list" className="divide-y text-seconddary divide-gray-100">
                      {user?.addresses?.map((address, index) => (
                        <li
                          key={index}
                          className="flex flex-col sm:flex-col rounded bg-[#001b3801] w-80 p-5 gap-x-6 py-5"
                        >

                            <h1 className='text-center text-xl font-[500]'>ADDRESS</h1>
                            <div className="div">

                          <div className="flex items-center min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                              <h1>
                                {address.firstName} {address.lastName}
                              </h1>
                              <p className="mt-1 truncate text-sm leading-5 ">
                                {address.houseNo}
                              </p>
                              <p className="mt-1 truncate text-sm leading-5 ">
                                {address.streetAddress}
                              </p>
                              <p className="mt-1 truncate text-sm leading-5 ">
                                <span>{address.city},{address.region},India</span>
                              </p>
                            </div>
                          </div>
                          <div className=" shrink-0 sm:flex sm:flex-col ">
                            <div>
                              
                              <p className="text-sm leading-6 space-x-5 ">
                                {/* <span>{address.region}</span> */}
                                <span>{address.landmark},{address.postalCode}</span>
                              </p>
                              <p className="text-sm leading-6 space-x-5 ">
                                {/* <span>{address.region}</span> */}
                                <span>{address.phone}</span>
                              </p>
                              <div className="flex pt-2 gap-2">
                                <p
                                  className="text-seconddary  cursor-pointer text-lg capitalize "
                                  onClick={(e) => handelAddressRemove(index)}
                                >
                                  <MdDelete />
                                </p>
                                <p
                                  className="text-seconddary cursor-pointer text-lg capitalize "
                                  onClick={(e) => handelAddressUpdate(index)}
                                >
                                  <MdOutlineModeEdit />
                                </p>
                              </div>
                            </div>
                          </div>
                            </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default EditAddress