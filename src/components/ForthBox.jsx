import React, { useState } from 'react'

function ForthBox() {
  const [ForthUp, setForthUp] = useState(false);
  const Forth = [
    { name: "Sm-Size-Hoodie", link: "/" },
    { name: "Md-Size-Hoodie", link: "/" },
    { name: "Lg-Size-Hoodie", link: "/" },
    { name: "Xl-Size-Hoodie", link: "/" },
    { name: "2xl-Size-Hoodie", link: "/" },
  ];
  return (
    <>
      <div
            onClick={() => setForthUp(!ForthUp)}
            className="w-full h-auto relative z-[50] bg-white"
          >
            <div className="w-full h-auto text-gray-500 bg-white cursor-pointer hover:bg-gray-100  py-3 px-10  relative z-10">
              <h1 className="text-2xl  ">Hoodie</h1>
              <div className="absolute top-3 right-10 text-2xl">
                <ion-icon
                  name={
                    ForthUp ? "chevron-down-outline" : "chevron-forward-outline"
                  }
                ></ion-icon>
              </div>
            </div>
            <div
              className={`w-full h-auto  cursor-pointer absolute -z-1 bg-white duration-500 ${
                ForthUp ? "top-[52px]" : "top-[-300px]"
              } `}
            >
              {Forth.map((Link) => (
                <li
                  key={Link.name}
                  className="list-none  text-xl text-gray-500 hover:bg-gray-100  py-3 px-10 "
                >
                  <a href={Forth.Link}>{Link.name}</a>
                </li>
              ))}
            </div>
          </div>
          </>
  )
}

export default ForthBox