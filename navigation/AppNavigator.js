import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import AboutScreen from "../screens/AboutScreen";
import AddHomeScreen from "../screens/AddHomeScreen";
import HomeDetails from "../screens/HomeDetails";
import HomeListScreen from "../screens/HomeListScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function stackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeList"
        component={HomeListScreen}
        options={{ title: "HomeHunt" }}
      />
      <Stack.Screen name="AboutHome" component={AboutScreen} />
      <Stack.Screen name="HomeDetails" component={HomeDetails} />
    </Stack.Navigator>
  );
}

function AboutStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name == "Home") {
              iconName = "home";
            } else if (route.name == "About") {
              iconName = "info";
            }
            return <MaterialIcons name={iconName} size={24} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeListScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
