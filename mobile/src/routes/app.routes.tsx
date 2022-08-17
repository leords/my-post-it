import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthProvider } from "../context/authContext";
import { RequireAuth } from "../context/authRequire";
import { AuthPage } from "../pages/AuthPage";
import { Home } from "../pages/Home";
import { ListTask } from "../pages/ListTask";
import { Project } from "../pages/Project";
import { Register } from "../pages/Register";
import { Task } from "../pages/Task";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <NavigationContainer>  
            <AuthProvider>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="auth" component={AuthPage} />
                    <Screen name="home" component={Home} />
                    <Screen name="register" component={Register} />
                    <Screen name="list" component={ListTask} /> 
                    <Screen name="project" component={Project} /> 
                    <Screen name="task" component={Task} />
                </Navigator>
            </AuthProvider> 
        </NavigationContainer>  
    )
}
