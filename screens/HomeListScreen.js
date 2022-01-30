import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ToDoList() {
  const [data, setData] = useState([{}]);
  const [nameAge, setNameAge] = useState({});
  const [id, setId] = useState(0);
  const handleChangeName = (event) => {
    setNameAge({ ...nameAge, name: event });
  };
  const handleChangeAge = (event) => {
    setNameAge({ ...nameAge, age: event });
  };
  const addToDo = () => {
    setId(id + 1);
    setData([{ name: nameAge.name, age: nameAge.age, id: id }, ...data]);
    setNameAge({ name: "", age: "" });
  };

  const removeItem = (id) => {
    console.log(id);
    const newData = data.filter((item) => item.id != id);
    setData(newData);
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 30,
          marginTop: 20,
        }}
      >
        To Do List App
      </Text>
      <TextInput
        style={{
          borderColor: "#000000",
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 5,
          height: 30,
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
          paddingLeft: 5,
          height: 30,
        }}
        placeholder="Age"
        onChangeText={(e) => handleChangeAge(e)}
        id="age"
        value={nameAge.age}
      />
      <View style={{ marginTop: 20, backgroundColor: "black" }}>
        <Button title="Add To Do" onPress={() => addToDo()} />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        List Items
      </Text>
      <ScrollView>
        {Object.keys(data).length !== 1 &&
          data.map((item) => {
            if ((item.name == "" && item.age == "") || item.name == undefined) {
              console.log("zero");
              console.log(data);

              return null;
            }
            return (
              <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 5,
                }}
              >
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
                <TouchableOpacity
                  onPress={() => {
                    removeItem(item.id);
                  }}
                >
                  <MaterialIcons name="delete" size={24} />
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    paddingTop: 120,
  },
});
