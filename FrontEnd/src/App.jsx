import { Route, Routes } from 'react-router-dom';
import backgroundImage from './assets/background.jpg';
import kitchen from './assets/kitchen.jpg';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Recipes from './Pages/Recipes';
import Register from './Pages/Register';
import WishList from './Pages/WishList';

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
              <Landing/>
            </div>
            <div>
              <AboutUs/>
            </div>
            <div className='bottom-0 w-full'>
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
            <div className='flex pt-28  bg-[#EBE6E0] h-full px-4'>
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
            <div style={{ backgroundImage: `url(${kitchen})` }} className="flex py-10 bg-contain  min-h-screen ">
              <Contact />
            </div>
            <div className='bottom-0'>
              <Footer/>
            </div>
          </div>
        } />
        <Route path='/wishlist' element={
          <div>
            <div>
              <Navbar logout={true}  />
            </div>
            <div className='flex h-full pt-28 overflow-y-scroll bg-[#EBE6E0]'>
              <WishList />
            </div>
            <div className='  w-full m-0 bottom-0'>
              <Footer/>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );

}

export default App;
