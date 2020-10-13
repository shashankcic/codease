import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import $ from 'jquery';

class Header extends Component {
  componentDidMount() {
    $('.nav-switch').on('click', function(event) {
      $('.main-menu').slideToggle(400);
      event.preventDefault();
    });
  }
  render(){
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
                    <NavLink className="" exact activeClassName="text-primary" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" activeClassName="text-primary" to="/courses">
                      Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" activeClassName="text-primary" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
<<<<<<< HEAD
                  <li>
                    <NavLink className="" activeClassName="text-primary" to="/element">
                      Elements
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" activeClassName="text-primary" to="/course">
                      Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" activeClassName="text-primary" to="/blog">
                      Blog
                    </NavLink>
                  </li>
=======
>>>>>>> 92e631370d20ef295b212e4245200e997c777ba4
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
} 

export default Header;