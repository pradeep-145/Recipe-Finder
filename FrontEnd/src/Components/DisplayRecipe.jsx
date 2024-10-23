import React from 'react'
import { Router, useNavigate } from 'react-router-dom'

const DisplayRecipe = ({recipe,setDisplayrecipe, ingredients}) => {
  const videoId=recipe.strYoutube.split('v=')[1];

  return (
    <div className="bg-slate-200 text-xl w-1/2 h-1/2 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 p-20 overflow-scroll rounded-xl">
          <h1 className="text-2xl font-bold text-center">{recipe.strMeal}</h1>
          <button onClick={()=>setDisplayrecipe(false)} className="fixed top-2 right-3 text-2xl border-2 border-neutral-950 px-2 mr-1 py-1 rounded-full">x</button>
          <img src={recipe.strMealThumb} alt={recipe.label} className="rounded-lg w-full mt-10 h-64 object-contain" />
          <div className="mt-4">
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside mt-2">
          {ingredients && ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Instructions</h2>
        <p className="mt-2">{recipe.strInstructions}</p>
      </div>
      <div className="mt-6 rounded-lg">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>




  </div>
          
  )
}

export default DisplayRecipe