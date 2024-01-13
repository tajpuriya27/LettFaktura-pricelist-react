import profile from "../assets/profile-avatar.png";
import no_flag from "../assets/no_flag.png";
import uk_flag from "../assets/uk_flag.png";
import { BsJustify } from "react-icons/bs";

const Header = ({ OpenSidebar }) => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="menu-icon">
          <BsJustify className="icon" onClick={OpenSidebar} />
        </div>
        <div className="header-right-tv">
          <p>English</p>
          <img className="flag" src={uk_flag} alt="profile-picture" />
        </div>
        <div className="header-left">
          <img className="profile-pic" src={profile} alt="profile-picture" />
          <span>
            <h3>John Andre</h3>
            <p>Starfjord AS</p>
          </span>
        </div>
        <div className="header-right">
          <p>Norsk Bokmal</p>
          <img className="flag" src={no_flag} alt="profile-picture" />
        </div>
      </div>
    </div>
  );
};

export default Header;
