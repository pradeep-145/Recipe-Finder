const express = require('express');
const admin = require('firebase-admin');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const firebase = require('firebase/app');
const mongoose = require('mongoose');
const Wishlist = require('./models/WishlistModel');
const cors = require('cors');
const {translate}=require('libretranslate')
const axios=require('axios')
require('firebase/auth');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));

admin.initializeApp({
  credential: admin.credential.cert(require(process.env.ADMIN)),
  databaseURL: process.env.FIREBASE_DATABASE_URL
}); 

const firebaseConfig = {
  apiKey: "AIzaSyAOZOvZsxRv-TsZJlPafw-SbBysopG_XdA",
  authDomain: "recipefinder-727dd.firebaseapp.com",
  projectId: "recipefinder-727dd",
  storageBucket: "recipefinder-727dd.appspot.com",
  messagingSenderId: "737290737262",
  appId: "1:737290737262:web:4935527c7b2920e344b87f",
  measurementId: "G-9GFQKE7DS0"
};
firebase.initializeApp(firebaseConfig);
const auth = getAuth();

// Middleware to verify token
const verifyToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];
  if (!idToken) {
    return res.status(403).send('Unauthorized');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    console.log(decodedToken)
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).send('Unauthorized');
  }
};
app.post('/translate', async (req, res) => {
  const { text, to } = req.body;
 
  
  try {
    const response = await axios.post(
      'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0',
      [
        { 'Text': text.ingredients.join(', ') }, 
        { 'Text': text.instructions },
        { 'Text': text.ingredientHeading },
        { 'Text': text.instructionHeading },
        { 'Text': text.videoHeading },
      ],
      {
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.SUBSCRIPTION_KEY,
          'Ocp-Apim-Subscription-Region': 'southeastasia',
          'Content-Type': 'application/json'
        },
        params: {
          'to': to
        }
      }
    );

    const translations = {
      ingredients: response.data[0].translations[0].text,
      instructions: response.data[1].translations[0].text,
      ingredientHeading: response.data[2].translations[0].text,
      instructionHeading: response.data[3].translations[0].text,
      videoHeading: response.data[4].translations[0].text
    };

    res.json(translations);
  } catch (error) {
    console.error('Error during translation:', error);
    res.status(400).json({ message: error.message });
  }
});

// Register route
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken();
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(400).json({ message: error.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken();
    res.status(200).json({ message: 'Success', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(400).json({ message: error.message });
  }
});

// Protected route
app.get('/protected', verifyToken, (req, res) => {
  return res.send(`Hello, ${req.user.email}! You are authenticated.`);
});

// POST: Add recipe to wishlist
app.post('/wishlist', verifyToken, async (req, res) => {
  const { recipe } = req.body;
  
  try {
    const existingWishlist = await Wishlist.findOne({ user: req.user.email });
    
    if (!existingWishlist) {
      // Create a new wishlist for the user if it doesn't exist
      const newWishlist = new Wishlist({
        user: req.user.email,
        recipes: [recipe]
      });
      await newWishlist.save();
      return res.status(201).json(newWishlist);
    }

    // Check if the recipe already exists in the user's wishlist
    const isAlreadyInWishlist = existingWishlist.recipes.some(
      (r) => r.idMeal === recipe.idMeal
    );
    
    if (isAlreadyInWishlist) {
      return res.status(409).json({ message: 'Recipe is already in wishlist' });
    }

    existingWishlist.recipes.push(recipe);
    await existingWishlist.save();
    return res.status(200).json(existingWishlist);
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE: Remove recipe from wishlist by idMeal
app.delete('/wishlist/:idMeal', verifyToken, async (req, res) => {
  const { idMeal } = req.params;
  
  try {
    const updatedWishlist = await Wishlist.findOneAndUpdate(
      { user: req.user.email },
      { $pull: { recipes: { idMeal: idMeal } } },
      { new: true }
    );

    if (!updatedWishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    return res.status(200).json(updatedWishlist);
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// GET: Retrieve wishlist for the authenticated user
app.get('/wishlist', verifyToken, async (req, res) => {
  try {
    const userWishlist = await Wishlist.findOne({ user: req.user.email });
    if (!userWishlist) {
      return res.status(404).json({ message: 'No wishlist found' });
    }

    return res.status(200).json(userWishlist.recipes);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
