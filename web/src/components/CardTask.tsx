import React from "react";

export function CardTask () {
    return (
        <div>
            <a
            className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
            href=""
            >
            <span
                className="absolute inset-x-0 bottom-0 h-2  bg-indigo-600"
            ></span>

            <div className="justify-between sm:flex">
                <div>
                <h5 className="text-xl font-bold text-gray-900">
                    React JS
                </h5>
                <p className="mt-1 text-xs font-medium text-gray-600">Leonardo Rodrigues</p>
                </div>
            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                    Ler a documentação e praticar como faz um prop em 1 ou mais componentes.
                </p>
            </div>

            <dl className="flex mt-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Publicado</dt>
                <dd className="text-xs text-gray-500">31 de Março, 2022</dd>
                </div>
            </dl>
            </a>

            <a
            className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
            href=""
            >
            <span
                className="absolute inset-x-0 bottom-0 h-2  bg-indigo-600"
            ></span>

            <div className="justify-between sm:flex">
                <div>
                <h5 className="text-xl font-bold text-gray-900">
                    React JS
                </h5>
                <p className="mt-1 text-xs font-medium text-gray-600">Leonardo Rodrigues</p>
                </div>
            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                    Ler a documentação e praticar como faz um prop em 1 ou mais componentes.
                </p>
            </div>

            <dl className="flex mt-6">
                <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Publicado</dt>
                <dd className="text-xs text-gray-500">31 de Março, 2022</dd>
                </div>
            </dl>
            </a>
        </div>

        
    )
}