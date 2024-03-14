import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recap from './screens/Recap';
import Home from './screens/Home';
import StartingScreen from './screens/StartingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style ={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='StartScreen' component={StartingScreen} />
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
