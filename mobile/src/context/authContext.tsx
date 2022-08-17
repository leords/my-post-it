import { useNavigation } from "@react-navigation/native";
import { createContext, useState } from "react";
import { api } from "../services/api"

interface User {
    user : {
        id: string,
        name: string,
        email: string
    }
}

interface authContextData {
    user: object | null
    signIn(email:string, password: string): Promise<void>;
    signOut(): void;
}

export const AuthContext = createContext<authContextData>( {} as authContextData );

export const AuthProvider = ( {children} : {children:JSX.Element}) => {

    const userFake = {
        user : {
            name: 'Leonardo',
            id: '51156415645a1d56d1a',
            email: 'leo@gmail.com'
        }
    }

    const navigation = useNavigation() 
    const [user, setUser] = useState<User|null>(null)

    async function signIn(email:string, password: string) {
        setUser(userFake)
        navigation.navigate('home')
        /* api
            .post('/auth', { email: email, password: password})
            .then((response) => { setUser(response.data)})
            .catch(function(error) {
                console.log('Error: ' + error.message);
                console.log('Error: ' + error);
                console.log(user)
        }); */
    }

    function signOut() {
        setUser(null);
        navigation.navigate('auth')
    }

    return (
        <AuthContext.Provider value={{user, signOut, signIn}} >
            {children}
        </AuthContext.Provider>
    )
}