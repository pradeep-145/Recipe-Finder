const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  recipeId: {
    type: String,
    required: true,
    unique: true
  },
  ratings: [
    {
      user: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      }
    }
  ]
});

module.exports = mongoose.model('Rating', ratingSchema);
