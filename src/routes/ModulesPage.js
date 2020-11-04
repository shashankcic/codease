import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../containers/Search';
import Modules from '../containers/Modules';
import Footer from '../components/Footer';

function ModulesPage({courses, authors}) {
  return (
    <div>
      <Header />
      <PageInfo title="Courses" bg="/assets/img/page-bg/1.jpg" />
      <Search courses={courses} authors={authors} />
      <Modules />
      <Footer /> 
    </div>
  );
}

export default ModulesPage;