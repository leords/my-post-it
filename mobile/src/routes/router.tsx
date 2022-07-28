import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthPage } from "../pages/AuthPage";
import { Home } from "../pages/Home";
import { ListTask } from "../pages/ListTask";
import { Project } from "../pages/Project";
import { Register } from "../pages/Register";
import { Task } from "../pages/Task";


const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer> 
            <Stack.Navigator>
                <Stack.Screen  
                    name="auth"
                    component={AuthPage} 
                    options={{headerShown: false}} 
                />
                <Stack.Screen 
                    name="home"
                    component={Home}
                    options={{headerShown: false}} 
                />
                <Stack.Screen 
                    name="register"
                    component={Register}
                    options={{headerShown: false}} 
                />
                <Stack.Screen 
                    name="list"
                    component={ListTask}
                    options={{headerShown: false}}
                /> 
                <Stack.Screen 
                    name="project"
                    component={Project}
                    options={{headerShown: false}}
                /> 
                <Stack.Screen 
                    name="task"
                    component={Task}
                    options={{headerShown: false}}
                /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
