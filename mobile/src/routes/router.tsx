import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthPage } from "../pages/AuthPage";
import { Home } from "../pages/Home";
import { ListTask } from "../pages/ListTask";
import { Register } from "../pages/Register";


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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
