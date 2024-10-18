import React from 'react'
import { useState } from 'react'
import axios from 'axios'
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
    <div>
      <div className='flex flex-col justify-start items-start'>
        <h1 className="text-4xl font-bold">Recipes</h1>
        <p className="mt-2 text-lg">Discover new recipes and try them out!</p>
        <div className='flex justify-center items-center'>
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-full p-2 w-96 focus:ring-gray-400"  onChange={(e)=> setSearch(e.target.value)}/>
            <button type="submit" className="absolute bg-black text-white px-2 rounded-full ml-2 right-96"><HiOutlineSearch className='h-6 ' onClick={(e)=>handleSearch(e)}/></button>
          </div>
      </div>
      <div className='mt-8'>
        {
          recipes.map((recipe)=>{

            <div className='flex flex-col shadow-lg p-10 rounded-lg'>
          <img src={recipe.image}/>
          <h2>{recipe.label}</h2>

          {
          recipe.ingredientLines.map((ingredient)=>{
            <p className='border-2'>{ingredient}</p>
          })
          }
          
        </div>
          })
        }
      </div>
    </div>
  )
}

export default Recipes