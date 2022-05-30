import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, Text, View, Button, TouchableOpacity } from "react-native";
import { auth, db } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { signOut } from "@firebase/auth";
import tw from "tailwind-react-native-classnames";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [userDetails, setUserDetails] = useState({});

  const navigation = useNavigation();

  const getUser = async (user) => {
    const q = query(collection(db, "users"), where("email", "==", user.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserDetails(doc.data());
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "green",
      },
      headerTitle: () => (
        <Text style={tw`text-white font-bold text-3xl`}>
          FGI Internal Job Portal
        </Text>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails(user);
        getUser(user);
      } else {
        navigation.navigate("Welcome");
      }
    });
  }, [auth]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Welcome");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={tw`flex-1 bg-yellow-500`}>
      <View style={tw`m-auto border-green-500 border-2 p-3 rounded-xl`}>
        <Text style={tw`text-green-700`}>
          <Text style={tw`font-bold`}>Email:</Text> {userDetails.email}
        </Text>
        <Text style={tw`text-green-700`}>
          <Text style={tw`font-bold`}>Name:</Text> {userDetails.name}
        </Text>
        <Text style={tw`text-green-700`}>
          <Text style={tw`font-bold`}>Phone:</Text> {userDetails.phoneNumber}
        </Text>
        <TouchableOpacity
          onPress={() =>
            signOut(auth).then(() => {
              navigation.navigate("Welcome");
            })
          }
        >
          <View
            style={tw`p-3 bg-green-500 rounded-xl mt-10 flex flex-row justify-center items-center`}
          >
            <MaterialCommunityIcons name="logout" size={24} color="white" />
            <Text style={tw`text-white font-bold text-xl`}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
