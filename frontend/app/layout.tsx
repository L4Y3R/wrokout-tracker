import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { AuthContextProvider } from '../context/AuthContext'

import Navbar from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Workout Buddy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthContextProvider>
      <html>
        <body className={inter.className}>
          <Navbar/>
          {children}
        </body>
      </html>        
    </AuthContextProvider>
  )
}
