import { BsChevronDown } from "react-icons/bs";

export const MenuLinks = (props) => {
  return (
    <div className="menu_links">
      <a href="#questions" onClick={() => props.setIsOpenMenu(false)}>
        <h4>How it works</h4>
      </a>
      <a href="#" onClick={() => location.reload()}>
        <h4>About</h4>
      </a>
      <a href="#getStart" onClick={() => props.setIsOpenMenu(false)}>
        <h4>Instructions</h4>
      </a>
      <a href="#" onClick={() => location.reload()}>
        <h4>Accounts</h4>
      </a>
      <a href="#" onClick={() => location.reload()}>
        <h4>Platforms</h4>
      </a>
      <a href="#contactUs" onClick={() => props.setIsOpenMenu(false)}>
        <h4>Contacts</h4>
      </a>
      <button className="language">
        En <BsChevronDown className="arrowdown" />
      </button>
    </div>
  );
};
