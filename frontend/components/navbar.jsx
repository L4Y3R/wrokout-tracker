import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="w-full py-5 px-5 md:px-40 bg-slate-100 md:fixed shadow-md flex justify-between">
      <div>
        <Link href="/">
           <span className="font-bungee md:text-2xl"> Workout Buddy </span> 
        </Link>
      </div>
      <div>
        <Link href="/login">
          <button className="mr-3 bg-amber-400 hover:bg-amber-300 rounded-lg px-3 py-1"> Login </button>
        </Link>
        <Link href="/signup">
          <button className="bg-amber-400 hover:bg-amber-300 rounded-lg px-3 py-1"> Sign Up </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
  