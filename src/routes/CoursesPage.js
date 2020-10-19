import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../components/Search';
import Courses from '../components/Courses';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function CoursesPage({courses, authors}) {
  return (
    <div>
      <Header />
      <PageInfo title="Courses" bg="/assets/img/page-bg/1.jpg" />
      <Search courses={courses} authors={authors} />
      <Courses courses={courses} authors={authors}/>
      <Banner />
      <Footer /> 
    </div>
  );
}

export default CoursesPage;