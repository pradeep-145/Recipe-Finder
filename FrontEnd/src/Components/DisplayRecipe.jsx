import React from 'react'

const DisplayRecipe = ({recipe,setDisplayrecipe}) => {
  return (
    <div className="bg-white w-1/2 h-1/2 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 p-4 overflow-scroll rounded-lg">
          <h1 className="text-2xl font-bold">{recipe.label}</h1>
          <button onClick={()=>setDisplayrecipe(false)} className="fixed top-2 right-2 text-2xl">X</button>
  </div>
          
  )
}

export default DisplayRecipe