import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import SearchList from '../components/SearchList';
import Footer from '../components/Footer';

function SearchPage(courses, authors) {
  return (
    <div>
      <Header />
      <PageInfo title="Search" bg="/assets/img/page-bg/5.jpg" />
      <Search />
      <Scroll>
        <SearchList />
      </Scroll>
      <Footer />
    </div>
  );
}

export default SearchPage;