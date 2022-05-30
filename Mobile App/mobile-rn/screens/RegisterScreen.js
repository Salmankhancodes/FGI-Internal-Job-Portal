import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import {
  AntDesign,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "@firebase/auth";
import tw from "tailwind-react-native-classnames";

export default function RegisterScreen() {
  // Ref or state management hooks
  const [phoneNumber, setPhoneNumber] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const register = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        sendEmailVerification(userCredential.user)
          .then(() => {
            navigation.navigate("VerifyEmail", { name, email, phoneNumber });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f9a825" }}>
      <KeyboardAvoidingView enabled behavior="padding">
        <Text
          style={tw`text-3xl text-green-600 font-bold text-center p-2 underline rounded-xl`}
        >
          Sign-Up
        </Text>
        <View style={tw`mb-3`}>
          <View style={tw`flex flex-row items-center`}>
            <FontAwesome name="user" size={24} color="green" />
            <Text style={tw`text-green-900 text-xl font-bold ml-1`}>Name</Text>
          </View>
          <TextInput
            style={tw`border-2 border-green-500 rounded-xl p-2`}
            placeholder="Your name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={tw`mb-3`}>
          <View style={tw`flex flex-row items-center`}>
            <MaterialIcons name="email" size={24} color="green" />
            <Text style={tw`text-green-900 text-xl font-bold ml-1`}>Email</Text>
          </View>
          <TextInput
            placeholder="Your email"
            style={tw`border-2 border-green-500 rounded-xl p-2`}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={tw`mb-3`}>
          <View style={tw`flex flex-row items-center`}>
            <AntDesign name="eye" size={24} color="green" />
            <Text style={tw`text-green-900 text-xl font-bold ml-1`}>
              Password
            </Text>
          </View>
          <TextInput
            placeholder="Your password"
            style={tw`border-2 border-green-500 rounded-xl p-2`}
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={tw`mb-3`}>
          <View style={tw`flex flex-row items-center`}>
            <Entypo name="phone" size={24} color="green" />
            <Text style={tw`text-green-900 text-xl font-bold ml-1`}>Phone</Text>
          </View>
          <TextInput
            style={tw`border-2 border-green-500 rounded-xl p-2`}
            placeholder="+91 999 999 9999"
            autoFocus
            autoCompleteType="tel"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
        </View>
        <TouchableOpacity
          disabled={!phoneNumber}
          style={
            !phoneNumber
              ? tw`bg-gray-400 p-3 m-4 rounded-xl`
              : tw`bg-green-700 p-3 m-4 rounded-xl`
          }
          onPress={register}
        >
          <Text style={tw`text-center text-xl font-bold text-white`}>
            Sign-Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={tw`text-gray-600 text-center`}>
            Already have an account?{" "}
            <Text style={tw`font-bold text-xl text-black underline`}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
