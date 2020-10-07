import React from 'react';

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
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Courses</a></li>
                  <li><a href="/">About us</a></li>
                  {/* <li><a href="/">News</a></li> */}
                  <li><a href="/">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
  );
} 

export default Header;