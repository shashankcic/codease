import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../containers/Search';
import Modules from '../containers/Modules';
import Footer from '../components/Footer';
import api from '../api';

function ModulesPage() {
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
      <PageInfo title="Courses" bg="/assets/img/page-bg/1.jpg" />
      <Search courses={modules} authors={authors} />
      <Modules />
      <Footer /> 
    </div>
  );
}

export default ModulesPage;