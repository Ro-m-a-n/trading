import { Stage } from "./stage/stage";
import vectorL from "../../assets/getStart/vectorL.png";
import vectorR from "../../assets/getStart/vectorR.png";
export const GetStart = () => {
  return (
    <div className="getStart_wrap" id="getStart">
      <h1>Getting Started Is Fast & Easy</h1>

      <div className="stage_group">
        <div className="gridA">
          <Stage
            number="01."
            title="Register"
            text="Complete the simple registration to get your trading credentials."
          />
        </div>

        <div className="gridB">
          <img src={vectorL} alt="conection line" />
          <Stage
            number="02."
            title="Verification"
            text="Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes."
          />
        </div>
        <div className="gridC">
          <img src={vectorR} alt="conection line" />
          <Stage
            number="03."
            title="Deposit funds"
            text="Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps."
          />
        </div>
        <div className="gridD">
          <img src={vectorL} alt="conection line" />
          <Stage
            number="04."
            title="Start Trading"
            text="Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account."
          />
        </div>
      </div>
    </div>
  );
};
2;
