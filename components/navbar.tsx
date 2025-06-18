import React from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-end items-center gap-4 mx-4 my-8">
        <Link href="/ "><p>Home</p></Link>
        <Link href="/login">Login</Link>
        <Link href="/signUp">signup</Link>
        <ModeToggle />
      
    </div>
  )
}

export default Navbar
