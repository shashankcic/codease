import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../components/Search';
import Blog from '../components/Blog';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Blogs({blogs, authors}) {
  return (
    <div>
      <Header />
      <PageInfo title="Blog" bg="/assets/img/page-bg/3.jpg" />
      <Search />
      <Blog blogs={blogs} authors={authors}/>
      <Banner />
      <Footer />
    </div>
  );
}

export default Blogs;