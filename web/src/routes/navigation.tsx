import React, { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { AuthProvider } from "../Auth/AuthContext";
import { RequireAuth } from "../Auth/RequireAuth";

import { AuthPage } from "../pages/AuthPage";
import { HomePage } from "../pages/HomePage";



export function Naviagation() {
    
    return(
        <BrowserRouter>
            <AuthProvider> 
                <Routes>
                    <Route 
                        path="/" 
                            element={ <AuthPage />  }/> 
                    <Route 
                        path="/home" 
                        element={<RequireAuth><HomePage /></RequireAuth>} 
                    /> 
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}