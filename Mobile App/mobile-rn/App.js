import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './Redux/store';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen'
import EmailVerificationScreen from './screens/EmailVerificationScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Welcome" component={WelcomeScreen} />
       <Stack.Screen name="Register" component={RegisterScreen} />
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="VerifyEmail" component={EmailVerificationScreen} />
       <Stack.Screen name="Home" component={HomeScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}
