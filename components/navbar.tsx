"use client"

import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import { Hand } from 'lucide-react'
import { Button } from './ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  async function LogOut(){
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  }
  const { 
    data: session, 
} = authClient.useSession()
  return (
    <div className="flex justify-end items-center gap-4 mx-4 my-8">
        <Link href="/ "><p>Home</p></Link>
        
        {session ? (
      <>
      <Link href="/admin"><p>Admin</p></Link>
      <Hand /> {session.user.name}
      <Button onClick={LogOut}>Logout</Button>
      </>
    ):(
      <>
       <Link href="/login">Login</Link>
      </>
    )}
       
        <ModeToggle />
      
    </div>
  )
}

export default Navbar
