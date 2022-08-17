import { useNavigation } from "@react-navigation/native";
import {CaretLeft, SignOut, UserCircle } from "phosphor-react-native";
import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/authContext";
import { theme } from "../../theme";

import { styles } from './styles'

interface Props {
    buttonBack: boolean
}

interface User {
    user: {
        email: string,
        id: string,
        name: string
    }
}

export function Header({buttonBack} : Props) {

    const navigation = useNavigation()
    const {signOut} = useContext(AuthContext)
    //const nameUser: User = Object.create(user) 

    function handleGoBack() {
        navigation.goBack()
    }   

    function handleLogOff() {
        signOut()
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewArrow}>
                {buttonBack == true 
                ? 
                <TouchableOpacity
                    onPress={handleGoBack}
                >
                    <CaretLeft 
                        size={32} 
                        color={theme.colors.background}
                    />
                </TouchableOpacity>
                : 
                <></>
                }
                
            </View>
            <View style={styles.viewUser}>
                <View style={styles.user}>
                    <UserCircle 
                        size={25} 
                        weight="light" 
                        color={theme.colors.background} 
                    />
                    <Text style={styles.name}>Usuario</Text>
                    <TouchableOpacity
                        onPress={handleLogOff}
                    >
                        <SignOut 
                            size={30} 
                            weight="light" 
                            color={theme.colors.background} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}