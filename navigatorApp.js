import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "./src/Header";
import Card from "./src/Card";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {},
});
