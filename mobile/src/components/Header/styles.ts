import { theme } from './../../theme/index';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,

        backgroundColor: theme.colors.first_color,
        zIndex: 1,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
    },
    name: {
        fontFamily: theme.fonts.black,
        fontSize: 14,
        marginRight: 10,
        color: theme.colors.background,
    },

    viewMenu: {
        zIndex: 0
    },
    menu: {
        position: 'absolute',
        top: -10,
        right: 10,
        width: 70,
        height: 50,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
        borderRadius: 4,

        backgroundColor: theme.colors.first_color,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
    },
    text: {
        marginLeft: 4,
        fontFamily: theme.fonts.medium,
        color: theme.colors.background
    }
})