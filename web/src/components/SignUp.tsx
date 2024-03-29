import { CircleNotch, Divide } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../lib/api";

interface Props {
    renderComponent: (type:boolean) => void
}

export function SignUp({renderComponent}:Props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [existingUserCondition, setExistingUserCondition] = useState<boolean>(false)
    const [existenceAlertRenderCondition, setExistenceAlertRenderCondition] = useState<Boolean>(false)
    const [loading, setloading] = useState(false)

    async function createNewUser(e: FormEvent) {
        e.preventDefault();
        
        setloading(true)
        await api.post('/user-unique', {
            email:email
        }).then(response => setExistingUserCondition(response.data) );

        setTimeout(() => {    
            if (existingUserCondition == true) {
                setExistenceAlertRenderCondition(true);
                setloading(false)
            } 
    
            else if (existingUserCondition == false) {
                setExistenceAlertRenderCondition(false);
                try {
                     api.post('/new-user', {
                        name: name,
                        email: email, 
                        password: password
                    });
                    alert('Sua conta foi criada com sucesso!')
                    setloading(false)
                    renderComponent(false)
                } catch (error) {
                    alert('Problema encontrado, 401')
                }
                setloading(false)
            }
        }, 2000)
    }

    
    return(
        <form 
            onSubmit={createNewUser}
            className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-xl">
            <h3 className="mb-6 text-2xl font-medium text-center">Crie sua conta!</h3>
            <input 
                type="text"
                className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                placeholder="Nome" 
                onChange={(e)=> setName(e.target.value)}
            />
            {existenceAlertRenderCondition == false && (
                <input 
                    type="text"
                    className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                    placeholder="Email" 
                    onChange={(e)=> setEmail(e.target.value)}
            />
            )}
            {existenceAlertRenderCondition == true && (
                <div>
                    <p className="text-xs ml-2 text-red-500">Email já existente!</p>
                    <input 
                        type="text"
                        className="block w-full px-4 py-3 mb-4 border border-transparent border-red-600 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                        placeholder="Email" 
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
            )}
            <input 
                type="password"
                className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 focus:ring focus:ring-indigo-300 focus:outline-none rounded-md"
                placeholder="Senha" 
                onChange={(e)=> setPassword(e.target.value)}
            />
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
                            {loading == false? 'Cadastrar-se' : 'Carregando'}
                        </div>
                </button>
            </div>
            <div className="w-full flex ">
                <button 
                    onClick={()=> renderComponent(false)}
                    className="w-full mt-4 text-sm text-center text-blue-500 underline cursor-pointer">
                        Já tenho uma conta?
                </button>
            </div>
        </form>
    )
}