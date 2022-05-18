import { ArrowLeft, Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import { api } from "../lib/api";


interface Props {
    id: string
    renderComponent: (type: number) => void
}

type project = {
    id: string
    name: string
    description: string
    status: boolean
    date: Date
    author: string
}

export function ProjectEdit({id, renderComponent}:Props) {

    const [isButtonEditName, setIsButtonEditName] = useState(false)
    const [isButtonEditDescription, setIsButtonEditDescription] = useState(false)

    const [project, setProject] = useState<project>()

    const [newName, setNewName] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newStatus, setNewStatus] = useState<boolean | null>(true)

    const [countTaskOpen, setCountTaskOpen] = useState<string|null>('0')
    const [countTaskClosed, setCountTaskClosed] = useState<string|null>('0')
    const [countTaskAll, setCountTaskAll] = useState<string|null>('0')

    useEffect (() => {
        async function returnProject() {
            await api.post('/project-unique', {id: id}).then(response => {
                setProject(response.data);
            });
        }
        returnProject()
    }, [])


    useEffect (() => {
        async function returnHowMany() {
                    
            await api.post('/count-on-task', { id: id }).then(response => {
                setCountTaskOpen(response.data);
            });
        
            await api.post('/count-off-task', { id: id }).then(response => {
                setCountTaskClosed(response.data);
            });

            await api.post('/count-all-task', { id: id }).then(response => {
                setCountTaskAll(response.data);
            })
        }
        returnHowMany()
    }, 
    []);

    async function deleteProject() {
        try {
            await api.post('/delete-project', { id: id });
            renderComponent(1);
        } catch (error) {
            alert(error)
        }
    }

    async function updateName() {
        try {
            await api.post('/project-update-name', {
                id: id,
                name: newName
            });
        } catch (error) {
            alert(error)
        }
    }

    async function updateDescription() {
        try {
            await api.post('/project-update-description', {
                id: id,
                description: newDescription
            });     
        } catch (error) {
           alert(error) 
        }
    }

    async function updateStatus() {
        alert(newStatus)
        try {
            await api.post('/project-update-status', {
                id: id, 
                status: newStatus 
            });
            renderComponent(1)
        } catch (error) {
            alert(error)
        }
    }


    return (
        <div className="max-w-[500px] h-auto mx-auto bg-slate-300">

            <div className="flex flex-col p-6 pt-10 border items-center justify-center bg-white w-full gap-2 rounded-md shadow-md">
                <div className="flex flex-row w-full justify-between">
                    <ArrowLeft 
                        size={22}
                        onClick={() => renderComponent(1)}
                    />
                    <p
                        className="text-[11px] font-black"
                        title="Para editar as propriedades de nome ou de descrição, clique em cima do mesmo!."
                    >Editar?</p>
                </div>
                
                <div className="flex flex-col justify-center items-center w-full">
                    <a
                        title="clique para editar"
                        onClick={() => setIsButtonEditName(!isButtonEditName)}
                    >
                    <p className="text-gray-700 text-base mb-3 sm:text-lg">{project?.name}</p>
                    </a>
                </div>

                {isButtonEditName == true && (
                    <div className="flex flex-row w-full justify-center gap-2">
                        <input 
                            type="text"
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="novo nome para o projeto"
                            className="h-6 w-[80%] border border-indigo-400 rounded-md text-xs p-2"
                        />
                        <button 
                            onClick={updateName}
                            className="h-6 w-[20%] bg-indigo-300 p-1 rounded-md text-white text-xs hover:bg-indigo-500">
                            salvar
                        </button>
                    </div>
                )}
                
                <p className="text-xs text-left text-indigo-400">Descrição:</p>
                <div className="flex flex-col w-full max-full p-5 rounded-md border-[1px] border-indigo-400">
                    
                    <a  
                        title="clique para editar!"
                        onClick={() => setIsButtonEditDescription(!isButtonEditDescription)}
                    >
                        <p className="text-xs text-left text-gray-700">{project?.description}</p>

                    </a>
                </div>


                {isButtonEditDescription == true && (
                    <div className="flex flex-col gap-2 w-full pb-4 border-b-[1px] border-gray-300">
                        <input 
                            type="text"
                            onChange={(e) => setNewDescription(e.target.value)}
                            placeholder="Insira a nova descrição"
                            className="h-auto w-auto border border-indigo-400 rounded-md text-xs p-2"
                        />
                        <button 
                            onClick={updateDescription}
                            className="bg-indigo-300 rounded-md text-white text-xs p-1 hover:bg-indigo-400">
                            salvar
                        </button>
                    </div>
                )}

                <div className="w-full">
                    <div className="flex justify-center items-center p-2">
                        <p className="text-xs text-indigo-400">Tarefas:</p>
                    </div>
                    <div className="flex flex-col w-full px-5 py-2 justify-between items-center border-[1px] border-indigo-400 rounded-md sm:flex-row">
                        <p className="text-xs p-1 text-gray-500">Total: {countTaskAll}</p>
                        <p className="text-xs p-1 text-gray-500">Fechadas: {countTaskClosed}</p>
                        <p className="text-xs p-1 text-gray-500">Abertas: {countTaskOpen}</p>
                    </div>
                </div>


                {project?.status == true && (
                    <>
                        <div className=" w-full py-4 border-b-[1px] border-gray-300">

                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center mt-2 sm:mt-10">
                            <input
                                type="checkbox"
                                className="bg-slate-500 w-6 h-6"
                                name="status"
                                onChange={() => setNewStatus(false)}
                            />
                            <p className="text-[11px]">Marcar está tarefa como completa!</p>
                        </div>
    
                        <div className="flex flex-row gap-10 w-full">
                            <button 
                                onClick={updateStatus}
                                className="bg-indigo-300 w-full h-8 rounded-md mt-3 text-sm text-white shadow-md hover:bg-indigo-400">
                                Salvar
                            </button>
                        </div>
                    </>
                )}


                <div className="flex flex-row w-full justify-end mt-10">
                    <div className="flex flex-col justify-center items-center">
                        <Trash 
                            size={25}
                            color={'red'}
                            weight={"thin"}
                            onClick={deleteProject}
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