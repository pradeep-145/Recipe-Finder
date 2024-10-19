import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { HiOutlineSearch } from "react-icons/hi";
const Recipes = () => {
  const [recipes,setRecipes] =useState([])
  const [search,setSearch] =useState('')
  
  const handleSearch = (e) => {
    axios.get('http://localhost:3000/search',{search}).then((response)=>{
      console.log(response.data)
      setRecipes(response.data)
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
        <div className='flex justify-center items-center w-auto mt-5'>
            <input type="text" placeholder=" Search" className="border border-gray-300 rounded-full p-2 w-96 focus:ring-gray-400"  onChange={(e)=> setSearch(e.target.value)}/>
            <button type="submit" className="absolute bg-black text-white px-2 rounded-full ml-2 right-[460px]"><HiOutlineSearch className='h-6' onClick={(e)=>handleSearch(e)}/></button>
          </div>
      </div>
      <div className='flex flex-wrap justify-center items-center mt-4'>
        {recipes.map((recipe, index) => (
          <div key={index} className='border border-gray-300 h-96 rounded-lg p-4 m-2 w-80'>
`           <img src={recipe.recipe.image} width={250} height={250}></img>
            <h2 className='text-2xl font-bold'>{recipe.recipe.label}</h2>

          </div>
        ))}
      </div>
        </div>
    
  )
}

export default Recipes