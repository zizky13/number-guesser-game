import { View, Text, StyleSheet} from 'react-native';
import Title from '../components/Title';
import { useState } from 'react';
import NumberContainer from '../components/NumberContainer';

function generateRandomBetween (min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if (rndNum == exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({userVal}){
    const initialGuess = generateRandomBetween(1, 100, userVal);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    return(
    
    <View style = {styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
                <Title>Higher or lower?</Title>
            {/* + */}
            {/* - */}
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

})