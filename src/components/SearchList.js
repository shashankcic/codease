import React, { lazy, Suspense } from 'react';
const Course = lazy(() => import('./Course'));

function SearchList({filteredCourses, authors}) {
  const filtered = filteredCourses.map(course =>  <Suspense fallback={<div className="loader"></div>} key={course._id} ><Course key={course._id} course={course} authors={authors} /></Suspense> ); 
  return (
    <div className="row course-items-area">
      {filtered}
    </div>
  );
}

export default SearchList;