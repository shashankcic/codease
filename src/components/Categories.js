import React from 'react';
import Category from './Category';

function Categories({categories}) {
  const allCategories = categories.map((category) =>  <Category key={category.id} category={category} /> ); 
  return(
    <section className="categories-section spad">
      <div className="container">
        <div className="section-title">
          <h2>Our Course Categories</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
        </div>
        <div className="row">
          {allCategories}
        </div>
      </div>
    </section>
  );
}

export default Categories;