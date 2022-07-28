import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, FlatList} from "react-native";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { theme } from "../../theme";

import { styles } from "./styles";

export function Home() {

    const navigation = useNavigation();

    //const registerFaker = null
    const registerFaker = [
    {
        name: 'Deploy 1',
        description: 'Estamos testando',
        status: false,
        handleOpenAction: ''
    },
    {
        name: 'Deploy 2',
        description: 'Verificando a cor',
        status: true,
        handleOpenAction: ''
    }
    ];


    function handleRegisterScreen(id : string) {
        navigation.navigate('register', {id})
    }
    function handleOpenProject(id : string) {
        navigation.navigate('list', {id})
    }

    return (
        <View style={styles.container}>
            <View style={{zIndex: 1}}>
                <Header 
                    name="Leonardo"
                    buttonBack={false}
                />
            </View>

            <View style={styles.viewTitle}>
                <Text style={styles.title}>Lista de</Text>
                <Text style={styles.titleList}>Projetos</Text>
            </View>
            <FlatList
                data={registerFaker}
                keyExtractor={item => item.name}
                renderItem={ ({item}) =>
                    <TouchableOpacity 
                        style={{marginBottom: 10}}
                        onPress={() => handleOpenProject(item.name)}
                        >
                        <Card 
                            name={item.name} 
                            description={item.description} 
                            status={item.status}
                            handleOpenAction={() => alert('Deu!')}          
                        />
                    </TouchableOpacity>     
                }
                contentContainerStyle={{paddingBottom: 100}}
                ListEmptyComponent={() => (
                    <Empty/>
                )}
            />

            <View style={styles.button}>
                <Button 
                    title="Criar novo projeto"
                    functionCall={() => handleRegisterScreen('paramsID')}
                    color={theme.colors.first_color}     
                />
            </View>
            
        </View>
    )
}