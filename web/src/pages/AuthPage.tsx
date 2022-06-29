import { useContext, useState } from "react";

import { Footer } from "../components/Footer";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";

export function AuthPage() {

    const [renderingConditionSingUp, setRenderingConditionSingUp] = useState<boolean>(false);
  
    return (
        <div>
            <div className="flex flex-col items-center justify-center my-0.5 h-screen bg-gray-100" >
                <div className="w-full px-8 py-16 bg-gray-100 xl:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col items-center md:flex-row">

                            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                                <p className="font-medium text-indigo-500 uppercase">Suas tarefas em dia</p>
                                <h2 className="flex text-6xl font-black leading-none text-black sm:text-3xl md:text-5xl">
                                    post-it
                                </h2>
                                <p className="text-xl text-gray-600 md:pr-16">Uma forma simples de criar seus projetos, tarefa à tarefa. </p>
                            </div>

                            <div className="w-full mt-16 md:mt-0 md:w-2/5">
                                {renderingConditionSingUp == false && (
                                    <SignIn 
                                        renderComponent={setRenderingConditionSingUp}
                                    />
                                )}

                                {renderingConditionSingUp == true && (
                                    <SignUp 
                                        renderComponent={setRenderingConditionSingUp}
                                    />                        
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-md">
                <Footer />
            </div>
        </div>
    )   
}