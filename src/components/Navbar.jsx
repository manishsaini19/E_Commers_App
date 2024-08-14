import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/E__commimags/SHOP.CO.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const Links = [
    { name: "On Sale", link: "/category/9" },
    { name: "New Arrivals", link: "/Card" },
    { name: "Brands", link: "/Product" },
  ];
  const [usedata, setUseData] = useState({
    search: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUseData({
      ...usedata,
      [name]: value,
    });
  };
  const [Open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-auto  fixed top-0 left-0 bg-white   z-[110]">
        <div className="flex items-center justify-between 2xl:py-4 py-6 bg-white w-full md:pl-0 sm:pl-24 pl-16 md:px-0 px-5  md:w-11/12 2xl:w-10/12 mx-auto">
          <div>
            <Link to={"/"}>
              <img src={Logo} className="w-28" alt="" />
            </Link>
          </div>
          <div
            onClick={() => setOpen(!Open)}
            className="text-4xl absolute top-5 left-5 sm:left-10 cursor-pointer md:hidden"
          >
            <ion-icon name={Open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center gap-7 absolute md:static bg-white w-full md:z-auto z-[-2] left-0 md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${Open ? "top-[70px] opacity-100" : "top-[-300px] md:opacity-100 opacity-100"}`}
          >
            {Links.map((link, idx) => (
              <li className=" md:my-0 my-5 md:ml-3" key={idx}>
                <Link to={link.link} className="hover:underline ursor-pointer">
                  {link.name}
                </Link>
              </li>
            ))}
            <div className=" items-center bg-gray-100 rounded-3xl w-[500px]  px-3 hidden xl:hidden 2xl:flex">
              <FiSearch className="text-2xl mr-2" />
              <input
                type="search"
                onChange={handleChange}
                value={usedata.search}
                name="search"
                placeholder="Search for Products"
                className="w-full h-auto p-3 bg-transparent outline-none "
              />
            </div>
          </ul>
          <div className="flex  items-center gap-2 md:gap-5 ">
            <FaSearch className="2xl:hidden block cursor-pointer hover:scale-125 transition-transform" />
            <Link to={"/Product"}>
              <MdShoppingCart className="text-2xl md:text-3xl cursor-pointer hover:scale-125 transition-transform" />
            </Link>
            <Link to={"/LoginForm"}>
              <CgProfile className=" text-2xl md:text-3xl  cursor-pointer hover:scale-125 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
