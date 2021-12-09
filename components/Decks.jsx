import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Touchable } from "../utils";
import { useNavigation } from "@react-navigation/native";
// import { decks } from "../data";
import { getDecks } from "../utils/api";

const IndevidualDeck = () => {
  const navigation = useNavigation();

  const [decks, setDecks] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const decks = await getDecks();
        console.log({ decks });
        setDecks(decks);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={style.Wrapper}>
      <View>
        {/* section to map */}
        {decks.length ? (
          decks.map((deck) => (
            <Touchable
              key={deck.id}
              onPress={() => navigation.navigate("deck", { deckId: deck.id })}
            >
              <View style={style.container}>
                <Text style={style.deck}>{deck.title}</Text>
                <Text style={style.card}> {deck.questions.length} Card </Text>
              </View>
            </Touchable>
          ))
        ) : (
          <Text
            style={{
              textAlign: "center",
              paddingVertical: 20,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            No Decks
          </Text>
        )}
      </View>
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
