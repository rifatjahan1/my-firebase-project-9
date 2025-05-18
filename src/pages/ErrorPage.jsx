
import React from 'react'
import { Link, useRouteError } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'




const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <Navbar></Navbar>
      <div className='flex justify-center '>
        <img src="https://i.ibb.co/tPHH0h9Z/rsz-404-error-lost-in-space-amico.png" alt="" />
      </div>
      <div className='pb-16 text-center '>
        <div className='mb-8 lg:flex items-center justify-center gap-2'>
        <div className=' text-3xl font-bold text-pink-400'>
          {error?.status || 404}
        </div>
        <div className=' text-2xl font-bold text-pink-400'>-</div>
        
        <div className=' lg:text-2xl font-bold text-pink-400 md:text-2xl'>
          {error?.error?.message || 'Something Went Wrong!'}
        </div>
        </div>
        <p className='text-center mb-8 '>Ooop! Your are looking for a does not exists.</p>
        <Link to='/'>
          <button className='btn  bg-blue-500 text-white text-xl h-16 rounded-lg'>Go Back Home</button>
        </Link>
      </div>

    </>
  )
}

export default ErrorPage