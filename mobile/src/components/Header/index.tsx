
import { useNavigation } from "@react-navigation/native";
import { ArrowSquareDown, CaretLeft, SignOut, UserCircle } from "phosphor-react-native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { theme } from "../../theme";

import { styles } from './styles'

interface Props {
    name: string
    buttonBack: boolean
}

export function Header({name, buttonBack} : Props) {

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack()
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
                    <Text style={styles.name}>{name}</Text>
                    <TouchableOpacity
                        onPress={() => alert('Este botão terá a função de deslogar')}
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