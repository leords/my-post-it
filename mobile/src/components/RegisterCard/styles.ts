import { TextAlignJustify } from "phosphor-react-native";
import { Children } from "react";
import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: 315,
        height: 400,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.first_color
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
        marginTop: 10,
    },
    text: {
        fontFamily: theme.fonts.medium,
        fontSize: 14,
        color: theme.colors.background,
        width: '100%',
        marginTop: 2
    },
    inputName: {
        width: 260,
        height: 40,
        backgroundColor: theme.colors.background,
        borderRadius: 4,
        paddingHorizontal: 15
    },
    inputDescription: {
        width: 260,
        height: 145,
        backgroundColor: theme.colors.background,
        borderRadius: 4,
        paddingHorizontal: 15,
        paddingTop: 20
    }




});