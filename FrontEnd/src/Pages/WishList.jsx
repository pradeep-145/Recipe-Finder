import React, { useContext, useState } from 'react';

const WishList = () => {
  const [wishlist,setWishlist]=useState([]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className="text-4xl font-bold">Your Wishlist</h1>
      <div className='flex flex-wrap justify-center items-center mt-4'>
        {wishlist.length > 0 ? (
          wishlist.map((recipe, index) => (
            <div key={index} className='border border-gray-300 h-[400px] rounded-lg p-4 m-2 w-80'>
              <img src={recipe.image} className='w-full rounded-lg' alt={recipe.label} />
              <h2 className='text-xl font-bold'>{recipe.label}</h2>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg">
                View Recipe
              </button>
            </div>
          ))
        ) : (
          <p className='text-lg'>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
