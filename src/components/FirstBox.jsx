import React, { useState } from 'react'

function FirstBox() {
  const [OpenUp, setOpenUp] = useState(false);
  const Links = [
    { name: "Sm-Size", link: "/" },
    { name: "Md-Size", link: "/" },
    { name: "Lg-Size", link: "/" },
    { name: "Xl-Size", link: "/" },
    { name: "2xl-Size", link: "/" },
  ];
  return (
    <>
    <div
            onClick={() => setOpenUp(!OpenUp)}
            className="w-full h-auto relative  z-[80] bg-white"
          >
            <div className="w-full h-auto text-gray-500 bg-white cursor-pointer hover:bg-gray-100  py-3 px-10   relative z-10">
              <h1 className="text-2xl  ">T-shirts</h1>
              <div className="absolute top-3 right-10 text-2xl">
                <ion-icon
                  name={
                    OpenUp ? "chevron-down-outline" : "chevron-forward-outline"
                  }
                ></ion-icon>
              </div>
            </div>
            <div
              className={`w-full h-auto  cursor-pointer absolute -z-1 bg-white duration-500 ${
                OpenUp ? "top-[52px]" : "top-[-300px]"
              } `}
            >
              {Links.map((Link) => (
                <li
                  key={Link.name}
                  className="list-none  text-xl text-gray-500 hover:bg-gray-100  py-3 px-10 "
                >
                  <a href={Links.Link}>{Link.name}</a>
                </li>
              ))}
            </div>
          </div>
          </>
  )
}

export default FirstBox