import { Alert } from "react-native";

function GameOverScreen () {
    return Alert.alert('You won!!', 'You guessed the right number!', [{ text: "yay", style: 'cancel' },])
}

export default GameOverScreen;