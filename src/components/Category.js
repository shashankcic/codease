import React from 'react';

function Category({category}) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="categorie-item">
        <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + category.img})`}}></div>
        <div className="ci-text">
          <h5>{category.name}</h5>
          <p>{category.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Category;