import React, { useState, useEffect } from 'react';
import Category from './Category';
import api from '../api';

function Categories(props) {
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

  const allLearningPaths = learningPaths.map((category) =>  <Category key={category.id} category={category} /> ); 
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

export default Categories;