import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function ToDoList() {
  const [data, setData] = useState([{ name: "Fake", age: "20" }]);
  const [nameAge, setNameAge] = useState({ name: "", age: "" });
  const handleChangeName = (event) => {
    setNameAge({ ...nameAge, name: event });
  };
  const handleChangeAge = (event) => {
    setNameAge({ ...nameAge, age: event });
  };
  const addToDo = () => {
    setData([...data, { name: nameAge.name, age: nameAge.age }]);
    setNameAge({ name: "", age: "" });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          borderColor: "#000000",
          borderWidth: 1,
        }}
        placeholder="Name"
        onChangeText={(e) => handleChangeName(e)}
        id="name"
        value={nameAge.name}
      />
      <TextInput
        style={{
          borderColor: "#000000",
          borderWidth: 1,
        }}
        placeholder="Age"
        onChangeText={(e) => handleChangeAge(e)}
        id="age"
        value={nameAge.age}
      />
      <View style={{ paddingTop: 20 }}>
        <Button title="Add To Do" onPress={() => addToDo()} />
      </View>

      <ScrollView>
        {data.map((item) => (
          <View style={{ borderWidth: 1 }}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
});
