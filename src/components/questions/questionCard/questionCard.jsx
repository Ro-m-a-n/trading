import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const QuestionCard = (props) => {
  const isCurrentCard = props.currentCard === props.id;
  return (
    <div className="questionCard_wrap">
      <div className="question">
        <h3>{props.question}</h3>
        {isCurrentCard ? (
          <AiOutlineClose
            className="toClose"
            onClick={() => props.setCurrentCard(null)}
          />
        ) : (
          <AiOutlinePlus
            className="toOpen"
            onClick={() => props.setCurrentCard(props.id)}
          />
        )}
      </div>
      {isCurrentCard ? (
        <p className="answer animate__animated animate__fadeIn animate__faster">
          {props.answer}
        </p>
      ) : null}
    </div>
  );
};
2;
