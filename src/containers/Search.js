import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchList from '../components/SearchList';
import Scroll from '../components/Scroll';

function Search({courses, authors}) {
  let location = useLocation();
  let class1="", class2="";
  if (location.pathname === "/") {
    class2="col-md-10 offset-md-1";
  } else {
    class1="ss-other-page";
    class2="col-lg-10 offset-lg-1";
  }
  const [searchField, setSearchField] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const filteredCourses = courses.filter(course => {
    return (course.name.toLowerCase().includes(searchField.toLowerCase()) || course.heading.toLowerCase().includes(searchField.toLowerCase()));
  });

  const handleChange = e => {
		setSearchField(e.target.value);
    setShowSearch(true);
	};

  function searchList() 
  {
    if(showSearch) {
      return (filteredCourses.length > 0) ? 
      (
        <Scroll>
          <SearchList filteredCourses={filteredCourses} authors={authors}/>
        </Scroll>
      ) : (
        <h2 className="tc ma4">No matching courses found.</h2>
      );
    }
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
              <form className="flex justify-center items-center course-search-form">
                <input type="text" placeholder="Course" className="w-100" onChange = {handleChange}/>
              </form>
            </div>
          </div>
        </div>
        {searchList()}
      </div>
    </section>
  );
}

export default Search;