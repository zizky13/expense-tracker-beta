import {View, Text, StyleSheet} from 'react-native';

function Recap (){
    return (
        <View style={styles.root}>
            <Text style={styles.text}>YOOOOOO!!!</Text>
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