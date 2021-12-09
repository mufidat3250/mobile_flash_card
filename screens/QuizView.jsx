import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import QuestionView from "../components/QuestionView";

import { getDeck } from "../utils/api";

const QuizView = ({ route }) => {
  const navigation = useNavigation();
  const [deck, setDeck] = useState({});

  console.log({ route });
  const { deckId } = route.params;
  useEffect(() => {
    (async () => {
      try {
        const deckTOshow = await getDeck(deckId);

        setDeck(deckTOshow);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log({ deck });
  const showView = Object.keys(deck).length !== 0;
  return (
    <>
      {showView && (
        <View style={style.container}>
          <View style={style.Wrapper}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign color="white" size={24} name="left" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  marginLeft: 10,
                  fontWeight: "600",
                }}
              >
                quiz
              </Text>
            </View>
          </View>
          {deck.questions.length !== 0 ? (
            <QuestionView deck={deck} navigation={navigation} />
          ) : (
            <View>
              <Text
                style={{
                  fontSize: 24,
                  maxWidth: 360,
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                  marginTop: 150,
                }}
              >
                Sorry you can not take a quize because there is no card in the
                deck
              </Text>
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default QuizView;

const style = StyleSheet.create({
  container: {
    display: "flex",
    // justifyContent: "spac"
  },
  Wrapper: {
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    flex: 1,
    height: 100,
  },
});
