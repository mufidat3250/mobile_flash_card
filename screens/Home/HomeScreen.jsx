import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScaledSheet, vs } from "react-native-size-matters";
// import { useNavigate } from "react-router-native";
import Decks from "../../components/Decks";

const HomeScreen = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.decks}>
        <Text>DECKS</Text>
      </View>
      <Decks />
    </View>
  );
};

export default HomeScreen;

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: "red",
    // vs and ms
    paddingHorizontal: "5@ms",
  },
  decks: {
    // flexDirection: "row",
    alignItems: "center",
    paddingVertical: "20@vs",
    width: "60%",
    borderBottomColor: "red",
    borderBottomWidth: 2,
  },
});
