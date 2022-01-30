import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//CRUD = > Create, Read, update, Delete
export default function ContactsApp() {
  const [contacts, setContacts] = useState([{}]);
  const [contact, setContact] = useState({ name: "", number: "" });
  const [id, setId] = useState(0);
  const handleChangeName = (text) => {
    setContact({ ...contact, name: text });
  };

  const handleChangeNumber = (text) => {
    setContact({ ...contact, number: text });
  };

  const submitContact = () => {
    setContacts([
      { name: contact.name, number: contact.number, id: id },
      ...contacts,
    ]);
    setId(id + 1);
    console.log(contacts);
    setContact({ name: "", number: "" });
  };

  const deleteItem = (id) => {
    console.log(id);
    const newContacts = contacts.filter((contact) => contact.id != id);
    setContacts(newContacts);
  };

  const editItem = (id) => {
    console.log(id);

    const filteredContact = contacts.find((contact) => contact.id == id);
    setContact({ name: filteredContact.name, number: filteredContact.number });
    const newContacts = contacts.filter((contact) => contact.id != id);
    setContacts(newContacts);
  };

  return (
    <View style={{ padding: 60, paddingTop: 120 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Our Contacts App
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          height: 30,
          marginBottom: 20,
          paddingLeft: 5,
        }}
        placeholder="Name"
        onChangeText={(text) => handleChangeName(text)}
        value={contact.name}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          height: 30,
          marginBottom: 20,
          paddingLeft: 5,
        }}
        placeholder="Number"
        onChangeText={(text) => handleChangeNumber(text)}
        value={contact.number}
      />
      <View style={{ backgroundColor: "black" }}>
        <Button title="Add Contact" onPress={() => submitContact()} />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 20,
          marginTop: 50,
        }}
      >
        My Contacts
      </Text>
      {contacts.map((contact) => {
        if (
          contact.name == "" ||
          contact.number == "" ||
          contact.number == undefined
        ) {
          return;
        }
        return (
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              height: 30,
              paddingLeft: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{contact.name}</Text>
            <Text>{contact.number}</Text>
            <TouchableOpacity onPress={() => editItem(contact.id)}>
              <MaterialIcons name="edit" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteItem(contact.id)}>
              <MaterialIcons name="delete" size={20} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
