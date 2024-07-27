import React, { useState } from 'react'

function SecoundBox() {
  const [SecoundUp, setSecoundUp] = useState(false);
  const Secound = [
    { name: "Sm-Size-Short", link: "/" },
    { name: "Md-Size-Short", link: "/" },
    { name: "Lg-Size-Short", link: "/" },
    { name: "Xl-Size-Short", link: "/" },
    { name: "2xl-Size-Short", link: "/" },
  ];
  return (
    <>
     <div
            onClick={() => setSecoundUp(!SecoundUp)}
            className="w-full h-auto relative z-[70] bg-white"
          >
            <div className="w-full h-auto text-gray-500 bg-white cursor-pointer hover:bg-gray-100  py-3 px-10  relative z-10">
              <h1 className="text-2xl  ">Shorts</h1>
              <div className="absolute top-3 right-10 text-2xl">
                <ion-icon
                  name={
                    SecoundUp
                      ? "chevron-down-outline"
                      : "chevron-forward-outline"
                  }
                ></ion-icon>
              </div>
            </div>
            <div
              className={`w-full h-auto  cursor-pointer absolute -z-1 bg-white duration-500 ${
                SecoundUp ? "top-[52px]" : "top-[-300px]"
              } `}
            >
              {Secound.map((Link) => (
                <li
                  key={Link.name}
                  className="list-none  text-xl text-gray-500 hover:bg-gray-100  py-3 px-10 "
                >
                  <a href={Secound.Link}>{Link.name}</a>
                </li>
              ))}
            </div>
          </div>
    </>
  )
}

export default SecoundBox