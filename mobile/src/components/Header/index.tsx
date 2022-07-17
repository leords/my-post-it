
import { useNavigation } from "@react-navigation/native";
import { ArrowSquareDown, CaretLeft, SignOut, UserCircle } from "phosphor-react-native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { theme } from "../../theme";

import { styles } from './styles'

interface Props {
    name: string
}

export function Header({name} : Props) {

    const navigator = useNavigation()
    const [optionRender, setOptionRender] = useState(false)

    return (
        <>
            <View style={styles.container}>
                <View style={styles.viewUser}>
                    <Text style={styles.name}>{name}</Text>
                    <TouchableOpacity onPress={() => setOptionRender(!optionRender)}>
                        <UserCircle 
                            size={40} 
                            weight="light" 
                            color={theme.colors.background} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewMenu}>
                { optionRender == true && 

                    <TouchableOpacity style={styles.menu} onPress={() => navigator.navigate('auth' as never)}>
                        <SignOut 
                            size={22} 
                            weight="light" 
                            color={theme.colors.background} 
                        />
                        <Text style={styles.text}>Sair</Text>
                    </TouchableOpacity>

                }
            </View>
        </>
    )
}