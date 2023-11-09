import { useState } from "react";
import { QuestionCard } from "./questionCard/questionCard";

export const Questions = (props) => {
  const questionArray = [
    { question: "question 1", answer: "answer 1" },
    { question: "question 2", answer: "answer 2" },
  ];
  const [currentCard, setCurrentCard] = useState(null);
  const questionCards = questionArray.map((item, index) => {
    return (
      <QuestionCard
        question={item.question}
        answer={item.answer}
        key={index}
        id={index}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
      />
    );
  });

  return (
    <div className="questions_wrap">
      <h1>Frequently asked questions</h1>
      {questionCards}
    </div>
  );
};
2;
