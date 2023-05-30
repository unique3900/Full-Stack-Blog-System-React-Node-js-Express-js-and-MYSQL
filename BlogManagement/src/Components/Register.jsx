import axios from 'axios';
import React, {
    useState
} from 'react';



const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:8080/api/v1/auth/register', { name, email, password });
            console.log(data);
         

        } catch (error) {
            console.log("Internal Server Error in client" + error);
        }
    }
    return (
        <div className='h-screen flex flex-col justify-center items-center '>
            <div className="h-96 w-96 bg-slate-100 p-5 shadow-lg">
                <form action="" onSubmit={handleSubmit}>
                    <h1 className="text-center text-3xl font-bold">Register</h1>
                    <div className="flex flex-col justify-center mt-3 align-middle">
                        {/* inputBox */}

                        <div className="flex flex-col gap-2 w-full  py-2">
                            <label htmlFor="">Full Name</label>
                            <input value={name}
                                onChange={
                                    (e) => {
                                        setName(e.target.value)
                                    }
                                }
                                type="text"
                                className='rounded-xl outline-black w-full px-3 py-2 '
                                name=""
                                id=""
                                placeholder='Enter Full Name' required/>
                        </div>
                    <div className="flex flex-col gap-2 w-full  py-2">
                        <label htmlFor="">Email</label>
                        <input value={email}
                            onChange={
                                (e) => {
                                    setEmail(e.target.value)
                                }
                            }
                            type="email"
                            className='rounded-xl outline-black w-full px-3 py-2 '
                            name=""
                            id=""
                            placeholder='Enter Email' required/>
                    </div>

                <div className="flex flex-col gap-2 w-full  py-2">
                    <label htmlFor="">Password</label>
                    <input value={password}
                        onChange={
                            (e) => {
                                setPassword(e.target.value)
                            }
                        }
                        type="password"
                        className='rounded-xl outline-black w-full px-3 py-2 '
                        name=""
                        id=""
                        placeholder='Enter Password' required/>
                </div>

            <div className="flex flex-col gap-2 w-full  py-2">
                <input type="submit"
                    value={"Register"}
                    className='w-full cursor-pointer bg-green-600 text-white px-3 py-4 rounded-xl '
                    name=""
                    id=""
                   />
            </div>
        </div>
    </form>

</div></div>
    )
}

export default Register
