import React from "react";
import PropTypes from "prop-types";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { decks } from "../data";

const Deck = ({ route }) => {
  // console.log({ props });
  console.log(route);
  const { deckId } = route.params;
  console.log({ deckId });

  const deckToShow = decks.find((deck) => deck.id === deckId);

  const navigation = useNavigation();

  const addCard = () => {
    return setCard(card + 1);
  };
  console.log(addCard);
  return (
    <View>
      <View style={style.Wrapper}>
        <AntDesign
          onPress={() => navigation.goBack()}
          color="white"
          size={24}
          name="left"
        />
        <Text
          style={{
            fontSize: 20,
            color: "white",
            marginRight: 50,
            fontWeight: "600",
            textTransform: "capitalize",
          }}
        >
          {deckToShow.title}
        </Text>
        <View>
          <Text style={{ flex: 1 }}></Text>
        </View>
      </View>
      <View style={style.container}>
        <View>
          <Text
            style={{
              fontWeight: "900",
              fontSize: 30,
              textTransform: "capitalize",
            }}
          >
            {deckToShow.title}
          </Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            {deckToShow.questions.length} CARD
          </Text>
        </View>
        <View style={style.container}>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              navigation.navigate("add-card");
            }}
          >
            <Text style={{ fontSize: 25 }}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button1}>
            <Text
              style={{ fontSize: 25, color: "white" }}
              onPress={() => navigation.navigate("quiz")}
            >
              Start Quiz
            </Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 20, fontSize: 20, color: "red" }}>
            Delete Deck
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Deck;

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
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 24,
    borderWidth: 1,
    borderBottomColor: "black",
  },
  button1: {
    backgroundColor: "black",
    fontWeight: "300",
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 24,
  },
});
