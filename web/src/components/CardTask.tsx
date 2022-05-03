import React, { useState } from "react";
import { useParams } from "react-router-dom";

export function CardTask (props: {id:string, tittle:string, description: string, date: string}) {

    const [id, setId] = useState(props.id)

    //function pegado o id do task para deletar e editar!

    return (
        <div className= "flex flex-col items-center">
            <div className="flex flex-col items-center justify-between px-5 w-full h-52 sm:flex-row">
                <div className="w-4/5">
                    <a
                    className="relative block p-8 overflow-hidden border border-indigo-400 rounded-md"
                    href=""
                    >

                    <div className="justify-between sm:flex">
                        <div>
                        <h5 className="text-xl font-bold text-gray-900">{props.tittle}</h5>
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <dd className="text-xs text-gray-500">{props.description}</dd>
                        <p className="text-sm text-gray-500 ml-1">Alterando</p>
                    </div>

                    <dl className="flex mt-6">
                        <div className="flex flex-col-reverse">
                        <dd className="text-xs text-gray-500 ml-1">{props.date}</dd>
                        <dt className="text-sm font-medium text-gray-600">Publicado</dt>
                        </div>
                    </dl>
                    </a>
                </div>
                <div className="flex flex-row items-center justify-between rounded-md bg-indigo-400 shadow-lg sm:flex-col w-20 h-4/5 py-10">
                    <button 
                        className="text-white font-black text-sm hover:text-gray-800">
                            Editar
                    </button>
                    <button 
                        className="text-white font-black text-sm hover:text-gray-800">
                            Apagar
                    </button>
                </div>
                
            </div>
        </div>

        
    )
}