import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../containers/Search';
import Footer from '../components/Footer';
import api from '../api';

function SearchPage() {
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
      <PageInfo title="Search" bg="/assets/img/page-bg/5.jpg" />
      <Search courses={modules} authors={authors} />
      <Footer />
    </div>
  );
}

export default SearchPage;