import React, { lazy, Suspense } from 'react';
const Header = lazy(() => import('../components/Header'));
const PageInfo = lazy(() => import('../components/PageInfo'));
const SingleModule = lazy(() => import('../containers/SingleModule'));
const RelatedAuthors = lazy(() => import('../containers/RelatedAuthors'));
const RelatedModules = lazy(() => import('../containers/RelatedModules'));
const Footer = lazy(() => import('../components/Footer'));
// import api from '../api';

function ModuleIntro() {
  // const [modules, setModules] = useState([]);
  // const [authors, setAuthors] = useState([]);

  // useEffect(() => {
  //   const fetchModules = async () => {
  //     await api.getAllModules().then(response => {
  //       if (response.data.data.length > 0) {
  //         setModules(response.data.data);
  //       }
  //     })
  //   }
  //   fetchModules();

  //   const fetchAuthors = async () => {
  //     await api.getAllAuthors().then(response => {
  //       if (response.data.data.length > 0) {
  //         setAuthors(response.data.data);
  //       }
  //     });
  //   }
  //   fetchAuthors();
  // }, []);
  return (
    <div>
      <Suspense fallback={<div className="loader"></div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <PageInfo title="Course" bg="/assets/img/page-bg/2.jpg" />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <SingleModule />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <RelatedModules />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <RelatedAuthors />
      </Suspense>
      <Suspense fallback={<div className="loader"></div>}>
        <Footer /> 
      </Suspense>
    </div>
  );
}

export default ModuleIntro;