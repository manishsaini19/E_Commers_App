import React from "react";
import Logo from "../assets/E__commimags/SHOP.CO.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Badge from '../assets/E__commimags/Badge.png'
import Mast from '../assets/E__commimags/Mastercard.png'
import Pay from '../assets/E__commimags/Paypal.png'
import Paytem from '../assets/E__commimags/Pay.png'
import { MdOutlineMail } from "react-icons/md";
import Google from '../assets/E__commimags/Google.png'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Foot = [
    {
     name1:"Company",
     name2 :"About",
     name3:"Features",
     name4:"Works",
     name5:"Career",
    },
    {
        name1:"Help",
        name2 :"Customer Support",
        name3:"Delivery Details",
        name4:"Terms & Conditions",
        name5:"Privacy Policy",
       }, {
        name1:"FAQ",
        name2 :"Account",
        name3:"FeatuManage Deliveriesres",
        name4:"Orders",
        name5:"Payments",
       }, {
        name1:"Resources",
        name2 :"Free eBooks",
        name3:"Development Tutorial ",
        name4:"How to - Blog",
        name5:"Youtube Playlist ",
       }
]
const Footer = () => {
 const {register , handleSubmit , formState:{errors}  } = useForm()
 const onsubmit = (data) => {
  console.log(data, "Thanks");
 }
  return (
    <>
      <div className="bg-gray-200 w-full h-auto pt-60  sm:pt-52 md:pt-40 relative mt-40">
     <div className="bg-black w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-10/12 2xl:h-56 absolute -top-40 sm:left-10 md:-top-24 left-5 md:left-10 lg:left-10 xl:left-16 2xl:left-36 rounded-3xl ">
        <div className="w-full h-auto  sm:flex-none md:flex py-8 px-5   sm:px-5 sm:py-5 md:px-3 xl:py-8 2xl:py-8 items-center">
        <div className="w-full h-auto p-5 ">
            <h1 className="text-white text-3xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-4xl  text-center  sm:text-center md:text-start font-bold leading-tight">STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
        </div>
        <div className="w-full h-auto text-center">
       <div className="flex m-auto py-3 sm:py-1 md:py-2 px-5  sm:w-full md:w-full lg:w-full xl:w-9/12 ml-90 bg-white rounded-full items-center mb-5">
       <MdOutlineMail  />
       <input type="text" name="email" {...register("email" , {required:true})} placeholder="Enter Your email Address" className=" w-full outline-none rounded-full bg-none  px-3  sm:py-2  sm:px-3 md:px-2 md:py-2 lg:px-2 lg:py-2"  />
       {errors?.email && <p  className=" text-xs"> Places Enter email</p> }
       </div>
       <button onClick={handleSubmit(onsubmit)} className="w-full md:w-full sm:w-full lg:w-full xl:w-9/12 rounded-full outline-none py-3 px-5 md:px-5 md:py-4 lg:px-5 lg:py-4 bg-white hover:bg-gray-200 font-bold">Subscribe to Newsletter</button>
        </div>
        </div>
        </div>
        <div className="w-11/12 sm:w-11/12 md:w-11/12 lg:10/12  2xl:w-10/12 h-auto m-auto ">
          <div className="w-full h-auto xl:grid xl:grid-cols-5 md:grid md:grid-cols-3   sm:grid sm:grid-cols-2 grid grid-cols-1  text-center sm:text-start  ">
            <div className="  w-full h-auto mb-10 ">
              <div className="flex justify-center sm:justify-start">
                <Link to={"/"}>
              <img src={Logo} alt=""   />
                </Link>
              </div>
              <p className="text-md mt-6">
                We have clothes that suits your style and  which you’re proud to
                wear. From  women to men.
              </p>
              <div className="flex  gap-3 mt-10 justify-center sm:justify-start ">
                <Link to={"https://www.instagram.com"} >
                <FaInstagram  className="w-10 h-10 p-2 rounded-3xl bg-white text-black hover:bg-black hover:text-white cursor-pointer hover:scale-125 transition-transform" />
                </Link>
                <Link to={"https://www.facebook.com"}>
                <FaFacebookF className="w-10 h-10 p-2 rounded-3xl bg-white text-black hover:bg-black hover:text-white cursor-pointer hover:scale-125 transition-transform" />              
                </Link>
                <Link to={"https://www.twitter.com"}>
                <FaTwitter className="w-10 h-10 p-2 rounded-3xl bg-white text-black hover:bg-black hover:text-white cursor-pointer hover:scale-125 transition-transform"  />
                </Link>
                <Link to={"https://github.com"}>
                <FaGithub className="w-10 h-10 p-2 rounded-3xl bg-white text-black hover:bg-black hover:text-white cursor-pointer hover:scale-125 transition-transform" />               
                </Link>
              </div>
            </div>         
            <div className=' w-full h-auto leading-10  xl:pl-20 md:pl-20 sm:pl-20 '>
                <h1 className="text-xl mb-3 uppercase cursor-pointer">Company</h1>
                <h2 >About</h2>
                <h2>Features </h2>
                <h2>Works</h2>
                <h2>Career</h2>
            </div>
            <div className='  w-full h-auto leading-10 xl:pl-20 md:pl-20 pt-10 sm:pt-0'>
                <h1 className="text-xl mb-3 uppercase cursor-pointer">Help</h1>
                <h2>Customer Support</h2>
                <h2>Delivery Details </h2>
                <h2>Terms & Conditions</h2>
                <h2>Privacy Policy</h2>
            </div>
            <div className='  w-full h-auto leading-10 xl:pl-20 lg:pl-0 pt-10 sm:pt-0'>
                <h1 className="text-xl mb-3 uppercase cursor-pointer">FAQ</h1>
                <h2>Account</h2>
                <h2>Manage Deliveries </h2>
                <h2>Orders</h2>
                <h2>Payments</h2>
            </div>
            <div className='  w-full h-auto leading-10 xl:pl-20 lg:pl-0 sm:mt-10 md:mt-0 pt-10 pb-10 sm:pt-0'>
                <h1 className="text-xl mb-3 uppercase cursor-pointer">Resources</h1>
                <h2>Free eBooks</h2>
                <h2>Development Tutorial </h2>
                <h2>How to - Blog</h2>
                <h2>Youtube Playlist    </h2>
            </div>
          </div>
          <div className=" p-5 w-full h-auto  items-center justify-center text-center md:flex sm:justify-center sm:text-center md:p-2 md:justify-between lg:flex lg:justify-between   border-t-2 border-gray-300">
            <p className="text-gray-600">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex gap-4 justify-center sm:justify-center  flex-wrap items-center md:gap-3 lg:gap-10 ">
            <Link to={"https://visa.com"}>       
                <img src={Badge} className="w-20 cursor-pointer pt-2 hover:scale-125 transition-transform" alt="" />
            </Link>
            <Link to={"https://zara.com"}>           
                <img src={Mast} className="w-12 h-9 rounded-md cursor-pointer bg-white p-2 hover:scale-125 transition-transform" alt="" />
            </Link>
            <Link to={"https://pay.com"}>            
                <img src={Pay}className="w-14 h-9 rounded-md cursor-pointer bg-white p-2 hover:scale-125 transition-transform" alt="" />
            </Link>
            <Link to={"https://paytem.com"}>          
                <img src={Paytem}className="w-14 h-9 rounded-md cursor-pointer bg-white p-2 hover:scale-125 transition-transform" alt="" />
            </Link>
            <Link to={"https://google.com"}>           
                <img src={Google}className="w-14 h-9 rounded-md cursor-pointer bg-white p-2 hover:scale-125 transition-transform" alt="" />
            </Link>
            </div>
          </div>
        </div>
        </div>
    </>
  
);
};

export default Footer;
