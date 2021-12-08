import "react-native-gesture-handler";

import React from "react";
// import CreateDeck from "./screens/CreateDeck";
// import Deck from "./screens/Deck";
// import Home from "./screens/Home";
// import QuizView from "./screens/QuizView";
// import { createStackNavigator } from "@react-navigation/stack";
// import AddCard from "./screens/AddCard";
import BottomTabs from "./components/BottomTabs";

// const Stack = createStackNavigator();

export default Routers = () => {
  // const { Screen, Navigator } = Stack;
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} exact />
    //   <Route path="/deck" element={<Deck />} />
    //   <Route path="/create-deck" element={<CreateDeck />} />
    //   <Route path="/no-deck" element={<Deck />} />
    //   <Route path="/empty-card" element={<EmptyCard />} />
    // </Routes>
    // <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
    //   <Screen name="home" component={Home} />
    //   <Screen name="deck" component={Deck} />
    //   <Screen name="create-deck" component={CreateDeck} />
    //   {/* <Screen name="empty-card" component={EmptyCard} /> */}
    //   <Screen name="quiz" component={QuizView} />
    //   <Screen name="add-card" component={AddCard} />
    // </Navigator>
    <BottomTabs />
  );
};

// export default Routes;
