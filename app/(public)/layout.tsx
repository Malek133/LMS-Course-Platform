import { ReactNode } from "react";
import Navbar from "@/components/navbar";

export default function LayoutPublic({children}:{children:ReactNode}){
    return(
        <main>
            <Navbar />
        {children}
        </main>
    )
}