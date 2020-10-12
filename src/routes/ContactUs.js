import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../components/Search';
import Contact from '../components/Contact';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function ContactUs() {
  return (
    <div>
      <Header />
      <PageInfo title="Contact Us" bg="/assets/img/page-bg/4.jpg" />
      <Search />
      <Contact />
      <Banner />
      <Footer />
    </div>
  );
}

export default ContactUs;