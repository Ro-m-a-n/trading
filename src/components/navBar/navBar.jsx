import { useState } from "react";
import navBarLogo from "../../assets/navBar/Architect.svg";
import { BiMenu } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
export const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuLinks = () => {
    return (
      <div className="menu_links">
        <a href="#questions">
          <h4>How it works</h4>
        </a>
        <a href="#" onClick={() => location.reload()}>
          <h4>About</h4>
        </a>
        <a href="#getStart">
          <h4>Instructions</h4>
        </a>
        <a href="#" onClick={() => location.reload()}>
          <h4>Accounts</h4>
        </a>
        <a href="#" onClick={() => location.reload()}>
          <h4>Platforms</h4>
        </a>
        <a href="#contactUs">
          <h4>Contacts</h4>
        </a>
        <button className="language">
          En <BsChevronDown className="arrowdown" />
        </button>
      </div>
    );
  };
  return (
    <div className="navBar_wrap">
      <img
        className="logo"
        src={navBarLogo}
        alt="logo"
        onClick={() => location.reload()}
      ></img>
      <div className="desktopMenu">{menuLinks()}</div>
      <div className="buttonsMenu_group">
        <button className="signUp_button" onClick={() => location.reload()}>
          SIGN UP FOR FREE
        </button>
        <BiMenu className="burger" onClick={() => setIsOpenMenu(!isOpenMenu)} />
      </div>

      {isOpenMenu && <div className="mobileMenu">{menuLinks()}</div>}
    </div>
  );
};
