import React from "react";

import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/our-story">
          Our story<span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/product">
          Catagories
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin">
          Admin
        </Link>
      </li>
    </ul>
  );
}

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="mobile-togle col-md-12 col-sm-12 col-xs-12">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                id="hamburger"
                className="navbar-toggle x collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse-x"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-brand"></div>
            </div>
          </nav>
        </div>

        <div className="right_section col-md-5 col-xs-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <NavLinks />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
