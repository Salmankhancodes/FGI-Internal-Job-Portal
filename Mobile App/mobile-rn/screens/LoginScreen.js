import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import tw from "tailwind-react-native-classnames";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "@firebase/auth";

export default function LoginScreen() {
  // Ref or state management hooks
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState();
  const navigation = useNavigation();

  const login = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f9a825" }}>
      <KeyboardAvoidingView>
        <Text
          style={tw`text-3xl text-green-600 font-bold text-center p-2 underline rounded-xl`}
        >
          Sign-In
        </Text>
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
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          disabled={!email && !password}
          style={
            !email
              ? tw`bg-gray-400 p-3 m-5 rounded-xl`
              : tw`bg-green-700 p-3 m-5 rounded-xl`
          }
          onPress={login}
        >
          <Text style={tw`text-center text-xl font-bold text-white`}>
            Sign-In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={tw`text-gray-600 text-center`}>
            Don't have an account?{" "}
            <Text style={tw`font-bold text-xl text-black underline`}>
              Register
            </Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
