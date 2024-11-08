import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { HiOutlineSearch } from "react-icons/hi";
import Lottie from 'react-lottie';
import animationData from '../assets/loadingAnimation.json';
import DisplayRecipe from '../Components/DisplayRecipe';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [Displayrecipe, setDisplayrecipe] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [ratings, setRatings] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchRecipes();
    fetchWishlist();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (search.trim() !== '') {
      fetchRecipes(search);
    }
    // eslint-disable-next-line
  }, [search]);

  const fetchRecipes = async (searchTerm = '') => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const fetchedRecipes = response.data.meals || [];
      setRecipes(fetchedRecipes);
      
      fetchedRecipes.forEach(recipe => {
        fetchAverageRating(recipe.idMeal);
        
      });
      setLoading(false);
    } catch (error) {
      console.error(error.response?.data || error.message);
      setLoading(false);
    }
  };

  const fetchWishlist = async () => {
    try {
      const response = await axios.get('https://recipe-finder-usfp.onrender.com/wishlist', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setWishlist(response.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  const fetchAverageRating = async (recipeId) => {
    try {
      const response = await axios.get(`http://localhost:3000/recipe/${recipeId}/ratings`);
      setRatings(prevRatings => ({
        ...prevRatings,
        [recipeId]: response.data.averageRating
      }));
      
      
    } catch (error) {
      console.error(`Error fetching ratings for recipe ${recipeId}:`, error.response?.data || error.message);
    }
  };

  const handleWishlist = async (recipe) => {
    try {
      const response = await axios.post(
        'https://recipe-finder-usfp.onrender.com/wishlist',
        { recipe: recipe },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      setWishlist(response.data.recipes);
      toast.success('Recipe added to wishlist!', {
        position: "top-center",
        autoClose: 3000,
        style: { backgroundColor: 'black', color: '#EBE6E0' },
        transition: Flip,
      });
    } catch (error) {
      if (error.response?.data.message === "Recipe is already in wishlist") {
        toast.error('Recipe is already in wishlist!', {
          position: "top-center",
          autoClose: 3000,
          style: { backgroundColor: 'black', color: '#EBE6E0' },
          transition: Flip,
        });
      } else if (error.response?.data.message === "Unauthorized") {
        toast.error('Please login to add to wishlist!', {
          position: "top-center",
          autoClose: 3000,
          style: { backgroundColor: 'black', color: '#EBE6E0' },
          transition: Flip,
        });
      } else {
        toast.error('Failed to add to wishlist!', {
          position: "top-center",
          autoClose: 3000,
          style: { backgroundColor: 'black', color: '#EBE6E0' },
          transition: Flip,
        });
      }
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    fetchRecipes(search);
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
        <form onSubmit={handleSearch} className='relative flex justify-end items-center w-96 mt-5 border border-[#4C7766] rounded-full'>
          <input
            type="text"
            placeholder="Search"
            className="rounded-full p-2 w-full focus:ring-2 focus:ring-[#4C7766] focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="absolute right-1 bg-[#4C7766] text-white px-3 rounded-full py-1">
            <HiOutlineSearch className='h-6 w-6' />
          </button>
        </form>
      </div>

      <div className='flex flex-wrap justify-center items-center mt-4 gap-4'>
        {loading ? (
          <div className='flex justify-center items-center w-full h-screen'>
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        ) : (
          recipes.length > 0 ? (
            recipes.map((recipe) => {
              
              const isWishlisted = wishlist.some(wishItem => wishItem.idMeal === recipe.idMeal);
              return (
                <div key={recipe.idMeal} className='border border-gray-300 hover:scale-105 duration-300 rounded-lg p-3 m-5 w-80 bg-[#4C7766] shadow-lg shadow-[#5ea78a] flex flex-col'>
                  <img src={recipe.strMealThumb} className='w-full rounded-lg h-48 object-cover' alt={recipe.strMeal} />
                  <div className='flex flex-col flex-1 mt-4'>
                    <h2 className='text-xl font-bold text-[#EBE6E0] truncate' title={recipe.strMeal}>{recipe.strMeal}</h2>
                    <p className='text-sm text-[#EBE6E0] mt-2'>Average Rating: {ratings[recipe.idMeal] || '0'} / 5</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <button 
                      className={`p-2 rounded-full text-2xl ${isWishlisted ? 'text-red-500' : 'text-white'}`}
                      onClick={() => handleWishlist(recipe)} 
                    >
                      {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button className="bg-white text-[#4C7766] font-semibold px-4 py-2 rounded-lg"
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
          ) : (
            <div>
              <h1 className='text-2xl text-gray-700'>No recipes found</h1>
            </div>
          )
        )}
      </div>

      {Displayrecipe && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50'>
          <DisplayRecipe 
            recipe={recipe} 
            setDisplayrecipe={setDisplayrecipe} 
            ingredients={ingredients} 
            fetchAverageRating={() => fetchAverageRating(recipe.idMeal)} 
          />
        </div>
      )}
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
};

export default Recipes;
