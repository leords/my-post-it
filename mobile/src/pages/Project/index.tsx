import { Trash } from "phosphor-react-native";
import React from "react";
import { View, Text } from "react-native";

import { Button } from "../../components/Button";
import { theme } from "../../theme";

import { styles } from "./styles"

export function Project() {
    return (
        <View>
            <Text>Tarefa 1</Text>
            <View>
                <Text>Descrição:</Text>
                <Text>Fazer correções de portugues e alinhar os componentes.</Text>
            </View>
            <Text>Tarefas</Text>
            <View>
                <View>
                    <Text>Abertas</Text>
                    <Text>10</Text>
                </View>
                <View>
                    <Text>Concluídas</Text>
                    <Text>2</Text>
                </View>
                <View>
                    <Text>Todas</Text>
                    <Text>12</Text>
                </View>
            </View>
            <View>
                <Trash size={32} />
                <Text></Text>
            </View>
            <View>

            </View>
            <Button 
                title="Concluir projeto"
                color={theme.colors.second_color}
                functionCall={() => ''}
            />
        </View>
    )
}