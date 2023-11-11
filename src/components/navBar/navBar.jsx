import { useState } from "react";
import navBarLogo from "../../assets/navBar/Architect.svg";
import { BiMenu } from "react-icons/bi";

import { MobileMenu } from "./mobileMenu";
import { MenuLinks } from "./menuLinks";
export const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="navBar_wrap">
      <img
        className="logo"
        src={navBarLogo}
        alt="logo"
        onClick={() => location.reload()}
      ></img>
      <div className="desktopMenu">
        <MenuLinks />
      </div>
      <div className="buttonsMenu_group">
        <button className="signUp_button" onClick={() => location.reload()}>
          SIGN UP FOR FREE
        </button>
        <BiMenu className="burger" onClick={() => setIsOpenMenu(!isOpenMenu)} />
      </div>

      {isOpenMenu && <MobileMenu />}
    </div>
  );
};
