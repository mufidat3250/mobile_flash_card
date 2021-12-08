import "react-native-gesture-handler";

import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateDeck from "../screens/CreateDeck";
import Home from "../screens/Home";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return <MaterialIcons name="deck" color="pink" size={60} />;
          } else if (route.name === "create-deck") {
            return <MaterialIcons name="add-box" color="pink" size={60} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="create-deck" component={CreateDeck} />
    </Tab.Navigator>
  );
};

{
  /* <View style={style.iconStyle}>
  <View style={style.deckIcon}>
    <MaterialIcons name="deck" color="pink" size={60} />
    <Text style={style.text}>Deck</Text>
  </View>
  <View style={style.addIcon}>
    <MaterialIcons name="add-box" color="pink" size={60} />
    <Text style={style.text}>Add Decks</Text>
  </View>
</View>; */
}
export default BottomTabs;
