import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../components/Search';
import SingleModule from '../components/SingleModule';
import RelatedModules from '../components/RelatedModules';
import RelatedAuthors from '../components/RelatedAuthors';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function ModuleIntro({courses, authors}) {
  return (
    <div>
      <Header />
      <PageInfo title="Course" bg="/assets/img/page-bg/2.jpg" />
      <Search courses={courses} authors={authors} />
      <SingleModule />
      <RelatedModules />
      <RelatedAuthors />
      <Banner />
      <Footer /> 
    </div>
  );
}

export default ModuleIntro;