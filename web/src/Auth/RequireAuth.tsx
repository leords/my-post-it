import { useContext } from "react";
import { AuthPage } from "../pages/AuthPage";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

    const {signed} = useContext(AuthContext);

    if (!signed == true) {
        return <AuthPage />;
    } 

    return children;
    
}