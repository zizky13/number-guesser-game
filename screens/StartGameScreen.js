import {useState} from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors"
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

function StartGameScreen({onPickVal}) {
    const [enteredVal, setEnteredVal] = useState('');

    function valInputHandler(enteredVal){
        setEnteredVal(enteredVal);
    }

    function resetInput(){
        setEnteredVal('');
    }

    function confirmInputHandler(){
        const chosenVal = parseInt(enteredVal);

        if (isNaN(chosenVal) || chosenVal <= 0 || chosenVal > 99){
            Alert.alert(
            'Invalid number!', 
            'Number has to be a number between 1 and 99',
            [{text: 'Got it', 
            style:'destructive', 
            onPress: resetInput}]);
            return;
        }

        onPickVal(chosenVal);
    }


    return(
    <View style={styles.rootContainer}>
        <Title>Guess My Number!</Title>
        <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput 
            style={styles.numberInput} 
            maxLength={2} // set maximum length of elemen can be inserted to textfield
            keyboardType="number-pad" //set the keyboard to specific type (number-pad only shows number in input screen later)
            autoCapitalize="none" //set autocapitalize off
            autoCorrect={false} //set autocorrect off for keyboard input
            onChangeText={valInputHandler}
            value={enteredVal}
            /> 
            <View style={styles.buttonsContainer}>
                <View style={{flex: 2}}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
                <View style={{flex: 1}}>
                    <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
                </View>
            </View>
        </Card>
    </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1 ,
        marginTop:100,
        alignItems: 'center'
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.button,
        borderBottomWidth: 2,
        color: Colors.button,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    buttonsContainer: {
        flexDirection: 'row'
    }
});