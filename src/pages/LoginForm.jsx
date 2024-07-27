import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
function LoginForm() {
    const {register , handleSubmit , formState:{errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data );
    }
  return (
    <>
    <div className=' w-full h-screen flex justify-center'>
        <div className='w-96 h-auto border-2 border-gray-300 shadow-2xl  rounded-3xl py-5 px-2 sm:px-5 mx-5 my-auto  text-center'>
            <h1 className='text-3xl text-gray-600 font-bold'>Login </h1>
            <div className='w-full border-2 shadow-lg py-3 px-5  rounded-3xl mt-6 flex  gap-3 items-center relative' > 
            <TfiEmail className='text-xl text-gray-500'/>
            <input type="email" {...register("email" , {required:true})} placeholder='Email' className='w-full text-2xl placeholder:text-2xl outline-none' />
            {errors?.email && <p className='absolute top-16 left-5 '>Enter Your email</p>}
          </div>
            <div className='w-full border-2 shadow-lg py-3 px-5  rounded-3xl mt-10 flex  gap-3 items-center relative'>
            <RiLockPasswordLine className='text-xl text-gray-500'/>
            <input type="Password"  {...register("Password" , {required:true})}   placeholder='Password' className='w-full text-2xl placeholder:text-2xl outline-none' />
            {errors?.Password && <p className='absolute top-16 left-5 '>Enter Your Password</p>}
            </div>
            <button onClick={handleSubmit(onSubmit)} className='w-full border-2 text-gray-500 shadow-lg py-3 px-5 text-2xl hover:bg-black transition hover:text-white outline-none rounded-3xl mt-10'>Shop Now</button>
           <Link to={"/"}>
           <button className='w-full border-2 text-gray-500 shadow-lg py-3 px-5 text-2xl hover:bg-black transition hover:text-white outline-none rounded-3xl mt-7'>Back Now</button>
           </Link>
        </div>
    </div>
    </>
  )
}

export default LoginForm