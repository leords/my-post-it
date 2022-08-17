import { StyleSheet } from "react-native";
import { theme } from "../../theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    viewTitle: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 45
    },
    title: {
        fontFamily: theme.fonts.medium,
        fontSize: 15,
        color: theme.colors.third_color
    },
    titleList: {
        fontFamily: theme.fonts.medium,
        fontSize: 24,
        color: theme.colors.third_color
    },

    button: {
        position: 'absolute',
        width: 315,
        bottom: 25
    }

})