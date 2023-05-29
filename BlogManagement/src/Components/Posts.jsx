import React from 'react'
import {
    Products
} from '../data';
const Posts = () => {
    return (
        <div className='py-4 px-10 h-screen bg-slate-300 bg-opacity-20 flex gap-10 justify-center'>

            <div className="w-fit lg:w-2/4 bg-white flex flex-col p-6">
                <div className="header py-3 ">
                    <h3 className='text-4xl font-bold text-left'>Oppo Phone Launched</h3>
                </div>
                <div className="image ">
                    <img src='https://i.dummyjson.com/data/products/1/thumbnail.jpg' className='mt-2 w-full h-80'/>
                </div>
                <div className="author flex flex-row justify-between gap-4 py-3">
                    <p className="italic">Posted On 2022-12-03</p>
                    <p className="font-bold">Posted by Parashar Neupane</p>
                </div>
                <div className="desc flex flex-col">
                    <p className='text-gray-500 italic'>An apple mobile which is nothing like apple Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum distinctio nobis assumenda obcaecati non perspiciatis veniam reiciendis iusto impedit? Blanditiis explicabo ducimus eligendi quidem voluptatibus culpa fugiat! Doloribus, ducimus saepe.</p>
                    <br/>
                    <span className="bg-black text-white px-3 py-2 w-fit">Read More</span>
                </div>

        </div>
        
           <div className="w-fit lg:w-2/4 bg-white flex flex-col p-6">
                <div className="header py-3 ">
                    <h3 className='text-4xl font-bold text-left'>Oppo Phone Launched</h3>
                </div>
                <div className="image ">
                    <img src='https://i.dummyjson.com/data/products/1/thumbnail.jpg' className='mt-2 w-full h-80'/>
                </div>
                <div className="author flex flex-row justify-between gap-4 py-3">
                    <p className="italic">Posted On 2022-12-03</p>
                    <p className="font-bold">Posted by Parashar Neupane</p>
                </div>
                <div className="desc flex flex-col">
                    <p className='text-gray-500 italic'>An apple mobile which is nothing like apple Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum distinctio nobis assumenda obcaecati non perspiciatis veniam reiciendis iusto impedit? Blanditiis explicabo ducimus eligendi quidem voluptatibus culpa fugiat! Doloribus, ducimus saepe.</p>
                    <br/>
                    <span className="bg-black text-white px-3 py-2 w-fit">Read More</span>
                </div>

            </div>


        </div>
    )
}

export default Posts
