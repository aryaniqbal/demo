import React from "react";
import Logo from "../src/assets/newlogo.png"

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Logo Left Side */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={Logo}
              alt="logo"
              width="120"
              height="53"
              className="me-2"
            />
          </a>

          {/* Toggle Button Right Side */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
