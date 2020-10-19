import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../components/Search';
import SingleCourse from '../components/SingleCourse';
import RelatedCourses from '../components/RelatedCourses';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Course({courses, authors}) {
  return (
    <div>
      <Header />
      <PageInfo title="Course" bg="/assets/img/page-bg/2.jpg" />
      <Search courses={courses} authors={authors} />
      <SingleCourse courses={courses} authors={authors}/>
      <RelatedCourses courses={courses} authors={authors}/>
      <Banner />
      <Footer /> 
    </div>
  );
}

export default Course;