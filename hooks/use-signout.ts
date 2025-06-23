"use client"

import { authClient } from "@/lib/auth-client";

import { useRouter } from 'next/navigation'
import { toast } from "sonner";
 
export function UseSignOut(){
     const router = useRouter()
     const HandleSingout = async function LogOut(){
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/login"); // redirect to login page
            },
            onError:() =>{
                toast.error('failed logout')
            }
          },
        });
      }
      return HandleSingout;
}