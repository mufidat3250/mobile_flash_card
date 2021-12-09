import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddCard from "../AddCard";
import Deck from "../Deck";
import HomeScreen from "./HomeScreen";
import QuizView from "../QuizView";
import QuizResult from "../../components/QuizResult";

const Stack = createStackNavigator();

const index = () => {
  const { Screen, Navigator } = Stack;

  return (
    <Navigator
      initialRouteName="home-screen"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="home-screen" component={HomeScreen} />
      <Screen name="deck" component={Deck} />
      <Screen name="add-card" component={AddCard} />
      <Screen name="quiz" component={QuizView} />
      <Screen name="quiz-result" component={QuizResult} />
    </Navigator>
  );
};

export default index;
