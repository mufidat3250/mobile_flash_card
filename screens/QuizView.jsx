import React from "react";

import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import { useNavigate } from "react-router-native";

const QuizView = () => {
  //   const navigate = useNavigate();
  return (
    <View style={style.container}>
      <View style={style.Wrapper}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigate("/no-deck")}>
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
            Deck 1
          </Text>
        </View>
      </View>

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
          Sorry you can not take a quize because there is no card in the deck
        </Text>
      </View>
    </View>
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
