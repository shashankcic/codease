import React, { useState, useEffect, lazy, Suspense } from 'react';
import api from '../api';
const Header = lazy(() => import('../components/Header'));
const PageInfo = lazy(() => import('../components/PageInfo'));
const Search = lazy(() => import('../containers/Search'));
const Blog = lazy(() => import('../containers/Blog'));
const Footer = lazy(() => import('../components/Footer'));

function Blogs({blogs}) {
  const [modules, setModules] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
  	const fetchModules = async () => {
      await api.getAllModules().then(response => {
        if (response.data.data.length > 0) {
          setModules(response.data.data);
        }
      })
    }
    fetchModules();

    const fetchAuthors = async () => {
      await api.getAllAuthors().then(response => {
        if (response.data.data.length > 0) {
          setAuthors(response.data.data);
        }
      });
    }
    fetchAuthors();
  }, []);

  return (
    <div>
      <Suspense fallback={<div className="loader"></div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <PageInfo title="Blog" bg="/assets/img/page-bg/3.jpg" />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <Search courses={modules} authors={authors} />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <Blog blogs={blogs} authors={authors}/>
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Blogs;