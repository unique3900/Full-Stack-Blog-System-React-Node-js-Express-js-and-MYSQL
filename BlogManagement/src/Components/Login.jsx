import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUserData, setUserData } from '../Redux/Slice/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {

           const { data } = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password },{withCredentials: true});
            if (data.success) {
                dispatch(setUserData(data.otherData));
                navigate('/');
            }
           
           
            

       } catch (error) {
        
       }
    }
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
          <div className="h-96 w-96 bg-slate-100 p-5 shadow-lg">
              <form action="">
              <h1 className="text-center text-3xl font-bold">Login</h1>
                  <div className="flex flex-col justify-center mt-3 align-middle">
                      {/* inputBox */}
                      <div className="flex flex-col gap-2 w-full  py-2">
                          <label htmlFor="">Email</label>
                          <input value={email} onChange={(e) => {
                              setEmail(e.target.value)
                          }} type="email" className='rounded-xl outline-black w-full px-3 py-2 ' name="" id="" placeholder='Enter Email' />
                      </div>

                      <div className="flex flex-col gap-2 w-full  py-2">
                          <label htmlFor="">Password</label>
                          <input value={password} onChange={(e) => {
                              setPassword(e.target.value)
                          }} type="password" className='rounded-xl outline-black w-full px-3 py-2 ' name="" id="" placeholder='Enter Password' />
                      </div>

                      <div className="flex flex-col gap-2 w-full  py-2">
                          <input type="submit" value={"Login"} className='w-full bg-green-600 text-white px-3 py-4 rounded-xl ' name="" id="" onClick={handleSubmit} />
                      </div>
                  </div>
              </form>

     </div>
    </div>
  )
}

export default Login
