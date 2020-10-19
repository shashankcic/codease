import React from 'react';
import { Link } from "react-router-dom";

function Course({
  lgSize=3,
  mdSize=4,
  smSize=6,
  course,
  authors,
}) {
  const author = authors.find(x => x.id === course.aId);
  return (
    <div className={`mix col-lg-${lgSize} col-md-${mdSize} col-sm-${smSize} ${course.cClass}`}>
      <Link to={`/course/${course.id}`}>
        <div className="br3 ma2 grow shadow-5 bw2 course-item">
          <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + course.img})`}}>
            <div className="price">Price: ${course.price}</div>
          </div>
          <div className="course-info">
            <div className="course-text">
              <h5>{course.name}</h5>
              <p>{course.level}</p>
              <div className="students">{course.time} {course.timeUnit}</div>
            </div>
            <div className="course-author">
              <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + author.img})`}}></div>
              <p>{author.name}, <br /> <span>{author.work}</span></p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Course;