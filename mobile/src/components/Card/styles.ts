import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    containerStatusTrue: {
        width: 315,
        height: 180,
        borderRadius: 10,
        backgroundColor: theme.colors.first_color,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    containerStatusFalse: {
        width: 315,
        height: 180,
        borderRadius: 10,
        backgroundColor: theme.colors.second_color,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    name: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 42,
        fontFamily: theme.fonts.medium,
        color: theme.colors.background,

        borderBottomWidth: 1,
        borderBottomColor: theme.colors.background,
    },
    title: {
        marginTop: 20,
        paddingHorizontal: 30,
        fontFamily: theme.fonts.medium,
        color: theme.colors.background
    },
    description: {
        marginTop: 4,
        paddingHorizontal: 30,
        marginLeft: 8,
        fontFamily: theme.fonts.light,
        color: theme.colors.background
    },
    status: {
        marginTop: 15,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        paddingRight: 10
    }
})