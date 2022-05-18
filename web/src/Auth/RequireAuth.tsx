import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage"
import { AuthContext } from "./AuthContext"

export const RequireAuth = ({ children }: { children:JSX.Element }) => {
 
    const auth = useContext(AuthContext)
    
    if(auth.user != null) {
        return <AuthPage />
        }

    return children
}