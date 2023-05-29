import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
    const [navState, setNavState] = useState(true);


    
  return (
    <div className='w-full bg-gray-800 text-white bg-opacity-30 py-5 px-20 md:text-black lg:text-black md:bg-white lg:bg-white'>
          
          <div className="flex flex-row flex-wrap justify-around align-middle place-items-center">
              <GiHamburgerMenu  className=' md:hidden lg:hidden scale-125' onClick={() => {
                  navState ? setNavState(false) : setNavState(true)
              }}/>
              <img src='./img/logo.png' className='w-40 h-12' />
              {
                  navState && (
                    <ul className="list-none   flex flex-col md:flex-row lg:flex-row justify-evenly gap-4 font-semibold align-middle">
                    <Link className='text-black' to={'/home'}>Home</Link>
                    <Link className='text-black' to={'/home'}>Travel</Link>
                    <Link className='text-black' to={'/home'}>Technology</Link>
                    <Link className='text-black' to={'/home'}>Foods</Link>
                          <Link className='text-black' to={'/home'}>Science</Link>
                          
                    <Link className='text-white bg-blue-600 py-1.5 px-2 rounded-md text-center w-20 h-fit' to={'/login'}>Login</Link>
                    <Link className='text-white bg-blue-600 py-1.5 px-2 rounded-md text-center w-20 h-fit' to={'/register'}>Register</Link>
                </ul>
                  )
              }
            
      </div>
    </div>
  )
}

export default Navbar
