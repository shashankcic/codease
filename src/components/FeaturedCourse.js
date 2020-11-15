import React from 'react';
import { useLocation} from 'react-router-dom';

function Featured({
  page, 
  cImg, 
  price, 
  cClass, 
  cName, 
  cLevel, 
  cText, 
  cTime, 
  cTimeUnit, 
  aImg, 
  aName, 
  aWork
  }) {
  let location = useLocation();
  if (location.pathname === "/modules" && page === "courses")
  {
    return (
      <div className="featured-course course-item">
        <div className="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + cImg})`}}>
          <div className="price">Price: ${price}</div>
        </div>
        <div className="row">
          <div className={`col-lg-6 ${cClass}`}>
            <div className="course-info">
              <div className="course-text">
                <div className="fet-note">Featured Course</div>
                <h5>{cName}</h5>
                <h6>{cLevel}</h6>
                <p>{cText}</p>
                <div className="students">{cTime} {cTimeUnit}</div>
              </div>
              <div className="course-author">
                <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + aImg})`}}></div>
                <p>{aName}, <span>{aWork}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (location.pathname === "/" && page === "home") {
    return (
      <div className="tc mb-0">
        <h1 className='f1 pa3 shadow-4 br3'>Featured Modules</h1>
      </div>
    );
  } else {
    return null;
  }
}

export default Featured;