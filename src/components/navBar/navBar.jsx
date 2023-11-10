import { useState } from "react";
import navBarLogo from "../../assets/navBar/Architect.svg";
import { BiMenu } from "react-icons/bi";
export const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuLinks = () => {
    return (
      <div className="menu_links">
        <a href="#">How it works</a>
        <a href="#">About</a>
        <a href="#">Instructions</a>
        <a href="#">Accounts</a>
        <a href="#">Platforms</a>
        <a href="#">Contacts</a>
        <button>En</button>
      </div>
    );
  };
  return (
    <div className="navBar_wrap">
      <img className="logo" src={navBarLogo}></img>
      <div className="desktopMenu">{menuLinks()}</div>
      <div className="buttonsMenu_group">
        <button className="signUp_button">SIGN UP FOR FREE</button>
        <BiMenu className="burger" onClick={() => setIsOpenMenu(!isOpenMenu)} />
      </div>

      {isOpenMenu && <div className="mobileMenu">{menuLinks()}</div>}
    </div>
  );
};
