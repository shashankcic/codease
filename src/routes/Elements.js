import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../components/Search';
import Element from '../components/Element';
import Footer from '../components/Footer';

function Elements({courses, authors}) {
  return (
    <div>
      <Header />
      <PageInfo title="Elements" bg="/assets/img/page-bg/5.jpg" />
      <Search courses={courses} authors={authors} />
      <Element />
      <Footer /> 
    </div>
  );
}

export default Elements;