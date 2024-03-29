import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },
    viewTitle: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 45
    },
    title: {
        fontFamily: theme.fonts.medium,
        fontSize: 18,
        color: theme.colors.third_color
    },
    button: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    }
})