import { Check, CheckCircle, Warning, XCircle } from "phosphor-react";
import { useState } from "react";
import { render } from "react-dom";


interface Props {
    id: string
    status: boolean
    title: string
    description: string
    renderComponent: (type: number) => void
}

export function CardProject({id, status, title, description, renderComponent}: Props) {

return(
    <div className="flex flex-col bg-white p-4 rounded-md border-[1px] border-indigo-200 hover:shadow-lg hover:border-b-2 hover:border-gray-400 sm:flex-row">
        <div className="w-[85%] flex flex-col justify-between sm:flex-row">
            <a 
                onClick={() => renderComponent(1)}
                target={"_parent"}
                className="w-full h-full"
                title="Selecionar projeto"
            >
                <h5 className="font-normal text-[12px] text-center text-black sm:font-normal sm:text-base sm:text-left">{title}</h5>
                <p className="mt-3 text-[10px] text-indigo-800 text-center sm:text-xs sm:text-left ">Descrição:</p>
                <p className="mt-0 text-xs text-gray-500 mb-6 text-center sm:mb-0 sm:text-left sm:ml-1">{description}</p>
            </a>
        </div>
        <div className="w-[90%] flex flex-row items-end justify-between sm:flex-col sm:w-[15%] text-indigo-400">
            <a  
                onClick={() => renderComponent(2)}
                className="text-indigo-400 font-medium text-sm cursor-pointer"
                title="Abrir descrições gerais do projeto"
            >
                <p className="text-xs hover:text-indigo-600 pr-1 sm:p-0">abrir</p>
            </a>
            {status == true && (
                <Warning 
                    size={20}
                    weight={'duotone'}
                    color={'orange'}
                    alt={'Projeto não finalizado!'}
                />
            )}
            {status == false && (
                <CheckCircle 
                    size={20}
                    color={'green'}
                    weight={'duotone'}
                    alt={'Projeto está finalizado!'}
                    />
            )}
        </div>
    </div>
);
}