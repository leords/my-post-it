import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string
    description: string
    renderComponent: (type: number) => void
}

export function CardProject({title, description, renderComponent}: Props) {

const navigate = useNavigate();

const {id} = useParams();
const test = '21ad14ad1da51'

return(
    <div className=" rounded-xl  w-full">
        <div className="flex bg-white p-4 rounded-lg border border-gray-300 hover:shadow-lg hover:border-b-2 hover:border-gray-400 focus:bg-gray-200">
            <div className="w-[85%] flex flex-col justify-between sm:flex-row">
                <a 
                onClick={() => renderComponent(1)}
                target={"_parent"}
                className="w-full h-full"
                title="Selecionar projeto"
                >
                    <h5 className="font-semibold text-black">{title}</h5>
                    <p className="mt-1 text-xs">Descrição </p>
                    <p className="mt-1 ml-2 text-xs font-medium text-gray-400">{description}</p>
                </a>
            </div>
            <div className="w-[15%] flex bottom-1 items-start justify-end">
                <a 
                onClick={() => renderComponent(2)}
                className="text-indigo-400 font-medium text-sm"
                title="Abrir descrições gerais do projeto"
                >
                    <p className="mt-[-8px] text-xs hover:text-indigo-600">ver</p>
                </a>
            </div>
        </div>
    </div>
);
}