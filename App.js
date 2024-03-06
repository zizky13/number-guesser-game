import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ImageBackground, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const [userVal, setUserVal] = useState();

  function pickedValHandler(pickedVal){
    setUserVal(pickedVal);
  }

  let screen = <StartGameScreen onPickVal={pickedValHandler}/>

  if (userVal) {
    screen = <GameScreen />
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
