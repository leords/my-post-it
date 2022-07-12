import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthPage } from "../pages/AuthPage";


const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer> 
            <Stack.Navigator>
                <Stack.Screen  
                    name="Pagina de Autenticação"
                    component={AuthPage} 
                    options={{headerShown: false}} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
