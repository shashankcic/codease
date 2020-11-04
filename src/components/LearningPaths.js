import React, { useState, useEffect } from 'react';
import LearningPath from './LearningPath';
import api from '../api';

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

  const allLearningPaths = learningPaths.map((learningPath) =>  <LearningPath key={learningPath._id} learningPath={learningPath} /> ); 
  return(
    <section className="categories-section spad">
      <div className="container">
        <div className="section-title">
          <h2>Our Course Categories</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
        </div>
        <div className="row">
          {allLearningPaths}
        </div>
      </div>
    </section>
  );
}

export default LearningPaths;