import React, {
    useState
} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';


const NewPost = () => {
    const accessToken = useSelector((state) => state.auth.userToken);
    const log=useSelector((state)=>state.auth.headerToken)
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length < 20) {
            console.log("Title Should be above 20 characters in length")
        }
        if (value.length < 200) {
            console.log("Description Should be above 20 characters in length")
        }
        if (!category) {
            console.log("Category is Required")
        }

        console.log(title, value, img, category);
    }
    return (
        <>
            <div className="mt-5">
                <h2 className="text-center text-4xl font-bold">Write New Article</h2>

            </div>
            <div className='grid grid-flow-row mt-10 lg:grid-flow-col grid-cols-80/20 place-items-start px-20 gap-10'>
                <div className="w-full shadow-md flex flex-col gap-5 px-5 py-10">
                    <div className="">
                        <input type="text" name="" id="" className='w-full bg-gray-50 border border-gray-300 outline-grey-600 py-4 px-3 rounded-md' value={title} onChange={(e)=>{
                            setTitle(e.target.value)
                        }} placeholder='Title Goes Here'/>
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

                            <div className="flex flex-row justify-around gap-5">
                                <button className="bg-teal-600 text-white px-3 py-2 rounded-md text-center cursor-pointer">Keep Draft</button>
                                <div className="flex flex-row gap-3 justify-end items-center">
                                    <label className=" text-black px-3 py-2 rounded-md text-center cursor-not-allowed " disabled>Upload Photo:</label>
                                    <input type='file' accept="image/*" onChange={(e) => {
                                    setImg(e.target.files[0])
                             }} required />  
                                </div>
             
                            </div>
                        </div>


                    </div>

                    <div className="mt-2">
                        <h3 className="text-center text-2xl font-bold text-teal-600">Category</h3>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <div className="flex flex-row gap-2">
                                <input type="radio" value='science'  name="category" id="" className="" onChange={
                                    (e) => {
                                        setCategory(e.target.value)
                                    }
                                    
                                }/>
                                <label htmlFor="" className="text-lg">Science</label>
                            </div>
                            <div className="flex flex-row gap-2">
                                <input type="radio" value='science' name="category" id="" className="" onChange={
                                    (e) => {
                                        setCategory(e.target.value)
                                    }
                                    
                                } defaultChecked/>
                                <label htmlFor="" className="text-lg">Society</label>
                            </div>
                            <div className="flex flex-row gap-2">
                                <input type="radio" value='science' name="category" id="" className="" onChange={
                                    (e) => {
                                        setCategory(e.target.value)
                                    }
                                    
                                }/>
                                <label htmlFor="" className="text-lg">Technology</label>
                            </div>
                            <div className="flex flex-row gap-2">
                                <input type="radio" value='travel' name="category" id="" className="" onChange={
                                    (e) => {
                                        setCategory(e.target.value)
                                    }
                                    
                                }/>
                                <label htmlFor="" className="text-lg">Travel</label>
                            </div>
                            <div className="flex flex-row gap-2">
                                <input type="radio" value='food' name="category" id="" className="" onChange={
                                    (e) => {
                                        setCategory(e.target.value)
                                    }
                                    
                                }/>
                                <label htmlFor="" className="text-lg">Food</label>
                            </div>

              </div>
              <button className="w-full bg-blue-700 text-white outline-none py-3 px-3 mt-5" onClick={handleSubmit}>Publish</button>
                    </div>
                </div>


            </div>
        </>

    )
}

export default NewPost
