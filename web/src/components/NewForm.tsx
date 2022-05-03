import React from "react";

export function NewForm() {
    return(
        <div className="flex w-screen h-screen items-center justify-center bg-indigo-400">
            <div className="flex flex-col p-6 border items-center justify-center bg-white w-2/5 h-2/4 mx-auto gap-2 rounded-md shadow-md">
                <h1 className="text-indigo-400 font-black text-6xl mb-4">post-it.</h1>
                <p className="text-gray-500 text-lg mb-16">Formulário de novos projetos!</p>
                <input className="w-56 h-10 rounded-md border shadow-sm border-gray-300 text-left pl-3 text-sm"  
                    type="text" name="name" placeholder="Nome"/>
                <input className="w-56 h-10 rounded-md border shadow-sm border-gray-300 text-left pl-3 text-sm" 
                    type="text" name="description" placeholder="Descrição" />
                <div className="flex flex-row gap-8">
                    <button className="bg-indigo-400 w-28 h-10 rounded-md mt-16 text-white shadow-md">Criar</button>
                    <button className="bg-white w-28 h-10 rounded-md border border-indigo-400 mt-16 text-indigo-400 shadow-md">Cancelar</button>
                </div>
            </div>
        </div>
    )
}