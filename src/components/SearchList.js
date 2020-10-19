import React from 'react';
import Course from './Course';

function SearchList({filteredCourses, authors}) {
  console.log(filteredCourses, "searchlist");
  const filtered = filteredCourses.map(course =>  <Course key={course.id} course={course} authors={authors} /> ); 
  return (
    <div className="row course-items-area">
      {filtered}
    </div>
  );
}

export default SearchList;