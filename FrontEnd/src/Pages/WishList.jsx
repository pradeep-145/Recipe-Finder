import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from '../assets/loadingAnimation.json'; 
import DisplayRecipe from '../Components/DisplayRecipe';
import { useNavigate } from 'react-router-dom';


const WishList = () => {
  const [wishlist,setWishlist]=useState([]);
  const [loading,setLoading]=useState(false);
  const [Displayrecipe, setDisplayrecipe] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const navigate=useNavigate();
  const token=localStorage.getItem('token');
  useEffect(() => {
    setLoading(true);
    axios.get('https://recipe-finder-usfp.onrender.com/wishlist',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then(response => {
      setLoading(false);
      console.log(response.data);
      setWishlist(response.data); 
    }
    ).catch(err=>{
      if(err.response.data=='Unauthorized'){
        alert('You are not authorized to view this page')
        setTimeout(() => {
          navigate('/login')
          
        }, 1000);
        
      }
  })}
  , []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(`${measure ? measure : ''} ${ingredient}`.trim());
      }
    }
    return ingredients;
  };

  return (
    <div className='flex flex-col flex-1 items-center'>
      <h1 className="text-4xl font-bold text-[#4C7766]">Your Wishlist</h1>
      <div className='flex flex-wrap justify-center items-center mt-8 '>
        
        { loading?(
          <div className='flex justify-center items-center w-screen h-screen'>
           
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        ):
        wishlist.length > 0 ?
        (
          wishlist.map((recipe, index) => (
            <div key={index} className='border border-gray-300 h-[480px] rounded-lg p-4 m-5 w-96 bg-[#4C7766] shadow-lg shadow-[#5ea78a] hover:scale-105 duration-300 '>
              <img src={recipe.strMealThumb} className='w-full rounded-lg' alt={recipe.strMeal} />
              <h2 className='text-xl font-bold mt-4 text-[#EBE6E0]'>{recipe.strMeal}</h2>
              <div className='flex gap-3 justify-between'>
              <button className="bg-[#EBE6E0] text-[#4C7766] px-4 py-2 mt-2 font-semibold rounded-lg" onClick={() => {
                      setDisplayrecipe(true);
                      setIngredients(getIngredients(recipe));
                      setRecipe(recipe);
                    }}>
                View Recipe
              </button>
              <button className="bg-[#EBE6E0] text-[#4C7766] px-4 py-2 mt-2  font-semibold rounded-lg"
              onClick={()=>{axios.delete(`https://recipe-finder-usfp.onrender.com/wishlist/${recipe.idMeal}`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }).then(response => {
                console.log(response.data);
                setWishlist(wishlist.filter((item) => item.idMeal !== recipe.idMeal));
            }
            ).catch(error => console.error(error.response.data));}
            }
              >
                Remove from Wishlist
              </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-lg text-[#4C7766]'>Your wishlist is empty.</p>
        )}
      </div>
      {Displayrecipe && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
          <DisplayRecipe recipe={recipe} setDisplayrecipe={setDisplayrecipe} ingredients={ingredients}></DisplayRecipe>
        </div>
      )}
    </div>
  );
};

export default WishList;
