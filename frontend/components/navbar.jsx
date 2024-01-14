import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <div className="font-bungee md:text-2xl w-full py-5 px-5 md:px-40 bg-slate-100 md:fixed shadow-md">
        <Link href="/">
            Workout Buddy
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
  