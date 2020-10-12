import React from 'react';
import Category from './Category';

function Categories() {
  return(
    <section className="categories-section spad">
      <div className="container">
        <div className="section-title">
          <h2>Our Course Categories</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
        </div>
        <div className="row">
          {/* category */}
          <Category 
            img="/assets/img/categories/js.png"
            name="JavaScript"
            desc="Lorem ipsum dolor sit amet, consectetur"
            count="4"
          />
          <Category 
            img="/assets/img/categories/python.png"
            name="Python"
            desc="Lorem ipsum dolor sit amet, consectetur"
            count="7"
          />
          <Category 
            img="/assets/img/categories/java.png"
            name="Java"
            desc="Lorem ipsum dolor sit amet, consectetur"
            count="8"
          />
          <Category 
            img="/assets/img/categories/c++.png"
            name="C++"
            desc="Lorem ipsum dolor sit amet, consectetur"
            count="12"
          />
        </div>
      </div>
    </section>
  );
}

export default Categories;