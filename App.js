import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ImageBackground, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userVal, setUserVal] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/images/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/images/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }
  
  function pickedValHandler(pickedVal){
    setUserVal(pickedVal);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserVal(null);
    setGuessRounds(0);
  }


  let screen = <StartGameScreen onPickVal={pickedValHandler}/>

  if (userVal) {
    screen = <GameScreen userVal={userVal} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userVal){
    screen = <GameOverScreen userVal={userVal} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }


  return (
    <SafeAreaView style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.jpg')} 
      resizeMode="cover"
      style = {styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
      {screen}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    rootScreen:{
    flex: 1,
    backgroundColor: Colors.primary,
    },

    backgroundImage: {
      opacity: 0.40,
    }
});
