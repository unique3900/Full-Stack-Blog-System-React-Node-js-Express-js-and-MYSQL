import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserData } from '../Redux/Slice/authSlice';

const Navbar = () => {
  const [navState, setNavState] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var currentUsers = useSelector((state) => state.auth.currentuser);


  

    
  return (
    <div className='w-full z-1 bg-[rgba(0,0,0,0.5)] text-white bg-opacity-30 py-5 px-20 md:text-black lg:text-black md:bg-white lg:bg-white'>
          
          <div className="flex flex-row sticky justify-around align-middle place-items-center">
              <GiHamburgerMenu  className=' md:hidden lg:hidden scale-125' onClick={() => {
                  navState ? setNavState(false) : setNavState(true)
              }}/>
              <img src='./img/logo.png' className='w-40 h-12' />
              {
                  navState && (
                    <ul className="list-none text-white lg:text-black md:text-black flex flex-col md:flex-row lg:flex-row justify-evenly gap-4 font-semibold align-middle">
                    <Link className='' to={'/home'}>Home</Link>
                    <Link className='' to={'/?category=travel'}>Travel</Link>
                    <Link className='' to={'/?category=technology'}>Technology</Link>
                    <Link className='' to={'/?category=foods'}>Foods</Link>
                          <Link className='' to={'/?category=science'}>Science</Link>
                     

              <Link to={'/'}>{currentUsers?currentUsers:"Guest"}</Link>
                   
              {
                currentUsers ? (
                  <div className="flex flex-col lg:flex-row md:flex-row gap-2">
                    <Link className='font-bold  text-white lg:text-teal-600 md:text-teal-600' to={'/new-post'}>Write Post</Link>  
                    <Link className='text-white bg-red-600 py-1.5 px-2 rounded-md text-center w-20 h-fit' onClick={() => {
                        navigate('/login');
                      dispatch(removeUserData());
                    
                }}>Logout</Link>
                  </div>

                ) : (
                    <div className="flex flex-col lg:flex-row md:flex-row gap-2">
                        <Link className='text-white bg-blue-600 py-1.5 px-2 rounded-md text-center w-20 h-fit' to={'/login'}>Login</Link>
                  <Link className='text-white bg-blue-600 py-1.5 px-2 rounded-md text-center w-20 h-fit' to={'/register'}>Register</Link>
                    </div>
                  
                )
                    }

                </ul>
                  )
              }
            
      </div>
    </div>
  )
}

export default Navbar
