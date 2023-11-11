import logo from "../../assets/navBar/Architect.svg";

export const Footer = () => {
  return (
    <div className="footer_wrap">
      <img src={logo} alt="logo" />
      <div className="linksGroup">
        <a href="#" onClick={() => location.reload()}>
          <h4>About us</h4>
        </a>
        <a href="#getStart">
          <h4>Instructions</h4>
        </a>
        <a href="#" onClick={() => location.reload()}>
          <h4>Platform</h4>
        </a>
        <a href="#contactUs">
          <h4>Contact us</h4>
        </a>
        <a href="#" onClick={() => location.reload()}>
          <h4>Sing in</h4>
        </a>
        <a href="#" onClick={() => location.reload()}>
          <h4> Sing up for free</h4>
        </a>
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
        <a href="#" onClick={() => location.reload()}>
          Copyright 2020, All Right Reserved
        </a>
        <a href="#" onClick={() => location.reload()}>
          Terms and Conditions
        </a>
        <a href="#" onClick={() => location.reload()}>
          Privacy Policy
        </a>
        <a href="#" onClick={() => location.reload()}>
          Risk Warnings
        </a>
        <a href="#" onClick={() => location.reload()}>
          Anti-Money Laundering
        </a>
      </div>
    </div>
  );
};
