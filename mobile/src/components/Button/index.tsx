import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles"

interface Props {
    title: string
    functionCall?: () => void
    color?: string
    w?:string
    h?:string
}

export function Button({title, functionCall, color, w, h } : Props,) {
    return (
        <TouchableOpacity
            style={[styles.container, {backgroundColor:`${color}`}]}
            onPress={functionCall}
        >
        
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}