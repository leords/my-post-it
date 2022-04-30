import React from "react";
import { useNavigate } from "react-router-dom";

export function CardProject() {

    const navigate = useNavigate();

    const authLogin = (() => {
        navigate('/task')
    })

    return(
        <div className=" rounded-xl  w-full">

            <div className="flex flex-col items-center justify-between w-full pl-5 pr-5 h-20 mb-20 bg-indigo-400 rounded-md sm:flex-row ">
                <h1 className="flex flex-row font-black text-2xl text-white sm:text-3xl">Projetos
                    <h1 className="font-black text-2xl ml-1 text-black sm:text-3xl">.</h1>
                </h1>
                <button>
                    <h1 className="mb-3 font-black text-4xl text-white sm:text-6xl">+</h1>
                </button>
            </div>

            <article className="p-4 bg-white border border-indigo-400 rounded-xl w-full">

                <ul className="mt-4 space-y-2">
                    <li>
                        <a
                            onClick={authLogin}
                            className="block h-full p-4 border border-white rounded-lg hover:shadow-md bg-yellow-100"
                        >
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div>
                                    <h5 className="font-medium text-indigo-400">React JS</h5>
                                    <p className="mt-1 text-xs font-medium text-black">
                                        Estudar props e os conceitos básicos, estudar schemas e CRUD do framework.
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between mt-2 sm:flex-col">
                                    <button className="text-green-700 font-black text-sm">editar</button>
                                    <button className="text-green-700 font-black text-sm">apagar</button>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={authLogin}
                            className="block h-full p-4 border border-white rounded-lg hover:shadow-md bg-green-100"
                        >
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div>
                                    <h5 className="font-medium text-green-600">React JS</h5>
                                    <p className="mt-1 text-xs font-medium text-black">
                                        Estudar props e os conceitos básicos, estudar schemas e CRUD do framework.
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between mt-2 sm:flex-col">
                                    <button className="text-green-700 font-black text-sm">editar</button>
                                    <button className="text-green-700 font-black text-sm">apagar</button>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={authLogin}
                            className="block h-full p-4 border border-white rounded-lg hover:shadow-md bg-yellow-100"
                        >
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div>
                                    <h5 className="font-medium text-green-600">React JS</h5>
                                    <p className="mt-1 text-xs font-medium text-black">
                                        Estudar props e os conceitos básicos, estudar schemas e CRUD do framework.
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between mt-2 sm:flex-col">
                                    <button className="text-green-700 font-black text-sm">editar</button>
                                    <button className="text-green-700 font-black text-sm">apagar</button>
                                </div>
                            </div>
                        </a>
                    </li>
                    
                </ul>
            </article>
        </div>
    );
}