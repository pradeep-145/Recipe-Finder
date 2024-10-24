import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from '../assets/loadingAnimation.json'; 

const WishList = () => {
  const [wishlist,setWishlist]=useState([]);
  const [loading,setLoading]=useState(false);
  const token=localStorage.getItem('token');
  useEffect(() => {
    setLoading(true);
    // Fetch wishlist from backend
    axios.get('http://localhost:3000/wishlist',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then(response => {
      setLoading(false);
      console.log(response.data);
      setWishlist(response.data); 
    }
    ).catch(error => console.error(error.response.data));
  }
  , []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className='flex flex-col items-center '>
      <h1 className="text-4xl font-bold">Your Wishlist</h1>
      <div className='flex flex-wrap justify-center items-center mt-4'>
        { loading?(
          <div className='flex justify-center items-center w-screen h-screen'>
           
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        ):
        wishlist.length > 0 ?
        (
          wishlist.map((recipe, index) => (
            <div key={index} className='border border-gray-300 h-[400px] rounded-lg p-4 m-2 w-80'>
              <img src={recipe.strMealThumb} className='w-full rounded-lg' alt={recipe.strMeal} />
              <h2 className='text-xl font-bold'>{recipe.strMeal}</h2>
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
