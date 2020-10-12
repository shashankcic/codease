import React from 'react';

function Course({cImg, price, cName, cLevel, cClass, cTime, cTimeUnit, aImg, aName, aWork}) {
  return (
    <div className={`mix col-lg-3 col-md-4 col-sm-6 ${cClass}`}>
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
            <p>{aName}, <span>{aWork}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;