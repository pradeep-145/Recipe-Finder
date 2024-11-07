// models/RecipeModel.js
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  origin: String,
  ingredients: [String],
  instructions: String,
  videoLink: String,
  ratings: [Number] // To store ratings given by users
}, { timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);
