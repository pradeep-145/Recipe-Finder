import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const notify = () => toast.success('Logging you in!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    const handleSubmit = async () => {

        try {
            axios.post('http://localhost:3000/login', { email, password }).then(res => {
                if (res.data === 'Success') {
                    console.log('Login Successful');
                    <ToastContainer />                   
                    
                    navigate('/home')
                }

                else {
                    console.log(res.message)
                }
            })

        } catch (error) {
            console.error(error.response.data);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-8 shadow-2xl rounded-lg bg-white font-sans max-w-sm w-full">
                <h1 className="text-4xl text-center mb-6 font-bold text-red-800">Login</h1>

                <form action="">
                    <div className="relative my-6">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                            placeholder=" Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="relative my-6">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800 focus:outline-none"
                            placeholder="Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>

                    <div className="flex justify-between items-center gap-4 mb-6 text-sm">
                        <div className="flex items-center">
                            <input
                                className="w-4 h-4 border-gray-300 rounded"
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
                        onClick={() => handleSubmit()}
                    >
                        Login
                    </button>

                    <div className="text-center">
                        <span className="text-sm text-gray-600">
                            New Here? <Link to="/register" className="text-red-600 hover:underline">Create an account</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
