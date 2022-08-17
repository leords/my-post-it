import React from "react";
import { useRoute } from "@react-navigation/native";
import { Trash } from "phosphor-react-native";
import { View, Text} from "react-native";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { theme } from "../../theme";

import { styles } from "./styles"

type RouteParams = {
    id: string
    nameTask: string,
    nameProject: string
}

export function Task() {

    const route = useRoute()
    const { id, nameProject, nameTask } = route.params as RouteParams

    return (
        <View style={styles.container}>
            <Header 
                buttonBack={true}
            />
            <View style={styles.containerCard}>
                <Text style={styles.titleProject}>{id}</Text>

                <View>
                    <Text style={styles.titleDescription}>Descrição:</Text>
                    <View style={styles.inputDescription}>
                        <Text style={styles.description}>Fazer correções de portugues e alinhar os componentes.</Text>
                    </View>
                </View>
              
                <View style={styles.viewTitle}>
                    <Text style={styles.project}>Projeto</Text> 
                    <Text style={styles.subTitle}>{nameProject}</Text>
                </View>

                <View style={styles.button}>
                    <Button 
                        title="Concluir projeto"
                        color={theme.colors.second_color}
                        functionCall={() => ''}
                    />
                </View>

                <View style={styles.viewTrash}>
                    <Trash 
                        size={28} 
                        color={theme.colors.background}
                    />
                    <Text style={styles.titleTrash}>Excluir esta tarefa!</Text>
                </View>

            </View>
        </View>
    )
}