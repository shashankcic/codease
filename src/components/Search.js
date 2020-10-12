import React from 'react';
import { useLocation } from 'react-router-dom';

function Search() {
  let location = useLocation();
  let class1="", class2="";
  if (location.pathname === "/") {
    class2="col-md-10 offset-md-1";
  } else {
    class1="ss-other-page";
    class2="col-lg-10 offset-lg-1";
  }
  return (
    <section className={`search-section ${class1}`}>
      <div className="container">
        <div className="search-warp">
          <div className="section-title text-white">
            <h2><span>Search your course</span></h2>
          </div>
          <div className="row">
            <div className={class2}>
              {/* search form */}
              <form className="course-search-form">
                <input type="text" placeholder="Course" />
                <input type="text" className="last-m" placeholder="Category" />
                <button className="site-btn btn-dark">Search Course</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;