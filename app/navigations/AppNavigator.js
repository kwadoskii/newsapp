import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Home from "../screens/HomeScreen";
import News from "../screens/NewsScreen";
import Location from "../screens/LocationScreen";
import Profile from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "#d4d4d4",
        showLabel: false,
        style: {
          backgroundColor: "#fff",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size * 1.19} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="newsletter" size={size * 1.19} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="location-on" size={size * 1.19} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size * 1.19} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
