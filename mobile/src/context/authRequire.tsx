import React, { useContext } from "react";
import { AuthPage } from "../pages/AuthPage";
import { AuthContext } from "./authContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

    const {user} = useContext(AuthContext);

    if (user == undefined) {
        return <AuthPage /> 
    } 

    return children;
    
}