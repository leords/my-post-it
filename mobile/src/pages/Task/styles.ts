import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    containerCard: {
        width: 315,
        height: 450,
        alignItems: 'center',
        backgroundColor: theme.colors.first_color,
        borderRadius: 10,
        marginTop: 85, 
        paddingHorizontal: 32
    },
    titleProject: {
        fontFamily: theme.fonts.medium,
        fontSize: 18,
        color: theme.colors.background,
        marginVertical: 35,
        borderBottomWidth: 1,
        borderColor: theme.colors.background
    },
    titleDescription: {
        fontFamily: theme.fonts.medium,
        fontSize: 13,
        color: theme.colors.background,
        marginBottom: 4
    },
    inputDescription: {
        width: 250,
        height: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.background,
        borderRadius: 4
    },
    description: {
        fontFamily: theme.fonts.light,
        fontSize: 13,
        color: theme.colors.first_color
    },
    viewTitle: {
        width: 250,
        height: 70,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    project: {
        fontFamily: theme.fonts.medium,
        color: theme.colors.background,
        marginTop: 25
    },
    subTitle: {
        fontFamily: theme.fonts.light,
        color: theme.colors.background
    },
    button: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    viewTrash: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleTrash: {
        fontFamily: theme.fonts.medium,
        fontSize: 12,
        color: theme.colors.background,
        marginLeft: 5
    },
})