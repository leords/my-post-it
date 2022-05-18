import { CheckCircle, Trash, XCircle } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { api } from "../lib/api";

interface Props {
    id:string
    status: boolean
    title: string
    description: string
    date: string
    renderComponent: (type: number) => void
}


export function CardTask ({
    id,
    status,
    title, 
    description, 
    date, 
    renderComponent} : Props) {

    const [isRenderViewEdit, setIsRenderViewEdit] = useState(false)
    const [checkBox, setCheckBox] = useState(true)


    async function DeleteTask () {
        try {
            await api.post('delete-task', { id });
            renderComponent(1)
        } catch (error) {
          alert(error)  
        }
    }

    async function ChangingStatus() {
        try {
            await api.post('/edit-task-f', { id });
        } catch (error) {
            
        }
    }


    return (

        <div className= "flex flex-col items-center bg-white rounded-md">
            <a 
                className="flex flex-col items-center p-5 justify-between w-full hover:border-b-[1px] hover:border-gray-200 sm:flex-row"
                onClick={() => setIsRenderViewEdit(!isRenderViewEdit)}
            >
                <div className="flex flex-col justify-center items-center sm:justify-between sm:items-start">
                    <h1 className="text-md font-semibold text-gray-800 sm:text-base">{title}</h1>
                    <dd className="text-xs text-gray-500 mt-2 sm:text-xs">Descrição:</dd>
                    <span className="text-xs text-center text-gray-500 mt-1">{description}</span>
                </div>
                 
                <div className="flex flex-row m-1 sm:flex-col sm:m-6">
                    <div className="flex items-center justify-center sm:mb-2">
                        {status == true && (
                        <XCircle 
                            size={16}
                            color={'red'}
                            weight={'light'}
                        />
                        )} 
                        {status == false && (
                        <CheckCircle 
                            size={16}
                            color={'green'}
                            weight={'light'}
                        />
                        )}
                    </div>
                    <dt className="text-xs text-gray-500 text-center p-1 sm:p-0">Publicado</dt>
                    <dd className="text-xs text-gray-500 p-1 sm:p-0">{date}</dd>
                </div>
            </a>

            {isRenderViewEdit == true && (
                    <div className="flex flex-row w-[100%] items-center justify-between px-5 m-2 sm:px-10">
                        <div className="flex flex-row items-center w-[90%] h-9 sm:flex-row sm:w-[90%]">
                            <input 
                                type="checkbox"
                                className="w-5 h-5"
                                checked={checkBox}
                                onChange={() => setCheckBox(!checkBox)}
                            />
                            <p className="text-[10px] w-20 pl-2 text-left sm:text-xs sm:w-40">Marcar como resolvido</p>
                            <button
                                onClick={ChangingStatus}
                                className="bg-indigo-300 text-white rounded-sm p-2 text-xs hover:bg-indigo-400 sm:p-1 sm:w-32 sm:rounded-md">
                                Salvar
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-end w-[10%]">
                            <Trash
                                onClick={DeleteTask}
                                className="focus:bg-indigo-300 " 
                                size={25}
                                color={'red'}
                                weight={"thin"}
                            />
                        </div>
                    </div>
                )}
        </div>      
    )
}