import { useState } from 'react';
import headerLogo from '../assets/home_logo.png';
import { Link } from 'react-router-dom';
import { ToastContainer,Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({ login, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const notify = () => toast.success('Logging you out!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="relative">
      <div className="fixed top-0 left-0 w-full flex justify-between items-center h-16 px-4 py-2 bg-[#4C7766] bg-opacity-60  backdrop-blur-md shadow-lg z-50">
        
        <Link to="/home">
          <img src={headerLogo} alt="logo" width={50} height={29} className="m-2" />
        </Link>
        {login && (
          <button className="bg-transparent border-2 hover:border-gray-400 hover:text-gray-400 p-2 rounded-full text-white font-mono ml-[70%]">
            <Link to="/register">Login/SignUp</Link>

          </button>
        )}
        <button onClick={toggleSidebar} className="text-white hover:text-gray-400 focus:outline-none m-2">
          
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

    
      <aside
        className={`fixed right-0 top-0 h-full bg-[#4C7766] bg-opacity-80  shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } duration-300 z-40`}
      >
        <div className="p-4 flex justify-between items-center">
          <button onClick={toggleSidebar} className="text-black ml-10 mt-6 focus:outline-none">
            
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-4">
          <ul className="flex flex-col px-4 gap-4 font-bold text-xl">
            <li>
              <Link to="/home" className="text-gray-100 hover:text-[#7fd8b5]" onClick={toggleSidebar}>
                Home<hr/>
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="text-gray-100 hover:text-[#7fd8b5]" onClick={toggleSidebar}>
                Recipes<hr/>
              </Link>
            </li>
            {
              logout &&
            <li>
              <Link to="/wishlist" className="text-gray-100 hover:text-[#7fd8b5]" onClick={toggleSidebar}>
                Wishlist<hr/>
              </Link>
            </li>
            }
            <li>
              <Link to="/contact" className="text-gray-100 hover:text-[#7fd8b5]" onClick={toggleSidebar}>
                Contact<hr/>
              </Link>
            </li>

            {
              logout &&
              <li>
                <Link to="/" className="text-gray-100 hover:text-[#7fd8b5]" onClick={() => { toggleSidebar(); notify(); localStorage.removeItem('token') }}>
                  Logout<hr/>
                </Link>
              </li>
            }
          </ul>
        </nav>
      </aside>
            <ToastContainer/>
    </div>
  );
};

export default Sidebar;
