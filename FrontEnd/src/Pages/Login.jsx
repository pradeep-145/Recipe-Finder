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
                if (res.data.message === 'Success') {
                    console.log('Login Successful');
                    <ToastContainer />                   
                    navigate('/home')
                    localStorage.setItem('token', res.data.token)
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
            <div className="p-10 shadow-2xl shadow-black rounded-3xl bg-[#88baa6] border-2 border-gray-500 font-sans max-w-sm w-96">
                <h1 className="text-4xl text-center mb-6 font-bold text-black">Login</h1>

                <form action="">
                    <div className="relative my-6">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                            placeholder=" Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="relative my-6">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                            placeholder="Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>

                    

                    <button
                        className="w-full py-2 mb-4 text-xl text-white bg-black rounded-full hover:bg-[#4C7766] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#38ad7f]"
                        type="button"
                        onClick={() => handleSubmit()}
                    >
                        Login
                    </button>

                    <div className="text-center">
                        <span className="text-md text-gray-800">
                            New Here? <Link to="/register" className="text-black hover:underline">Create an account</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
