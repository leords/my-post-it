import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CardAdd } from "../components/CardAdd";
import { CardProject } from "../components/CardProject";
import { CardTask } from "../components/CardTask";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectEdit } from "../components/ProjectEdit";


export function HomePage() {

    const [isRenderingComponentTaskList, setIsRenderingComponentTaskList] = useState<boolean | null>(null)
    const [projectNameToBeListed, setprojectNameToBeListed] = useState<string | null>(null)
    const [listRegisteredProject, setListRegisteredProject] = useState<string | null>(null)

    return(
        <div className="flex flex-col items-center justify-between h-screen">
            <Header />
            
            <div className="flex flex-row justify-center p-5 w-screen h-screen">

                <div className="p-5 w-[35%] bg-white rounded-md">

                    <div className="flex flex-col text-xs items-center justify-around py-5 gap-1 sm:flex-row">
                        <button 
                            type="button"
                            className="h-5 w-[90%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400 hover:text-white hover:shadow-lg focus:bg-indigo-400 focus:text-white sm:focus:text-sm sm:focus:bg-indigo-400 sm:focus:text-white sm:h-10 sm:w-[30%]"
                            title="Apenas projetos ainda em abertos"
                            onClick={() => setListRegisteredProject('open')}
                        >Abertos
                        </button>
                        <button
                            type="button"
                            className="h-5 w-[90%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400 hover:text-white hover:shadow-lg focus:bg-indigo-400 focus:text-white sm:focus:text-sm sm:focus:bg-indigo-400 sm:focus:text-white sm:h-10 sm:w-[30%]"
                            title="Apenas os projetos já terminados"
                            onClick={() => setListRegisteredProject('closed')}
                        >Fechados
                        </button>
                        <button
                            type="button"
                            className="h-5 w-[90%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400 hover:text-white hover:shadow-lg focus:bg-indigo-400 focus:text-white sm:focus:text-sm sm:focus:bg-indigo-400 sm:focus:text-white  sm:h-10 sm:w-[30%]"
                            title="todos os projetos cadastrados"
                            onClick={() => setListRegisteredProject('all')}
                        >Todos
                        </button>
                    </div>
                    
                    {listRegisteredProject == 'open' && (
                        <div className="flex flex-col items-center">
                            <ul className="w-full">
                                <li 
                                    className="mb-2"
                                    onClick={() => setprojectNameToBeListed('Prepara DEV') /*recebe o titulo*/}
                                >
                                    <CardProject 
                                        id="id"
                                        title="Prepara DEV" 
                                        description="Estudar as linguagens C# e Java"
                                        renderComponent={setIsRenderingComponentTaskList}
                                    />
                                </li>
                            </ul>
                        </div>                        
                    )}

                    {listRegisteredProject == 'closed' && (
                        <div className="flex flex-col items-center">
                            <ul className="w-full">
                                <li 
                                    className="mb-2 "
                                    onClick={() => setprojectNameToBeListed('Prepara DEV') /*recebe o titulo*/}
                                    >
                                    <CardProject
                                        id="id"
                                        title="Prepara DEV" 
                                        description="Estudar as linguagens C# e Java"
                                        renderComponent={setIsRenderingComponentTaskList}
                                    />
                                </li>
                            </ul>
                        </div>                        
                    )}

                    {listRegisteredProject == 'all' && (
                        <div className="flex flex-col items-center">
                            <ul className="w-full">
                                <li 
                                    onClick={() => setprojectNameToBeListed('Prepara DEV') /*recebe o titulo*/}
                                    >
                                    <CardProject
                                        id="id"
                                        title="Prepara DEV" 
                                        description="Estudar as linguagens C# e Java"
                                        renderComponent={setIsRenderingComponentTaskList}
                                    />
                                </li>
                            </ul>
                        </div>                        
                    )}
                    
                </div>

                <div className="p-5 ml-5 bg-indigo-200 rounded-md border-[1px] border-indigo-400 w-[60%]">
                    {/* condição de renderização para listar tarefas */}
                    {isRenderingComponentTaskList == true && (
                        <>
                            <div className="flex flex-row p-2 sm:p-10">
                                <div className="flex flex-col w-[50%] items-start justify-center">
                                    <p className="text-gray-700 text-xs mb-1">Projeto:</p>
                                    <h1 className="text-gray-700 font-semibold">{projectNameToBeListed}</h1>
                                </div>
                                <div className="flex flex-col w-[50%] items-end justify-center">
                                    <p className="text-gray-700 text-[10px] mb-1 mr-1">Listar de forma</p>
                                    <select name="status" className="h-5 p-1 border-[1px] border-indigo-400 rounded-sm text-indigo-400 sm:h-7 text-xs">
                                        <option className="text-xs" value="open">abertos</option>
                                        <option className="text-xs" value="closed">fechados</option>
                                        <option className="text-xs" value="all">todos</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <ul>
                                    <li className="mb-2">
                                        <CardTask 
                                            id="1" 
                                            title="Utilizar Tailwind no footer" 
                                            description="Anotar tudo o que for visto em explicações e fazer testes no sistema." 
                                            date="02/05/2022"
                                            renderComponent={setIsRenderingComponentTaskList}                                       
                                        />
                                    </li>
                                    <li className="mb-2">
                                        <CardTask 
                                            id="" 
                                            title="Desenvolver o back-end" 
                                            description="Anotar tudo" 
                                            date="02/05/2022"
                                            renderComponent={setIsRenderingComponentTaskList}
                                        />
                                    </li>
                                </ul>                
                            </div>
                        </>
                    )}

                    {/* condição para renderizar a view de editar ou apagar projetos */}
                    {isRenderingComponentTaskList == false && (
                       <ProjectEdit
                            id="id"
                            title="Prepara Dev"
                            description="Estudar as linguagens C# e java"
                            renderComponent={setIsRenderingComponentTaskList}
                       />
                    )}

                </div>
            </div>
            <Footer />
        </div>
    )
}