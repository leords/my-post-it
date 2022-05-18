import React, { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import { RequireAuth } from "../Auth/RequireAuth";
import { AuthPage } from "../pages/AuthPage";
import { HomePage } from "../pages/HomePage";


export function Naviagation() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <AuthPage />} /> 
                <Route path="/home" element={<RequireAuth> <HomePage /> </RequireAuth>} />
            </Routes>
        </BrowserRouter>
    );
}