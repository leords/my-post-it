import React from "react";
import { CardTask } from "../components/CardTask";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export function TaskPage() {
    return(
        <div className="flex flex-col items-center justify-between h-screen">
            <Header />
            
            <div className="flex justify-center p-10 w-3/5">
                <CardTask />
            </div>

            <Footer />
        </div>
    )
}