import React from 'react'
import image__11 from '../assets/E__commimags/image11.png'
import image__13 from '../assets/E__commimags/image13.png'
import image__12 from '../assets/E__commimags/image12.png'
import image__14 from '../assets/E__commimags/image14.png'
import { Link } from 'react-router-dom'

// const BROWS =[
//     {
//         img:image__11
//     },
//     {
//         img:image__13
//     },
// ]
function BROWSE({id}) {
  return (
   <>
   <div className='w-full h-auto  2xl:px-32 xl:px-20 lg:px-16 md:px-10 sm:px-8 px-5 mb-20'>
    <div className='bg-gray-100 rounded-3xl mt-20 w-full h-auto 2xl:px-20 xl:px-16 lg:px-12 md:px-5 sm:px-4  px-3 py-10 sm:py-10  md:py-10 lg:py-14 xl:py-16 2xl:py-16'>
       <h1 className='text-center  font-bold uppercase mb-16 2xl:text-6xl xl:text-5xl lg:text-5xl text-5xl'>BROWSE BY dress STYLE</h1>
       {/* <div className='flex w-full h-auto'>
       {BROWS.map((item) => (
 <div className='bg-red-400 w-full h-auto '  key={item.title} item={item} >
 <img src={item.img} alt="" className='w-6/12' />
</div>  
       ))}
</div> */}
      <div className=' w-full h-auto sm:flex-wrap md:flex   xl:gap-10 lg:gap-10 gap-20 justify-center'>
        <Link to={`/category/${id}`}  className='w-full h-auto sm:w-full md:w-4/12  rounded-3xl  sm:mb-10 mb-10 md:mb-0 relative  '>
        <img src={image__11} className='w-full  h-96  rounded-3xl object-cover  bg-white hover:bg-gray-200 transition-transform' alt="" />
        <h1 className='absolute top-7 left-10 text-2xl lg:text-3xl font-bold'>Casual</h1>
        </Link>
        <Link to={`/category/${id}`}  className='w-full h-auto sm:w-full md:w-7/12 mt-10   rounded-3xl  md:mb-0 relative'>
        <img src={image__13} className='w-full  h-96 rounded-3xl object-cover  bg-white hover:bg-gray-200 transition-transform' alt="" />
        <h1 className='absolute top-7 left-10 text-2xl lg:text-3xl font-bold'>Formal</h1>
        </Link>
      </div>
      <div className=' w-full h-auto sm:flex-wrap  md:flex   xl:gap-20 lg:gap-10 gap-20 justify-center mb-10 mt-10 md:mt-10'>
      <Link to={`/category/${id}`}  className='w-full h-auto  sm:w-full md:w-7/12 rounded-3xl  md:mb-0 relative '>
        <img src={image__12} className='w-full  h-96 rounded-3xl object-cover  bg-white hover:bg-gray-200 transition-transform' alt="" />
        <h1 className='absolute top-7 left-10 text-2xl lg:text-3xl font-bold'>Party</h1>
        </Link>  
        <Link to={`/category/${id}`}  className='w-full h-auto sm:w-full md:w-4/12 rounded-3xl  mt-10 sm:mt-10 md:mt-0  relative'>
        <img src={image__14} className='w-full  h-96  rounded-3xl object-cover  bg-white hover:bg-gray-200 transition-transform'  alt="" />
        <h1 className='absolute top-7 left-10 text-2xl lg:text-3xl  font-bold'>Gym</h1>
        </Link>
      </div>
    </div>
   </div>
   </>
)
}

export default BROWSE