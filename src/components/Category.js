import React from 'react';

function Category({img, name, desc, count}) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="categorie-item">
        <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + img})`}}></div>
        <div className="ci-text">
          <h5>{name}</h5>
          <p>{desc}</p>
          <span>{count} Courses</span>
        </div>
      </div>
    </div>
  );
}

export default Category;