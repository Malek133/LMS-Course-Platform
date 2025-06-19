

import { auth } from "@/lib/auth"
import { LoginForm } from "../_components/LoginForms"
import { headers } from "next/headers"



 async function  LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers()
})
if (session) {
  console.log('alphazero')
}


  return (
    <LoginForm /> 
    
  )
}

export default LoginPage