import React, { useState, useEffect, lazy, Suspense } from 'react';
import api from '../api';
const Header = lazy(() => import('../components/Header'));
const Hero = lazy(() => import('../components/Hero'));
const LearningPaths = lazy(() => import('../containers/LearningPaths'));
const Search = lazy(() => import('../containers/Search'));
const Modules = lazy(() => import('../containers/Modules'));
const Footer = lazy(() => import('../components/Footer'));

function Home() {
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
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <Search courses={modules} authors={authors} />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <LearningPaths/>
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <Modules />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;