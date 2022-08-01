import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { AuthContext, AuthProvider } from "../context/authContext";
import { AuthPage } from "../pages/AuthPage";
import { AppRoutes } from "./app.routes";

export function Routes() {

    const [user, setUser] = useState(false)

    return (
            <NavigationContainer>
                <AuthProvider>
                    { user === true 
                    ? <AppRoutes /> 
                    : <AuthPage />
                    }
                </AuthProvider>
            </NavigationContainer>
    )
}