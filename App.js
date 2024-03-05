import { StyleSheet, ImageBackground, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.jpg')} 
      resizeMode="cover"
      style = {styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    rootScreen:{
    flex: 1,
    backgroundColor: "#703e3b",
    },

    backgroundImage: {
      opacity: 0.40,
    }
});
