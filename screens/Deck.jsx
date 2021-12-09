import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { deleteDeck, getDeck, getDecks } from "../utils/api";
import { Touchable } from "../utils";
// import { decks } from "../data";

const Deck = ({ route }) => {
  // console.log({ props });
  const [deck, setDeck] = useState({});
  console.log(route);
  const { deckId } = route.params;
  console.log({ deckId });

  useEffect(() => {
    (async () => {
      try {
        const deckToShow = await getDeck(deckId);

        setDeck(deckToShow);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // const deckToShow = decks.find((deck) => deck.id === deckId);
  const showDeck = Object.keys(deck).length !== 0;

  const navigation = useNavigation();

  const addCard = () => {
    return setCard(card + 1);
  };

  const handleDeckDelete = async () => {
    try {
      await deleteDeck(deck.id);
      navigation.navigate("home-screen");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(addCard);
  return (
    <>
      {showDeck && (
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
              {deck.title}
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
                {deck.title}
              </Text>
              <Text style={{ fontSize: 20, textAlign: "center" }}>
                {deck.questions.length} CARD
              </Text>
            </View>
            <View style={style.container}>
              <TouchableOpacity
                style={style.button}
                onPress={() => {
                  navigation.navigate("add-card", { deckId: deck.id });
                }}
              >
                <Text style={{ fontSize: 25 }}>Add Card</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.button1}>
                <Text
                  style={{ fontSize: 25, color: "white" }}
                  onPress={() =>
                    navigation.navigate("quiz", { deckId: deck.id })
                  }
                >
                  Start Quiz
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeckDelete}>
                <Text style={{ marginTop: 20, fontSize: 20, color: "red" }}>
                  Delete Deck
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
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
