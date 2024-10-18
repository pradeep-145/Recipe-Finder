import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center px-60'>
      <div className='flex flex-col'>
        <h1 className="text-4xl font-bold text-blue-400 font-serif">Get In Touch With Us</h1>
        {/* <h1 className="text-2xl  font-semibold mt-4 mb-2 text-center">Get In Touch</h1> */}
      </div>

        <div className="flex max-md:flex-col justify-around gap-10">
          <div className='mt-5  lg:flex-col shadow-xl rounded-xl p-10 w-80'>
            <h2>Please email us at:</h2>
            <p className='border-2 bg-slate-100 text-blue-400 rounded-lg m-2 p-1'><a href="sample@gmail.com">sample@gmail.com</a></p>
          </div>
          <div className='mt-5  lg:flex-col shadow-xl rounded-xl p-10 w-80'>
            <h2>Call us at:</h2>
            <p className='border-2 bg-slate-100  text-blue-400  rounded-lg m-2 p-1'>Phone:1234567890</p>
          </div>
        </div>
    </div>
  )
}

export default Contact