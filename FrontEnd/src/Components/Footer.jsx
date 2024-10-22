import  footerLogo from "../assets/home_logo.png"
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';  
import copyrightSign from '../assets/copyright.svg';

const Footer = () => {
  return (
    <footer className="max-container px-2  bg-slate-200">
      <div className="flex justify-between items-start gap-20 ml-3 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start mt-2">
          <a href="/">
            <img src={footerLogo} alt="logo" width={100} height={46} className="cursor-pointer m-0" />
          </a>
          

          <div className="flex items-center mt-2 gap-5">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white ">
              <img src={facebook} width={24} height={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white ">
              <img src={twitter} width={24} height={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white ">
              <img src={instagram} width={24} height={24} />
            </div>
          </div>
        </div>
        </div>
        
        <div className='flex justify-between text-black mt-2 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0 bg-black'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer '>Terms & Conditions</p>
      </div>

      </footer>

  )
}

export default Footer
