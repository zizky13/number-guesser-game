import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Card ({children}){
    return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginTop: 36,
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.container,
        borderRadius: 24,
        elevation: 15, //this is android only property for shadow
        shadowColor: 'black', //this is iOS only prop
        shadowOffset: { width: 0, height: 2 }, //this is iOS only prop
        shadowRadius: 6, //this is iOS only prop
        shadowOpacity: 1 //this is iOS only prop
    },
})