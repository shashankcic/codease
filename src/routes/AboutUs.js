import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import About from '../containers/About';
import Footer from '../components/Footer';

function AboutUs() {
  return(
    <div>
      <Header />
      <PageInfo title="About Us" bg="/assets/img/page-bg/5.jpg" />
      <About />
      <Footer />
    </div>
  );
}

export default AboutUs;