import React from 'react'

export default function Navbar() {

  return (
    <header className='stick'>
      <nav className='flex justify-between items-center'>
        <a href="#" className='mr-4'>Logo</a>
        <div className='flex-grow'>
          <input 
            type="text" 
            className='w-full p-2 rounded-md' 
            name="search" 
            id="search" 
            placeholder='Search your desire...' 
          />
        </div>
        <div className='ml-auto flex items-center'>
          <a href="#" className='ml-4 mr-4'>Log In</a>
          <button className='p-2 bg-blue-500 text-white rounded-md'>
            Toggle bar
          </button>
        </div>          
      </nav>
    </header>
  )
}
