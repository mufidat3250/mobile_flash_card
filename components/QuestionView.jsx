import { useRoute } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getDeck } from "../utils/api";

const QuestionView = ({ deck: { questions, id }, navigation }) => {
  const [activeQuestionOption, setActiveQuestionOption] = useState(0);
  const [showType, setShowType] = useState("question");
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const showText = showType === "question" ? "Answer" : "Question";
  console.log({ questions });

  const questionToShow = questions[activeQuestionOption];

  const handleShowType = () => {
    setShowType((currentType) =>
      currentType === "answer" ? "question" : "answer"
    );
  };
  const handleScore = (selected) => {
    return questions.filter(
      (question, questionIndex) =>
        question.answer.toLowerCase() === selected[questionIndex].toLowerCase()
    ).length;
  };
  const handleQuestionView = (answer) => {
    console.log("quiz view");
    console.log({ activeQuestionOption });
    console.log({ questionsLength: questions.length - 1 });
    if (activeQuestionOption === questions.length - 1) {
      // selectedAnswer.push(answer);
      // setSelectedAnswer((currentState) => currentState.concat(answer));
      const selected = [...selectedAnswer, answer];

      console.log({ selected });
      console.log("hereeeeee");
      setActiveQuestionOption(0);
      navigation.navigate("quiz-result", {
        deckId: id,
        questionsLength: questions.length,
        score: handleScore(selected),
      });
      return;
    }

    setActiveQuestionOption((currentType) => currentType + 1);
    showType === "answer" && setShowType("question");
    setSelectedAnswer((currentState) => currentState.concat(answer));
  };

  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 20,
            padding: 20,
            fontWeight: "700",
            marginTop: 20,
          }}
        >
          {`${activeQuestionOption + 1}/${questions.length}`}
        </Text>
      </View>
      <View style={style.container}>
        <Text
          style={{
            fontSize: 45,
            textAlign: "center",
            paddingHorizontal: 10,
            paddingTop: 40,
            paddingBottom: 20,
          }}
        >
          {questionToShow[showType]}
        </Text>
        <TouchableNativeFeedback onPress={handleShowType}>
          <Text
            style={{
              fontSize: 20,
              color: "red",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {showText}
          </Text>
        </TouchableNativeFeedback>
        <TouchableOpacity
          style={style.button}
          onPress={() => handleQuestionView("correct")}
        >
          <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
            Correct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button2}
          onPress={() => handleQuestionView("incorrect")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionView;

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "green",
    marginTop: 40,
    display: "flex",
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,

    width: 200,
  },
  button2: {
    backgroundColor: "red",
    display: "flex",
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,

    width: 200,
  },
});
