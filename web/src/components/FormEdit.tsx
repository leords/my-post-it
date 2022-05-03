import React, { useState } from "react";
import { useParams } from "react-router-dom";

export function FormEdit() {

    const {id} = useParams()

    //{id} do projeto a ser editado!


    //função de editar e a função de deletar!

    return (
        <div className="max-w-sm h-auto mx-auto">
            <div className="flex flex-col p-6 border items-center justify-center bg-white w-full gap-2 rounded-md shadow-md">
                <h1 className="text-indigo-400 font-black text-6xl mb-4">post-it.</h1>
                <p className="text-gray-500 text-sm mb-16">Altere sua task!</p>
                <input className="w-56 h-10 rounded-md border shadow-sm border-gray-300 text-left pl-3 text-sm"  
                    type="text" name="name" placeholder="Novo nome"/>
                <input className="w-56 h-10 rounded-md border shadow-sm border-gray-300 text-left pl-3 text-sm" 
                    type="text" name="description" placeholder="Nova descrição" />
                <div className="flex flex-row gap-8">
                    <button className="bg-indigo-400 w-28 h-10 rounded-md mt-16 text-white shadow-md">Salvar</button>
                    <button className="bg-white w-28 h-10 rounded-md border border-indigo-400 mt-16 text-indigo-400 shadow-md">Cancelar</button>
                </div>
            </div>
        </div>
    )
}