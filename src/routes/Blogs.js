import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../containers/Search';
import Blog from '../containers/Blog';
import Footer from '../components/Footer';

function Blogs({courses, blogs, authors}) {
  return (
    <div>
      <Header />
      <PageInfo title="Blog" bg="/assets/img/page-bg/3.jpg" />
      <Search courses={courses} authors={authors} />
      <Blog blogs={blogs} authors={authors}/>
      <Footer />
    </div>
  );
}

export default Blogs;