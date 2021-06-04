import React from "react";
import "./Header.css";
import lightLogo from "../../Images/Logo-RealEstate.png";
import arrowPic from "../../Images/Path-light.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light boxed-item">
        <div className="container logo">
          <a className="navbar-brand" href="#">
            <img
              src={lightLogo}
              alt="Logo Ui Challenge"
              //   width="30"
              //   height="24"
            />
          </a>
        </div>
        <div
          className="collapse navbar-collapse menu-header"
          id="navbarNav navbarDesktop"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nav Link
              </a>
            </li>
            <li className="nav-item">
              <a className="workWithUsButton nav-link" href="#">
                Work With Us
              </a>
            </li>
          </ul>
        </div>
        <div className="burger-menu">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        </div>
      </nav>
    </div>
  );
};

export default Header;
