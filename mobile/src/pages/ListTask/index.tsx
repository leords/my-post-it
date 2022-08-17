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

/* type task = {
    id: string
    name: string
    description: string
    status: boolean
    date: Date
    project: string
    userLogged: string
} */

export function ListTask() {

    //const registerFaker = null
    const registerFaker = [
        {
            name: 'Cores',
            description: 'Verificar se as cores padrões do tema estão corretas',
            status: false,
            handleOpenAction: ''
        },
        {
            name: 'Fontes',
            description: 'Verificar se a importação das fontes estão corretas.',
            status: true,
            handleOpenAction: ''
        },
        {
            name: 'Código',
            description: 'Analisar o código para possiveis melhorias e reparações.',
            status: true,
            handleOpenAction: ''
        }
        ];

   // const [taskReturnList, setTaskReturnList] = useState<task[]>()
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

    function handleNewRegisterTask(id: string, title: string) {
        alert('criar uma nova tarefa');
        navigation.navigate('register', {id, title})
    }
    
    return (
        <View style={styles.container}>
            <View style={{zIndex: 1}}>
                <Header 
                    buttonBack={true}
                />
            </View>

            <View style={styles.viewInformation}>
                <View>
                    <Text style={styles.title}>Lista de tarefas</Text>
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
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Empty/>
                )}
            />

            <View style={styles.button}>
                <Button 
                    title="Criar nova tarefa"
                    functionCall={() => handleNewRegisterTask(id, 'Tarefa')}
                    color={theme.colors.first_color}     
                />
            </View>
            
        </View>
    )
}