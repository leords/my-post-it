import React from "react";
import { CardProject } from "../components/CardProject";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export function HomePage() {
    return(
        <div className="flex flex-col items-center justify-between h-screen">
            <Header />
            
            <div className="flex justify-center p-10 w-3/5">
                <CardProject />
            </div>

            <Footer />
        </div>
    )
}