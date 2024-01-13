import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <div className="font-bungee text-2xl w-full py-5 px-40">
        <Link href="/">
            Workout Buddy
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
  