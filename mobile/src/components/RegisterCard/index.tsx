import { X } from "phosphor-react-native";
import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { theme } from "../../theme";
import { Button } from "../Button";


import { styles } from './styles'

type Props = {
    getName: (type: string) => void
    getDescription: (type: string) => void
}

export function RegisterCard( {getName, getDescription} : Props) {
    return (
        <View style={styles.container}>
            <View style={styles.close}>
                <X  
                    size={32}
                    color={theme.colors.first_color}
                />
            </View>
            <View style={styles.img}>
                <Image 
                    source={require('../../assets/add.png')} 
                    style={styles.img}
                />
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.text}>Nome</Text>
                <TextInput 
                    style={styles.inputName}
                    onChangeText={getName}
                />
                <Text style={styles.text}>Descrição</Text>
                <TextInput
                    style={styles.inputDescription}
                    onChangeText={getDescription}
                    multiline={true}
                />
            </View>
        </View>
    )
}