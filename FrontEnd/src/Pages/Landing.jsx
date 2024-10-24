import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const token=localStorage.getItem('token')
  const navigate=useNavigate()
  useEffect(() => {

  if(token){
    navigate('/home')
  }
  }
  , []);

  return (
    <>
  <div className='py-8 flex w-full h-screen pr-32 justify-center items-center'>

      <div className="bg-gradient-to-r flex-1  lg:ml-[60%] sm:h-72 right-0 from-transparent to-slate-500 text-slate-100  lg:h-40 mt-24 p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center font-bold">Welcome to Recipe Finder!</h1>
        <p className="mt-2 text-lg text-center">Your one-stop destination for culinary exploration!</p>
      </div>
     


    </div>
    </>
  )
}

export default Landing