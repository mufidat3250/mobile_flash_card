//AsyncStorage(or local storage for web) to persist / state management
// redux/entity for state management

import { generateId } from "../utils";

export const decks = [
  {
    title: "deck 1",
    id: generateId(),
    questions: [
      {
        question: "who dey?",
        answer: "i no dey",
      },
      {
        question: "who dey breath?",
        answer: "nah me",
      },
    ],
  },
  {
    title: "React",
    id: generateId(),
    questions: [
      {
        question: "who dey?",
        answer: "i no dey",
      },
      {
        question: "who dey breath?",
        answer: "nah me",
      },
    ],
  },
];
