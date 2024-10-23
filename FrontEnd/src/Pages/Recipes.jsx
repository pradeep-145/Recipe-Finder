import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiOutlineSearch } from "react-icons/hi";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Spinner from '../assets/load.svg';
import DisplayRecipe from '../Components/DisplayRecipe';
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]); 
  const [Displayrecipe, setDisplayrecipe] = useState(false);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/search`, { search: 'veg' })
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.response.data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(`http://localhost:3000/search`, { params: { search } })
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.response.data);
        setLoading(false);
      });
  };

  const toggleWishlist = (recipe) => {
    const isAlreadyInWishlist = wishlist.includes(recipe);
    if (isAlreadyInWishlist) {
      setWishlist(wishlist.filter(item => item !== recipe)); 
    } else {
      setWishlist([...wishlist, recipe]);
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

      <div className='flex flex-wrap justify-center items-center mt-4'>
        {recipes.map((recipe, index) => {
          const isWishlisted = wishlist.includes(recipe.recipe);
          return (
            <div key={index} className='border border-gray-300 hover:scale-105 duration-300 h-[450px] rounded-lg p-4 m-2 w-80'>
              <img src={recipe.recipe.image} className='w-full rounded-lg' alt={recipe.recipe.label} />
              <h2 className='text-xl font-bold mt-4'>{recipe.recipe.label}</h2>
              <hr className='my-2'/>
              <div className="flex justify-between items-center my-2">
                <button 
                  className={`p-2 rounded-full text-2xl ${isWishlisted ? 'text-red-500' : 'text-gray-500'}`}
                  onClick={() => toggleWishlist(recipe.recipe)} 
                >
                  {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                </button>
                <button className="bg-lime-700 text-white px-4 py-2 rounded-lg"
                onClick={()=>{setDisplayrecipe(true)
                setRecipe(recipe.recipe)
                }}
                >
                  View Recipe
                </button>
              </div>
            </div>
          
          );
        })}

        {loading && (
          <div className='bg-slate-950 bg-opacity-25 absolute w-[500vh] h-[250vh] flex justify-center items-center'>
            <img src={Spinner} alt="loading" className="w-30 h-20" />
          </div>
        )}
      </div>
      {
      Displayrecipe&&
      <div>
        <DisplayRecipe recipe={recipe} setDisplayrecipe={()=>setDisplayrecipe()}></DisplayRecipe>

      </div>}
    </div>

  );
};

export default Recipes;
