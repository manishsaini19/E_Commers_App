import React, { useState } from 'react'

function ThirdBox() {
  const [ThirdUp, setThirdUp] = useState(false);
  const Third = [
    { name: "Sm-Size-Shirts", link: "/" },
    { name: "Md-Size-Shirts", link: "/" },
    { name: "Lg-Size-Shirts", link: "/" },
    { name: "Xl-Size-Shirts", link: "/" },
    { name: "2xl-Size-Shirts", link: "/" },
  ];
  return (
    <>
      <div
            onClick={() => setThirdUp(!ThirdUp)}
            className="w-full h-auto relative z-[60] bg-white"
          >
            <div className="w-full h-auto text-gray-500 bg-white cursor-pointer hover:bg-gray-100  py-3 px-10  relative z-10">
              <h1 className="text-2xl  ">Shirts</h1>
              <div className="absolute top-3 right-10 text-2xl">
                <ion-icon
                  name={
                    ThirdUp ? "chevron-down-outline" : "chevron-forward-outline"
                  }
                ></ion-icon>
              </div>
            </div>
            <div
              className={`w-full h-auto  cursor-pointer absolute -z-1 bg-white duration-500 ${
                ThirdUp ? "top-[52px]" : "top-[-300px]"
              } `}
            >
              {Third.map((Link) => (
                <li
                  key={Link.name}
                  className="list-none  text-xl text-gray-500 hover:bg-gray-100  py-3 px-10 "
                >
                  <a href={Third.Link}>{Link.name}</a>
                </li>
              ))}
            </div>
          </div>
    </>
  )
}

export default ThirdBox