import { CircleNotch } from "phosphor-react";
import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";


interface Props {
    renderComponent: (type: boolean) => void
}


export function SignIn({renderComponent}:Props) {

    const navigate = useNavigate();
    const {signIn, user} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conditionAlertRender, setConditionAlertRender] = useState<boolean>(false)
    const [loading, setloading] = useState(false)

    const timer = setInterval(handleLogin, 5000);

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        setloading(true)
        await signIn(email, password)

        
        setTimeout(() => {
            user == null 
                ? setConditionAlertRender(true) 
                : setConditionAlertRender(false)

            setloading(false)

            user != null 
                ? navigate('/home')
                : navigate('/')
        }, 2000)
    }



    return(
        <form
            onSubmit={handleLogin}
            className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-xl">
            <h3 className="mb-6 text-2xl font-medium text-center">Entre com sua conta!</h3>

            {conditionAlertRender ? true && (
                <>
                    <p className="text-sm ml-2 mb-2 text-red-500">Dados incorretos, confira por favor!</p>
                    <input 
                        type="text"
                        className="block w-full px-4 py-3 mb-4 border border-transparent border-red-600 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                        placeholder="Seu Email" 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        className="block w-full px-4 py-3 mb-4 border border-transparent border-red-600 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                        placeholder="Senha" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </>
            ):  
                <>
                    <input 
                        type="text" 
                        className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                        placeholder="Seu Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        type="password" 
                        className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                        placeholder="Senha" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </>
            }
            <div className="block">
            <button 
                    className={`flex flex-row justify-center items-center gap-4 w-full px-3 py-4 font-medium text-white bg-indigo-400 rounded-md hover:bg-indigo-500 ${loading == true && ('disabled:opacity-75')}`}
                    type="submit">
                        <div className={`${loading==false && ('hidden')} ${loading==true && ('animate-spin')}`}>
                            <CircleNotch 
                                size={24} 
                                weight={"bold"}
                            />
                        </div>
                        <div className="">
                            {loading == false? 'Faça seu Login' : 'Carregando'}
                        </div>
                </button>    
            </div>
            <p className="w-full mt-4 text-sm text-center text-gray-500">Não tem uma conta ainda?
                <button 
                    onClick={ ()=> renderComponent(true)}
                    className="text-blue-500 underline"> 
                    Clique aqui
                </button>
            </p>
        </form>
)
}