import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CardAdd } from "../components/CardAdd";
import { CardProject } from "../components/CardProject";
import { CardTask } from "../components/CardTask";
import { Footer } from "../components/Footer";
import { FormEdit } from "../components/FormEdit";
import { Header } from "../components/Header";


export function HomePage() {

    const [isComponentRender, setIsComponentRender] = useState(0)
    const {id} = useParams();

    return(
        <div className="flex flex-col items-center justify-between h-screen">
            <Header />
            
            <div className="flex flex-row justify-center p-5 w-screen h-screen">

                <div className="p-5 w-[35%] bg-white rounded-md">
                    <div className="flex w-full items-center justify-around py-10">
                        <button 
                            type="button"
                            className="h-10 w-[30%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400 hover:text-white hover:shadow-lg focus:text-xl"
                            title="Apenas projetos ainda em abertos"
                        >Abertos
                        </button>
                        <button
                            type="button"
                            className="h-10 w-[30%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400 hover:text-white hover:shadow-lg focus:text-xl"
                            title="Apenas os projetos já terminados"
                        >Fechados
                        </button>
                        <button
                            type="button"
                            className="h-10 w-[30%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400 hover:text-white hover:shadow-lg focus:text-xl"
                            title="todos os projetos cadastrados"
                        >Todos
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <ul className="w-full">
                            <li className="mb-2">
                                <CardProject 
                                title="Prepara DEV" 
                                description="Estudar as linguagens C# e Java"
                                renderComponent={setIsComponentRender}/>
                            </li>
                            <li>
                                <CardProject 
                                title="Estudar props" 
                                description="Como faz e quando é preciso usar?"
                                renderComponent={setIsComponentRender}/>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="p-5 ml-5 bg-indigo-200 rounded-md border-[1px] border-indigo-400 w-[60%]">
                    {/* listar projetos */}
                    {isComponentRender == 1 && (
                        <>
                            <div className="flex flex-col w-full items-end justify-center p-10">
                            <p className="text-gray-700 text-xs mb-1 mr-1">Listar de forma</p>
                            <select name="status" className="h-10 p-2 border-[1px] border-indigo-400 rounded-md text-indigo-400">
                                <option value="true">abertos</option>
                                <option value="false">fechados</option>
                                <option value="false">todos</option>
                            </select>
                            </div>

                            <div className="flex flex-col w-full">
                                <ul>
                                    <li className="mb-2">
                                        <CardTask id="" tittle="Utilizar Tailwind no footer" description="Anotar tudo o que for visto em explicações e fazer testes no sistema." date="02/05/2022"/>
                                    </li>
                                    <li className="mb-2">
                                        <CardTask id="" tittle="Desenvolver o back-end" description="Anotar tudo" date="02/05/2022"/>
                                    </li>
                                    <li>
                                        <CardTask id="" tittle="Formatar o notebook" description="Anotar tudo" date="02/05/2022"/>
                                    </li>
                                </ul>                
                            </div>
                        </>
                    )}
                    {/* editar projetos */}
                    {isComponentRender == 2 && (
                       <FormEdit 
                        title="Prepara Dev"
                        description="Estudar as linguagens C# e java"
                        renderComponent={setIsComponentRender}
                       />
                    )}
                    {/* lista tarefas */}
                    {isComponentRender == 3 && (
                       <div></div>
                    )}
                    {/* editar tarefas */}
                    {isComponentRender == 4 && (
                       <div></div>
                    )}
                    

                </div>

            </div>
            <Footer />
        </div>
    )
}