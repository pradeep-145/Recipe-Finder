import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Recipes from './Pages/Recipes';
import Contact from './Pages/Contact';
import backgroundImage from './assets/background.jpg';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';

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
            <div className='bottom-0  w-full'>
              <Footer/>
            </div>
          </div>
        } />
        <Route path='/home' element={
          <div>
            <div>
              <Navbar logout={true} />
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})` }} className="flex py-10 bg-cover bg-center min-h-screen ">
              <Home/>
            </div>
            <div>
              <AboutUs/>
            </div>
            <div className='bottom-0  w-full'>
              <Footer/>
            </div>
          </div>
        } />
        <Route path='/recipes' element={
          <div >
            <div>
              <Navbar logout={true}/>
            </div>
            <div className='flex pt-28 bg-lime-100 h-full px-4'>
              <Recipes />
            </div>
            <div className='bottom-0  w-full m-0'>
              <Footer/>
            </div>
          </div>
        } />
        <Route path='/contact' element={
          <div>
            <div>
              <Navbar logout={true}  />
            </div>
            <div className='flex h-[80vh] pt-28'>
              <Contact />
            </div>
            <div className='  bottom-0'>
              <Footer/>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
