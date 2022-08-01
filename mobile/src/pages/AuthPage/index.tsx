import { Link, useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";

import { Button } from "../../components/Button";
import { AuthContext } from "../../context/authContext";
import { theme } from "../../theme";

import { styles } from './styles'

export function AuthPage() {

    const navigator = useNavigation()
    const { signIn, signOut } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [renderCondition, setRenderCondition] = useState(false)


    function handleSignIn() {
        if (email == '' && password == '') {
            alert('Favor preencha os campos')
        }
        if (email == '' || password == '') {
            alert('Favor preencha os campos')
        }
        signIn(email, password);
    }

    function handleSignUp() {
        alert('vamos criar mais um usuário.')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.FirstText}>SUAS TAREFAS EM DIA</Text>
            <Text style={styles.SecondText}>post-it</Text>
            <Text style={styles.ThirdText}>Uma forma simples de criar seus projetos, tarefa à tarefa.</Text>
            <Image 
                style={styles.image}
                source={require("../../assets/home.png")}>
            </Image>

            <TextInput 
                style={ renderCondition == true ? styles.input : {display: "none"} }
                placeholder="Nome"
                onChangeText={setName}
            />
            <TextInput 
                style={styles.input}
                placeholder="Email" 
                onChangeText={setEmail}
            />
            <TextInput 
                style={styles.input}
                placeholder="Password" 
                onChangeText={setPassword}
            /> 

            <View style={styles.button}>
                <Button  
                    title={ renderCondition == true ? 'Cadastrar' : 'Entrar'}
                    functionCall={renderCondition == true
                        ? () => handleSignUp() 
                        : () => handleSignIn()
                    }
                    color={theme.colors.second_color}
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