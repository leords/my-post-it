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
    viewInformation: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    linkProject: {
        fontFamily: theme.fonts.medium,
        color: theme.colors.first_color
    },
    title: {
        fontFamily: theme.fonts.medium,
        fontSize: 14,
        color: theme.colors.third_color
    },
    titleList: {
        fontFamily: theme.fonts.medium,
        fontSize: 18,
        color: theme.colors.third_color
    },
    button: {
        position: 'absolute',
        bottom: 60,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})