import { useEffect } from "react";
import { MenuLinks } from "./menuLinks";
import "animate.css";
export const MobileMenu = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <div className="mobileMenu  animate__animated animate__fadeIn">
      <MenuLinks />
    </div>
  );
};
