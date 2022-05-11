import { ArrowLeft, Trash } from "phosphor-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";


interface Props {
    title: string
    description: string
    renderComponent: (type: boolean) => void
}

export function ProjectEdit({title, description, renderComponent}:Props) {

    const [isButtonEditName, setIsButtonEditName] = useState(false)
    const [isButtonEditDescription, setIsButtonEditDescription] = useState(false)

    //const {id} = useParams()
    //{id} do projeto a ser editado!
    //função de editar e a função de deletar!

    return (
        <div className="max-w-[500px] h-auto mx-auto bg-slate-300">

            <div className="flex flex-col p-6 pt-10 border items-center justify-center bg-white w-full gap-2 rounded-md shadow-md">
                <div className="flex flex-row w-full justify-start">
                    <ArrowLeft 
                        size={22}
                        onClick={() => renderComponent(true)}
                    />
                </div>
                
                <div className="flex flex-row w-full justify-center">
                    <h1 className="text-indigo-400 sm:text-2xl">Projeto</h1>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                    <a
                        title="clique para editar"
                        onClick={() => setIsButtonEditName(!isButtonEditName)}
                    >
                    <p className="text-gray-700 text-base sm:text-lg">{title}</p>
                    </a>
                </div>

                {isButtonEditName == true && (
                    <div className="flex flex-row justify-center gap-2 px-2">
                        <input 
                            type="text"
                            placeholder="novo nome para o projeto"
                            className="h-6 w-auto border border-indigo-400 rounded-md text-xs p-2"
                        />
                        <button 
                            className="bg-indigo-400 p-1 rounded-md text-white text-xs hover:bg-indigo-500">
                            salvar
                        </button>
                    </div>
                )}
                

                <div className="flex flex-col w-full max-w-sm bg-indigo-300 p-5 my-5 rounded-md">
                    <a  
                        title="clique para editar!"
                        onClick={() => setIsButtonEditDescription(!isButtonEditDescription)}
                    >
                        <p className="text-xs text-left text-white mb-2">Descrição:</p>
                        <p className="text-sm text-left text-gray-700 ml-1">{description}</p>

                    </a>
                </div>


                {isButtonEditDescription == true && (
                    <div className="flex flex-col gap-2 w-full">
                        <input 
                            type="text" 
                            placeholder="Insira a nova descrição"
                            className="h-auto w-auto border border-indigo-400 rounded-md text-xs p-2"
                        />
                        <button 
                            className="bg-indigo-400 rounded-md text-white text-sm hover:bg-indigo-500">
                            salvar
                        </button>
                    </div>
                )}

                    <div>
                        <div className="flex justify-center items-center p-2">
                            <p className="text-xs text-white">Tarefas:</p>
                        </div>
                        <div className="flex flex-col w-full bg-slate-400 justify-between">
                            <p className="text-xs p-1">abertas = 10</p>
                            <p className="text-xs p-1">fechadas = 20</p>
                            <p className="text-xs p-1">todas = 30</p>
                        </div>
                    </div>
                    
                <div className="flex flex-row gap-3 items-center justify-center mt-2 sm:mt-10">
                    <input
                        type="checkbox"
                        className="bg-slate-500 w-6 h-6"
                        name="status"
                    />
                    <p className="text-[11px]">Marcar está tarefa como completa!</p>
                </div>

                <div className="flex flex-row gap-10">
                    <button 
                        onClick={() => renderComponent(true)}
                        className="bg-indigo-400 w-28 h-10 rounded-md mt-16 text-white shadow-md hover:bg-indigo-500">
                        Salvar
                    </button>
                </div>

                <div className="flex flex-row w-full justify-end mt-10">
                    <div className="flex flex-col justify-center items-center">
                        <Trash 
                            size={32}
                            color={'red'}
                            weight={"thin"}
                            onClick={() => renderComponent(false)}
                        />
                        <p className="text-xs text-gray-500">apagar</p>
                    </div>
                </div>
                <div className="flex flex-row items-baseline justify-center">
                    <p className="text-xs font-extralight text-gray-500">Publicado: 11/05/2022</p>
                </div>

            </div>
        </div>
    )
}