import React from "react";
import { View, Text, FlatList, TouchableOpacity} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Card } from "../../components/Card";
import { Empty } from "../../components/Empty";
import { Button } from "../../components/Button";

import { Header } from "../../components/Header";
import { theme } from "../../theme";

import { styles } from "./styles";


type RouteParams = {
    id: string
}

export function ListTask() {

    //const registerFaker = null
    const registerFaker = [
        {
            name: 'Tarefa 1',
            description: 'Estamos testando',
            status: false,
            handleOpenAction: ''
        },
        {
            name: 'Tarefa 2',
            description: 'Verificando a cor',
            status: true,
            handleOpenAction: ''
        }
        ];

    const navigation = useNavigation()
    const route = useRoute()
    const { id } = route.params as RouteParams
        
    function handleOpenTask(id: string, nameTask: string, nameProject: string) {
        navigation.navigate('task', {id, nameTask, nameProject})
    }

    function handleOpenDescriptionProject(id: string) {
        alert('abrir informações do projeto');
        navigation.navigate('project', {id})
    }
            
    return (
        <View style={styles.container}>
            <View style={{zIndex: 1}}>
                <Header 
                    name="Leonardo"
                    buttonBack={true}
                />
            </View>

            <View style={styles.viewInformation}>
                <View>
                    <Text style={styles.title}>Lista de tareras</Text>
                    <Text style={styles.titleList}>Projeto: {id}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => handleOpenDescriptionProject(id)}
                >
                    <Text style={styles.linkProject} >Ver projeto</Text>  
                </TouchableOpacity>
            </View>

            <FlatList
                data={registerFaker}
                keyExtractor={item => item.name}
                renderItem={ ({item}) =>
                    <TouchableOpacity 
                        style={{marginBottom: 10}}
                        onPress={() => handleOpenTask(item.name, '', id)}    
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
                    title="Criar nova tarefa"
                    functionCall={() => ''}
                    color={theme.colors.first_color}     
                />
            </View>
            
        </View>
    )
}