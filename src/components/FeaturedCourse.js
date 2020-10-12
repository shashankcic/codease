import React from 'react';
import { useLocation} from 'react-router-dom';

function Featured({page, cImg, price, cClass, cName, cLevel, cText, cTime, cTimeUnit, aImg, aName, aWork}) {
  let location = useLocation();
  if (location.pathname === "/courses" && page === "courses")
  {
    return (
      <div class="featured-course course-item">
        <div class="course-thumb set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + cImg})`}}>
          <div class="price">Price: ${price}</div>
        </div>
        <div class="row">
          <div class={`col-lg-6 ${cClass}`}>
            <div class="course-info">
              <div class="course-text">
                <div class="fet-note">Featured Course</div>
                <h5>{cName}</h5>
                <h6>{cLevel}</h6>
                <p>{cText}</p>
                <div class="students">{cTime} {cTimeUnit}</div>
              </div>
              <div class="course-author">
                <div class="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + aImg})`}}></div>
                <p>{aName}, <span>{aWork}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (location.pathname === "/" && page === "home") {
    return (
      <div className="section-title mb-0">
        <h2>Featured Courses</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Featured;