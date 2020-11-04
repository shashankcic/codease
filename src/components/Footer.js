import React from 'react';

function Footer() {
  const yearNow = new Date().getFullYear();
  return (
    <footer className="footer-section spad pb-0">
      <div className="footer-top">
        <div className="footer-warp">
          <div className="row">
            <div className="widget-item">
              <h4>Contact Info</h4>
              <ul className="contact-list">
                <li>Cluster Innovation Centre <br />University of Delhi <br /> New Delhi, Delhi <br />110007</li>
                <li>+91 9876543210</li>
                <li>notbhaanum@gmail.com</li>
              </ul>
            </div>
            <div className="widget-item">
              <h4>C++</h4>
              <ul>
                <li><a href="/">Loops</a></li>
                <li><a href="/">if-else</a></li>
                <li><a href="/">Variable Declaration</a></li>
                <li><a href="/">Logical Operators</a></li>
              </ul>
            </div>
            <div className="widget-item">
              <h4>Java</h4>
              <ul>
                <li><a href="/">Loops</a></li>
                <li><a href="/">if-else</a></li>
                <li><a href="/">Variable Declaration</a></li>
                <li><a href="/">Logical Operators</a></li>
              </ul>
            </div>
            <div className="widget-item">
              <h4>Python</h4>
              <ul>
                <li><a href="/">Loops</a></li>
                <li><a href="/">if-else</a></li>
                <li><a href="/">Variable Declaration</a></li>
                <li><a href="/">Logical Operators</a></li>
              </ul>
            </div>
            <div className="widget-item">
              <h4>JavaScript</h4>
              <ul>
                <li><a href="/">Loops</a></li>
                <li><a href="/">if-else</a></li>
                <li><a href="/">Variable Declaration</a></li>
                <li><a href="/">Logical Operators</a></li>
              </ul>
            </div>
            <div className="widget-item">
              <h4>Newsletter</h4>
              <form className="footer-newslatter">
                <input type="email" placeholder="E-mail" />
                <button className="site-btn">Subscribe</button>
                <p>*We don’t spam</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-warp">
          <ul className="footer-menu">
            <li><a href="/">Terms & Conditions</a></li>
            <li><a href="/">Register</a></li>
            <li><a href="/">Privacy</a></li>
          </ul>
          <div className="copyright">
            Copyright &copy;{yearNow} All rights reserved | This website is made with <i className="fa fa-heart-o" aria-hidden="true"></i>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
            Copyright &copy;{yearNow} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href={`https://colorlib.com`} target="_blank" rel="noopener noreferrer">Colorlib</a>
            Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;