"use client"

import { authClient } from "@/lib/auth-client";

export default  function Home() {
  const { 
    data: session, 
} = authClient.useSession() 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    Hello : {session ? (
      <>Welcome {session.user.name}</>
    ):(
      <>Not authenticated</>
    )}
    </div>
  );
}
