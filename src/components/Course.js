import React from 'react';
import { Link } from "react-router-dom";

function Course({
  lgSize=3,
  mdSize=4,
  smSize=6,
  course,
  authors,
}) {
  const author = authors.find(x => x.name === course.authorName);
  return (
    <div className={`mix col-lg-${lgSize} col-md-${mdSize} col-sm-${smSize}`}>
      <div className="br3 ma2 shadow-5 bw2 course-item">
        <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + course.img})`}}>
          <div className="price">Price: ${course.price}</div>
        </div>
        <div className="course-info">
          <div className="course-text">
            <h5>{course.name}</h5>
            <p>{course.categoryName}</p>
            <div className="students">{course.duration} {course.durationUnit}</div>
          </div>
          <div className="course-author">
            <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + author.img})`}}></div>
            <p>{author.name}, <br /> <span>{author.work}</span></p>
          </div>
        </div>
        <div>
          <Link to={'/module/' + course.learningPathName + '/' + course.categoryName + '/' + course._id} className="f6 br1 link dim ph3 pv2 tc mb2 dib white w-50 white items-center hover-bg-grey bg-secondary">Start</Link>
          <Link to={'/module/' + course._id} className="f6 link dim ph3 br1 pv2 mb2 tc dib white w-50 white items-center hover-bg-grey bg-secondary">Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Course;