import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

function Recap ({navigation}){
    return (
        <View style={styles.root}>
            <Text style={styles.text}>YOOOOOO!!!</Text>
            <View>
                <CustomButton onPress={() => navigation.navigate('Home')}>Go home!</CustomButton>
            </View>
        </View>
    )
}

export default Recap;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'read'
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
})