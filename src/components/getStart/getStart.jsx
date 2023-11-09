import { Stage } from "./stage/stage";

export const GetStart = () => {
  return (
    <div className="getStart_wrap">
      <h1>Getting Started Is Fast & Easy</h1>
      <Stage
        number="01."
        title="Register"
        text="Complete the simple registration to get your trading credentials."
      />
      <Stage
        number="02."
        title="Verification"
        text="Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes."
      />
      <Stage
        number="03."
        title="Deposit funds"
        text="Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps."
      />
      <Stage
        number="04."
        title="Start Trading"
        text="Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account."
      />
    </div>
  );
};
2;
