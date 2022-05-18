import React, { useContext, useState } from "react";

interface Props {
    renderComponent: (type:boolean) => void
}

export function SignUp({renderComponent}:Props) {


    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')

    
    return(
        <form onSubmit={() => {}}
            className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-xl">
            <h3 className="mb-6 text-2xl font-medium text-center">Crie sua conta!</h3>
            <input 
                type="text"
                className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                placeholder="Seu Email" 
                onChange={(e)=> setUserEmail(e.target.value)}
            />
            <input 
                type="text"
                className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                placeholder="Senha" 
                onChange={(e)=> setPassword(e.target.value)}
            />
            <div className="block">
                <button 
                    className="w-full px-3 py-4 font-medium text-white bg-indigo-400 rounded-md hover:bg-indigo-500"
                    type="submit">Cadastrar-se</button>
            </div>
            <div className="w-full flex ">
                <a onClick={()=> renderComponent(false)}
                    className="w-full mt-4 text-sm text-center text-blue-500 underline cursor-pointer">Já tenho uma conta?
                </a>
            </div>
        </form>
    )
}