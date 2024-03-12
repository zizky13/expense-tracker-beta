import { View, Text, StyleSheet, Button } from "react-native"
import CustomButton from "../components/CustomButton";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function Home ({navigation}){
    return (
    <>
        {/*=======PERSONAL INFORMATION BOX=======*/ }
        <View style = { styles.personal } >
        {/*=======PUT LEFTBOX INFO BELOW=======*/ }
            <View style = { styles.personalLeft } >
                <Text>Hello, world!</Text>
            </View>
        {/*=======PUT RIGHTBOX INFO BELOW=======*/ }
            <View style = { styles.personalRight } >
                <Text>Another hello</Text>
            </View>
        </View>
        {/*=======END OF PERSONAL BOX=======*/ }

        {/*=======SUMMARY BOX=======*/ }
        <View style={styles.summary}>
            <View style={{ backgroundColor: 'red' }}>
                <Text>Hello, world!</Text>
            </View>
        </View>
        {/*=======END OF SUMMARY BOX=======*/ }

        <View style={styles.footer}>
            <CustomButton onPress={() => navigation.navigate('Recap')}>See Recap</CustomButton>
        </View>
        
    </>
    )
};

export default Home;

const styles = StyleSheet.create({
    personal: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
        flex: 2
    },

    personalLeft: {
        backgroundColor: 'red',
        flex: 2
    },

    personalRight: {
        backgroundColor: 'cyan',
        flex: 3
    },

    summary: {
        flex: 9,
        backgroundColor: 'yellow'
    },

    footer: {
        flex: 1,
    },

    footerInner: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,
        flex: 1
    }
})