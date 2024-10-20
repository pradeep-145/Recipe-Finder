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
            <div className="p-8 shadow-2xl rounded-lg bg-white font-sans max-w-sm w-full">
                <h1 className="text-4xl text-center mb-6 font-bold text-red-800">Register</h1>

                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="relative my-6">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="relative my-6">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                       
                    </div>

                    <div className="relative my-6">
                        <input
                            type="password"
                            name="password"
                            id="confpassword"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        
                    </div>


                    <div className="flex justify-between items-center gap-4 mb-6 text-sm">
                        <div className="flex items-center">
                            <input
                                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                                type="checkbox"
                                name="remember"
                                id="remember"
                            />
                            <label htmlFor="remember" className="ml-2 text-red-800">Remember Me</label>
                        </div>
                        <div>
                            <Link to="/forgot-password" className="text-red-600 hover:underline">Forgot Password?</Link>
                        </div>
                    </div>

                    <button
                       className="w-full py-2 mb-4 text-lg text-white bg-red-700 rounded-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                        <span className="text-sm text-gray-600">
                        Already have an account? <Link to="/login" className="text-red-600 hover:underline">Sign In</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
