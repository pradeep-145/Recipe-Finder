import React from 'react'
import { Router, useNavigate } from 'react-router-dom'
import { IoCloseCircleSharp } from "react-icons/io5";

const DisplayRecipe = ({recipe,setDisplayrecipe, ingredients}) => {
  const videoId=recipe.strYoutube.split('v=')[1];
// #4C7766

return (
    <div className="bg-[#EBE6E0] text-xl w-3/4 h-3/4 fixed top-1/2 left-1/2 border-2 border-black  transform -translate-x-1/2 -translate-y-1/2 p-20 overflow-y-scroll rounded-2xl">
          <h1 className="text-5xl font-bold text-center text-[#4C7766] font-mono">{recipe.strMeal}</h1>
          <button onClick={()=>setDisplayrecipe(false)} className="fixed top-2 right-1 px-2 mr-1 rounded-full py-1 text-4xl text-[#4C7766]"><IoCloseCircleSharp /></button>
          <img src={recipe.strMealThumb} alt={recipe.label} className="rounded-lg w-full mt-10 h-64 object-contain" />
          <div className="text-lg font-semibold flex gap-6 justify-center items-center mt-10">
          <p className='border-2 bg-[#4C7766] text-[#EBE6E0] p-2 rounded-full'>Origin : {recipe.strArea}</p>
          <p className='border-2 bg-[#4C7766] text-[#EBE6E0] p-2 rounded-full'>Category : {recipe.strCategory}</p>
          
          </div>
          <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#4C7766] font-mono">Ingredients</h2>
        <ul className="list-disc list-inside mt-4 font-serif">
          {ingredients && ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-center text-[#4C7766] font-mono">Instructions</h2>
        <p className="mt-4 font-serif text-justify">{recipe.strInstructions}</p>
      </div>
      <div className="mt-10 rounded-lg">
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