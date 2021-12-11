import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const QuizResult = ({ route }) => {
  const navigation = useNavigation();

  const { deckId, score, questionsLength } = route.params;
  console.log({ deckId, score, questionsLength });

  const percentage = (score / questionsLength) * 100;

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "blue",
          padding: 15,
        }}
      >
        <TouchableOpacity onPress={navigation.goBack}>
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
          Quiz
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, padding: 20, fontWeight: "bold" }}>
          Done
        </Text>
      </View>

      <View style={{ marginTop: 50 }}>
        <View style={{ color: "red", display: "flex", alignItems: "center" }}>
          <Text style={{ color: "black", fontSize: 30 }}>Quiz Complete!</Text>
          <Text
            style={{
              color: "red",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {" "}
            {`${score}/${questionsLength}`} Correct
          </Text>
        </View>
        <View style={{ marginTop: 50, display: "flex", alignItems: "center" }}>
          <Text style={{ color: "black", fontSize: 30 }}>
            Percentage correct
          </Text>
          <Text style={{ color: "red", fontSize: 30 }}>
            {percentage.toFixed(2)}%
          </Text>
        </View>

        <View style={{ display: "flex", alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            style={style.restart}
            onPress={() => navigation.navigate("quiz", { deckId })}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
              Restart Quiz
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.back}
            onPress={() => navigation.navigate("deck", { deckId })}
          >
            <Text style={{ textAlign: "center", fontSize: 20 }}>
              Back to Deck
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuizResult;

const style = StyleSheet.create({
  restart: {
    backgroundColor: "blue",
    width: 200,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  back: {
    borderColor: "gray",
    borderWidth: 3,
    width: 200,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
});
