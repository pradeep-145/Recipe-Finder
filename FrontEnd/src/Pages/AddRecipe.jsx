import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    ingredients: '',
    instructions: '',
    videoLink: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddRecipe = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3000/recipes', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Recipe added successfully!");
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 bg-[#f1eee5] text-[#4C7766] rounded-lg shadow-2xl">
      <h2 className="text-3xl font-bold text-[#4C7766] mb-8">Add Your Recipe</h2>
      <div className="w-full max-w-lg space-y-6">
        <input
          name="name" 
          placeholder="Recipe Name"
          className="w-full p-3 rounded-md border border-[#4C7766] text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C7766]"
          onChange={handleChange}
        />
        <input
          name="origin"
          placeholder="Origin"
          className="w-full p-3 rounded-md  border border-[#4C7766] text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C7766]"
          onChange={handleChange}
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma-separated)"
          className="w-full p-3 rounded-md border border-[#4C7766] text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C7766] resize-none"
          onChange={handleChange}
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          className="w-full p-3 rounded-md border border-[#4C7766] text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C7766] resize-none"
          onChange={handleChange}
        />
        <input
          name="videoLink"
          placeholder="Video Link"
          className="w-full p-3 rounded-md  border border-[#4C7766] text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4C7766]"
          onChange={handleChange}
        />
        <button
          onClick={handleAddRecipe}
          className="w-full p-3 bg-[#4C7766] text-white rounded-md hover:bg-[#5ea78a] focus:outline-none focus:ring-2 focus:ring-[#4C7766] mt-4"
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default AddRecipe;
