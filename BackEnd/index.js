const express = require('express');
const admin = require('firebase-admin');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const firebase = require('firebase/app');
const cors=require('cors')
require('firebase/auth');
require('dotenv').config()
const app = express();

app.use(express.json());
app.use(cors())


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

const verifyToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1]; 

  if (!idToken) {
    return res.status(403).send('Unauthorized');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).send('Unauthorized');
  }
};

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

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken();
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(400).json({ message: error.message });
  }
});

app.get('/protected', verifyToken, (req, res) => {
  return res.send(`Hello, ${req.user.name || req.user.email}! You are authenticated.`);
});
app.get('/search',(req,res))
app.get('/', (req, res) => {
  res.send('Public route - no authentication needed');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
