import { Children } from "react"
import { StyleSheet } from "react-native"
import { theme } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        backgroundColor: theme.colors.background
    },
    FirstText: {
        fontFamily: theme.fonts.medium,
        fontSize: 12,
        color: theme.colors.first_color
    },
    SecondText: {
        fontFamily: theme.fonts.black,
        fontSize: 48,
        color: theme.colors.second_color
    },
    ThirdText: {
        width: 210,
        fontFamily: theme.fonts.medium,
        fontSize: 12,
        color: theme.colors.first_color,
        textAlign: 'center'
    },
    image: {
        marginTop: 42,
        width:250,
        height:160
    },
    input: {
        width: 260,
        height: 40,
        borderWidth: 1,
        borderColor: theme.colors.first_color,
        borderRadius: 4,
        marginTop: 12,
        paddingLeft: 15,
        fontSize: 12
    },
    button: {
        width: 260,
        marginTop: 25,
        marginBottom: 25,
    },
    link: {

    }



})