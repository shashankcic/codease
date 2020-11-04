import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LearningPaths from '../components/LearningPaths';
import Search from '../components/Search';
import Courses from '../components/Courses';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Home({courses, authors}) {
  return (
    <div>
      <Header />
      <Hero />
      <LearningPaths/>
      <Search courses={courses} authors={authors} />
      <Courses courses={courses} authors={authors}/>
      <Banner />
      <Footer /> 
    </div>
  );
}

export default Home;