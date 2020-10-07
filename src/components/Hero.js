import React from 'react';

function Hero() {
  return (
    <section className="hero-section set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/bg.jpg`})`}}>
      <div className="container">
        <div className="hero-text text-white">
          <h2>Codease</h2>
          <p>Learn Effortlessly, Diversify Deftly</p>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <form className="intro-newslatter">
              <input type="text" placeholder="Name" />
              <input type="text" className="last-s" placeholder="E-mail" />
              <button className="site-btn">Sign Up Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;