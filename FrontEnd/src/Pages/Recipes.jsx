import React from 'react'
import { useState } from 'react'
const Recipes = () => {
  const [recipes,setRecipes] =useState([])
  useState(()=>{
    axios.get('http://localhost:3000/recipes').then((response)=>{
      console.log(response.data)
      setRecipes(response.data)
    }).catch((error)=>{ 
      console.error(error.response.data)
    }
    )
  }
  ,[])

  return (
    <div>
      <div className='flex flex-col justify-start items-start'>
        <h1 className="text-4xl font-bold">Recipes</h1>
        <p className="mt-2 text-lg">Discover new recipes and try them out!</p>
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