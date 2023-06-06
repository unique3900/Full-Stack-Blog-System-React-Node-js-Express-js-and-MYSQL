import React, { useEffect, useState } from 'react'
import {
    Products
} from '../data';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {useSelector } from 'react-redux';

const ParticularPost = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [curUid, setcurUid] = useState('');
 

  const location = useLocation();

  const currentUsers = useSelector((state) => state.auth.currentUserId);

  useEffect(() => {
  
    console.log(currentUsers)
    setPostId(location.pathname.split('/')[2]);
  

      const fetchAllPost = async () => {
          try {
  
              const { data } = await axios.get(`http://localhost:8080/api/v1/blog/post/${params.id}`);
            setPosts(data.value)
            setcurUid(data.value[0].uid);
          
          } catch (error) {
              console.log("Internal Server Error"+error)
          }
         
      }
      fetchAllPost();
  }, [])
  return (
    <div className='grid grid-flow-row items-start py-10 w-[100%] px-20 lg:grid-flow-col lg:grid-cols-[3fr,1fr] justify-evenly gap-5'>
      <div className="w-full flex flex-col gap-2 shadow-md p-10">
        <div className="">
            <h3 className="text-4xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reprehenderit.</h3>
        </div>
        <div className="px-3 py-2">
          <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" className='w-full h-96' alt="" />
        </div>
        <div className="py-2 flex flex-row justify-around">
          <p className="text-xl font-bold">Author : Parashar Neupane</p>
          <p className="text-lg italic text-gray-500">2022/10/02</p>
        </div>
        {
          currentUsers == curUid? (
            <div className="py-2 flex flex-row justify-end gap-10 px-10">
            <AiFillEdit  className='scale-150 text-green-800 cursor-pointer'/>
              <AiFillDelete className='scale-150 text-red-800 cursor-pointer' />
             
          </div>
          ) : ""
        }

        <div className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro eum dignissimos dolore totam consectetur cupiditate vero nobis voluptatum excepturi. Deleniti facilis assumenda quisquam autem iusto minus placeat ipsum eos, tenetur eligendi recusandae aspernatur illo amet exercitationem? Necessitatibus, eos vero corrupti ea explicabo non iusto, officia aperiam similique quaerat maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cumque alias, possimus nisi blanditiis soluta debitis ratione inventore itaque, architecto tempora minima earum, rem voluptate expedita eaque assumenda. Minima, amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio sed tenetur, cupiditate illo corrupti consectetur est dolor labore aperiam iste perferendis harum voluptates, vero cumque suscipit consequatur deleniti quasi repellat natus alias explicabo. Totam saepe consectetur dolore. Laboriosam eius esse saepe tenetur, ipsa numquam. Quasi cupiditate laudantium quisquam explicabo vero sit optio enim beatae cumque quod porro veniam tempore maxime ipsa, totam maiores harum mollitia! Quis, est, officiis possimus obcaecati eum pariatur quisquam quae voluptatem nemo dolore ea debitis asperiores animi ab nostrum repudiandae eius in corporis totam quo eos velit, molestias dignissimos! Dignissimos ea ullam placeat tempora blanditiis!
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
