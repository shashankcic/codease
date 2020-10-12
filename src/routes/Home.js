import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Search from '../components/Search';
import Courses from '../components/Courses';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <Search />
      <Courses />
      <Banner />
      <Footer /> 
    </div>
  );
}

export default Home;