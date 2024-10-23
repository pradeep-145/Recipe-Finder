import React from 'react'

const DisplayRecipe = ({recipe,setDisplayrecipe}) => {
  return (
    <div className="bg-slate-200 text-xl w-1/2 h-1/2 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 p-20 overflow-scroll rounded-xl">
          <h1 className="text-2xl font-bold text-center">{recipe.label}</h1>
          <button onClick={()=>setDisplayrecipe(false)} className="fixed top-2 right-3 text-2xl border-2 border-neutral-950 px-2 mr-1 py-1 rounded-full">x</button>
          <img src={recipe.image} alt={recipe.label} className="rounded-lg w-full mt-10 h-64 object-contain" />
          <div className="mt-4">
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside mt-2">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Instructions</h2>
        <p className="mt-2">
          {recipe.url ? recipe.url : 'No instructions available.'}
        </p>
      </div>

  </div>
          
  )
}

export default DisplayRecipe