import { View, Text, StyleSheet, Alert, FlatList} from 'react-native';
import Title from '../components/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/GuessLogItem';

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]); //useState to contain flatlist values

    useEffect(() => {
        if(currentGuess === userVal){
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userVal, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        setGuessRounds(prevGuessRounds => [newRd, ...prevGuessRounds]) //flatlist function call
    }

    const guessRoundsListLength = guessRounds.length;
    
    return(
    
    <View style = {styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText>Higher or lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name='add-outline' size={24} color='black' />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name='remove' size = {24} color = 'black'/>
                    </PrimaryButton>
                </View>
            </View>
        </Card>
            <View style={styles.listContainer}>
                {/* flatlist implementation */}
                <FlatList 
                data={guessRounds} 
                renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />} 
                keyExtractor={(item) => item}/>
        </View>
    </View>
    
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },

    buttonsContainer: { flexDirection: 'row' },

    buttonContainer: {
        flex: 1
    },

    listContainer: {
        flex: 1,
        padding: 16
    }

})