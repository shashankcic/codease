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
        </div>
        <div className="course-info">
          <div className="h4 pa3 overflow-hidden">
            <h5 className='pa2'>{course.name}</h5>
            <p className='pl2'>{course.categoryName}</p>
          </div>
          <div className="course-author ">
            <Link to={'/author/' + author._id}>
              <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + author.img})`}}></div>
              <p >{author.name}<br /> <span>{author.work}</span></p>
            </Link>
          </div>
        </div>
        <div>
          <Link to={'/module/' + course.learningPathName + '/' + course.categoryName + '/' + course._id} className="f6 br bw1 link dim ph3 pv2 tc mb2 dib white w-50 white items-center hover-bg-grey bg-secondary">Start</Link>
          <Link to={'/module/' + course._id} className="f6 bl bw1 link dim ph3 pv2 mb2 tc dib white w-50 white items-center hover-bg-grey bg-secondary">Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Course;