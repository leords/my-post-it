import {useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { CardProject } from "../components/CardProject";
import { CardTask } from "../components/CardTask";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NewForm } from "../components/NewForm";
import { ProjectEdit } from "../components/ProjectEdit";
import { api } from "../lib/api";

import empty from '../assets/img/empty.png';

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
    userLogged: string
}

export function HomePage() {

    const [isRenderingComponentTaskList, setIsRenderingComponentTaskList] = useState<number | null>(null)
    const [projectNameToBeListed, setprojectNameToBeListed] = useState<string | null>(null)
    const [projectIDToBeListed, setprojectIDToBeListed] = useState<string>('')
    const [listRegisteredProject, setListRegisteredProject] = useState<string | null>('all')
    const [listAllproject, setListAllProject] = useState<project[]>()
    const [listOpenproject, setListOpenProject] = useState<project[]>()
    const [listOffproject, setLisOffProject] = useState<project[]>()
    const [listAlltask, setListAllTask] = useState<task[] | null>(null)
    const [optionSelectedInTaskList, SetOptionSelectedInTaskList] = useState<string >('all')

    const idUserAuth = localStorage.getItem('idUser')
    const {updateList} = useContext(AuthContext)

    useEffect(() => {
        api.post('/project-all', { id: idUserAuth } ).then(response => {
            setListAllProject(response.data)
        });

        if (projectIDToBeListed != null) {
            api.post('/task-all',  { id: projectIDToBeListed } ).then(response => {
                setListAllTask(response.data)
            });
        }
    },[projectIDToBeListed, updateList]
    );

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
    },[optionSelectedInTaskList, updateList]
    );

    async function returnOpenProject() {
        try {
            await api.post('/project-on', {id: idUserAuth}).then(response => {
                setListOpenProject(response.data)
            });
            setListRegisteredProject('open')

        }
        catch (error) {
            alert(error)
        }
    }

    async function returnClosedProject() {
        try {
            await api.post('/project-off', {id: idUserAuth}).then(response => {
                setLisOffProject(response.data)
            }); 
            setListRegisteredProject('closed')
        } 
        catch (error) {
            alert(error)  
        }
    }

    async function returnAllProject() {
        try {
            await api.post('/project-all', {id: idUserAuth}).then(response => {
                setListAllProject(response.data)
            });
            setListRegisteredProject('all')
        } 
        catch (error) {
            alert(error)
        }
    }

    return(
        <div className="flex flex-col items-center justify-between h-screen">
            <Header />
            <div className="flex flex-row justify-center p-5 w-screen h-screen bg-indigo-100">
                <div className="py-10 px-5 w-[35%] bg-white rounded-md">
                    <div className="w-full flex items-center justify-center">
                        <button
                            onClick={() => setIsRenderingComponentTaskList(3)}
                            className={"bg-indigo-300 w-[90%] text-white text-xs py-1 px-1 rounded-md shadow-md sm:w-[100%] sm:h-10 sm:text-sm sm:font-semibold hover:bg-indigo-400"}
                        >
                             Criar Novo Projeto
                        </button>
                    </div>

                    <p className="text-left pl-1 text-xs mt-5">Listar projetos:</p>            
                    {/* <- project conditions buttons */}
                    <div className="flex flex-col text-xs items-center justify-around py-2 gap-1 mb-8 sm:flex-row">
                        <button 
                            type="button"
                            className={`h-5 w-[90%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-300 hover:text-white hover:shadow-lg sm:h-8 sm:w-[33%]  ${listRegisteredProject == "open" ? 'bg-indigo-300 sm:bg-indigo-300 text-white sm:text-white' : 'bg-white'}`}
                            title="Apenas projetos ainda em abertos"
                            onClick={returnOpenProject}
                        >
                            Abertos
                        </button>
                        <button
                            type="button"
                            className={`h-5 w-[90%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-300 hover:text-white hover:shadow-lg sm:h-8 sm:w-[33%]  ${listRegisteredProject == "closed" ? 'bg-indigo-300 sm:bg-indigo-300 text-white sm:text-white' : 'bg-white'}`}
                            title="Apenas os projetos já terminados"
                            onClick={returnClosedProject}
                        >   
                            Concluídos
                        </button>
                        <button
                            type="button"
                            className={`h-5 w-[90%] bg-white border-[1px] border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-300 hover:text-white hover:shadow-lg sm:h-8 sm:w-[33%]  ${listRegisteredProject == "all" ? 'bg-indigo-300 sm:bg-indigo-300 text-white sm:text-white' : 'bg-white'}`}
                            title="todos os projetos cadastrados"
                            onClick={returnAllProject}
                        >
                            Todos
                        </button>
                    </div>
                    
                    {/* project list rendering condition */} 
                    {listRegisteredProject == 'open' && (
                        <div className="flex flex-col items-center">
                            <ul className="w-full">
                                {listOpenproject?.map(projects => {
                                    return  (
                                        <li 
                                            key={projects.id}
                                            className="mb-2"
                                            onClick={() => {
                                                setprojectIDToBeListed(projects.id)
                                                setprojectNameToBeListed(projects.name) 
                                            }}
                                        >
                                        {/*border condition select project*/}
                                        <div className={`${projectIDToBeListed == projects.id ? 'border-[2px] border-indigo-300 rounded-lg'  : ''}`}>
                                            <CardProject 
                                                id={projects.id}
                                                status={projects.status}
                                                title={projects.name}
                                                description={projects.description}
                                                renderComponent={setIsRenderingComponentTaskList}
                                            />
                                        </div>
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
                                            key={projects.id}
                                            className="mb-2"
                                            onClick={(e) => {
                                                setprojectIDToBeListed(projects.id)
                                                setprojectNameToBeListed(projects.name)
                                            }}
                                        >
                                        {/*border condition select project*/}
                                        <div className={`${projectIDToBeListed == projects.id ? 'border-2 border-indigo-300 rounded-lg' : ''}`}>
                                            <CardProject 
                                                id={projects.id}
                                                status={projects.status}
                                                title={projects.name}
                                                description={projects.description}
                                                renderComponent={setIsRenderingComponentTaskList}
                                            />
                                        </div>
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
                                            key={projects.id}
                                            className="mb-2"
                                            onClick={(e) => {
                                                setprojectIDToBeListed(projects.id)
                                                setprojectNameToBeListed(projects.name)
                                            }}
                                        >
                                        {/*border condition select project*/}
                                        <div className={`${projectIDToBeListed == projects.id ? 'border-2 border-indigo-300 rounded-lg' : ''}`}>
                                            <CardProject 
                                                id={projects.id}
                                                status={projects.status}
                                                title={projects.name}
                                                description={projects.description}
                                                renderComponent={setIsRenderingComponentTaskList}
                                            />
                                        </div>
                                    </li>
                                    )
                                })}
                            </ul>
                        </div>                        
                    )}
                </div>

                {/* content div rendering condition -> */}                
                <div className="p-5 ml-5 bg-white w-[60%] rounded-md">
                    {/* open the list */}
                    {isRenderingComponentTaskList == 1 && (
                        <>
                            <div className="flex flex-col p-2 sm:p-5 justify-center items-center">
                                <div className="flex flex-row w-[100%] items-center justify-between py-6 border-b-2 mb-4">
                                    <div className="flex flex-col items-start justify-center">
                                        <p className="flex text-[11px] text-gray-500 sm:text-sm">Projeto: </p>
                                        <h1 className="text-gray-600 font-semibold text-xs sm:text-2xl">{projectNameToBeListed}</h1>
                                    </div>
                                    <div className="flex flex-col items-end justify-center">
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
                                <div className="w-28 flex flex-col items-center justify-center sm:w-[40%]">
                                    <button
                                        onClick={() => setIsRenderingComponentTaskList(4)}
                                        className="bg-indigo-300 w-[90%] text-white text-xs py-1 px-1 rounded-md shadow-md sm:w-[80%] sm:h-11 sm:text-sm sm:font-semibold hover:bg-indigo-400">
                                        Adicionar nova tarefa
                                    </button>
                                </div>            
                            </div>

                            <div className="flex flex-col w-full">
                                {listAlltask?.length == 0 && (
                                    <div className="flex flex-col w-full h-[200px] items-center justify-center">
                                        <div className="flex p-2 mt-60">
                                            <img  className="w-[250px] sm:w-[300px]" src={empty} alt="" />
                                        </div>
                                        <p className="font-medium text-indigo-400 text-sm sm:text-lg">Não encontramos nenhuma tarefa para este projeto!</p>
                                    </div>
                                )}                  
                                {listAlltask?.length != 0 && (
                                    <ul>
                                        {listAlltask?.map(tasks => {
                                            return (
                                                <li 
                                                    key={tasks.id}
                                                    className="mb-2"
                                                >                                           
                                                <CardTask  
                                                    id={tasks.id}
                                                    status={tasks.status}
                                                    title={tasks.name}
                                                    description={tasks.description} 
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

                    {/* open project edit */}
                    {isRenderingComponentTaskList == 2 && (
                       <ProjectEdit
                            id={projectIDToBeListed}
                            renderComponent={setIsRenderingComponentTaskList}
                       />
                    )}

                    {/* open div new project */}
                    {isRenderingComponentTaskList == 3 && (
                       <NewForm
                            type={'project'}
                            userLoggedID={idUserAuth}
                            projectID={projectIDToBeListed}
                            renderComponent={setIsRenderingComponentTaskList}
                       />
                    )}

                    {/* open div new task */}
                    {isRenderingComponentTaskList == 4 && (
                       <NewForm
                            type={'task'}
                            userLoggedID={idUserAuth}
                            projectID={projectIDToBeListed}
                            renderComponent={setIsRenderingComponentTaskList}
                        />
                    )}  
                </div>
            </div>
        </div>
    )
}