import React, { useEffect, useState } from "react";
import { TbMathGreater } from "react-icons/tb";
import E__5 from "../assets/E__commimags/E__5.png";
import E__10 from "../assets/E__commimags/E__10.png";
import E__16 from "../assets/E__commimags/E__16.png";
import E__1 from "../assets/E__commimags/E__1.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
function Graphic({ product }) {
  let Links = [
    { name: "Home ", link: "/" },
    { name: "Shop ", link: "/category/:id" },
    { name: "Men ", link: "/Card" },
    { name: "T-shirts ", link: "/Product" },
  ];
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (product) {
      setCounter(product.price);
      setCounter(product.price);
      setCounter(product.price);
    }
  }, [product]);
  return (
    <>
      <div className="  mt-20  w-full h-auto 2xl:px-0 md:px-10 ">
        <div className=" 2xl:w-10/12 xl:11/12 m-auto h-auto py-5 px-2 sm:p-5 border-t-2">
          <div className="flex justify-start gap-2 sm:gap-5">
            {Links.map((link) => (
              <li
                key={link.name}
                className="list-none flex text-sm sm:text-md items-center gap-3  hover:scale-125 transition uppercase"
              >
                <a href={link.link}>{link.name}</a>
                <TbMathGreater className="size-3" />
              </li>
            ))}
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto h-auto my-10 lg:w-10/12 lg:flex justify-between gap-10">
        <div className="lg:w-6/12 h-auto flex flex-col-reverse sm:flex sm:flex-row  gap-5 ">
          <div className="sm:w-3/12 sm:flex sm:flex-col flex flex-row  gap-3">
            <div className="w-full h-auto  p-5 rounded-3xl hover:scale-105 transition hover:shadow-md">
              <img
                src={product?.image}
                alt=""
                className=" bg-gray-100 w-40  "
              />
            </div>
            <div className="w-full h-auto  p-5 hover:scale-105  transition hover:shadow-md  rounded-3xl">
              <img src={product?.image} alt="" className=" w-40" />
            </div>
            <div className="w-full h-auto  p-5 hover:scale-105    transition hover:shadow-md  rounded-3xl">
              <img src={product?.image} alt="" className="w-40" />
            </div>
          </div>
          <div className="sm:w-9/12 w-full p-10 h-auto hover:scale-105 transition hover:shadow-md rounded-3xl">
            <img
              src={product?.image}
              alt=""
              className="w-full  object-cover rounded-3xl "
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 h-auto mt-10 lg:mt-0">
          <div className=" w-full h-auto  ">
            <div className="border-b-2 ">
              <h6 className="sm:text-5xl text-4xl  uppercase font-bold">
                {product?.title}
              </h6>
              <div className="flex  gap-2 items-center mb-4 mt-4 text-2xl text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
                <h1 className=" text-black">{product?.rating?.rate}/5</h1>
              </div>
              <div className="flex gap-5 items-center ">
                <h1 className="text-4xl  font-bold">$ {product?.price}</h1>
                <s className="text-4xl  font-bold text-gray-300">
                  {" "}
                  {product?.price}
                </s>
                <p className="text-xl  bg-red-200 text-red-600 py-1 px-3 rounded-3xl">
                  -{product?.price}
                </p>
              </div>
              <p className="text-xl  text-gray-500 pt-5 pb-5 ">
                {product?.description}
              </p>
            </div>
            <div className="border-b-2 py-7">
              <h1 className="text-gray-500 text-2xl   ">Select Colors</h1>
              <div className="flex gap-3 mt-5">
                <span className="p-4  border-2 bg-gray-900 transition cursor-pointer rounded-full text-white hover:scale-110">
                  <FaCheck />
                </span>
                <span className="p-4  border-2 bg-green-900 transition cursor-pointer rounded-full text-white hover:scale-110">
                  <FaCheck />
                </span>
                <span className="p-4  border-2 bg-blue-900 transition cursor-pointer rounded-full text-white hover:scale-110">
                  <FaCheck />
                </span>
              </div>
            </div>
            <div className="border-b-2 py-7 ">
              <p className="text-gray-500 text-2xl pb-4">Choose Size</p>
              <div className="flex gap-5 ">
                <button className="bg-gray-200 py-4 sm:text-xl  w-32 text-gray-700 rounded-3xl hover:bg-black hover:text-white transition outline-none">
                  Small
                </button>
                <button className="bg-gray-200 py-4  sm:text-xl  w-32 text-gray-700 rounded-3xl hover:bg-black hover:text-white transition outline-none">
                  Medium
                </button>
                <button className="bg-gray-200 py-4  sm:text-xl  w-32 text-gray-700 rounded-3xl hover:bg-black hover:text-white transition outline-none">
                  Large
                </button>
                <button className="bg-gray-200 py-4 sm:text-xl  w-32 text-gray-700 rounded-3xl hover:bg-black hover:text-white transition outline-none">
                  X-Large{" "}
                </button>
              </div>
            </div>
            <div className="  pt-7  flex gap-5   justify-between">
              <div className=" text-2xl sm:text-3xl bg-gray-200 w-48  flex  items-center cursor-pointer justify-center rounded-3xl hover:bg-black hover:text-white transition py-4">
                <span
                  onClick={() => setCounter((counter) => counter - 1)}
                  className="cursor-pointer px-3  sm:px-5"
                >
                  -
                </span>
                <p> {counter}</p>
                <span
                  onClick={() => setCounter((counter) => counter + 1)}
                  className="cursor-pointer px-3 sm:px-5"
                >
                  +
                </span>
              </div>
              <button className="w-[500px] text-xl sm:text-2xl  bg-gray-200 py-4   rounded-3xl hover:bg-black hover:text-white transition outline-none">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graphic;
