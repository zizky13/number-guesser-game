import { Text , StyleSheet} from 'react-native';

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff3db',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff3db',
        borderRadius: 24,
        padding: 12
    }
})