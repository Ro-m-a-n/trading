import { useState } from "react";
import { QuestionCard } from "./questionCard/questionCard";
import { useStore } from "../../store/store";

export const Questions = () => {
  const questions = useStore((state) => state.question);
  const [currentCard, setCurrentCard] = useState(null);
  const questionCards = questions.map((item, index) => {
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
