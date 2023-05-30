import React, {
    useState
} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const NewPost = () => {
    const [value, setValue] = useState("");
    return (
        <>
            <div className="mt-5">
                <h2 className="text-center text-4xl font-bold">Write New Article</h2>
            </div>
            <div className='grid grid-flow-row mt-10 lg:grid-flow-col grid-cols-80/20 place-items-start px-20 gap-10'>
                <div className="w-full shadow-md flex flex-col gap-5 px-5 py-10">
                    <div className="">
                        <input type="text" name="" id="" className='w-full bg-gray-50 border border-gray-300 outline-grey-600 py-4 px-3 rounded-md' placeholder='Title Goes Here'/>
                    </div>
                    <ReactQuill theme='snow'
                        value={value}
                        onChange={setValue}/>
                </div>
                <div className="border border-black flex flex-col  p-10 shadow-lg w-full ">
                    <div className="flex flex-col gap-2 border-b-2 py-3">
                        <h3 className='text-center text-2xl font-bold text-teal-600'>More Option</h3>
                        <div className="flex flex-col gap-1 justify-start">

                            <p className="text-md">Status:
                                <span className="italic px-3 text-gray-500">Draft</span>
                            </p>
                            <p className="text-md">Visibility:
                                <span className="italic px-3 text-gray-500">Private</span>
                            </p>

                            <div className="flex flex-row justify-center gap-5">
                                <button className="bg-teal-600 text-white px-3 py-2 rounded-md text-center cursor-pointer">Keep Draft</button>
                                <button className="bg-cyan-600 text-white px-3 py-2 rounded-md text-center cursor-pointer">Keep Draft</button>
                            </div>
                        </div>


                    </div>

                    <div className="mt-2">
                        <h3 className="text-center text-2xl font-bold text-teal-600">Category</h3>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <div className="flex flex-row gap-2">
                                <input type="radio" name="category" id="" className=""/>
                                <label htmlFor="" className="text-lg">Science</label>
                            </div>
                            <div className="flex flex-row gap-2">
                                <input type="radio" name="category" id="" className=""/>
                                <label htmlFor="" className="text-lg">Society</label>
                            </div>
                            <div className="flex flex-row gap-2">
                                <input type="radio" name="category" id="" className=""/>
                                <label htmlFor="" className="text-lg">Technology</label>
                            </div>

              </div>
              <button className="w-full bg-blue-700 text-white outline-none py-3 px-3 mt-5">Publish</button>
                    </div>
                </div>


            </div>
        </>

    )
}

export default NewPost
