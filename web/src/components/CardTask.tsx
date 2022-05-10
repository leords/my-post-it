import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";




export function CardTask (props: {id:string, tittle:string, description: string, date: string}) {

    const [id, setId] = useState(props.id)

    //function pegado o id do task para deletar e editar!

    return (
        <div className= "flex flex-col items-center bg-white rounded-md">
            <div className="flex flex-col items-center justify-between w-full sm:flex-row">
                <div className="w-screen p-5">
                    <div className="flex flex-col justify-between sm:flex">
                        <h1 className="text-xl font-semibold text-gray-800">{props.tittle}</h1>
                        <dd className="text-xs text-gray-500 mt-2">Descrição:</dd>
                        <span className="text-sm text-gray-500 mt-1">{props.description}</span>
                    </div>
                </div>  

                <div className="flex flex-col m-5 items-end">
                    <Link 
                    to={''}
                    className="text-sm text-indigo-400"
                    title="ver toda as informações da task"
                    >
                    ver task                    
                    </Link>
                    
                    <div className="flex flex-col mt-6">
                        <dt className="text-xs text-gray-500 text-center">Publicado</dt>
                        <dd className="text-xs text-gray-500">{props.date}</dd>
                    </div>

                </div>  
            </div>
        </div>

        
    )
}