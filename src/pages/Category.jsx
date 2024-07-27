import React, { useEffect, useState } from "react";
import Graphic from "../components/Graphic";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import E__9 from "../assets/E__commimags/E__9.png";
import E__15 from "../assets/E__commimags/E__15.png";
import E__8 from "../assets/E__commimags/E__8.png";
import E__12 from "../assets/E__commimags/E__12.png";
import Layout__File1 from "../components/Layout__File1";
import Footer from "../components/Footer";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

function Category() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Graphic product={product} />
      <Reviews product={product} />
      <div className="w-full h-auto text-center  2xl:px-32 sm:pt-20 2xl:pb-0 xl:px-20 xl:pb-0  lg:px-16  lg:pb-0 md:px-10 md:pb-0 sm:px-10 sm:pb-0 p-5">
        <h1 className="2xl:text-6xl sm:text-5xl text-4xl font-bold text-center mb-20">
          NEW ARRIVALS
        </h1>
        <div className="h-auto flex flex-wrap lg:flex-nowrap gap-7 justify-center">
          <Layout__File1
            name="NEW ARRIVALS"
            img={E__9}
            title="T-SHIRT WITH TAPE DETAILS"
            number="4.5/5"
            text="$120"
            offer="$232"
            price="-20%"
          />

          <Layout__File1
            name="NEW ARRIVALS"
            img={E__15}
            title="SKINNY FIT JEANS"
            number="3.5/5"
            text="$240"
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
            text="$130"
            offer="$150"
            price="-30%"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Category;
