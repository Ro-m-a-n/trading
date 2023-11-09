import { FeedbackCard } from "./feedbackCard/feedbackCard";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";

export const BigInvest = (props) => {
  return (
    <div className="bigInvest_wrap">
      <h1>People love Big Invest</h1>
      <FeedbackCard
        name="Albert Abello"
        position="Director of Growth"
        feedback="This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market."
      />
      <div className="cardNavigation">
        <LiaLessThanSolid className="icon_navigation" />
        <div className="cardDisplayed_number">Status</div>
        <LiaGreaterThanSolid className="icon_navigation" />
      </div>
    </div>
  );
};
2;
