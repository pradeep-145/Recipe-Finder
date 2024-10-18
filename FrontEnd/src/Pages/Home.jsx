import React from 'react'

const Home = () => {
  return (
    <>
  <div className='py-8 flex w-full'>

      <div className='flex flex-1 justify-center items-center'>
        <h1 className="text-4xl font-bold text-blue-400 font-serif">Get In Touch With Us</h1>
        {/* <h1 className="text-2xl  font-semibold mt-4 mb-2 text-center">Get In Touch</h1> */}
      </div>


      <div className="bg-gradient-to-r flex-1right-0 from-gray-500 to-transparent h-40 text-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">Welcome to Recipe Finder!</h1>
        <p className="mt-2 text-lg text-center">Your one-stop destination for culinary exploration!</p>
      </div>

    </div>
    </>
  )
}

export default Home