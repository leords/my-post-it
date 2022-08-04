import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";

interface User {
    user : {
        id: string,
        name: string,
        email: string
    }
    token : {
            token: string
    }
}
    
interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(email:string, password: string): Promise<void>;
    signOut(): void;
    updateList: number;
    setUpdateList: (newState: number) => void

}


export const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState<User | null>(null);
    const [updateList, setUpdateList] = useState(0);

     useEffect (() => {

        function loadStoragedAuth() {
            const storagedUser = localStorage.getItem('user')

            if (storagedUser) {
                setUser(JSON.parse(storagedUser))
            }
        }

        loadStoragedAuth()
    }, []); 


    async function signIn(email:string, password: string) {
        await api.post('/auth', {
            email: email,
            password: password
            })
            .then(response => { 
                setUser(response.data);                
                console.log('return user: ' + user)
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem('idUser', response.data.user.id);
            });
 
    }

    function signOut() {
        localStorage.clear()
        setUser(null);
        navigate('/')
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, updateList, setUpdateList}}>
            {children}
        </AuthContext.Provider>
    )


/*

------- OBSERVAÇÕES --------

1º = signed: !!user = 'se exister um usúario dentro de user, retorne TRUE!
2º = não esquecer de declarar os parâmetros das funções tanto dentro da interface quanto na declaração da função em si. 
3º = 

*/    
}