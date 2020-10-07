import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import Categories from './components/Categories';
// import Search from './components/Search';
import Courses from './components/Courses';
// import Signup from './components/Signup';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div id="preloder">
        <div className="loader"></div>
      </div>
      <Header />
      <Hero />
      {/* <Categories /> 
      <Search /> */}
      <Courses />
      {/* <Signup /> */}
      <Banner />
      <Footer /> 
    </div>
  );
}

export default App;