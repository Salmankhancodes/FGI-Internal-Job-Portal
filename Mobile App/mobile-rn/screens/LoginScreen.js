import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { app, auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import tailwind from 'tailwind-rn';
import { AntDesign, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons'; 
import { signInWithEmailAndPassword } from '@firebase/auth';



export default function LoginScreen() {
  // Ref or state management hooks
  const [email, setEmail] = React.useState(null)
  const [password, setPassword] = React.useState()
  const [pic, setPic] = React.useState(true)
  const navigation = useNavigation()

  const login = async () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigation.navigate('Home')
    })
    .catch((error) => {
      alert(error)
    });
  }

  return (
    <View style={tailwind("p-6 flex-1")}>
    <KeyboardAvoidingView>
      <Text style={tailwind("text-3xl text-green-600 font-bold text-center p-2 underline rounded-xl")}>Sign In</Text>
      <View style={tailwind("mb-3")}>
      <View style={tailwind("flex flex-row items-center")}>
      <MaterialIcons name="email" size={24} color="green" />
        <Text style={tailwind("text-green-900 text-xl font-bold ml-1")}>Email</Text>
        </View>
        <TextInput
          placeholder="Your email"
          style={tailwind("border-2 border-green-500 rounded-xl p-2")}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={tailwind("mb-3")}>
      <View style={tailwind("flex flex-row items-center")}>
      <AntDesign name="eye" size={24} color="green" />
        <Text style={tailwind("text-green-900 text-xl font-bold ml-1")}>Password</Text>
        </View>
        <TextInput
          placeholder="Your password"
          style={tailwind("border-2 border-green-500 rounded-xl p-2")}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
      disabled={!email}
        style={!email ? tailwind("bg-gray-400 p-3 m-5 rounded-xl") :
         tailwind("bg-green-700 p-3 m-5 rounded-xl")}
       onPress={login}
      >
        <Text style={tailwind("text-center text-xl font-bold text-white")}>Sign-In</Text>
      </TouchableOpacity>
      <Text style={tailwind("text-gray-600 text-center")}>Don't have an account?<Text style={tailwind("font-bold text-xl text-black underline")}>Register</Text></Text>
    </KeyboardAvoidingView>
    </View>
  );
}
