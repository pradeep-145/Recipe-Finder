import {Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
function App() {

  return (

      <Routes>
        <Route path ='login' element={
          // <div className="bg-[url('src/assets/bg.jpg')] bg-cover before:bg-black">  
            <div className=' login h-screen flex items-center justify-center'>
          <Login/>
          {/* </div> */}
           </div>
          }/>
          <Route path ='register' element={
          // <div className="bg-[url('src/assets/bg.jpg')] bg-cover before:bg-black">  
            <div className=' login h-screen flex items-center justify-center'>
          <Register/>
          {/* </div> */}
           </div>
          }/>
      </Routes>
  
  
  )
}

export default App
