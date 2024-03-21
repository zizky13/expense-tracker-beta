import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"
import CustomButton from "../components/CustomButton";


function Home ({navigation}){
    return (
    <>
        {/*=======PERSONAL INFORMATION BOX=======*/ }
        <View style = { styles.personal } >
        {/*=======PUT LEFTBOX INFO BELOW=======*/ }
        {/*    TODO: connect personalCard to signUp screen dan buat data holder di signUp that also passed to here*/}
            <TouchableOpacity
                style = { styles.personalLeft }
                onPress={() => {navigation.navigate('SignUpScreen')}}
                >
                <View style={styles.imageContainer}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={require('../assets/image/pepe.png')}
                            style={styles.imageSize}/>
                    </View>
                    <Text style={styles.headingText}>Jeffrey</Text>
                </View>

                <View>
                    <Text style={styles.innerText}>sisa saldo:</Text>
                    <Text style={styles.innerText}>rp. xx.xxx.xxx.xxx</Text>
                </View>

            </TouchableOpacity>
        {/*=======END OF LEFTBOX=======*/ }

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
        padding: 8,
        borderRadius: 24,
        backgroundColor: '#7286D3',
        flex: 3
    },

    personalRight: {
        backgroundColor: 'cyan',
        flex: 4
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
    },

    imageSize: {
        height: 60,
        width:  60,
    },

    imageContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },

    imageWrapper: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 24,
        marginHorizontal: 5,
    },

    personalInfo: {
        flex:1,
        marginVertical: 22,
        padding: 8,
    },

    headingText: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'silk-screen-bold',
        marginVertical: 4,
    },

    innerText: {
        fontSize: 11,
        color: 'white',
        fontFamily: 'silk-screen',
        textAlign: 'center'
    }
})