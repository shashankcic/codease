import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Search from '../components/Search';
import Courses from '../components/Courses';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Home({courses, authors, categories}) {
  return (
    <div>
      <Header />
      <Hero />
      <Categories categories={categories}/>
      <Search courses={courses} authors={authors} />
      <Courses courses={courses} authors={authors}/>
      <Banner />
      <Footer /> 
    </div>
  );
}

export default Home;