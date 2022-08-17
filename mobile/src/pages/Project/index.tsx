import { useRoute } from "@react-navigation/native";
import { Trash } from "phosphor-react-native";
import React from "react";
import { View, Text, ColorPropType } from "react-native";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { theme } from "../../theme";

import { styles } from "./styles"

type RouteParams = {
    id: string
}

export function Project() {

    const route = useRoute()
    const { id } = route.params as RouteParams

    return (
        <View style={styles.container}>
            <Header 
                buttonBack={true}
            />
            <View style={styles.containerCard}>
                <Text style={styles.titleProject}>{id}</Text>

                <View style={styles.viewDescription}>
                    <Text style={styles.titleDescription}>Descrição:</Text>
                    <View style={styles.inputDescription}>
                        <Text style={styles.description}>Fazer correções de portugues e alinhar os componentes.</Text>
                    </View>
                </View>

                <Text style={styles.titleTasks}>Tarefas</Text>               
                <View style={styles.viewFilter}>
                    <View style={styles.viewOpen}>
                        <Text style={styles.subTitle}>Abertas</Text>
                        <Text style={styles.count}>10</Text>
                    </View>
                    <View style={styles.viewClosed}>
                        <Text style={styles.subTitle}>Concluídas</Text>
                        <Text style={styles.count}>2</Text>
                    </View>
                    <View style={styles.viewAll}>
                        <Text style={styles.subTitle}>Todas</Text>
                        <Text style={styles.count}>12</Text>
                    </View>
                </View>

                <View style={styles.button}>
                    <Button 
                        title="Concluir projeto"
                        color={theme.colors.second_color}
                        functionCall={() => alert('Você concluiu está tarefa!')}
                    />
                </View>

                <View style={styles.viewTrash}>
                    <Trash 
                        size={28} 
                        color={theme.colors.background}
                    />
                    <Text style={styles.titleTrash}>Excluir este projeto!</Text>
                </View>

            </View>
        </View>
    )
}