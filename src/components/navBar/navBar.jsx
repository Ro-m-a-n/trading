import { useState } from "react";
import navBarLogo from "../../assets/navBar/Architect.svg";
import { BiMenu } from "react-icons/bi";
export const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuLinks = () => {
    return (
      <div className="menu_links">
        <a href="#questions">How it works</a>
        <a href="#" onClick={() => location.reload()}>
          About
        </a>
        <a href="#getStart">Instructions</a>
        <a href="#" onClick={() => location.reload()}>
          Accounts
        </a>
        <a href="#" onClick={() => location.reload()}>
          Platforms
        </a>
        <a href="#contactUs">Contacts</a>
        <button>En</button>
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
