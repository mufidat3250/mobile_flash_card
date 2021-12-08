import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const AddCard = () => {
  return (
    <View>
      <View style={style.Wrapper}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign color="white" size={24} name="left" />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginLeft: 10,
              fontWeight: "600",
            }}
          >
            Deck 1
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            marginRight: 50,
            fontWeight: "600",
          }}
        >
          Add Card
        </Text>
        <View>
          <Text style={{ flex: 1 }}></Text>
        </View>
      </View>
      <View style={style.textInput}>
        <View>
          <TextInput style={style.input} />
        </View>

        <View>
          <TextInput style={style.input} />
        </View>
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity style={style.button}>
          <Text style={{ textAlign: "center", fontSize: 24 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCard;

const style = StyleSheet.create({
  container: {
    marginTop: 120,
    display: "flex",
    flexDirection: "column",
    borderBottomColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Wrapper: {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    fontWeight: "300",
    marginTop: 24,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
  },

  input: {
    marginTop: 40,
    backgroundColor: "lightgray",
    padding: 20,
    borderRadius: 8,
  },

  textInput: {
    paddingHorizontal: 20,
  },
});
