import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        

        try {
            const response = await axios.post('http://localhost:3000/register', { email, password });
            if(response.data.message==='User registered successfully'){
                navigate('/login')
            }
        } catch (error) {
            console.error(error.response.data);
        }   
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-10 shadow-2xl shadow-black rounded-3xl bg-[#88baa6] border-2 border-gray-500 font-sans max-w-sm w-96">
            <h1 className="text-4xl text-center mb-6 font-bold text-black">Register</h1>

                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="relative my-6">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="relative my-6">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                       
                    </div>

                    <div className="relative my-6">
                        <input
                            type="password"
                            name="password"
                            id="confpassword"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        
                    </div>


                   

                    <button
                        className="w-full py-2 mb-4 text-xl text-white bg-black rounded-full hover:bg-[#4C7766] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#38ad7f]"
                        type="button"
                        onClick={(e)=>{
                            if(password===confirmPassword){
                                handleSubmit(e)
                            }
                            else{
                                alert('Passwords do not match')
                            }}}
                    >
                        Register
                    </button>

                    <div className="text-center">
                        <span className="text-md text-gray-800">
                        Already have an account? <Link to="/login" className="text-black hover:underline">Sign In</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
