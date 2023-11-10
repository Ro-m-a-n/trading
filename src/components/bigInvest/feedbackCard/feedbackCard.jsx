import quotes from "../../../assets/bigInvest/quotes.png";
export const FeedbackCard = (props) => {
  return (
    <div className="feedbackCard_wrap">
      <img
        className="feedbackCard_userPhoto"
        src={props.photo}
        alt="user photo"
      />
      <h4>{props.name}</h4>
      <p>{props.position}</p>
      <img className="feedbackCard_quotes" src={quotes} alt="quotes icon" />
      <h3>{props.feedback}</h3>
    </div>
  );
};
