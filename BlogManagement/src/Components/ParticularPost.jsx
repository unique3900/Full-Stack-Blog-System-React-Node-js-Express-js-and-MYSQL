import React, { useEffect, useState } from 'react'
import {
    Products
} from '../data';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import moment from 'moment';

const ParticularPost = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [postMoment, setPostMoment] = useState('');
 

  
  const location = useLocation();

  const currentUsers = useSelector((state) => state.auth.currentUserId);

  const accessToken = useSelector((state) => state.auth.userToken);
  
  useEffect(() => {
  
    console.log(currentUsers)
    setPostId(location.pathname.split('/')[2]);
   

    const fetchAllPost = async () => {
      try {
  
        console.log(">>>>>", accessToken);
        console.log(accessToken)
        const { data } = await axios.get(`http://localhost:8080/api/v1/blog/post/${params.id}`);
        if (data.success) {
          console.log(data.datas)
          setPosts(data.datas);
         
        }
        

         
          
      } catch (error) {
        console.log("Internal Server Error" + error)
      }
         
    }
    fetchAllPost();
  }, []);

  const handleDelete = async(id) => {
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
      const { data } = await axios.delete(`http://localhost:8080/api/v1/blog/delete-post/${id}/${currentUsers}`);
     
      if (data.success) {
        navigate('/');
       }
       


    } catch (error) {
      console.log("Client Delete Error", error);
    }
  }

  return (
    <div className='grid grid-flow-row items-start py-10 w-[100%] px-20 lg:grid-flow-col lg:grid-cols-[3fr,1fr] justify-evenly gap-5'>
     
      <div className="w-full flex flex-col gap-2 shadow-md p-10">
        <div className="px-3 py-2">
          <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" className='w-full h-96' alt="" />
        </div>
        <div className="">
          <h3 className="text-4xl font-bold text-center">{posts.title} </h3>
        </div>
        <div className="py-2 flex flex-row justify-start gap-20 items-center">
          <p className="text-xl font-bold">Author : {posts.name}</p>
          <p className="text-lg italic text-gray-500 capitalize">Posted : {moment(posts.date).fromNow() }</p>
        </div>
        {
          currentUsers == posts.id? (
            <div className="py-2 flex flex-row justify-end gap-10 px-10">
           <Link to={`/new-post/${posts.idey}`} state={posts}><AiFillEdit  className='scale-150 text-green-800 cursor-pointer'/></Link> 
              <AiFillDelete className='scale-150 text-red-800 cursor-pointer' onClick={() => {
                handleDelete(posts.idey)
              }} />
             
          </div>
          ) : ""
        }

        <div className="py-2">
           {posts.description}
        </div>

      </div>
      <div className="w-full flex flex-col gap-2 shadow-md p-10">
          <h3 className="text-2xl font-bold text-center">You May Also Like</h3>
        
        <div className="flex flex-col gap-2 py-3 bg-grey-200 px-5 bg-opacity-10">
          <div className="flex flex-col w-fit items-center gap-1 max-h-52 px-3 py-2 ">
            <div className="text-xl font-bold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis.</div>
          </div>
          <div className="px-3">
            <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="" />
          </div>
          <div className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi.
          </div>
          <div className="mt-2">
            <button className="bg-black py-2 px-3 text-white">Read More</button>
          </div>
          
        </div>


        <div className="flex flex-col gap-2 py-3 bg-grey-200 px-5 bg-opacity-10">
          <div className="flex flex-col w-fit items-center gap-1 max-h-52 px-3 py-2 ">
            <div className="text-xl font-bold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis.</div>
          </div>
          <div className="px-3">
            <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="" />
          </div>
          <div className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi.
          </div>
          <div className="mt-2">
            <button className="bg-black py-2 px-3 text-white">Read More</button>
          </div>
          
        </div>


        <div className="flex flex-col gap-2 py-3 bg-grey-200 px-5 bg-opacity-10">
          <div className="flex flex-col w-fit items-center gap-1 max-h-52 px-3 py-2 ">
            <div className="text-xl font-bold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis.</div>
          </div>
          <div className="px-3">
            <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="" />
          </div>
          <div className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi.
          </div>
          <div className="mt-2">
            <button className="bg-black py-2 px-3 text-white">Read More</button>
          </div>
          
        </div>

        <div className="flex flex-col gap-2 py-3 bg-grey-200 px-5 bg-opacity-10">
          <div className="flex flex-col w-fit items-center gap-1 max-h-52 px-3 py-2 ">
            <div className="text-xl font-bold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis.</div>
          </div>
          <div className="px-3">
            <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="" />
          </div>
          <div className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi.
          </div>
          <div className="mt-2">
            <button className="bg-black py-2 px-3 text-white">Read More</button>
          </div>
          
        </div>

        <div className="flex flex-col gap-2 py-3 bg-grey-200 px-5 bg-opacity-10">
          <div className="flex flex-col w-fit items-center gap-1 max-h-52 px-3 py-2 ">
            <div className="text-xl font-bold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis.</div>
          </div>
          <div className="px-3">
            <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="" />
          </div>
          <div className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi.
          </div>
          <div className="mt-2">
            <button className="bg-black py-2 px-3 text-white">Read More</button>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default ParticularPost
