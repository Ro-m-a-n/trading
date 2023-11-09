import navBarLogo from "../../assets/navBar/Architect.svg";
import { BiMenu } from "react-icons/bi";
export const NavBar = () => {
  return (
    <div className="navBar_wrap">
      <img className="navBar_logo" src={navBarLogo}></img>

      <BiMenu className="navBar_menu" />
    </div>
  );
};
