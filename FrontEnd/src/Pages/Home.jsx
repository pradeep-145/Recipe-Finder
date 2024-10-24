import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaAppleAlt } from 'react-icons/fa'
const Home = () => {
  const [authorized,setAuthorized] = useState(false)
  const navigate=useNavigate()
  useEffect(() => { 
    const token=localStorage.getItem('token')
    if(!token){
    }
    axios.get('http://localhost:3000/protected',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
  })
  .then(res=>{
    
    setAuthorized(true)
  }
  )
  .catch(err=>{
    if(err.response.data=='Unauthorized'){
      alert('You are not authorized to view this page')
      setTimeout(() => {
        navigate('/login')
        
      }, 1000);
      
    }
    
    console.log(err.response.data)
  }
  )
}

  , []);
  

  return (
    <>
    {
      authorized?
      <div className='py-8 flex w-full h-screen pr-32 justify-center items-center'>

      <div className="bg-gradient-to-r flex-1  lg:ml-[60%] sm:h-72 right-0 from-transparent to-slate-500 text-[#EBE6E0]  lg:h-40 mt-24 p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center font-bold">Welcome to Recipe Finder!</h1>
        <p className="mt-2 text-lg text-center">Your one-stop destination for culinary exploration!</p>
      </div>
     


    </div>:<h1 className='text-3xl text-center mt-20' >You are not authorized to view this page
    </h1>
  }
    </>
  )
}

export default Home