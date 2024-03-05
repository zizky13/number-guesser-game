import {View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({children, onPress}){
    return (
    <View style={styles.buttonOuterContainer}>
        <Pressable 
        onPress={onPress} 
        android_ripple={{ color: '##a7dbd8' }}
        style ={(pressed) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create ({
    buttonOuterContainer: {
        flexDirection: 'column',
        borderRadius: 24,
        margin: 4,
        overflow: 'hidden'
        
    },
    buttonInnerContainer: {
        backgroundColor: '#c84648',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 1,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center'
    },

    pressed: {
        opacity: 0.75
    }
})