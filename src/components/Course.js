import React from 'react';
import { NavLink } from "react-router-dom";

function Course({
  lgSize=3,
  mdSize=4,
  smSize=6,
  cImg, 
  price, 
  cName, 
  cLevel, 
  cClass, 
  cTime, 
  cTimeUnit, 
  aImg, 
  aName, 
  aWork
  }) {
  return (
    <div className={`mix col-lg-${lgSize} col-md-${mdSize} col-sm-${smSize} ${cClass}`}>
      <NavLink className="" exact activeClassName="" to={`/course/${cLevel + cName}`}>
        <div className="course-item">
          <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + cImg})`}}>
            <div className="price">Price: ${price}</div>
          </div>
          <div className="course-info">
            <div className="course-text">
              <h5>{cName}</h5>
              <p>{cLevel}</p>
              <div className="students">{cTime} {cTimeUnit}</div>
            </div>
            <div className="course-author">
              <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + aImg})`}}></div>
              <p>{aName}, <br /> <span>{aWork}</span></p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Course;