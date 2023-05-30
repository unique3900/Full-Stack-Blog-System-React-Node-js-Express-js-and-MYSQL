import React from 'react'
import {
    Products
} from '../data';
import { useNavigate } from 'react-router-dom';


const Posts = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center py-3">
            <div className="flex flex-col  flex-grow gap-10 w-3/4 lg:w-2.5/4">
                {
                Products.map((item) => {
                    return (
                        <div key={item.id} className='flex items-center flex-col p-5 gap-10 bg-teal-200-100 shadow-md w-full'>
                            <div className="p-3">
                                <h2 className="text-4xl text-center font-bold">{item.title }</h2>
                            </div>
                            <div className="w-full">
                                <img src={item.thumbnail} className='w-full h-96 object-cover' alt=""/>
                            </div>

                            <div className="p-3 flex flex-row justify-between gap-20 w-fit">

                                <p className="text-green-700 text-xl">{item.rating }</p>

                                <p className="font-bold">{ item.price}</p>
                            </div>
                            <div className="p-3">
                                <p className='text-xl italic text-gray-700'>{item.description }</p>
                            </div>
                            <div className="flex justify-start">
                                <button className="py-2 px-3 bg-black text-white" onClick={() => {
                                    navigate(`/post/:id=${'9989898'}`)
                            }}>Read More</button>
                            </div>
                           
                            
                        </div>
                    )
                })
            } </div>
        </div>
    )
}

export default Posts
