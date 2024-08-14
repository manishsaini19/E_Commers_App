import React from "react";
import Layout__File1 from "../components/Layout__File1";
import HAPPY from "./HAPPY";

function ProductLayout({ products, isLoading, heading }) {
  return (
    <div className="border-b-2 pb-20">
      <h1 className="text-4xl font-bold text-center mb-20 uppercase">
        {heading}
      </h1>

      <div className="grid grid-cols-4  gap-5 justify-center">
        {isLoading
          ? [...new Array(4)].map((_, idx) => (
            <div className="grid grid-cols-4 mb-2" key={idx}>
              <div
                role="status"
                class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
              >
                <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg
                    class="w-60 h-60 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>

                <span class="sr-only">Loading...</span>
              </div>
            </div>
          ))
          : products?.map((product) => (
            <Layout__File1
              key={product.id}
              name="NEW ARRIVALS"
              id={product.id}
              img={product.image}
              title={product.title}
              number={product.rating.rate}
              text={`$${product.price}`}
            />
          ))}
      </div>
      <button className="sm:w-72 w-full py-4 px-24 sm:py-4  sm:px-24 rounded-full border-2 text-center mt-10 hover:bg-black hover:text-white transition ">
        View All
      </button>
    </div>
  );
}

function Layout({ products, isLoading }) {
  return (
    <div className="w-full h-auto text-center p-5 flex flex-col gap-5 mt-5">
      <ProductLayout
        products={products}
        isLoading={isLoading}
        heading={"new arrivals"}
      />
      <ProductLayout
        products={products}
        isLoading={isLoading}
        heading={"top selling"}
      />
    </div>
  );
}

export default Layout;
