import React from 'react';
import Rating from '@material-ui/lab/Rating';

function SingleCourse({
  cName="Python for Beginners", 
  aName="Kirti Panwar", 
  aWork="Developer", 
  aImg="/assets/img/authors/kirti.jpg", 
  category="Development", 
  cTime=2, 
  cTimeUnit="Hours", 
  rCount=2, 
  stars=4,
  price=0,
  cImg="/assets/img/courses/single.jpg",
  cDesc="Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum.",
  certification="Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum.",
  instructor="Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus."
  }) {
  return(
    <section className="single-course spad pb-0">
      <div className="container">
        <div className="course-meta-area">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="course-note">Featured Course</div>
              <h3>{cName}</h3>
              <div className="course-metas">
                <div className="course-meta">
                  <div className="course-author">
                    <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + aImg})`}}></div>
                    <h6>Teacher</h6>
                    <p>{aName}, <span>{aWork}</span></p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Category</h6>
                    <p>{category}</p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Time Duration</h6>
                    <p>{cTime} {cTimeUnit}</p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Reviews</h6>
                    <p>{rCount} Reviews <span className="rating">
                      <Rating name="read-only" value={stars} readOnly size="small" />
                    </span></p>
                  </div>
                </div>
              </div>
              <a href="/" className="site-btn price-btn">Price: ${price}</a>
              <a href="/" className="site-btn buy-btn">Start This Course</a>
            </div>
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL + cImg}`} alt="" className="course-preview" />
        <div className="row">
          <div className="col-lg-10 offset-lg-1 course-list">
            <div className="cl-item">
              <h4>Course Description</h4>
              <p>{cDesc}</p>
            </div>
            <div className="cl-item">
              <h4>Certification</h4>
              <p>{certification}</p>
            </div>
            <div className="cl-item">
              <h4>The Instructor</h4>
              <p>{instructor}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleCourse;