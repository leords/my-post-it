import { useNavigation } from "@react-navigation/native";
import { Children, createContext, useState } from "react";
import { api } from "../services/api";

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

interface authContextData {
    user: object | null
    signIn(email:string, password: string): Promise<void>;
    signOut(): void;
}

export const AuthContext = createContext( {} as authContextData );

export const AuthProvider = ({children} : {children:JSX.Element}) => {

    const navigation = useNavigation()
    const [user, setUser] = useState<User|null>(null)

    async function signIn(email:string, password: string) {
        await api.post('/auth', {
            email: email,
            password: password
            }).then(response => { 
                setUser(response.data)
            });
 
    }

    function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, signOut, signIn }} >
            {children}
        </AuthContext.Provider>
    )
}