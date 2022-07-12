import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles"

interface Props {
    title: string
    functionCall: () => void
}

export function Button({title, functionCall} : Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={functionCall}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}