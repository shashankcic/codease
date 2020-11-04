import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../containers/Search';
import Footer from '../components/Footer';

function SearchPage({courses, authors}) {
  return (
    <div>
      <Header />
      <PageInfo title="Search" bg="/assets/img/page-bg/5.jpg" />
      <Search courses={courses} authors={authors} />
      <Footer />
    </div>
  );
}

export default SearchPage;