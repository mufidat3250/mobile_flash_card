import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateId } from ".";

export const getDeck = async (id) => {
  try {
    const allDecks = await getDecks();
    const deck = allDecks.find((deck) => deck.id === id);
    return deck;
  } catch (error) {
    console.log(error);
  }
};

export const getDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem("decks");
    console.log({ asyncDecks: decks });
    if (decks === null) {
      await AsyncStorage.setItem("decks", JSON.stringify({}));
      return [];
    }
    return Object.values(JSON.parse(decks));
  } catch (error) {
    console.log(error);
  }
};

export const createDeck = async (title) => {
  const newDeck = {
    title,
    id: generateId(),
    questions: [],
  };
  try {
    await AsyncStorage.mergeItem("decks", JSON.stringify({ [title]: newDeck }));
  } catch (error) {
    console.log(error);
  }
};

export const addCard = async ({ title, id, questions }, formData) => {
  const updatedDeck = {
    title,
    id,
    questions: questions.concat(formData),
  };
  try {
    await AsyncStorage.mergeItem(
      "decks",
      JSON.stringify({ [title]: updatedDeck })
    );
    const alldecks = await getDecks();
    console.log({ alldecks });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDeck = async (id) => {
  try {
    const allDecks = await getDecks();
    const newDecks = {};
    allDecks.forEach((deck) => {
      if (deck.id !== id) {
        newDecks[deck.title] = deck;
      }
    });
    await AsyncStorage.setItem("decks", JSON.stringify(newDecks));
  } catch (error) {
    console.log(error);
  }
};
