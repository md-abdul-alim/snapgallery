'use client';

import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClicOutside = (event) => {
    if(toggleRef.current && !toggleRef.current.contains(event.target)){
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClicOutside);
    return ()=>{
      document.removeEventListener('click', handleClicOutside);
    }
  }, []);

  return (
    <header className='stick'>
      <nav className='flex justify-between items-center'>
        <Link href="/" className='mr-4 flex items-center text-gray-700'>
          <FontAwesomeIcon icon={faCameraRetro} className='text-2xl' />
        </Link>
        <div className='flex-grow'>
          <div className="relative">
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <FontAwesomeIcon icon={faSearch} className='text-gray-500' />
            </span>
            <input 
              type="text" 
              className='w-full p-2 pl-10 rounded-xl outline-none bg-slate-100 hover:bg-slate-200' 
              name="search" 
              id="search" 
              placeholder='Search your desire...' 
            />
          </div>
        </div>
        <div className='ml-auto flex items-center relative'>
          <Link href="/login" className='ml-4 mr-4 text-gray-500'>Log In</Link>
          <div ref={toggleRef}>
            <button 
              className='p-2 rounded-md text-gray-500 cursor-pointer'
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} size='xl' />
            </button>
            {isOpen && (
              <div className='absolute left-0 top-full w-auto bg-white rounded-md shadow-lg py-1 z-50'>
                <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Explore</a>
                <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Advertise</a>
                <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Blog</a>
                <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>About</a>
                <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Press</a>
                <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Join</a>
              </div>
            )}
          </div>
        </div>          
      </nav>
    </header>
  )
}
