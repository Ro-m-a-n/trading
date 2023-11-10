import { FeedbackCard } from "./feedbackCard/feedbackCard";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useStore } from "../../store/store";
import { useState } from "react";

export const BigInvest = () => {
  const feedback = useStore((state) => state.feedback);
  const [currentFeedback, setCurrentFeedback] = useState(feedback[1]);
  const totalSlides = feedback.length;
  const currentSlideNumber = currentFeedback.id;
  const currentStatus = () => {
    return "0" + currentSlideNumber + "/0" + totalSlides;
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
      <div className="cardNavigation">
        <LiaLessThanSolid className="icon_navigation" />
        <div className="cardDisplayed_number">{currentStatus()}</div>
        <LiaGreaterThanSolid className="icon_navigation" />
      </div>
    </div>
  );
};
2;
