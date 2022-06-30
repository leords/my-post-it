import { ArrowLeft } from "phosphor-react";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { api } from "../lib/api";

import add from '../assets/img/add.png';


interface Props {
    type: string
    userLoggedID: string | null
    projectID: string
    renderComponent: (type:number) => void
}


export function NewForm({type, userLoggedID, projectID, renderComponent}:Props) {


    const [name, setName] = useState<string>()
    const [description, setDescription] = useState<string>()
    const { updateList ,setUpdateList } = useContext(AuthContext)

    const [conditionAlertInputNameNull, setConditionAlertInputNameNull] = useState<boolean>(false)
    const [conditionAlertInputDescriptionNull, setConditionAlertInputDescriptionNull] = useState<boolean>(false)

    async function saveNewRegister() {
       
            if(name != null && description != null) {
                if (type == 'task') {
                    try {
                        await api.post('/new-task' , {
                            name: name,
                            description: description,
                            project: projectID,
                            user: userLoggedID,       
                        });
                        setUpdateList(updateList + 1)
                        alert('Tarefa cadastrada!')
                        renderComponent(1)
                    } catch (error) {
                        alert('Tivemos problemas com o cadastro!');
                        setName('')
                        setDescription('')
                    }
                }
                else if (type == 'project') {
                    try {
                        await api.post('/new-project' , {
                            name: name,
                            description: description,
                            author: userLoggedID,
                        });
                        setUpdateList(updateList + 1)
                        alert('projeto cadastrado!')
                        renderComponent(1)
                    } catch (error) {
                        alert('Tivemos problemas com o cadastro!');
                        setName('')
                        setDescription('')
                    }
                }
            } 
            else if(name == null && description == null) {
                setConditionAlertInputNameNull(true)
                setConditionAlertInputDescriptionNull(true)
                alert('Favor preencha corretamente os campos.');
            }
    
            else if(name == null) {
                setConditionAlertInputNameNull(true)
                alert('Favor preencha corretamente os campos.');
            }
    
            else if(description == null) {
                setConditionAlertInputDescriptionNull(true)
                alert('Favor preencha corretamente os campos.');
            }
        }  
    

    return(
        <div className="max-w-[500px] h-auto mx-auto ">

            {type == 'task' && (
                <div className="flex flex-col p-6 pt-10 border items-center justify-center bg-white w-full gap-2 rounded-lg shadow-md">
                    <div className="flex flex-row w-full justify-between">
                        <ArrowLeft 
                            size={22}
                            onClick={() => renderComponent(1)}
                        />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center m-1 p-1 text-sm font-medium sm:text-lg">
                        <img className="w-60 mb-10" src={add} alt="" />
                        <h1 className="text-xl ">Nova Tarefa</h1>
                        <p className="p-1 text-xs text-center text-indigo-400">Descreva as caracteristicas de sua nova tarefa!</p>
                    </div>

                    <div className="w-full flex flex-col py-2 m-1 rounded-md sm:p-5">
                        <div className="w-full flex flex-col justify-center items-center gap-2 sm:py-1">
                            {conditionAlertInputNameNull == false && (
                                <input 
                                    title="Insira o nome do projeto"
                                    placeholder="Nome da tarefa"
                                    name="name"
                                    className="bg-gray-50 w-[70%] h-8 text-xs text-left p-4 border border-indigo-400 rounded-md mb-3"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                />                                  
                            )}
                            {conditionAlertInputNameNull == true && (
                                <>
                                <div className="w-[70%] flex">
                                    <p className="text-[10px] text-red-600">* favor preecha está lacuna</p>
                                </div>
                                <input 
                                    title="Insira o nome do projeto"
                                    placeholder="Nome da tarefa"
                                    name="name"
                                    className="bg-gray-50 w-[70%] h-8 text-xs text-left p-4 border border-red-500 rounded-md"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                </>                                 
                            )}

                            {conditionAlertInputDescriptionNull == false && (
                            <input
                                title="Insira aqui a descrição do projeto"
                                placeholder="Descrição da tarefa"
                                className="bg-gray-50 w-[70%] h-24 text-xs text-left p-4 border border-indigo-400 rounded-md"
                                type="text"
                                onChange={(e) => setDescription(e.target.value)} 
                            />                                
                            )}
                            {conditionAlertInputDescriptionNull == true && (
                                <>
                                <div className="w-[70%] flex">
                                    <p className="text-[10px] text-red-600">* favor preecha está lacuna</p>
                                </div>
                                <input
                                    title="Insira aqui a descrição do projeto"
                                    placeholder="Descrição da tarefa"
                                    className="w-[70%] h-24 text-xs text-left p-4 border border-red-500 rounded-md"
                                    type="text"
                                    onChange={(e) => setDescription(e.target.value)} 
                                />
                                </>                                
                            )}                            

                            <div className="flex flex-row w-[70%] items-center justify-between mt-6">
                                <button
                                    onClick={saveNewRegister}
                                    className="bg-indigo-300 w-[45%] h-8 text-white p-2 text-xs rounded-md hover:bg-indigo-400">
                                    Salvar
                                </button>
                                <button
                                    onClick={() => renderComponent(1)}
                                    className="w-[45%] h-8 text-indigo-400 p-2 text-xs rounded-md border border-indigo-300 hover:bg-gray-100 hover:text-indigo-500">
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-4 flex items-center justify-center pt-2">
                        <p className="text-[10px] text-center">
                        Seu projeto será automaticamente criado com a data do dia atual
                        </p>
                    </div>
                </div>
            )}




            {type == 'project' && (
                <div className="flex flex-col p-6 pt-10 border items-center justify-center bg-white w-full gap-2 rounded-md shadow-md">
                    <div className="flex flex-row w-full justify-between">
                        <ArrowLeft 
                            size={22}
                            onClick={() => renderComponent(1)}
                        />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center p-1 text-sm font-medium sm:text-lg">
                        <img className="w-60 mb-5" src={add} alt="" />
                        <h1 className="text-xl ">Novo projeto</h1>
                        <p className="p-1 text-xs text-center text-indigo-400">Descreva seu novo projeto!</p>
                    </div>

                    <div className="w-full flex flex-col py-2 m-1 rounded-md sm:p-5">
                        <div className="w-full flex flex-col justify-center items-center gap-2 sm:py-1">
                            {conditionAlertInputNameNull == false && (
                                <input 
                                    title="Insira o nome do projeto"
                                    placeholder="Nome do projeto"
                                    name="name"
                                    className="bg-gray-50 w-[90%] h-8 text-xs text-left p-4 border border-indigo-400 rounded-md mb-2"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                />                                  
                            )}
                            {conditionAlertInputNameNull == true && (
                                <>
                                <div className="w-[90%] flex">
                                    <p className="text-[10px] text-red-600">* favor preecha está lacuna</p>
                                </div>
                                <input 
                                    title="Insira o nome do projeto"
                                    placeholder="Nome do projeto"
                                    name="name"
                                    className="bg-gray-50 w-[90%] h-8 text-xs text-left p-4 border border-red-500 rounded-md"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                </>                                 
                            )}

                            {conditionAlertInputDescriptionNull == false && (
                                <input
                                    title="Insira aqui a descrição do projeto"
                                    placeholder="Descrição do projeto"
                                    className="bg-gray-50 w-[90%] h-24 text-xs text-left p-4 border border-indigo-400 rounded-md"
                                    type="text"
                                    onChange={(e) => setDescription(e.target.value)} 
                                />                                
                            )}
                            {conditionAlertInputDescriptionNull == true && (
                                <>
                                <div className="w-[90%] flex">
                                    <p className="text-[10px] text-red-600">* favor preecha está lacuna</p>
                                </div>
                                <input
                                    title="Insira aqui a descrição do projeto"
                                    placeholder="Descrição do projeto"
                                    className="w-[90%] h-24 text-xs text-left p-4 border border-red-500 rounded-md"
                                    type="text"
                                    onChange={(e) => setDescription(e.target.value)} 
                                />
                                </>
                            )}
                            <div className="flex flex-row w-[90%] items-center justify-between mt-6">
                                <button
                                    onClick={saveNewRegister}
                                    className="bg-indigo-300 w-[45%] h-8 text-white p-2 text-xs rounded-md hover:bg-indigo-400">
                                    Salvar
                                </button>
                                <button
                                    onClick={() => renderComponent(1)}
                                    className="w-[45%] h-8 text-indigo-400 p-2 text-xs rounded-md border border-indigo-300 hover:bg-gray-100 hover:text-indigo-500">
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-4 flex items-center justify-center pt-2">
                    <p className="text-[10px] text-center">
                        Sua tarefa será automaticamente criada com a data do dia atual
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}