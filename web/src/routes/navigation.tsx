import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";


import { FormEdit } from "../components/FormEdit";
import { NewForm } from "../components/NewForm";
import { AuthPage } from "../pages/AuthPage";
import { HomePage } from "../pages/HomePage";
import { TaskPage } from "../pages/TaskPage";

export function Naviagation() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <AuthPage />} /> 
                <Route path="/home" element={<HomePage />} />
                <Route path="/task/:id" element={<TaskPage />} />
                <Route path="/new" element={<NewForm />} />
                <Route path="/edit/:id" element={<FormEdit />} /> 
            </Routes>
        </BrowserRouter>
    );
}