'use client';

import React from 'react'
import Link from 'next/link'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


function Navbar() {
  const { logout } =useLogout()
  const { user } = useAuthContext()

  const handleLogout = ()=> {
    logout()
  }

  return (
    <nav className="w-full py-5 px-5 md:px-40 bg-slate-100 md:fixed shadow-md flex justify-between">
      <div>
        <Link href="/">
           <span className="font-bungee md:text-2xl"> Workout Buddy </span> 
        </Link>
      </div>
      {!user && (
        <div>    
          <Link href="/login">
            <button className="mr-3 bg-amber-400 hover:bg-amber-300 rounded-lg px-3 py-1"> Login </button>
          </Link>
          <Link href="/signup">
            <button className="mr-3 bg-amber-400 hover:bg-amber-300 rounded-lg px-3 py-1"> Sign Up </button>
          </Link>
        </div>
      )}
      
      {user && (
        <div>
        <span> { user.email } </span>
          <button onClick={handleLogout} className="mr-3 hover:bg-red-500 rounded-lg px-3 py-1">
            <Link href='/login'>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
            </Link>
          </button>
        </div>
      )}   
    </nav>
  )
}

export default Navbar
  