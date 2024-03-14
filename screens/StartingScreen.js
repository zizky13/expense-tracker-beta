import { View, Text, StyleSheet } from "react-native"
import CustomButton from "../components/CustomButton";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default StartingScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.titleContainer}>Traxpense</Text>
                <Text style={styles.subTitleContainer}>Wisely track your expense!</Text>
            </View>
            <View>
            <CustomButton onPress={() => navigation.navigate('Home')}>Start!</CustomButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF2F2',
        flex: 1,
        margin: 8,
        padding: 8,
        justifyContent: 'center'
    },

    titleContainer: {
        fontSize: 36,
        textAlign: 'center',
        color: '#7286D3',
    },

    subTitleContainer: {
        fontSize: 14,
        textAlign: 'center',
        color: '#7286D3',
        margin: 8
    }
})