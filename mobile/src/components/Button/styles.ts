import { StyleSheet } from "react-native"

import { theme } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.second_color,
        width: 260,
        height: 40,
        borderRadius: 4

    },
    text: {
        color: theme.colors.background,
        fontFamily: theme.fonts.bold
    }


})