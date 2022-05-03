import React from "react";

import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export function AuthPage() {


    const navigate = useNavigate();

    const authLogin = (() => {
        navigate('/home')
    })

    return (
        <div>
            <div className="flex flex-col items-center justify-center my-0.5 h-screen bg-gray-100" >
                <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col items-center md:flex-row">

                            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                                <p className="font-medium text-indigo-500 uppercase">Suas tarefas em dia</p>
                                <h2 className="flex text-6xl font-black leading-none text-black sm:text-3xl md:text-5xl">
                                    post-it 
                                    <h2 className="text-2xl font-extrabold leading-none text-indigo-600 sm:text-3xl md:text-5xl">
                                    .
                                </h2>
                                </h2>
                                <p className="text-xl text-gray-600 md:pr-16">Uma forma simples de criar seus projetos, tarefa à tarefa. </p>
                            </div>

                            <div className="w-full mt-16 md:mt-0 md:w-2/5">
                                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-xl">
                                    <h3 className="mb-6 text-2xl font-medium text-center">Entre com sua conta!</h3>
                                    <input type="text" name="email" className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-500 focus:outline-none rounded-none" placeholder="Seu Email" />
                                    <input type="password" name="password" className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-500 focus:outline-none rounded-none" placeholder="Senha" />
                                    <div className="block">
                                        <button 
                                            className="w-full px-3 py-4 font-medium text-white bg-indigo-500 rounded-none"
                                            onClick={authLogin}   
                                        >Faça seu Login</button>
                                    </div>
                                    <p className="w-full mt-4 text-sm text-center text-gray-500">Não tem uma conta ainda?  <a href="#_" className="text-blue-500 underline"> Clique aqui</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <div className="shadow-md">
                <Footer />
            </div>
        </div>
    )   
}