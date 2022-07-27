import { TextAlignJustify } from "phosphor-react-native";
import { Children } from "react";
import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: 315,
        height: 500,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.first_color
    },
    close: {
        width: '100%',
        alignItems: 'flex-end',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: theme.colors.background,
        paddingHorizontal: 25,
    },

    img: {
        width: 140,
        height: 110,
        marginVertical: 10
    },

    viewInput: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 25,
        marginTop: 20,
    },
    text: {
        fontFamily: theme.fonts.medium,
        fontSize: 14,
        color: theme.colors.background,
        width: '100%',
    },
    inputName: {
        width: 260,
        height: 40,
        marginVertical: 10,
        backgroundColor: theme.colors.background,
        borderRadius: 4,
        paddingHorizontal: 15
    },
    inputDescription: {
        width: 260,
        height: 145,
        marginVertical: 10,
        backgroundColor: theme.colors.background,
        borderRadius: 4,
        paddingHorizontal: 15,
        paddingTop: 20
    }




});