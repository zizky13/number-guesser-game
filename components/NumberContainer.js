import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.container,
        borderWidth: 4,
        borderColor: Colors.primary,
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
})