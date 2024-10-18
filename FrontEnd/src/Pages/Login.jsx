import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    
        try {
            axios.post('http://localhost:3000/login', { email, password }).then(res=>{
                
            })
            
        } catch (error) {
            console.error(error.response.data);
        }   
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-8 shadow-2xl rounded-lg bg-white font-sans max-w-sm w-full">
                <h1 className="text-4xl text-center mb-6 font-bold text-gray-800">Login</h1>

                <form action="">
                    <div className="relative my-6">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            placeholder=" Your Email"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        
                    </div>

                    <div className="relative my-6">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            placeholder="Your Password"
                            onChange={(e)=>setPassword(e.target.value)}
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
                            <label htmlFor="remember" className="ml-2 text-gray-600">Remember Me</label>
                        </div>
                        <div>
                            <Link to="/forgot-password" className="text-emerald-600 hover:underline">Forgot Password?</Link>
                        </div>
                    </div>

                    <button
                        className="w-full py-2 mb-4 text-lg text-white bg-emerald-500 rounded-full hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        type="submit"
                        onClick={handleSubmit(e)}
                    >
                        Login
                    </button>

                    <div className="text-center">
                        <span className="text-sm text-gray-600">
                            New Here? <Link to="/register" className="text-emerald-600 hover:underline">Create an account</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
