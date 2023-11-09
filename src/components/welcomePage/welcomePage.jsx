import welcomePageImage from "../../assets/welcomePage/welcomePage.png";
export const WelcomePage = () => {
  return (
    <div className="welcomePage_wrap">
      <h1>Trade everywhere. Invest here!</h1>
      <p>
        We provide only the best trading software. The trading terminal
        MetaTrader4 is the most popular and convenient platform for access to
        global exchanges. You can work anywhere.
      </p>
      <button> START TRADING</button>
      <img className="welcomePage_img" src={welcomePageImage}></img>
    </div>
  );
};
2;
