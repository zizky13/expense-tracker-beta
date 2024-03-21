import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recap from './screens/Recap';
import Home from './screens/Home';
import StartingScreen from './screens/StartingScreen';
import SignUpScreen from './screens/SignUpScreen';
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'madimi-one': require('./assets/fonts/MadimiOne-Regular.ttf'),
    'saira-variable': require('./assets/fonts/Saira-VariableFont_wdth,wght.ttf'),
    'silk-screen': require('./assets/fonts/Silkscreen-Regular.ttf'),
    'silk-screen-bold': require('./assets/fonts/Silkscreen-Bold.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <SafeAreaView style ={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='StartScreen' component={StartingScreen} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Recap' component={Recap} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },

  
});
