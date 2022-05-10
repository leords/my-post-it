import { Trash } from "phosphor-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";


interface Props {
    title: string
    description: string
    renderComponent: (type: number) => void
}

export function FormEdit({title, description, renderComponent}:Props) {

    const [isButtonEditName, setIsButtonEditName] = useState(false)
    const [isButtonEditDescription, setIsButtonEditDescription] = useState(false)

    //const {id} = useParams()
    //{id} do projeto a ser editado!
    //função de editar e a função de deletar!

    return (
        <div className="max-w-sm h-auto mx-auto bg-slate-300">

            <div className="flex flex-col p-6 border items-center justify-center bg-white w-full gap-2 rounded-md shadow-md">
                <div className="flex w-full h-auto justify-end">
                    <Trash 
                        size={32}
                        color={'red'}
                        onClick={() => renderComponent(1)}
                    />
                </div>
                <h1 className="flex text-indigo-400 font-black text-6xl my-2">Task <p className="text-black font-black text-6xl ml-1">.</p></h1>
                <div className="flex flex-row items-center">
                    <p className="text-gray-500 text-base">{title}</p>
                    <button 
                    className="text-sm text-gray-600 text-right ml-2"
                    title="abrir painel para edição"
                    onClick={() => setIsButtonEditName(!isButtonEditName)}
                    >
                        <p className="hover:text-[15px]">editar ▼ </p>
                    </button>
                </div>

                {isButtonEditName == true && (
                    <div className="flex flex-row gap-2">
                        <input 
                        type="text"
                        placeholder="novo nome para o projeto"
                        className="h-8 w-[270px] border border-indigo-400 rounded-md text-sm p-2"
                        />
                        <button className="bg-indigo-400 p-1 rounded-md text-white text-sm hover:bg-indigo-500">
                            salvar
                        </button>
                    </div>
                )}

                <div className="flex flex-col w-full max-w-sm bg-indigo-300 p-5 my-5 rounded-md">
                    <p className="text-xs text-left text-white mb-2">Descrição:</p>
                    <p className="text-sm text-left text-gray-700 ml-1">{description}</p>
                    <button 
                    className="text-sm text-white text-right mt-2"
                    title="abrir painel para edição"
                    onClick={() => setIsButtonEditDescription(!isButtonEditDescription)}
                    >
                        <p className="hover:text-[15px]">editar ▼ </p>
                    </button>
                </div>

                {isButtonEditDescription == true && (
                    <div className="flex flex-col gap-2">
                        <input 
                        type="text" 
                        placeholder="Insira a nova descrição"
                        className="h-20 w-[270px] border border-indigo-400 rounded-md text-sm p-2"
                        />
                        <button className="bg-indigo-400 rounded-md text-white text-sm hover:bg-indigo-500">
                            salvar
                        </button>
                    </div>
                )}
                    
                <div className="flex flex-row gap-2 items-center justify-center mt-10">
                    <input
                    type="checkbox"
                    className="bg-slate-500 w-6 h-6"
                    name="status"
                    />
                    <p className="text-sm">Marcar está task como completa!</p>
                </div>

                <div className="flex flex-row gap-10">
                    <button 
                    //criar função para salvar também
                    onClick={() => renderComponent(1)}
                    className="bg-indigo-400 w-28 h-10 rounded-md mt-16 text-white shadow-md hover:bg-indigo-500">
                        Salvar
                    </button>
                    <button 
                    className="bg-white w-28 h-10 rounded-md border border-indigo-400 mt-16 text-indigo-400 shadow-md hover:border-2">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}