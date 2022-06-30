import { CheckCircle, Trash, Warning, XCircle } from "phosphor-react";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { api } from "../lib/api";

interface Props {
    id:string
    status: boolean
    title: string
    description: string
    renderComponent: (type: number) => void
}


export function CardTask ({
    id,
    status,
    title, 
    description, 
    renderComponent} : Props) {

    const [isRenderViewEdit, setIsRenderViewEdit] = useState(false)
    const [checkBox, setCheckBox] = useState(true)
    const {updateList, setUpdateList} = useContext(AuthContext)

    async function DeleteTask () {
        try {
            await api.post('delete-task', { id });
            setUpdateList(updateList + 1)
            renderComponent(1)
        } catch (error) {
          alert(error)  
        }
    }

    async function ChangingStatus() {
        try {
            await api.post('/edit-task-f', { id });
            setUpdateList(updateList + 1)
        } catch (error) {
            alert(error)
        }
    }


    return (

        <div className= "flex flex-col items-center bg-white rounded-md border-[1px] border-indigo-200 hover:border-indigo-400">
            <a 
                className="flex flex-col items-center p-5 justify-between w-full hover:border-b-[1px] hover:border-gray-200 sm:flex-row"
                onClick={() => setIsRenderViewEdit(!isRenderViewEdit)}
            >
                <div className="flex flex-col justify-center items-center sm:justify-between sm:items-start">
                    <h1 className="text-md font-semibold text-gray-700 sm:text-lg sm:font-normal">{title}</h1>
                    <dd className="text-xs text-gray-700 mt-2 sm:text-xs">Descrição:</dd>
                    <span className="text-xs text-center text-gray-500 mt-1 pl-2">{description}</span>
                </div>
                 
                <div className="flex flex-row m-1 sm:flex-col sm:m-6">
                    <div className="flex items-center justify-center sm:mb-2">
                        {status == true && (
                        <Warning 
                            size={24}
                            weight={'duotone'}
                            color={'orange'}
                            alt={'Projeto não finalizado!'}
                        />
                        )} 
                        {status == false && (
                        <CheckCircle 
                            size={24}
                            color={'green'}
                            weight={'duotone'}
                        />
                        )}
                    </div>
                </div>
            </a>

            {isRenderViewEdit == true && (
                    <div className="flex flex-row w-[100%] items-center justify-between px-5 m-2 sm:px-10">
                        {status == true && (
                            <>
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
                                <div className="flex flex-col items-center justify-end w-[10%]">
                                    <Trash
                                        onClick={DeleteTask}
                                        className="focus:bg-indigo-300 " 
                                        size={24}
                                        color={'red'}
                                        weight={"thin"}
                                    />
                                    <p className="text-[10px]">apagar</p>
                                </div>
                            </>
                        )}
                        
                        {status == false && (
                            <>
                                <div className="flex flex-row items-center justify-center w-[100%]">
                                    <Trash
                                        onClick={DeleteTask}
                                        className="focus:bg-indigo-300 " 
                                        size={26}
                                        color={'red'}
                                        weight={"thin"}
                                    />
                                    <p className="text-sm pl-4">apagar</p>
                                </div>
                            </>
                        )}
                        
                    </div>
                )}
        </div>      
    )
}