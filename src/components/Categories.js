import React from 'react';

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
          <div className="col-lg-4 col-md-6">
            <div className="categorie-item">
              <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/categories/1.jpg`})`}}></div>
              <div className="ci-text">
                <h5>IT Development</h5>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <span>120 Courses</span>
              </div>
            </div>
          </div>
          {/* category */}
          <div className="col-lg-4 col-md-6">
            <div className="categorie-item">
              <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/categories/2.jpg`})`}}></div>
              <div className="ci-text">
                <h5>Web Design</h5>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <span>70 Courses</span>
              </div>
            </div>
          </div>
          {/* category */}
          <div className="col-lg-4 col-md-6">
            <div className="categorie-item">
              <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/categories/3.jpg`})`}}></div>
              <div className="ci-text">
                <h5>Illustration & Drawing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <span>55 Courses</span>
              </div>
            </div>
          </div>
          {/* category */}
          <div className="col-lg-4 col-md-6">
            <div className="categorie-item">
              <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/categories/4.jpg`})`}}></div>
              <div className="ci-text">
                <h5>Social Media</h5>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <span>40 Courses</span>
              </div>
            </div>
          </div>
          {/* category */}
          <div className="col-lg-4 col-md-6">
            <div className="categorie-item">
              <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/categories/5.jpg`})`}}></div>
              <div className="ci-text">
                <h5>Photoshop</h5>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <span>220 Courses</span>
              </div>
            </div>
          </div>
          {/* category */}
          <div className="col-lg-4 col-md-6">
            <div className="categorie-item">
              <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/img/categories/6.jpg`})`}}></div>
              <div className="ci-text">
                <h5>Cryptocurrencies</h5>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <span>25 Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;