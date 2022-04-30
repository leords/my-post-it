import React from "react";

export function CardTask () {
    return (
        <div className= "flex flex-col items-center">

            <div className="flex flex-row items-center justify-between p-10 w-full h-20 mb-20 bg-indigo-400 rounded-md">
                <h1 className="flex flex-row font-black text-3xl text-white">Tasks
                    <h1 className="font-black text-3xl ml-1 text-black">.</h1>
                </h1>
                <button>
                    <h1 className="mb-3 font-black text-6xl text-white">+</h1>
                </button>
            </div>

            <div className="flex flex-row items-center">
                <div>
                    <a
                    className="relative block p-8 overflow-hidden border border-indigo-400 rounded-md"
                    href=""
                    >

                    <div className="justify-between sm:flex">
                        <div>
                        <h5 className="text-xl font-bold text-gray-900">
                            React JS
                        </h5>
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <dd className="text-xs text-gray-500">Descrição</dd>
                        <p className="text-sm text-gray-500 ml-1">
                            Ler a documentação e praticar como faz um prop em 1 ou mais componentes.
                        </p>
                    </div>

                    <dl className="flex mt-6">
                        <div className="flex flex-col-reverse">
                        <dd className="text-xs text-gray-500 ml-1">31 de Março, 2022</dd>
                        <dt className="text-sm font-medium text-gray-600">Publicado</dt>
                        </div>
                    </dl>
                    </a>
                </div>
                <div className="flex flex-col items-center justify-between h-full w-16 p-11 ml-4 rounded-md bg-indigo-400 shadow-lg">
                    <button className="text-white font-black text-sm">Editar</button>
                    <button className="text-white font-black text-sm">Apagar</button>
                </div>
                
            </div>
        </div>

        
    )
}