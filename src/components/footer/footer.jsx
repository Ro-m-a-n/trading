import logo from "../../assets/navBar/Architect.svg";
export const Footer = (props) => {
  return (
    <div className="footer_wrap">
      <img src={logo} alt="logo" />
      <div className="linksGroup">
        <a href="#">About us</a>
        <a href="#">Instructions</a>
        <a href="#">Platform</a>
        <a href="#">Contact us</a>
        <a href="#">Sing in</a>
        <a href="#">Sing up for free</a>
      </div>
      <div className="infoText">
        <h3>Informationand high risk warning:</h3>
        <p>
          Trading with foreign exchange (FX), contract for differences (CFDs)
          and precious metals carries a high level of risk that may not be
          suitable for all investors. Leverage creates additional risk and loss
          exposure. Before you decide to trade foreign exchange or contract for
          differences, carefully consider your investment objectives, experience
          level, and risk tolerance.
        </p>
      </div>
      <div className="disclaimer">
        <h3>Legal disclaimer:</h3>
        <p>
          Forex trading entails significant risks and is not appropriate for all
          investors. The possibility of incurring substantial losses should be
          taken into account. It is therefore important to understand the
          possible consequences of investing. Traders should weigh their earning
          potential against the risks involved and act accordingly. Interactive
          Trade Ltd operating under brand and using domenLink domain within the
          European Economic Area.
        </p>
      </div>
      <div className="copyrightsGroup">
        <a href="#">Copyright 2020, All Right Reserved</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Risk Warnings</a>
        <a href="#">Anti-Money Laundering</a>
      </div>
    </div>
  );
};
