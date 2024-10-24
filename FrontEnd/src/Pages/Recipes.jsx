import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiOutlineSearch } from "react-icons/hi";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import DisplayRecipe from '../Components/DisplayRecipe';
import Lottie from 'react-lottie';
import animationData from '../assets/loadingAnimation.json'; 

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]); // Keep wishlist as an array of recipe IDs
  const [Displayrecipe, setDisplayrecipe] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const token=localStorage.getItem('token')
  
  useEffect(() => {
    setLoading(true);
    // Fetch recipes based on search term
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        setRecipes(response.data.meals);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.response.data);
        setLoading(false);
      });

    axios.get('http://localhost:3000/wishlist',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then(response => {
      setWishlist(response.data); // Set wishlist as array of recipe IDs
    }).catch(error => console.error(error.response.data));

  }, [search]);
  const handleWishlist = async (recipe, isWishlisted) => {
    console.log(wishlist);
    console.log(isWishlisted);
    try {
      if (isWishlisted) {
        const response = await axios.delete(
          `http://localhost:3000/wishlist/${recipe.idMeal}`, 
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        setWishlist((response.data)); 
      } else {
        const response = await axios.post(
          'http://localhost:3000/wishlist', 
          { recipe: recipe },  // Send recipe data as the body
          {
            headers: {
              'Authorization': `Bearer ${token}`  // Send headers separately
            }
          }
        );
        
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };
  

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (search) {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        setRecipes(response.data.meals);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meals:', error);
        setLoading(false);
      }
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return (
    <div className='flex flex-col flex-1 mb-10'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl text-gray-700 font-bold"> Our Recipes</h1>
        <p className="mt-2 text-gray-700 text-lg">Discover new recipes and try them out!</p>
        <form onSubmit={handleSearch} className='flex justify-end items-center w-96 mt-5 border border-gray-400 rounded-full'>
          <input
            type="text"
            placeholder=" Search"
            className="rounded-full p-2 w-full focus:ring-gray-400"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="absolute bg-black text-white px-2 mr-1 rounded-full py-1">
            <HiOutlineSearch className='h-6' />
          </button>
        </form>
      </div>

      <div className='flex flex-wrap justify-center items-center mt-4 gap-4'>
        {loading ? (
          <div className='flex justify-center items-center h-screen'>
           
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        ) : (
          recipes.map((recipe) => {
            const isWishlisted =wishlist.includes(recipe.idMeal);
            
            return (
              <div key={recipe.idMeal} className='border border-gray-300 hover:scale-105 duration-300 h-[450px] rounded-lg p-4 m-2 w-80'>
                <img src={recipe.strMealThumb} className='w-full rounded-lg' alt={recipe.strMeal} />
                <h2 className='text-xl font-bold mt-4'>{recipe.strMeal}</h2>
                <hr className='my-2'/>
                <div className="flex justify-between items-center mt-6">
                  <button 
                    className={`p-2 rounded-full text-2xl ${isWishlisted ? 'text-red-500' : 'text-gray-500'}`}
                    onClick={() => handleWishlist(recipe, isWishlisted)} 
                    >
                    {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <button className="bg-lime-700 text-white px-4 py-2 rounded-lg"
                    onClick={() => {
                      setDisplayrecipe(true);
                      setIngredients(getIngredients(recipe));
                      setRecipe(recipe);
                    }}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      
      {Displayrecipe && (
        <div>
          <DisplayRecipe recipe={recipe} setDisplayrecipe={setDisplayrecipe} ingredients={ingredients}></DisplayRecipe>
        </div>
      )}
    </div>
  );
};

export default Recipes;
