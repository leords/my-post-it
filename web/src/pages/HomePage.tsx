import { PlusCircle } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { CardProject } from "../components/CardProject";
import { CardTask } from "../components/CardTask";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NewForm } from "../components/NewForm";
import { ProjectEdit } from "../components/ProjectEdit";
import { api } from "../lib/api";


type project = {
    id: string
    name: string
    description: string
    status: boolean
    date: Date
    author: string
}

type task = {
    id: string
    name: string
    description: string
    status: boolean
    date: Date
    project: string
    user: string
}



export function HomePage() {


    const [isRenderingComponentTaskList, setIsRenderingComponentTaskList] = useState<number | null>(0)
    const [projectNameToBeListed, setprojectNameToBeListed] = useState<string | null>(null)
    const [projectIDToBeListed, setprojectIDToBeListed] = useState<string>('')
    const [listRegisteredProject, setListRegisteredProject] = useState<string | null>('all')

    const [listAllproject, setListAllProject] = useState<project[]>()
    const [listOpenproject, setListOpenProject] = useState<project[]>()
    const [listOffproject, setLisOffProject] = useState<project[]>()

    const [listAlltask, setListAllTask] = useState<task[] | null>(null)
    
    const [userID, setUserId] = useState<string | null>('35dda5a2-b07a-4f99-ba9f-346574a68be8')
    const [userID2, setUserId2] = useState<string>('40814ae3-aead-4bc0-af45-ab674f25f2a1')
    const [optionSelectedInTaskList, SetOptionSelectedInTaskList] = useState<string >('all')

    useEffect(() => {
        api.post('/project-all', { id: userID2 } ).then(response => {
            setListAllProject(response.data)
        });
    },
    [listAllproject]);

    useEffect(() => {

        if (optionSelectedInTaskList == 'open') {
            api.post('/task-on', { id: projectIDToBeListed } ).then(response => {
                setListAllTask(response.data)
            });
        }

        else if (optionSelectedInTaskList == 'closed') {
            api.post('/task-off', { id: projectIDToBeListed } ).then(response => {
                setListAllTask(response.data)
            });
        }

        else if (optionSelectedInTaskList == 'all') {
            api.post('/task-all',  { id: projectIDToBeListed } ).then(response => {
                setListAllTask(response.data)
            });
        }
    }, 
    [listAlltask]);

    async function returnOpenProject() {

        try {
            await api.post('/project-on', {id: userID2}).then(response => {
                setListOpenProject(response.data)
            });
            setListRegisteredProject('open')

        } catch (error) {
            alert(error)
        }
    }

    async function returnClosedProject() {

        try {
            await api.post('/project-off', {id: userID2}).then(response => {
                setLisOffProject(response.data)
            }); 
            setListRegisteredProject('closed')

        } catch (error) {
            alert(error)  
        }
    }

    async function returnAllProject() {

        try {
            await api.post('/project-all', {id: userID2}).then(response => {
                setListAllProject(response.data)
            });
    
            setListRegisteredProject('all')
        } catch (error) {
            alert(error)
        }
    }

    return(
        <div className="flex flex-col items-center justify-between h-screen">
            <Header />
            
            <div className="flex flex-row justify-center p-5 w-screen h-screen">
                <div className="p-5 w-[35%] bg-white rounded-md">
                    <div className="w-full flex items-center justify-center">
                        <button
                            onClick={() => setIsRenderingComponentTaskList(3)}
                            className="bg-indigo-300 w-[90%] text-white text-xs py-1 px-1 rounded-md shadow-md sm:w-[80%] sm:h-10 sm:text-sm sm:font-semibold hover:bg-indigo-400"
                        >
                             Novo Projeto
                        </button>
                    </div>

                    <div className="flex flex-col text-xs items-center justify-around py-5 gap-1 sm:flex-row">
                        <button 
                            type="button"
                            className="h-5 w-[90%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400 hover:text-white hover:shadow-lg focus:bg-indigo-400 focus:text-white sm:focus:text-sm sm:focus:bg-indigo-400 sm:focus:text-white sm:h-10 sm:w-[30%]"
                            title="Apenas projetos ainda em abertos"
                            onClick={returnOpenProject}
                        >Abertos
                        </button>
                        <button
                            type="button"
                            className="h-5 w-[90%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400 hover:text-white hover:shadow-lg focus:bg-indigo-400 focus:text-white sm:focus:text-sm sm:focus:bg-indigo-400 sm:focus:text-white sm:h-10 sm:w-[30%]"
                            title="Apenas os projetos já terminados"
                            onClick={returnClosedProject}
                        >Concluídos
                        </button>
                        <button
                            type="button"
                            className="h-5 w-[90%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400 hover:text-white hover:shadow-lg focus:bg-indigo-400 focus:text-white sm:focus:text-sm sm:focus:bg-indigo-400 sm:focus:text-white  sm:h-10 sm:w-[30%]"
                            title="todos os projetos cadastrados"
                            onClick={returnAllProject}
                        >Todos
                        </button>
                    </div>
                    
                    {listRegisteredProject == 'open' && (
                        <div className="flex flex-col items-center">
                            <ul className="w-full">
                                {listOpenproject?.map(projects => {
                                    return  (
                                        <li 
                                            className="mb-2"
                                            onClick={(e) => {
                                                setprojectIDToBeListed(projects.id)
                                                setprojectNameToBeListed(projects.name) 
                                            }}
                                        >
                                        <CardProject 
                                            id={projects.id}
                                            status={projects.status}
                                            title={projects.name}
                                            description={projects.description}
                                            renderComponent={setIsRenderingComponentTaskList}
                                        />
                                    </li>
                                    )
                                })}

                            </ul>
                        </div>                        
                    )}

                    {listRegisteredProject == 'closed' && (
                        <div className="flex flex-col items-center">
                            <ul className="w-full">
                                {listOffproject?.map(projects => {
                                    return  (
                                        <li 
                                            className="mb-2"
                                            onClick={(e) => {
                                                setprojectIDToBeListed(projects.id)
                                                setprojectNameToBeListed(projects.name)
                                            }}
                                        >
                                        <CardProject 
                                            id={projects.id}
                                            status={projects.status}
                                            title={projects.name}
                                            description={projects.description}
                                            renderComponent={setIsRenderingComponentTaskList}
                                        />
                                    </li>
                                    )
                                })}
                            </ul>
                        </div>                        
                    )}

                    {listRegisteredProject == 'all' && (
                        <div className="flex flex-col items-center">
                            <ul className="w-full">
                                {listAllproject?.map(projects => {
                                    return  (
                                        <li 
                                            className="mb-2"
                                            onClick={(e) => {
                                                setprojectIDToBeListed(projects.id)
                                                setprojectNameToBeListed(projects.name)
                                            }}
                                        >
                                        <CardProject 
                                            id={projects.id}
                                            status={projects.status}
                                            title={projects.name}
                                            description={projects.description}
                                            renderComponent={setIsRenderingComponentTaskList}
                                        />
                                    </li>
                                    )
                                })}
                            </ul>
                        </div>                        
                    )}
                    
                </div>

                <div className="p-5 ml-5 bg-indigo-100 rounded-md border-[1px] border-indigo-300 w-[60%]">
                    
                            {isRenderingComponentTaskList == 1 && (
                                <>
                                    <div className="flex flex-row p-2 sm:p-10 justify-center items-center">
                                        <div className="flex flex-col w-[50%] items-start justify-center">
                                            <p className="text-gray-700 text-xs mb-1">Projeto:</p>
                                            <h1 className="text-gray-700 font-semibold text-xs sm:text-2xl">{projectNameToBeListed}</h1>
                                        </div>
                                        <div className="w-28 flex flex-col items-center justify-center sm:w-[40%]">
                                            <button
                                                onClick={() => setIsRenderingComponentTaskList(4)}
                                                className="bg-indigo-300 w-[90%] text-white text-xs py-1 px-1 rounded-md shadow-md sm:w-[80%] sm:h-10 sm:text-sm sm:font-semibold hover:bg-indigo-400">
                                                Nova Tarefa
                                            </button>
                                        </div>
                                        <div className="flex flex-col w-[50%] items-end justify-center">
                                            <p className="text-gray-700 text-[8px] mb-1 sm:text-[11px]">Listar de forma</p>
                                            <select 
                                                name="status" 
                                                className="h-5 w-5 border-[1px] border-indigo-400 rounded-sm text-xs text-indigo-400 sm:w-16 sm:h-7 sm:text-xs"
                                                value={optionSelectedInTaskList}
                                                onChange={(e) => SetOptionSelectedInTaskList(e.target.value)}
                                            >
                                                <option className="text-xs" value="open">abertos</option>
                                                <option className="text-xs" value="closed">concluídos</option>
                                                <option className="text-xs" value="all">todos</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full">

                                        {listAlltask?.length == 0 && (
                                            <div className="w-full h-[200px] flex items-end justify-center">
                                                <p className="text-sm sm:text-lg">Projeto {projectNameToBeListed} não tem nenhuma tarefa {optionSelectedInTaskList}!</p>
                                            </div>
                                        )}
                                        
                                        {listAlltask?.length != 0 && (
                                            <ul>
                                                {listAlltask?.map(tasks => {
                                                    return (
                                                        <li className="mb-2"
                                                        >                                           
                                                        <CardTask 
                                                            id={tasks.id}
                                                            status={tasks.status}
                                                            title={tasks.name}
                                                            description={tasks.description} 
                                                            date="02/05/2022"
                                                            renderComponent={setIsRenderingComponentTaskList}                                       
                                                        />
                                                    </li>
                                                    )
                                                })}
                                            </ul> 
                                        )}
               
                                    </div>
                                </>
                            )}                                 

                    {isRenderingComponentTaskList == 2 && (
                       <ProjectEdit
                            id={projectIDToBeListed}
                            renderComponent={setIsRenderingComponentTaskList}
                       />
                    )}

                    {isRenderingComponentTaskList == 3 && (
                       <NewForm
                            type={'project'}
                            userID={userID2}
                            projectID={projectIDToBeListed}
                            renderComponent={setIsRenderingComponentTaskList}
                       />
                    )}

                    {isRenderingComponentTaskList == 4 && (
                       <NewForm
                            type={'task'}
                            userID={userID2}
                            projectID={projectIDToBeListed}
                            renderComponent={setIsRenderingComponentTaskList}
                            />
                    )}  


                </div>
            </div>
            <Footer />
        </div>
    )
}