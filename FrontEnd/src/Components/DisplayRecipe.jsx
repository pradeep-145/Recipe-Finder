import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { BsTranslate } from "react-icons/bs";
import axios from 'axios';
const DisplayRecipe = ({ recipe, setDisplayrecipe, ingredients }) => {
  const videoId = recipe.strYoutube.split('v=')[1];
  const [ingredientHeading, setIngredientHeading] = useState("Ingredients");
  const [instructionHeading, setInstructionHeading] = useState("Instructions");
  const [videoHeading, setVideoHeading] = useState("Watch Recipe Video");

  
  const languages = [
    { "name": "Afrikaans", "code": "af" },
    { "name": "Albanian", "code": "sq" },
    { "name": "Amharic", "code": "am" },
    { "name": "Arabic", "code": "ar" },
    { "name": "Armenian", "code": "hy" },
    { "name": "Assamese", "code": "as" },
    { "name": "Azerbaijani", "code": "az" },
    { "name": "Bangla", "code": "bn" },
    { "name": "Bashkir", "code": "ba" },
    { "name": "Bosnian (Latin)", "code": "bs" },
    { "name": "Bulgarian", "code": "bg" },
    { "name": "Cantonese (Traditional)", "code": "yue" },
    { "name": "Catalan", "code": "ca" },
    { "name": "Chinese (Simplified)", "code": "zh-Hans" },
    { "name": "Chinese (Traditional)", "code": "zh-Hant" },
    { "name": "Croatian", "code": "hr" },
    { "name": "Czech", "code": "cs" },
    { "name": "Danish", "code": "da" },
    { "name": "Dari", "code": "prs" },
    { "name": "Dutch", "code": "nl" },
    { "name": "English", "code": "en" },
    { "name": "Estonian", "code": "et" },
    { "name": "Fijian", "code": "fj" },
    { "name": "Filipino", "code": "fil" },
    { "name": "Finnish", "code": "fi" },
    { "name": "French", "code": "fr" },
    { "name": "French (Canada)", "code": "fr-CA" },
    { "name": "Galician", "code": "gl" },
    { "name": "Georgian", "code": "ka" },
    { "name": "German", "code": "de" },
    { "name": "Greek", "code": "el" },
    { "name": "Gujarati", "code": "gu" },
    { "name": "Haitian Creole", "code": "ht" },
    { "name": "Hebrew", "code": "he" },
    { "name": "Hindi", "code": "hi" },
    { "name": "Hungarian", "code": "hu" },
    { "name": "Icelandic", "code": "is" },
    { "name": "Indonesian", "code": "id" },
    { "name": "Inuktitut (Syllabics)", "code": "iu" },
    { "name": "Irish", "code": "ga" },
    { "name": "Italian", "code": "it" },
    { "name": "Japanese", "code": "ja" },
    { "name": "Kannada", "code": "kn" },
    { "name": "Kazakh", "code": "kk" },
    { "name": "Khmer", "code": "km" },
    { "name": "Klingon", "code": "tlh" },
    { "name": "Korean", "code": "ko" },
    { "name": "Kurdish (Central)", "code": "ku" },
    { "name": "Kyrgyz", "code": "ky" },
    { "name": "Lao", "code": "lo" },
    { "name": "Latvian", "code": "lv" },
    { "name": "Lithuanian", "code": "lt" },
    { "name": "Macedonian", "code": "mk" },
    { "name": "Malay", "code": "ms" },
    { "name": "Malayalam", "code": "ml" },
    { "name": "Maltese", "code": "mt" },
    { "name": "Maori", "code": "mi" },
    { "name": "Marathi", "code": "mr" },
    { "name": "Mongolian (Cyrillic)", "code": "mn-Cyrl" },
    { "name": "Myanmar (Burmese)", "code": "my" },
    { "name": "Nepali", "code": "ne" },
    { "name": "Norwegian", "code": "no" },
    { "name": "Odia (Oriya)", "code": "or" },
    { "name": "Pashto", "code": "ps" },
    { "name": "Polish", "code": "pl" },
    { "name": "Portuguese (Brazil)", "code": "pt" },
    { "name": "Portuguese (Portugal)", "code": "pt-PT" },
    { "name": "Punjabi", "code": "pa" },
    { "name": "Romanian", "code": "ro" },
    { "name": "Russian", "code": "ru" },
    { "name": "Serbian (Latin)", "code": "sr-Latn" },
    { "name": "Slovak", "code": "sk" },
    { "name": "Spanish", "code": "es" },
    { "name": "Swahili", "code": "sw" },
    { "name": "Swedish", "code": "sv" },
    { "name": "Tamil", "code": "ta" },
    { "name": "Telugu", "code": "te" },
    { "name": "Turkish", "code": "tr" },
    { "name": "Ukrainian", "code": "uk" },
    { "name": "Urdu", "code": "ur" },
    { "name": "Vietnamese", "code": "vi" }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (recipe) => {
    const request = {
      text: {
        name: recipe.strMeal,
        ingredients: ingredients,
        instructions: recipe.strInstructions,
        ingredientHeading: ingredientHeading,
        instructionHeading: instructionHeading,
        videoHeading: videoHeading
      },
      to: selectedLanguage
    };
    axios.post('http://localhost:3000/translate', request)
  };

  return (
    <div className="bg-[#EBE6E0] text-xl w-3/4 h-3/4 fixed top-1/2 left-1/2 border-2 border-black transform -translate-x-1/2 -translate-y-1/2 p-20 overflow-y-scroll rounded-2xl">
      <h1 className="text-5xl font-bold text-center text-[#4C7766] font-mono">{recipe.strMeal}</h1>
      <button onClick={() => setDisplayrecipe(false)} className="fixed top-2 right-1 px-2 mr-1 rounded-full py-1 text-4xl text-[#4C7766]">
        <IoCloseCircleSharp />
      </button>
      <img src={recipe.strMealThumb} alt={recipe.label} className="rounded-lg w-full mt-10 h-64 object-contain" />
      <div className="text-lg font-semibold flex gap-6 justify-center items-center mt-10">
        <p className="border-2 bg-[#4C7766] text-[#EBE6E0] p-2 rounded-full">Origin : {recipe.strArea}</p>
        <p className="border-2 bg-[#4C7766] text-[#EBE6E0] p-2 rounded-full">Category : {recipe.strCategory}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <BsTranslate style={{ marginRight: "10px" }} className='text-4xl text-[#4C7766]' />
          <select
            className='border-2 border-[#4C7766] bg-[#EBE6E0] text-[#4C7766] p-2 rounded-full'
            value={selectedLanguage}
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
              handleLanguageChange(recipe);
            }}
            style={{ padding: "5px", fontSize: "16px" }}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#4C7766] font-mono">{ingredientHeading}</h2>
        <ul className="list-disc list-inside mt-4 font-semibold">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-[#4C7766] font-mono">{instructionHeading}</h2>
        <p className="mt-2">{recipe.strInstructions}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[#4C7766] font-mono">{videoHeading}</h2>
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DisplayRecipe;
