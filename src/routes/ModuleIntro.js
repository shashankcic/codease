import React from 'react';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import SingleModule from '../containers/SingleModule';
import RelatedModules from '../containers/RelatedModules';
import RelatedAuthors from '../containers/RelatedAuthors';
import Footer from '../components/Footer';
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
      <Header />
      <PageInfo title="Course" bg="/assets/img/page-bg/2.jpg" />
      <SingleModule />
      <RelatedModules />
      <RelatedAuthors />
      <Footer /> 
    </div>
  );
}

export default ModuleIntro;