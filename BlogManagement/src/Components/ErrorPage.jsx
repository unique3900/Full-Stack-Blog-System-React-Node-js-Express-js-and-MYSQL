import React from 'react'
import {MdError} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div className='h-screen flex justify-center place-items-center items-center px-5 py-10 '>
      
          <div className="w-full h-screen bg-red-500 shadow-lg px-3   flex flex-col justify-center place-items-center  items-center gap-10 ">
              <MdError className='scale-[500%] mt-10 text-white ' />
              <h3 className="text-center text-2xl text-white md:text-4xl lg:text-5xl font-bold">Unauthorized Access</h3>
              <h4 className="text-center text-text-md md:text-lg lg:text-xl text-white italic">Sorry!You Need to Login to access this page.<span className='font-bold px-2'>You can still read articles.</span></h4>
              <button className="bg-white text-red-500 py-2 px-3 rounded-md font-lg font-bold" onClick={() => {
                  navigate('/login')
              }}>Proceed to Login</button>
          </div>
    </div>
  )
}

export default ErrorPage
