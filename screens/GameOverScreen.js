import { Alert, Image, ImageBackground, View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen ({roundsNumber, userVal, onStartNewGame}) {
    Alert.alert('You won!!', 'You guessed the right number!', [{ text: "yay", style: 'cancel' },])
    return(
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image} 
                source={require('../assets/images/gameover.jpg')}
                />
            </View>
            <Text style={styles.summaryText}>Your phone needed 
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number {' '} 
            <Text style={styles.highlight}>{userVal}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    ) 
    
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.container,
        overflow: 'hidden',
        margin: 36
    },

    image: {
        width: '100%',
        height: '100%',
    },
    
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },

    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.container
    }    
});