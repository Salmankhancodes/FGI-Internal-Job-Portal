import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "./screens/LoginScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import EmailVerificationScreen from "./screens/EmailVerificationScreen";
import HomeScreen from "./screens/HomeScreen";
import FeedsScreen from "./screens/FeedsScreen";
import { auth } from "./firebase";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="VerifyEmail" component={EmailVerificationScreen} />
        <Stack.Screen name="Feeds" component={FeedsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
