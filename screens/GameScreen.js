import { View, Text, StyleSheet, Alert} from 'react-native';
import Title from '../components/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

function generateRandomBetween (min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if (rndNum == exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userVal, onGameOver}){
    const initialGuess = generateRandomBetween(1, 100, userVal);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === userVal){
            onGameOver();
        }
    }, [currentGuess, userVal, onGameOver])

    function nextGuessHandler (direction) {
        if ((direction === 'lower' && currentGuess < userVal) || (direction === 'greater' && currentGuess > userVal)){
            Alert.alert('Heck you wanna bug me???', 'You know that this is wrong...', [{text: "bruh", style: 'cancel'},])
            return;
        }
        if (direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRd = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRd);
    }
    
    return(
    
    <View style = {styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Title>Higher or lower?</Title>
            <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
            </View>
        </View>
        {/* <View>LOG ROUNDS</View> */}
    </View>
    
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },

    buttonContainer: {

    }

})