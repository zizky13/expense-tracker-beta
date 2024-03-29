import { View, Text, Pressable, StyleSheet } from 'react-native';

function CustomButton({children, onPress}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: 'white' }}
                style={styles.buttonInnerContainer}
            >
                <Text>{children}</Text>
            </Pressable>
        </View>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        flexDirection: 'column',
        borderRadius: 24,
        margin: 4,
        overflow: 'hidden'
    },
    
    buttonInnerContainer: {
        backgroundColor: 'cyan',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 1,
    },

    buttonText: {
        color: 'black',
        textAlign: 'center'
    },

    pressed: {
        opacity: 0.75
    }
})