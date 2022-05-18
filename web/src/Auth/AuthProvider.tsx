import {useContext, useState } from "react";
import { api } from "../lib/api";
import { AuthContext, User } from "./AuthContext";


export const AuthProvider = ({ children }:{ children:JSX.Element }) => {

    const auth = useContext(AuthContext)

    const [user, setUser] = useState<User | null>(null)
    const [data, setData] = useState<User | null>(null)

    const signin = async (email: string, password: string) => {
        await api.post('/auth', {
            email: email, 
            password: password
        }).then(response => setData(response.data))
        if(data != null) {
            setUser(data)
            return true
        }
        return false
    }

    const signout = async () => {
        //await conecte.logout()
        //setUser(null)
    }

    return(
        <AuthContext.Provider value={{ user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}

