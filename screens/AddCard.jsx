import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { addCard, getDeck, getDecks } from "../utils/api";

const AddCard = ({ route }) => {
  const navigation = useNavigation();
  const [deck, setDeck] = useState({});
  const [formData, setFormData] = useState({ question: "", answer: "" });

  const setField = (field, value) => {
    setFormData((currentState) => ({
      ...currentState,
      [field]: value,
    }));
  };

  console.log(route);
  const { deckId } = route.params;
  console.log({ deckId });

  useEffect(() => {
    (async () => {
      try {
        const deckToShow = await getDeck(deckId);
        console.log({ addCard: deckToShow });
        setDeck(deckToShow);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const showView = Object.keys(deck) !== 0;

  const handleAddCard = async () => {
    try {
      await addCard(deck, formData);
      navigation.navigate("deck", { deckId: deck.id });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showView && (
        <View>
          <View style={style.Wrapper}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign
                onPress={navigation.goBack}
                color="white"
                size={24}
                name="left"
              />
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  marginLeft: 10,
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
                {deck.title}
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
              <TextInput
                style={style.input}
                placeholder="Question"
                value={formData.question}
                onChangeText={(val) => setField("question", val)}
              />
            </View>

            <View>
              <TextInput
                style={style.input}
                placeholder="Answer"
                value={formData.answer}
                onChangeText={(val) => setField("answer", val)}
              />
            </View>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <TouchableOpacity style={style.button} onPress={handleAddCard}>
              <Text style={{ textAlign: "center", fontSize: 24 }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
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
