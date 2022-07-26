import { StyleSheet } from "react-native"

import { theme } from "../../theme"

export let styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        borderRadius: 4,
        
    },
    
    text: {
        color: theme.colors.background,
        fontFamily: theme.fonts.bold,

    }


})