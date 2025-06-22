"use client"
import React, { useState, useTransition } from 'react'
import {Button} from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { authClient } from '@/lib/auth-client'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

const LoginFormOtp = () => {
    const router = useRouter()
   const  [otp,setOtp]=useState("");
   const [emailPending, startEmailTransition] = useTransition();
   const params = useSearchParams()
   const email= params.get('email') as string
   const isOtpCompleted = otp.length === 6

   async function verfyOtp(){
    startEmailTransition( async () =>{
         await authClient.signIn.emailOtp({
            email:email,
            otp:otp,
            fetchOptions:{
                onSuccess : () =>{
                  toast.success('email vereyfied');
                  router.push('/')
                  
                },
                onError:(error) =>{
                  toast.error(error.error.message);
                }
              }
        })
    })
   }
  return (
    

    <Card className="w-full max-auto">
      <CardHeader>
        <CardTitle>Check your email</CardTitle>
        <CardDescription>
         you recive an email in your box
        </CardDescription>
        
      </CardHeader>
      <CardContent>
       <div>
       <InputOTP value={otp} onChange={value =>setOtp(value)} maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
     </InputOTP>
     <p className='my-3'>pleas put the ode sent in your email</p>
       </div>
     <Button onClick={verfyOtp} disabled={emailPending || !isOtpCompleted}>Verfy request</Button>
      </CardContent>
    
    </Card>

    
  )
}

export default LoginFormOtp 
