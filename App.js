import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import LoginScreen from './screens/LoginScreen';
import DataScreen from './screens/DataScreen';
import TabsNavigation from './screens/TabsNavigation';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="Visualisation" options={{headerShown: false}} component={TabsNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}


