import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function ContactUs() {
  return (
    <div>
      <Header />
      <PageInfo title="Contact Us" bg="/assets/img/page-bg/4.jpg" />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactUs;