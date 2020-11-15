import React, { useState, useEffect, lazy, Suspense } from 'react';
import api from '../api';
const LearningPath = lazy(() => import('../components/LearningPath'));

function LearningPaths() {
  const [learningPaths, setLearningPaths] = useState([]);
  // const [isLoading, setIsLoading] = useState('');

  useEffect(() => {
    const fetchLearningPaths = async () => {
      // setIsLoading(true);

      await api.getAllLearningPaths().then(categories => {
        setLearningPaths(categories.data.data);
        // setIsLoading(false);
      });
    }
    fetchLearningPaths();
  }, [])

  const allLearningPaths = learningPaths.map((learningPath) =>  <Suspense fallback={<div className="loader"></div>} key={learningPath._id} ><LearningPath key={learningPath._id} learningPath={learningPath} /></Suspense> ); 
  return(
    <section className="categories-section spad">
      <div className="container">
        <div className="tc mb5">
          <h2 className='f1 pa3 shadow-4 br3'>Our Learning Paths</h2>
        </div>
        <div className="row">
          {allLearningPaths}
        </div>
      </div>
    </section>
  );
}

export default LearningPaths;