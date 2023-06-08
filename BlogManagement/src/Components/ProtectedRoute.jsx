
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux';
import ErrorPage from './ErrorPage';


const ProtectedRoute = () => {

    const [valid, setValid] = useState(false);

    const accessToken = useSelector((state) => state.auth.userToken);
    const log=useSelector((state)=>state.auth.headerToken)
    const [token, settoken] = useState(accessToken ? true : false);

    useEffect(() => {
        const authCheck = async() => {
            try {
                axios.interceptors.request.use(
                    config => {
                        config.headers.authorization = accessToken;
                        return config;
                    },
                    error => {
                        return Promise.reject(error);
                    }
               )
                const { data } = await axios.get('http://localhost:8080/api/v1/auth/user-auth');
                console.log(data)
                if (data.valid == true) {
                    setValid(true);
                }
            } catch (error) {
                console.log("Client Side Error in Protected Route",error);
            }
        }
        if (token) {
            authCheck();
        }

    }, [accessToken])
    
    return valid ? <Outlet /> : <ErrorPage/>;

}

export default ProtectedRoute
