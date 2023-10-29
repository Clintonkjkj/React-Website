import React from "react";
import PopupForm from "../popup/popupForm";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img src="assets/Logo.png" className="img-fluid" alt="logo" />
          </div>
          <nav id="navigation">
            <label htmlFor="check" className="checkbtn">
              <span>≡</span>
            </label>
            <ul>
              <span className="mobile-menu-close">x</span>
              <li>
                <a href="#home" title="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#profile" title="Profile">
                  Profile
                </a>
              </li>
              <li className="dropdown">
                {" "}
                <a href="#courses" title="courses">
                  Courses<span className="arrow-down"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#course-1">Courses-1</a>
                  </li>
                  <li>
                    <a href="#course-2">Courses-2</a>
                  </li>
                  <li>
                    <a href="#course-3">Courses-3</a>
                  </li>
                  <li>
                    <a href="#course-4">Courses-4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="contact_p" onClick={togglePopup}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="login-wrapper">
            <Link to="/signIn">
              <a href="" className="signin">
                Sign In
              </a>
            </Link>
            <Link to="/signIn">
              <a href="" className="signup">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
      {isOpen && <PopupForm handleClose={togglePopup} />}
    </header>
  );
};

export default Header;
