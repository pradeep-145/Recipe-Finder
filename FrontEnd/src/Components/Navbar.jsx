import { useState } from 'react';
import headerLogo from '../assets/home_logo.png';
import { Link } from 'react-router-dom';
import { HiOutlineSearch } from "react-icons/hi";

const Sidebar = ({searchVisible}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const handleSearch=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/search', { search })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.response.data);
    });
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex shadow-lg">
      <div className="flex-grow ">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <img src={headerLogo} alt="logo" width={50} height={29} className='m-2 ml-3'/>
          </Link>
          {
            searchVisible&&
            <div className='flex justify-center items-center'>
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-full p-2 w-96 focus:ring-gray-400"  onChange={(e)=> setSearch(e.target.value)}/>
            <button type="submit" className="absolute bg-black text-white px-2 rounded-full ml-2 right-96"><HiOutlineSearch className='h-6 ' onClick={(e)=>handleSearch(e)}/></button>
          </div>
          }
          <button onClick={toggleSidebar} className="text-black focus:outline-none m-2">
            {/* Burger Menu Icon */}
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

        
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-full bg-gray-100 shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } duration-300`}
      >
        <div className="p-4 flex gap-10 justify-between items-center">
          <button onClick={toggleSidebar} className="text-black ml-10 mt-6 focus:outline-none">
            {/* Close Button Icon */}
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
          <ul className="flex flex-col px-4 gap-4">
            <li>
              <Link to="/" className="text-gray-800 hover:text-red-800" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="text-gray-800 hover:text-red-800" onClick={toggleSidebar}>
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 hover:text-red-800" onClick={toggleSidebar}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
