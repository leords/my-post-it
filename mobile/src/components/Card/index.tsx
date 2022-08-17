import { Check, X } from "phosphor-react-native";
import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props {
    name: string
    description: string
    status: boolean
    handleOpenAction: () => void
}

export function Card({name, description, status} : Props) {

    return (
        <View style={status == false ? styles.containerStatusFalse : styles.containerStatusTrue}>
            <View style={styles.viewName}>
                <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.title}>Descrição</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.status}>
                { status == false 
                ? (<X size={24} weight="light" color={theme.colors.background} />) 
                : (<Check size={24} weight="light" color={theme.colors.background} />)
                }
            </View>
        </View>
    )
}