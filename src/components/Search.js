import React from 'react';

function Search() {
  return (
    <section className="search-section">
      <div className="container">
        <div className="search-warp">
          <div className="section-title text-white">
            <h2>Search your course</h2>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
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