import {View, Text, StyleSheet, TextInput, Alert, Pressable, TouchableOpacity} from "react-native"
import CustomButton from "../components/CustomButton";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState} from "react";
import LoginButton from "../components/LoginButton";

export default StartingScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const root = 'admin';
    const pass = '123';

    function pressedHandler (){
        if (username === root && password === pass){
            navigation.navigate('Home')
        } else {
            Alert.alert('Prohibited Login', 'You entered the wrong username or password!', [{ text: "Retry", style: 'cancel' },])
        }
    }
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.titleContainer}>Traxpense</Text>
                <Text style={styles.subTitleContainer}>Wisely track your expense!</Text>
                <View style={styles.loginBox}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={"Username"}
                        onChangeText={(text) => setUsername(text)}/>
                    <TextInput
                        style={styles.inputText}
                        placeholder={"Password"}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <View>
                <LoginButton onPress={pressedHandler}>Start!</LoginButton>
            </View>
            <View style={styles.signUpOuter}>
                <Text style={styles.signUpDialog}>
                    Don't have any account?
                </Text>
                <TouchableOpacity onPress={() => {navigation.navigate('SignUpScreen')}}><Text style={{fontFamily: 'silk-screen-bold', fontSize: 12}}> Sign up here</Text></TouchableOpacity>
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
        fontFamily: 'silk-screen-bold'
    },

    subTitleContainer: {
        fontSize: 14,
        textAlign: 'center',
        color: '#7286D3',
        margin: 8,
        fontFamily: 'silk-screen'
    },

    loginBox: {
        margin: 8,
    },

    inputText: {
        padding: 8,
        borderColor: 'black',
        borderRadius: 24,
        borderWidth: 1,
        marginVertical: 5
    },

    signUpOuter: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 8
    },

    signUpDialog: {
        fontSize: 12,
        fontFamily: 'silk-screen'
    }

})