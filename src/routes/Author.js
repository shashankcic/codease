import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../components/Search';
import Course from '../components/Course';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import api from '../api';

function Author() {
  const { id } = useParams();
  const [modules, setModules] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState('');

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

    const fetchAuthor = async () => {
      await api.getAuthorById(id).then(response => {
        if (response.data.data) {
          setAuthor(response.data.data);
        }
      });
    }
    fetchAuthor();
  }, [id]);

  const authorModules = (author && modules.length) ? modules.filter(module => author.name === module.authorName) : <div>Loading</div>;
  const allModules = (authorModules.length && authors.length ) ? authorModules.map(module =>  <Course key={module._id} course={module} authors={authors} /> ) : <h2 className='tc w-100'>No modules found</h2>;
  return (
    <div>
      <Header />
      <PageInfo title="Author" bg="/assets/img/page-bg/3.jpg" />
      <Search courses={modules} authors={authors} />
      <div className='container'>
        <h1 className=''>{author.name}</h1>
        <div className='set-bg w-50 vh-50 mb4' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + author.img})`}}></div>
        <span>{author.work}</span>
        <h4>About the Author</h4>
        <p>{author.about}</p>
      </div>
      <div className="course-section spad">
        <div className={"course-warp"}>
          <h3 className='tc'>Modules from the Author</h3>
          <div className="row course-items-area">
            {allModules}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Author;