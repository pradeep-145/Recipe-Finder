import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Recipes from './Pages/Recipes';
import Contact from './Pages/Contact';
function App() {

  return (


    <div>

      <Routes>
        <Route path='/login' element={
          <div className='flex items-center justify-center'>
            <Login />

          </div>
        } />
        <Route path='/register' element={
          <div className='flex items-center justify-center'>
            <Register />
          </div>
        } />
        <Route path='/' element={
          <div>
            <div>
              <Navbar searchVisible={false} />
            </div>
            <div className='flex items-center justify-center'>
              <Home />
            </div>
          </div>
        } />
      <Route path='/recipes' element={
          <div>
            <div>
              <Navbar searchVisible={true} />
            </div>
            <div className='flex py-8 px-4'>
              <Recipes />
            </div>
          </div>
        } />
        <Route path='/contact' element={
          <div>
            <div>
              <Navbar searchVisible={false} />
            </div>
            <div className='flex items-center justify-center'>
              <Contact />
            </div>
          </div>
        } />
      </Routes>
    </div>


  )
}

export default App
