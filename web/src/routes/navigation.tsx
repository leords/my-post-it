import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import { AuthPage } from "../pages/AuthPage";
import { HomePage } from "../pages/HomePage";

export function Naviagation() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <AuthPage />} /> 
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}