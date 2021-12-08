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
import { createUserWithEmailAndPassword, sendEmailVerification } from '@firebase/auth';



export default function RegisterScreen() {
  // Ref or state management hooks
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState(null)
  const [password, setPassword] = React.useState()
  const [pic, setPic] = React.useState(true)
  const navigation = useNavigation()

  const register = async () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      sendEmailVerification(userCredential.user)
      .then(() => {
        navigation.navigate('VerifyEmail', {name, email, phoneNumber})
      })
      .catch((error) => {
        console.log(error);
      })
    })
    .catch((error) => {
      alert(error)
    });
  }

  return (
    <View style={tailwind("p-6 flex-1")}>
    <KeyboardAvoidingView>
      <Text style={tailwind("text-3xl text-green-600 font-bold text-center p-2 underline rounded-xl")}>Create an account</Text>
      <TouchableOpacity style={tailwind("flex items-center my-2")}>
        {pic ? <Image source={{uri: 'https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png'}}
          style={tailwind("h-28 w-28 rounded-full")}
        /> : <AntDesign name="camera" size={50} color="gray" />}
        <Text style={tailwind("text-green-900 font-bold")}>Add Picture</Text>
      </TouchableOpacity>
      <View style={tailwind("mb-3")}>
        <View style={tailwind("flex flex-row items-center")}>
        <FontAwesome name="user" size={24} color="green" />
        <Text style={tailwind("text-green-900 text-xl font-bold ml-1")}>Name</Text>
        </View>
        <TextInput
          style={tailwind("border-2 border-green-500 rounded-xl p-2")}
          placeholder="Your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
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
      <View style={tailwind("mb-3")}>
      <View style={tailwind("flex flex-row items-center")}>
      <Entypo name="phone" size={24} color="green" />
        <Text style={tailwind("text-green-900 text-xl font-bold ml-1")}>Phone</Text>
        </View>
      <TextInput
        style={tailwind("border-2 border-green-500 rounded-xl p-2")}
        placeholder="+91 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
      />
      </View>
      <TouchableOpacity
      disabled={!phoneNumber}
        style={!phoneNumber ? tailwind("bg-gray-400 p-3 m-5 rounded-xl") :
         tailwind("bg-green-700 p-3 m-5 rounded-xl")}
       onPress={register}
      >
        <Text style={tailwind("text-center text-xl font-bold text-white")}>Sign-Up</Text>
      </TouchableOpacity>
      <Text style={tailwind("text-gray-600 text-center")}>Already have an account <Text style={tailwind("font-bold text-xl text-black underline")}>Login</Text></Text>
    </KeyboardAvoidingView>
    </View>
  );
}
