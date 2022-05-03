import React from "react";
import { useParams } from "react-router-dom";
import { CardAdd } from "../components/CardAdd";
import { CardProject } from "../components/CardProject";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export function HomePage() {

    const {id} = useParams();

    return(
        <div className="flex flex-col items-center justify-between h-screen">
            <Header />
            
            <div className="flex flex-col justify-center p-10 w-3/5">
                <CardAdd tittle="Projetos" count={1}/>
                <ul className="p-4 bg-white border border-indigo-400 rounded-xl w-full">
                    <li className="mb-2">
                        <CardProject tittle="Prepara DEV" description="Estudar as linguagens C# e Java"/>
                    </li>
                    <li>
                        <CardProject tittle="Estudar props" description="Como faz e quando é preciso usar?"/>
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    )
}