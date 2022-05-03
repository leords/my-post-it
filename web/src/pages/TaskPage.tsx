import React from "react";
import { useParams } from "react-router-dom";

import { CardAdd } from "../components/CardAdd";
import { CardTask } from "../components/CardTask";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export function TaskPage() {

    const {id} = useParams()

    //pegar o id do projeto e criar a lista de tasks aqui!

    return(
        <div className="flex flex-col items-center justify-between h-screen">
            <Header />
            
            <div className="flex flex-col justify-center p-10 w-3/5">
                <CardAdd tittle="Tasks" count={1}/>
                <h1>{id}</h1>
                <ul>
                    <li className="mb-2">
                        <CardTask id="" tittle="Aprender UseParams" description="Anotar tudo" date="02/05/2022"/>
                    </li>
                    <li>
                        <CardTask id="" tittle="Aprender UseParams" description="Anotar tudo" date="02/05/2022"/>
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    )
}