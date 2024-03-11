import { Text, StyleSheet } from "react-native";

function InstructionText({children, style}){
    // style on the right will overwrite the left one if a style is passed from parents
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'open-sans'
    },
});