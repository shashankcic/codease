import React, { lazy, Suspense } from 'react';
const SimpleMap = lazy(() => import('./Map'));

function Contact() {
  return (
    <section className="contact-page spad pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-warp">
              <div className="section-title text-white text-left">
                <h2>Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. </p>
              </div>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your E-mail" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button className="site-btn">Send Message</button>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-info-area">
              <div className="section-title text-left p-0">
                <h2>Contact Info</h2>
                <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendi sse cursus faucibus finibus.</p>
              </div>
              <div className="phone-number">
                <span>Direct Line</span>
                <h2>+91 9876543210</h2>
              </div>
              <ul className="contact-list">
                <li>Cluster Innovation Centre <br />University of Delhi <br /> New Delhi, Delhi <br />110007</li>
                <li>+91 9876543210</li>
                <li>notbhaanum@gmail.com</li>
              </ul>
              <div className="social-links">
                <a href="/"><i className="fa fa-pinterest"></i></a>
                <a href="/"><i className="fa fa-facebook"></i></a>
                <a href="/"><i className="fa fa-twitter"></i></a>
                <a href="/"><i className="fa fa-dribbble"></i></a>
                <a href="/"><i className="fa fa-behance"></i></a>
                <a href="/"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div>
        <Suspense fallback={<div className="loader"></div>}>
          <SimpleMap />  
        </Suspense>
        </div>
      </div>
    </section>
  );
}

export default Contact;