import { Link, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";

import image from "../../assets/home.png";
import { Button } from "../../components/Button";


import { styles } from './styles'

export function AuthPage() {

    const navigator = useNavigation()

    const [renderCondition, setRenderCondition] = useState(false)

    function onPressButtonSend() {
        navigator.navigate('home' as never)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.FirstText}>SUAS TAREFAS EM DIA</Text>
            <Text style={styles.SecondText}>post-it</Text>
            <Text style={styles.ThirdText}>Uma forma simples de criar seus projetos, tarefa à tarefa.</Text>
            <Image 
                style={styles.image}
                source={image}>
            </Image>

            <TextInput 
                style={ renderCondition == true ? styles.input : {display: "none"} }
                placeholder="Nome" 
            />
            <TextInput 
                style={styles.input}
                placeholder="Email" 
            />
            <TextInput 
                style={styles.input}
                placeholder="Password" 
            />
            <View style={styles.button}>
                <Button  
                    title={ renderCondition == true ? 'Cadastrar' : 'Entrar'}
                    functionCall={onPressButtonSend}
                />
            </View>
            <TouchableOpacity
                onPress={() => setRenderCondition(!renderCondition)}
                >
                <Text style={styles.link}>
                { renderCondition == true ? 'Já tem uma conta? Clique aqui' : 'Ainda não tem uma conta? Clique aqui'}
                </Text>  
            </TouchableOpacity>                       
        </View>
    )
}