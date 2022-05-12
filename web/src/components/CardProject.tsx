import api from "axios";
import { useState } from "react";
import { render } from "react-dom";


interface Props {
    id: string
    title: string
    description: string
    renderComponent: (type: boolean) => void
}

export function CardProject({id, title, description, renderComponent}: Props) {

return(
    <div className=" rounded-xl  w-full">
        <div className="flex bg-white p-4 rounded-lg border border-gray-300 hover:shadow-lg hover:border-b-2 hover:border-gray-400 focus:bg-gray-200">
            <div className="w-[85%] flex flex-col justify-between sm:flex-row">
                <a 
                onClick={() => renderComponent(true)}
                target={"_parent"}
                className="w-full h-full"
                title="Selecionar projeto"
                >
                    <h5 className="font-semibold text-sm text-black sm:font-medium sm:text-base">{title}</h5>
                    <p className="mt-1 text-xs">Descrição </p>
                    <p className="mt-1 ml-2 text-xs text-gray-600">{description}</p>
                </a>
            </div>
            <div className="w-[15%] flexitems-start justify-between">
                <a  
                    onClick={() => renderComponent(false)}
                    className="text-indigo-400 font-medium text-sm cursor-pointer"
                    title="Abrir descrições gerais do projeto"
                >
                    <p className="text-xs hover:text-indigo-600 pr-1 sm:p-0">abrir</p>
                </a>
            </div>
        </div>
    </div>
);
}