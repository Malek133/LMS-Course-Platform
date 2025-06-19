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
import { Loader } from "lucide-react"
import { useTransition } from "react"
import { toast } from "sonner"

 

  

export function LoginForm(){
    const [githubPending, startGithubTransition] = useTransition();
  const [googlePending, startGoogleTransition] = useTransition();

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
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
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