import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

  return (
    <header className='stick'>
      <nav className='flex justify-between items-center'>
        <a href="#" className='mr-4 flex items-center text-gray-700'>
          <FontAwesomeIcon icon={faCameraRetro} className='text-2xl' />
        </a>
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
        <div className='ml-auto flex items-center'>
          <a href="#" className='ml-4 mr-4 text-gray-500'>Log In</a>
          <button className='p-3 rounded-md text-gray-500'>
            <FontAwesomeIcon icon={faBars} size='xl' />
          </button>
        </div>          
      </nav>
    </header>
  )
}
