import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LearningPaths from '../containers/LearningPaths';
import Search from '../containers/Search';
import Modules from '../containers/Modules';
import Footer from '../components/Footer';

function Home({courses, authors}) {
  return (
    <div>
      <Header />
      <Hero />
      <LearningPaths/>
      <Search courses={courses} authors={authors} />
      <Modules />
      <Footer /> 
    </div>
  );
}

export default Home;