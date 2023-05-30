import React from 'react'
import {
    Products
} from '../data';


const Posts = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center flex-grow gap-10 w-3/4 lg:w-2/4">
                {
                Products.map((item) => {
                    return (
                        <div key={item.id} className='flex items-center flex-col p-5 gap-10 bg-teal-200-100 shadow-md w-full'>
                            <div className="p-3">
                                <h2 className="text-4xl text-center font-bold">{item.title }</h2>
                            </div>
                            <div className="">
                                <img src={item.thumbnail} className='w-fit' alt=""/>
                            </div>

                            <div className="p-3 flex flex-row justify-between gap-20 w-fit">

                                <p className="text-green-700 text-xl">{item.rating }</p>

                                <p className="font-bold">{ item.price}</p>
                            </div>
                            <div className="p-3">
                                <p className='text-xl italic text-gray-700'>{item.description }</p>
                            </div>
                        </div>
                    )
                })
            } </div>
        </div>
    )
}

export default Posts
