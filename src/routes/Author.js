import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
const Header = lazy(() => import('../components/Header'));
const PageInfo = lazy(() => import('../components/PageInfo'));
const Search = lazy(() => import('../containers/Search'));
const Course = lazy(() => import('../components/Course'));
const Footer = lazy(() => import('../components/Footer'));

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

  let authorModules = [];
  if (author && modules.length) {
    authorModules = modules.filter(module => author.name === module.authorName);
  }

  // useEffect(() => {
  //   setAuthorModules(authorModule);
  // }, [authorModule])

  const allModules = (authorModules.length && authors.length ) ? authorModules.map(module =>  <Suspense fallback={<div className="loader"></div>} key={module._id} ><Course key={module._id} course={module} authors={authors} /></Suspense> ) : <h2 className='tc w-100'>No modules found</h2>;
  return (
    <div>
      <Suspense fallback={<div className="loader"></div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <PageInfo title="Author" bg="/assets/img/page-bg/3.jpg" />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <Search courses={authorModules} authors={authors} />      
      </Suspense>
      <div className='bg-near-white'>
        <div className='container tc pa2'>
          <h1 className=''>{author.name}</h1>
          <div className='col-lg-4 col-md-4 col-sm-6 center mb2 pb2'>
            <img src={process.env.PUBLIC_URL + author.img} alt={author.name} className='br-100'/>
          </div>
          <span className='ma2 pa2'>{author.work}</span>
          <h5 className='mt2 pt2'>About the Author</h5>
          <p className='mb2 pb2'>{author.about}</p>
        </div>
      </div>
      <div className="course-section spad">
        <div className={"course-warp"}>
          <h3 className='tc'>Modules from the Author</h3>
          <div className="row course-items-area">
            {allModules}
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="loader"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Author;