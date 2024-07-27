import React from 'react'
import Layout__File1 from "./Layout__File1";
import E__20 from "../assets/E__commimags/image8.png";
import E__2 from "../assets/E__commimags/Frame_3.png";
import E__3 from "../assets/E__commimags/Frame_4.png";
import E__19 from "../assets/E__commimags/Frame_5.png";
import E__18 from "../assets/E__commimags/Frame_6.png";
import E__1 from "../assets/E__commimags/Frame_7.png";
import E__15 from "../assets/E__commimags/E__15.png";
import E__8 from "../assets/E__commimags/E__8.png";
import E__12 from "../assets/E__commimags/E__12.png";
import { FaChevronDown } from "react-icons/fa6";
import Vecter_4 from "../assets/E__commimags/Vector4.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from 'react-router-dom';
function Right__Box() {
  return (
    <>
    <div className=" w-full lg:w-9/12 h-auto pl-0 lg:pl-10 ">
            <div className="w-full  flex justify-between items-center">
                <h1 className="text-xl sm:text-4xl font-bold">Casual</h1>
                <div className=" flex  items-center gap-5">
                  <p className="text-sm  sm:text-xl text-gray-500">Showing 1-10 of 100 Products</p>
                  <p className="md:flex text-xl text-gray-500 hidden">Sort by: <span className="flex items-center text-gray-800 px-2 cursor-pointer">Most Popular  <FaChevronDown className="text-sm ml-2" /></span></p>
                </div>
                <div className='lg:hidden'>
                <img src={Vecter_4} className="w-6 sm:w-10 bg-gray-200 p-1 rounded-full cursor-pointer " alt="" />
                </div>
            </div>
            <div className="w-full h-auto text-center  pt-5   ">
              <div className="h-auto  flex gap-5 flex-wrap md:flex-nowrap">
               <Layout__File1
                  name="NEW ARRIVALS"
                  img={E__15}
                  title="SKINNY FIT JEANS"
                  number="3.5/5"
                  text="$145"
                />
                <Layout__File1
                  name="NEW ARRIVALS"
                  img={E__8}
                  title="CHECKERED SHIRT"
                  number="4.5/5"
                  text="$180"
                />
                <Layout__File1
                  name="NEW ARRIVALS"
                  img={E__12}
                  title="SLEEVE STRIPED T-SHIRT"
                  number="4.5/5"
                  text="$120"
                  offer="$150"
                  price="-30%"
                />
              </div>
            </div>
            <div className="w-full h-auto text-center  pt-10 ">
              <div className="h-auto  flex gap-5 flex-wrap md:flex-nowrap">
                <Layout__File1
                  name="NEW ARRIVALS"
                  img={E__20}
                  title="SKINNY FIT JEANS"
                  number="3.5/5"
                  text="$240"
                  offer="$260"
                  price="-20%"
                />
                <Layout__File1
                  name="NEW ARRIVALS"
                  img={E__2}
                  title="CHECKERED SHIRT"
                  number="4.5/5"
                  text="$180"
                />
                <Layout__File1
                  name="NEW ARRIVALS"
                  img={E__3}
                  title="SLEEVE STRIPED T-SHIRT"
                  number="4.5/5"
                  text="$130"
                  offer="$160"
                  price="-30%"
                />
              </div>
            </div>
            <div className="w-full h-auto text-center pt-10 ">
              <div className="h-auto  flex gap-5 flex-wrap md:flex-nowrap">
                <Layout__File1
                  name="NEW ARRIVALS"
                  img={E__19}
                  title="VERTICAL STRIPED SHIRT"
                  number="5.0/5"
                  text="$212"
                  offer="$232"
                  price="-20%"
                />
                <Layout__File1
                  name="NEW ARRIVALS"
                  img={E__18}
                  title="COURAGE GRAPHIC T-SHIRT"
                  number="4.0/5"
                  text="$145"
                />
                <Layout__File1
                  name="NEW ARRIVALS"
                  img={E__1}
                  title="LOOSE FIT BERMUDA SHORTS"
                  number="3.0/5"
                  text="$80"
                />
              </div>
            </div>
            <div className="w-full h-auto border-t-2 py-5 mt-10 md:flex md:justify-between items-center sm:mb-5">
                <Link to={"/Category"} className='flex gap-5 justify-center mb-5 md:mb-0  md:w-32 items-center md:justify-between border-2 py-2 px-4 rounded-3xl shadow-md  hover:bg-black hover:text-white transition'> <FaArrowLeft />Previous</Link>
                <div className='text-2xl flex items-center text-gray-500 justify-center'>
                  <Link to={"/"} className='py-2 px-4 rounded-2xl hover:bg-gray-200 hover:shadow-xl transition cursor-pointer'>1</Link>
                  <Link to={"/Category"}  className='py-2 px-4 rounded-2xl hover:bg-gray-200 hover:shadow-xl transition  cursor-pointer'>2</Link>
                  <Link to={"/Card"}  className='py-2 px-4 rounded-2xl hover:bg-gray-200 hover:shadow-xl transition  cursor-pointer'>3</Link>
                  <HiOutlineDotsHorizontal className='mt-3 mx-3 cursor-pointer hover:scale-150 transition'/>
                  <Link to={"/Product"}  className='py-2 px-4 rounded-2xl hover:bg-gray-200 hover:shadow-xl transition  cursor-pointer'>8</Link>
                  <Link to={"/"}  className='py-2 px-4 rounded-2xl hover:bg-gray-200 hover:shadow-xl transition  cursor-pointer'>9</Link>
                  <Link to={"/LoginForm"}  className='py-2 px-4 rounded-2xl hover:bg-gray-200 hover:shadow-xl transition  cursor-pointer'>10</Link>
                </div>
                <Link to={"/Product"} className='flex gap-5 justify-center mb-5 md:mb-0  md:w-32 items-center md:justify-between border-2 md:mt-0 mt-3 py-2 px-4 rounded-3xl shadow-md  hover:bg-black hover:text-white transition'> Next <FaArrowRight /></Link>
                
            </div>
          </div>
    </>
  )
}

export default Right__Box