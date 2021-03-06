import { sendEmailVerification, verifyBeforeUpdateEmail } from "@firebase/auth";
import { addDoc, collection } from "@firebase/firestore";
import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { auth, db } from "../firebase";

const EmailVerificationScreen = ({ route }) => {
  const navigation = useNavigation();
  const [message, setMessage] = useState("");
  const { name, email, phoneNumber } = route.params;
  const usersRef = collection(db, "users");

  useEffect(() => {
    const checkIfVerified = setInterval(() => {
      auth.currentUser.reload().then((ok) => {
        if (auth.currentUser.emailVerified) {
          addDoc(usersRef, { name, email, phoneNumber });
          navigation.navigate("Home");
          clearInterval(checkIfVerified);
        }
      });
    }, 1000);
  });

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setMessage("Email Sent");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={tw`m-auto`}>
      <Text style={tw`font-bold text-green-600 text-xl mb-10`}>
        {message ? message : "Email Sent Verify your email"}
      </Text>
      <Text style={tw`font-bold text-yellow-600 text-xl mb-10`}>
        Didn't find the email?
      </Text>
      <Button title="Resend Email" onPress={verifyEmail} />
    </View>
  );
};

export default EmailVerificationScreen;

const styles = StyleSheet.create({});
