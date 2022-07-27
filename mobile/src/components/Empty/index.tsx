import React from "react";
import { View, Image, Text } from "react-native";

import { styles } from './styles'


export function Empty() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/empty.png')}
                style={styles.img}
            >
            </Image>   
            <Text style={styles.text}>Não foi encontrado nenhum item para está lista.</Text>

        </View> 
    );
}