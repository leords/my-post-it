import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";


interface Props {
    renderComponent: (type: boolean) => void
}


export function SignIn({renderComponent}:Props) {

    const navigate = useNavigate();
    const {signed, signIn} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        signIn(email, password)
        navigate('/home')
    }

    return(
        <form
            onSubmit={handleLogin}
            className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-xl">
            <h3 className="mb-6 text-2xl font-medium text-center">Entre com sua conta!</h3>
            <input 
                type="text" 
                className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                placeholder="Seu Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="text" 
                className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                placeholder="Senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className="block">
                <button 
                    className="w-full px-3 py-4 font-medium text-white bg-indigo-400 rounded-md hover:bg-indigo-500"
                    type="submit"
                    >Faça seu Login</button>
                    
            </div>
            <p className="w-full mt-4 text-sm text-center text-gray-500">Não tem uma conta ainda?
                <a href="#_" 
                    onClick={ ()=> renderComponent(true)}
                        className="text-blue-500 underline"> 
                Clique aqui</a>
            </p>
        </form>
)
}