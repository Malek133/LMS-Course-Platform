"use client"

import { Button } from "@/components/ui/button"
import {
  Card,CardAction,CardContent,
  CardDescription,
  CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { Loader, Send } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { toast } from "sonner"

export function LoginForm(){
  const router = useRouter()
    const [githubPending, startGithubTransition] = useTransition();
  const [googlePending, startGoogleTransition] = useTransition();
  const [emailPending, startEmailTransition] = useTransition();
  const [email,setEmail]= useState("")

  async function signinWitEmail(){
    startEmailTransition(async () =>{
      await authClient.emailOtp.sendVerificationOtp({
        email: email,
        type:"sign-in",
        fetchOptions:{
          onSuccess : () =>{
            toast.success('email sent');
            router.push(`/verefy-require?email=${email}`)
          },
          onError:(error) =>{
            toast.error(error.error.message);
          }
        }
      })
    })
  } 

  async  function signinWithGithub(){
    startGithubTransition(async () =>{
       await authClient.signIn.social({
      provider:"github",
      callbackURL:"/",
      fetchOptions: {
        onSuccess : () =>{
          toast.success('we signin required');
        },
        onError:(error) =>{
          toast.error(error.error.message);
        }
      }
    })
    })
   
  }

  async  function signinWithGoogle(){
    startGoogleTransition(async () =>{
      await authClient.signIn.social({
     provider:"google",
     callbackURL:"/",
     fetchOptions: {
       onSuccess : () =>{
         toast.success('we signin required');
       },
       onError:(error) =>{
         toast.error(error.error.message);
       }
     }
   })
   })
  }
    return (
        <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button onClick={signinWitEmail} disabled={emailPending} type="submit" className="w-full">
          
          {emailPending ? (
            <>
            <Loader className="size-4 animate-spin" />
            <span>Loading...</span>
            </>
          ):(
           <>
           <Send className="size-4" />
           <span>Login with Email</span>
           </>  
          )}
        </Button>
        <Button disabled={googlePending} onClick={signinWithGoogle} variant="outline" className="w-full">
          
          {googlePending ? (
            <>
            <Loader className="size-4 animate-spin" />
            <span>Loading...</span>
            </>
          ):(
           <>Login with Google</>  
          )}
        </Button>
        <Button disabled={githubPending} onClick={signinWithGithub} 
        variant="outline" className="w-full">
          {githubPending ? (
            <>
            <Loader className="size-4 animate-spin" />
            <span>Loading...</span>
            </>
          ):(
           <>Login with Github</>  
          )}
         
        </Button>
      </CardFooter>
    </Card>
    )
}