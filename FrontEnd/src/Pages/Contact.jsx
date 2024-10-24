import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen mb-5'>
      <div className='bg-[#f8f2df] p-10 rounded-3xl border-2 shadow-2xl'>
      <div className='flex flex-col mt-8'>
        <h1 className="text-5xl font-bold text-[#3f7e65] font-serif text-center rounded-xl">Get In Touch With Us</h1>
      </div>

        <div className="flex max-md:flex-col justify-around gap-10 mt-5 text-xl">
          <div className='mt-5 lg:flex-col shadow-xl rounded-xl p-10 w-80 bg-[#4C7766] hover:scale-105 duration-300'>
            <h2 className='text-white text-xl '>Please email us at:</h2>
            <p className='border-2 bg-slate-100 text-blue-400 rounded-lg m-2 p-1'><a href="sample@gmail.com">sample@gmail.com</a></p>
          </div>
          <div className='mt-5  lg:flex-col shadow-xl rounded-xl p-10 w-80  bg-[#4C7766] hover:scale-105 duration-300'>
            <h2 className='text-white text-xl '>Call us at:</h2>
            <p className='border-2 bg-slate-100  text-blue-400  rounded-lg m-2 p-1'>Phone:1234567890</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Contact