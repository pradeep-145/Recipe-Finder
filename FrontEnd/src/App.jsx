import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
function App() {

  return (


    <div>

      <Routes>
        <Route path='/login' element={
          <div className='h-screen flex items-center justify-center'>
            <Login />

          </div>
        } />
        <Route path='/register' element={
          <div className='h-screen flex items-center justify-center'>
            <Register />
          </div>
        } />
        <Route path='/' element={
          <div>
            <div>
              <Navbar />
            </div>
            <div className=' h-screen flex items-center justify-center'>
              <Home />
            </div>
          </div>
        } />
      </Routes>
    </div>


  )
}

export default App
