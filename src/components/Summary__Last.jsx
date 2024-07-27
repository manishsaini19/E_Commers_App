import React, { useState } from "react";
import E__15 from "../assets/E__commimags/E__15.png";
import Frame_3 from "../assets/E__commimags/Frame_3.png";
import image8 from "../assets/E__commimags/image8.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { GoTag } from "react-icons/go";
import { Link } from "react-router-dom";
function Summary__Last() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmite = (name) => {
    console.log(name);
  };
  const [Counter_1, setCounter_1] = useState(145);
  const [Counter_2, setCounter_2] = useState(180);
  const [Counter_3, setCounter_3] = useState(240);
  return (
    <>
      <div className="2xl:w-10/12 w-11/12 h-auto   m-auto mt-4">
        <div className="w-full h-auto">
          <h1 className="uppercase text-3xl text-center lg:text-start sm:text-5xl  lg:text-5xl font-bold">
            Your Cart
          </h1>
        </div>
        <div className=" grid lg:grid-cols-12 gap-5 grid-cols-1 mt-10">
          <div className="lg:col-span-7 col-span-12 border-2 rounded-3xl px-4 sm:px-8 ">
            <div className=" grid grid-flow-row gap-5 border-b-2 py-5 sm:py-7 ">
              <div className="grid grid-cols-12 gap-5 relative">
                <div className="grid sm:col-span-3 col-span-4">
                  <img
                    src={E__15}
                    className="w-full h-full  hover:scale-105 transition-transform cursor-pointer rounded-3xl hover:shadow-md"
                    alt=""
                  />
                </div>
                <div className="grid sm:col-span-9 col-span-8">
                  <h1 className=" text-lg sm:text-2xl xl:text-3xl font-bold">
                    Gradient Graphic <br className="sm:hidden " /> T-shirt
                  </h1>
                  <p className=" text-lg sm:text-xl">
                    Size:<span className="text-gray-500 pl-2">Large</span>
                  </p>
                  <p className=" text-lg sm:text-xl">
                    Color:<span className="text-gray-500 pl-2">White</span>
                  </p>
                  <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold pt-3">
                    $ {Counter_1}
                  </h1>
                </div>
                <Link to={"/Card"}>
                <RiDeleteBin6Line className="absolute top-2 right-0 text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-red-500 hover:scale-125 transition" />
                </Link>
                <div className="bg-gray-200 flex gap-3 border-2 py-2   rounded-3xl  sm:text-2xl hover:bg-black cursor-pointer transition hover:text-white absolute bottom-0 right-0">
                  <span
                    onClick={() => setCounter_1((Counter_1) => Counter_1 - 1)}
                    className="px-4 cursor-pointer "
                  >
                    -
                  </span>
                  <p> {Counter_1} </p>
                  <span
                    onClick={() => setCounter_1((Counter_1) => Counter_1 + 1)}
                    className="px-4 cursor-pointer"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className=" grid grid-flow-row gap-5 border-b-2 py-5 sm:py-7 ">
              <div className="grid grid-cols-12 gap-5 relative">
                <div className="grid sm:col-span-3 col-span-4">
                  <img
                    src={Frame_3}
                    className="w-full h-full  hover:scale-105 transition-transform cursor-pointer rounded-3xl hover:shadow-md"
                    alt=""
                  />
                </div>
                <div className="grid sm:col-span-9 col-span-8">
                  <h1 className=" text-lg sm:text-2xl xl:text-3xl font-bold">
                    CHECKERED <br className="sm:hidden " /> SHIRT
                  </h1>
                  <p className=" text-lg sm:text-xl">
                    Size:<span className="text-gray-500 pl-2">Medium</span>
                  </p>
                  <p className=" text-lg sm:text-xl">
                    Color:<span className="text-gray-500 pl-2">Red</span>
                  </p>
                  <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold pt-3">
                    $ {Counter_2}
                  </h1>
                </div>
                <Link to={"/Card"}>
                <RiDeleteBin6Line className="absolute top-2 right-0 text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-red-500 transition hover:scale-125" />
                </Link>
                <div className="bg-gray-200 flex gap-3 border-2 py-2   rounded-3xl  sm:text-2xl hover:bg-black cursor-pointer transition hover:text-white absolute bottom-0 right-0">
                  <span
                    onClick={() => setCounter_2((Counter_2) => Counter_2 - 1)}
                    className="px-4 cursor-pointer "
                  >
                    -
                  </span>
                  <p> {Counter_2} </p>
                  <span
                    onClick={() => setCounter_2((Counter_2) => Counter_2 + 1)}
                    className="px-4 cursor-pointer"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className=" grid grid-flow-row gap-5 py-5 sm:py-7 ">
              <div className="grid grid-cols-12 gap-5 relative">
                <div className="grid sm:col-span-3 col-span-4">
                  <img
                    src={image8}
                    className="w-full h-full hover:scale-105 transition-transform cursor-pointer rounded-3xl hover:shadow-md"
                    alt=""
                  />
                </div>
                <div className="grid sm:col-span-9 col-span-8">
                  <h1 className=" text-lg sm:text-2xl xl:text-3xl font-bold">
                    SKINNY FIT <br className="sm:hidden " />
                    JEANS
                  </h1>
                  <p className=" text-lg sm:text-xl">
                    Size:<span className="text-gray-500 pl-2">Large</span>
                  </p>
                  <p className=" text-lg sm:text-xl">
                    Color:<span className="text-gray-500 pl-2">Blue</span>
                  </p>
                  <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold pt-3">
                    $ {Counter_3}
                  </h1>
                </div>
                <Link to={"/Card"}>
                <RiDeleteBin6Line className="absolute top-2 right-0 text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-red-500 transition hover:scale-125" />
                </Link>
                <div className="bg-gray-200 flex gap-3 border-2 py-2   rounded-3xl  sm:text-2xl hover:bg-black cursor-pointer transition hover:text-white absolute bottom-0 right-0">
                  <span
                    onClick={() => setCounter_3((Counter_3) => Counter_3 - 1)}
                    className="px-4 cursor-pointer "
                  >
                    -
                  </span>
                  <p> {Counter_3} </p>
                  <span
                    onClick={() => setCounter_3((Counter_3) => Counter_3 + 1)}
                    className="px-4 cursor-pointer"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12 w-full h-auto border-2 rounded-3xl mb-16 md:mb-0">
            <div className="w-full h-auto px-4 sm:px-7 py-6">
              <h1 className=" text-3xl sm:text-4xl font-bold">Order Summary</h1>
              <div className="w-full h-auto mt-7">
                <div className="w-full h-auto flex justify-between py-3 sm:py-4">
                  <h1 className="text-xl sm:text-2xl text-gray-500">
                    Subtotal
                  </h1>
                  <h1 className="text-xl sm:text-2xl font-bold">$565</h1>
                </div>
                <div className="w-full h-auto flex justify-between py-3 sm:py-4">
                  <h1 className="text-xl sm:text-2xl text-gray-500">
                    Discount (-20%)
                  </h1>
                  <h1 className="text-xl sm:text-2xl font-bold text-red-500">
                    -$113
                  </h1>
                </div>
                <div className="w-full h-auto flex justify-between pt-3 pb-5 sm:pt-4  sm:pb-7 border-b-2">
                  <h1 className="text-xl sm:text-2xl text-gray-500">
                    Delivery Fee
                  </h1>
                  <h1 className="text-xl sm:text-2xl font-bold">$15</h1>
                </div>
                <div className="w-full h-auto flex justify-between pt-5 pb-3 sm:pt-6 sm:pb-4">
                  <h1 className="text-xl sm:text-2xl ">Total</h1>
                  <h1 className="text-xl sm:text-2xl font-bold">$467</h1>
                </div>
              </div>
              <div className="w-full h-auto flex justify-between  relative my-5  sm:my-6 items-center gap-3 sm:gap-7">
                <div className="w-full border-2 px-1 sm:px-4 bg-gray-200  flex gap-3 rounded-3xl items-center">
                  <GoTag className="text-xl sm:text-2xl text-gray-500" />
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Add promo code"
                    className=" w-full outline-none h-full py-3 sm:py-4 placeholder:text-sm sm:placeholder:text-md   lg:placeholder:text-lg  xl:placeholder:text-xl text-xl bg-transparent"
                  />
                </div>
                {errors?.name && (
                  <p className="text-black text-sm absolute top-16 left-5 ">
                    Please enter password
                  </p>
                )}
                <button
                  onClick={handleSubmit(onSubmite)}
                  className="py-3 sm:py-4 bg-gray-200 px-6 xl:px-8 text-lg sm:text-xl rounded-3xl hover:bg-black  hover:text-white transition cursor-pointer"
                >
                  Apply
                </button>
              </div>
              <Link
                to={"/"}
                className="w-full h-auto flex items-center gap-2 bg-gray-200 mt-7 sm:mt-10 py-3 sm:py-4 hover:bg-black hover:text-white transition text-xl justify-center rounded-3xl"
              >
                Go to Checkout <FaArrowRight />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary__Last;
