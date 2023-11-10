import { FeedbackCard } from "./feedbackCard/feedbackCard";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useStore } from "../../store/store";
import { useState } from "react";

export const BigInvest = () => {
  const feedback = useStore((state) => state.feedback);
  const [currentId, setCurrentId] = useState(2);
  const currentFeedback = feedback.find((item) => item.id === currentId);

  const currentStatus = () => {
    return "0" + currentId + "/0" + feedback.length;
  };
  const nextFeedback = () => {
    if (currentId < feedback.length) {
      return setCurrentId((prevState) => prevState + 1);
    }
    return setCurrentId(1);
  };
  const prevFeedback = () => {
    if (currentId === 1) {
      return setCurrentId(feedback.length);
    }
    return setCurrentId((prevState) => prevState - 1);
  };
  return (
    <div className="bigInvest_wrap">
      <h1>People love Big Invest</h1>
      <div className="investBG"></div>
      <FeedbackCard
        photo={currentFeedback.photo}
        name={currentFeedback.name}
        position={currentFeedback.position}
        feedback={currentFeedback.feedback}
      />

      <LiaLessThanSolid
        className="navigation_icon left"
        onClick={() => prevFeedback()}
      />
      <div className="currentCardNumber">{currentStatus()}</div>
      <LiaGreaterThanSolid
        className="navigation_icon right"
        onClick={() => nextFeedback()}
      />
    </div>
  );
};
2;
