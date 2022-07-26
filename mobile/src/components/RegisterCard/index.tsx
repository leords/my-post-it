import { X } from "phosphor-react-native";
import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { theme } from "../../theme";
import { Button } from "../Button";


import { styles } from './styles'

export function RegisterCard() {
    return (
        <View style={styles.container}>
            <View>
                <X size={32} />
            </View>
            <View>
                <Image 
                    source={require('../../assets/add.png')} 
                    style={styles.img}
                />
            </View>
            <View>
                <Text>Nome</Text>
                <TextInput>

                </TextInput>
                <Text>Descrição</Text>
                <TextInput
                    multiline={true}
                >

                </TextInput>
                <Button 
                    title="Cadastrar"
                    functionCall={ () => ''}
                    color={theme.colors.first_color}
                />
            </View>
        </View>
    )
}