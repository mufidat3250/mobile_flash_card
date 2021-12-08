import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
// import { useNavigate } from "react-router";

const CreateDeck = () => {
  //   const navigate = useNavigate();
  return (
    <View style={style.Wrapper}>
      <View>
        {/* section to map */}
        <View style={{ marginTop: 50 }}>
          <Text style={{ textAlign: "center", fontSize: 35 }}>
            What is the title of your new Deck?
          </Text>
        </View>

        <View style={{ marginTop: 60 }}>
          <TextInput
            style={{
              backgroundColor: "red",
              padding: 10,
              borderRadius: 20,
              marginLeft: 20,
              marginRight: 20,
              textAlign: "center",
              color: "white",
              fontSize: 20,
            }}
          />
        </View>

        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              textAlign: "center",
              backgroundColor: "green",
              padding: 20,
              marginTop: 100,
              marginLeft: 50,
              marginRight: 50,
              borderRadius: 20,
              marginBottom: 30,
              color: "white",
              fontSize: 20,
            }}
          >
            Create Deck
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateDeck;

const style = StyleSheet.create({
  Wrapper: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    flex: 1,
  },
  container: {},

  deck: {
    color: "green",
    fontSize: 50,
    fontWeight: "900",
  },
  card: {
    color: "red",
    fontSize: 20,
    marginBottom: 10,
  },

  iconStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "blue",
    padding: 10,
    // marginRight: 50,
  },

  deckIcon: {
    marginLeft: 30,
  },
  addIcon: {
    marginRight: 30,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "900",
    fontSize: 15,
  },
});
