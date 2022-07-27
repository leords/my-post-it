import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
       height: 450,
       alignItems: 'center',
       justifyContent: 'center',
    },
    img: {
        width: 280,
        height: 200
    },
    text: {
        fontFamily: theme.fonts.medium,
        fontSize: 16,
        color: theme.colors.second_color,
        textAlign: "center",
        padding: 40
    }
})