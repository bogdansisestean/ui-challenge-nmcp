import React from "react";
import './Header.css';
import lightLogo from '../../Images/Logo-RealEstate.png';
import arrowPic from'../../Images/Path-light.png';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light boxed-item">
        <div class="container">
          <a class="navbar-brand logo" href="#">
            <img
              src={lightLogo}
              alt="Logo Ui Challenge"
            //   width="30"
            //   height="24"
            />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
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
      </nav>
    </div>
  );
};

export default Header;
