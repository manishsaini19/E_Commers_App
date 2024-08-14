import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Commoncompo from "../components/Commoncompo";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import axios from "axios";
import BrowseStyle from "../components/BrowseStyle";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products?limit=4",
      );
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error, "error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Commoncompo />
      <Layout products={products} isLoading={isLoading} />
      <BrowseStyle />
      <Footer />
    </div>
  );
}

export default Home;
