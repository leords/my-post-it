import { theme } from './../../theme/index';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        width: '100%',
        height: 110,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        
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
    viewArrow: {
        width: '50%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 50
    },
    viewUser: {
        width: '50%',
        alignItems: 'flex-end',
        justifyContent: 'center',  
        marginTop: 40
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    name: {
        fontFamily: theme.fonts.black,
        fontSize: 14,
        marginRight: 15,
        marginLeft: 5,
        color: theme.colors.background,
    }
})