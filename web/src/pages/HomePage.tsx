import React from "react";
import { CardProject } from "../components/CardProject";
import { CardTask } from "../components/CardTask";
import { Footer } from "../components/Footer";


export function HomePage() {
    return(
        <div className="flex flex-col items-center justify-between h-screen">

            <div className=" flex flex-row bg-white w-full p-10 shadow-md">
                <h1 className=" flex text-6xl font-black text-black">post-it <h1 className="text-6xl font-black text-indigo-400">.</h1> </h1>
            </div>
            
            <div className="flex justify-center p-10 w-3/5">
                <CardProject />
            </div>

            <div className="w-full shadow-md">
                <Footer />
            </div>
        </div>
    )
}