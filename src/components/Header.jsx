import profile from "../assets/profile-avatar.png";
import no_flag from "../assets/no_flag.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-right">
          <img className="profile-pic" src={profile} alt="profile-picture" />

          <span>
            <h3>John Andre</h3>
            <p>Starfjord AS</p>
          </span>
        </div>
        <div className="header-left">
          <p>Norsk Bokmal</p>
          <img className="flag" src={no_flag} alt="profile-picture" />
        </div>
      </div>
    </div>
  );
};

export default Header;
