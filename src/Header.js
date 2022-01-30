import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>News App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "silver",
    padding: 15,
    alignItems: "center",
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  text: {
    paddingTop: 40,
  },
});
export default Header;
