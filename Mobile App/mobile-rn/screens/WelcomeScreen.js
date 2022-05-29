import { useNavigation } from "@react-navigation/core";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { auth } from "../firebase";

const WelcomeScreeen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
  }, [auth, navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: "#adff2f" }}>
      <Image
        style={tw`w-28 h-28 mx-auto rounded-xl mt-10`}
        source={{
          uri: "https://lh3.googleusercontent.com/AR1Csz-q3pnmlPDxGml0tTj6nE7I0cfncbUvCXE_WTvAlC8AG2OJ5AQXxgAsc2QjwcM=s200",
        }}
      />
      <Text style={tw`text-yellow-500 text-3xl font-bold text-center mt-10`}>
        FGI Internal Job Portal
      </Text>
      <Text style={tw`text-green-600 font-bold text-xl text-center mb-10`}>
        Learn . Assimilate . Transcend
      </Text>
      <Text style={tw`text-gray-500 font-bold text-center text-lg m-5`}>
        Register now to browse & apply thousands of jobs based on your
        preferences
      </Text>
      <View style={tw`mt-16 p-4`}>
        <Text style={tw`text-gray-500 font-bold text-lg`}>New here?</Text>
        <TouchableOpacity
          style={tw`p-3 bg-yellow-500 m-3 rounded-xl`}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={tw`text-white font-bold text-center text-xl`}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={tw`text-gray-500 font-bold text-lg`}>
          Already have an account?
        </Text>
        <TouchableOpacity
          style={tw`p-3 bg-yellow-500 m-3 rounded-xl`}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={tw`text-white font-bold text-center text-xl`}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreeen;

const styles = StyleSheet.create({});
