import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="site-logo col-lg-8 col-md-8">
              <img src={process.env.PUBLIC_URL + `/assets/img/logo.png`} alt={`Logo`} />
            </div>
            <div className="nav-switch">
              <i className="fa fa-bars"></i>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <a href="/" className="site-btn header-btn">Login</a>
            <nav className="main-menu">
              <ul>
                <li>
                  <NavLink className="text-white" exact activeClassName="text-primary" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" activeClassName="text-primary" to="/courses">
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" activeClassName="text-primary" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
                {/* <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blog">News</Link></li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
} 

export default Header;