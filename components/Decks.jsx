import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
// import { useNavigate } from "react-router-native";
import { Touchable } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { decks } from "../data";

const IndevidualDeck = () => {
  const navigation = useNavigation();

  return (
    <View style={style.Wrapper}>
      <View>
        {/* section to map */}
        {decks.map((deck) => (
          <Touchable
            key={deck.id}
            onPress={() => navigation.navigate("deck", { deckId: deck.id })}
          >
            <View style={style.container}>
              <Text style={style.deck}>{deck.title}</Text>
              <Text style={style.card}> {deck.questions.length} Card </Text>
            </View>
          </Touchable>
        ))}
        {/* <View style={style.container}>
          <Text style={style.deck}> Deck 1</Text>
          <Text style={style.card}>0 Card </Text>
        </View>
        <Touchable onPress={() => navigation.navigate("deck")}>
          <View style={style.container}>
            <Text style={style.deck}> Deck 2</Text>
            <Text style={style.card}> 0 Card </Text>
          </View>
        </Touchable> */}
      </View>

      {/* <View style={style.iconStyle}>
        <View style={style.deckIcon}>
          <MaterialIcons name="deck" color="pink" size={60} />
          <Text style={style.text}>Deck</Text>
        </View>
        <Touchable onPress={() => navigation.navigate("create-deck")}>
          <View style={style.addIcon}>
            <MaterialIcons name="add-box" color="pink" size={60} />
            <Text style={style.text}>Add Decks</Text>
          </View>
        </Touchable>
      </View> */}
    </View>
  );
};

export default IndevidualDeck;

const style = StyleSheet.create({
  Wrapper: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    height: "90%",
  },
  container: {
    // textAlign: "center",
    display: "flex",
    alignItems: "center",
    borderBottomColor: "green",
    borderBottomWidth: 1,

    paddingTop: 40,
    marginBottom: 0,
  },

  deck: {
    color: "green",
    textTransform: "capitalize",
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
    paddingVertical: 10,
    paddingHorizontal: 30,
    // marginRight: 50,
  },

  deckIcon: {},
  addIcon: {
    // marginRight: 30,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "900",
    fontSize: 15,
  },
});
