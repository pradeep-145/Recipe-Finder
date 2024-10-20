import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Recipes from './Pages/Recipes';
import Contact from './Pages/Contact';
import backgroundImage from './assets/background.jpg';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={
          <div className='flex items-center bg-black justify-center'>
            <Login />
          </div>
        } />
        <Route path='/register' element={
          <div className='flex items-center bg-black justify-center'>
            <Register />
          </div>
        } />
        <Route path='/' element={
          <div>
            <div>
              <Navbar  login={true}/>
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})` }} className="flex py-10 bg-cover min-h-screen bg-center ">
              <Home/>
            </div>
            <div>
              <AboutUs/>
            </div>
          </div>
        } />
        <Route path='/home' element={
          <div>
            <div>
              <Navbar  />
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})` }} className="flex py-10 bg-cover bg-center min-h-screen ">
              <Home/>
            </div>
            <div>
              <AboutUs/>
            </div>
          </div>
        } />
        <Route path='/recipes' element={
          <div>
            <div>
              <Navbar/>
            </div>
            <div className='flex pt-28 bg-gray-600 h-screen px-4'>
              <Recipes />
            </div>
          </div>
        } />
        <Route path='/contact' element={
          <div>
            <div>
              <Navbar  />
            </div>
            <div className='flex pt-28'>
              <Contact />
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
