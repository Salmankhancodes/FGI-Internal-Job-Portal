import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import FeedsScreen from "./FeedsScreen";
import ProfileScreen from "./ProfileScreen";

const HomeScreen = () => {
  const navigation = useNavigation();

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "#adff2f",
        tabBarInactiveBackgroundColor: "white",
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="feed" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
