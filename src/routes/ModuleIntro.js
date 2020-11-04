import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../containers/Search';
import SingleModule from '../containers/SingleModule';
import RelatedModules from '../containers/RelatedModules';
import RelatedAuthors from '../containers/RelatedAuthors';
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
      <Footer /> 
    </div>
  );
}

export default ModuleIntro;