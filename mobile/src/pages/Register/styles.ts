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
        paddingVertical: 22,
        paddingHorizontal: 45
    },
    title: {
        fontFamily: theme.fonts.medium,
        fontSize: 16,
        color: theme.colors.third_color
    },
    titleList: {
        fontFamily: theme.fonts.medium,
        fontSize: 24,
        color: theme.colors.third_color
    },

    button: {
        width: 315,
        marginTop: 15
    }

})