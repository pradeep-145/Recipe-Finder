import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { HiOutlineSearch } from "react-icons/hi";
import loadingA from '../assets/loading.svg'
import { LuHeart } from "react-icons/lu";

const Recipes = () => {
  const [recipes,setRecipes] =useState([])
  const [search,setSearch] =useState('')
  const [loading,setLoading] =useState(false)
  const params={
    search:search
  }
  useEffect(()=>{
    var i=true
    setLoading(true)
    if(i){
      axios.get(`http://localhost:3000/search`,{search:'veg'}).then((response)=>{
        console.log(response.data)
        setRecipes(response.data)
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      }).catch((error)=>{ 
        console.error(error.response.data)
      }
    )
  }
  },[])
  const handleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(`http://localhost:3000/search`,{params}).then((response)=>{
      console.log(response.data)
      setRecipes(response.data)
      setLoading(false)
    }).catch((error)=>{ 
      console.error(error.response.data)
    }
    )
  }

  return (
    <div className='flex flex-col flex-1'>
    
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold">Recipes</h1>
        <p className="mt-2 text-lg">Discover new recipes and try them out!</p>
        <form onSubmit={handleSearch} className='flex justify-end  items-center w-96 mt-5 border border-gray-400  rounded-full '>
            <input type="text" placeholder=" Search" className="rounded-full p-2 w-full focus:ring-gray-400"  onChange={(e)=> setSearch(e.target.value)}/>
            <button type="submit" className="absolute bg-black text-white px-2 rounded-full py-1 "><HiOutlineSearch className='h-6' /></button>
          </form>
      </div>
      <div className='flex flex-wrap justify-center items-center  mt-4'>
        {recipes.map((recipe, index) => (
          <div key={index} className='border border-gray-300 hover:scale-105 duration-300 h-[400px] rounded-lg p-4 m-2 w-80'>
`           <img src={recipe.recipe.image} className='w-full rounded-lg '></img>
            <h2 className='text-xl font-bold'>{recipe.recipe.label}</h2>
            


          </div>
        ))}
        {
          loading &&
          <div className=' bg-slate-950 bg-opacity-25 absolute w-[500vh] h-[500vh] flex justify-center items-center'>
            <img src={loadingA} alt="loading" className="w-40 h-40"/>
            

        </div>
        }
      </div>
        </div>
    
  )
}

export default Recipes