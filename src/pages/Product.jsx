import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mini__Home from '../components/Mini__Home';
import Summary__Last from '../components/Summary__Last';

function Product() {
  return (
    <>
    <Navbar/>
    <div className='2xl:w-10/12  mt-20  w-11/12 h-auto mx-auto'>
     <Mini__Home name={"Cart"}/>
    </div>
     <Summary__Last/>
    <Footer/>
    </>
  )
}

export default Product