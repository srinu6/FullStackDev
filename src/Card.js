import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image
          source={{
            uri:
              "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.titleText}>Cricket News</Text>
        <MaterialIcons name="favorite-border" size="24" />
      </View>
      <View style={styles.desc}>
        <Text numberOfLines={1}>
          sdf erw fds rtwe sdf weqq dfgs eyr asfd qwer sdfa ertw sdf{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
  },
  text: {
    marginTop: -8,
    fontSize: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  image: {
    height: 180,
    width: 300,
  },
  desc: {
    paddingTop: 5,
  },
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Card;
