import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    containerStatusTrue: {
        width: 315,
        minHeight: 180,
        borderRadius: 10,
        paddingHorizontal: 30,
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
        minHeight: 180,
        borderRadius: 10,
        paddingHorizontal: 30,
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
    viewName: {
        width: '100%',
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        borderBottomWidth: 1,
        borderColor: theme.colors.background,
    },
    name: {
        fontFamily: theme.fonts.medium,
        color: theme.colors.background,
    },
    title: {
        marginTop: 20,
        fontFamily: theme.fonts.medium,
        color: theme.colors.background
    },
    description: {
        marginTop: 4,
        marginLeft: 8,
        fontFamily: theme.fonts.light,
        color: theme.colors.background
    },
    status: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
        height: 40,
    }
})