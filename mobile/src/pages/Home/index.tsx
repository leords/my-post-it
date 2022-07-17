import { PlusCircle } from "phosphor-react-native";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity} from "react-native";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={{zIndex: 1}}>
                <Header 
                    name="Leonardo"
                />
            </View>

            <View style={styles.viewTitle}>
                <Text style={styles.title}>Lista de</Text>
                <Text style={styles.titleList}>Projetos</Text>
            </View>
            <ScrollView>
                <TouchableOpacity style={{marginBottom: 10}}>
                    <Card 
                        name={"Fazer deploy na Vercel"} 
                        description={"Corrigir os erros do código e fazer o deploy e enviar o link por email."} 
                        status={false}
                        handleOpenAction={() => alert('Deu!')}          
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom: 10}}>
                    <Card 
                        name={"Fazer deploy na Vercel"} 
                        description={"Corrigir os erros do código e fazer o deploy e enviar o link por email."} 
                        status={false}
                        handleOpenAction={() => alert('Deu!')}          
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom: 10}}>
                    <Card 
                        name={"Fazer deploy na Vercel"} 
                        description={"Corrigir os erros do código e fazer o deploy e enviar o link por email."} 
                        status={false}
                        handleOpenAction={() => alert('Deu!')}          
                    />
                </TouchableOpacity>
            </ScrollView>
            <View>
                <PlusCircle size={60} />
            </View>
            
        </View>
    )
}