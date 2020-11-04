import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LearningPaths from '../containers/LearningPaths';
import Search from '../containers/Search';
import Modules from '../containers/Modules';
import Footer from '../components/Footer';
import api from '../api';

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
      <Header />
      <Hero />
      <LearningPaths/>
      <Search courses={modules} authors={authors} />
      <Modules />
      <Footer /> 
    </div>
  );
}

export default Home;