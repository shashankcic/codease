import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { useParams } from 'react-router-dom';

function SingleCourse({courses,authors}) {
  const { name } = useParams();
  const course = courses.find(x => x.id === name);
  const author = authors.find(x => x.id === course.aId);
  return(
    <section className="single-course spad pb-0">
      <div className="container">
        <div className="course-meta-area">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="course-note">Featured Course</div>
              <div className="course-note">Price: ${course.price}</div>
              <h3>{course.name}</h3>
              <div className="course-metas">
                <div className="course-meta">
                  <div className="course-author">
                    <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + author.img})`}}></div>
                    <h6>Teacher</h6>
                    <p>{author.name}, <span>{author.work}</span></p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Category</h6>
                    <p>{course.category}</p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Time Duration</h6>
                    <p>{course.time} {course.timeUnit}</p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Reviews</h6>
                    <p>{course.rCount} Reviews <span className="rating">
                      <Rating name="read-only" value={course.stars} readOnly size="small" />
                    </span></p>
                  </div>
                </div>
              </div>
              <a href="/" className="site-btn buy-btn">Start This Course</a>
            </div>
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL + course.img}`} alt="" className="course-preview" />
        <div className="row">
          <div className="col-lg-10 offset-lg-1 course-list">
            <div className="cl-item">
              <h4>Course Description</h4>
              <p>{course.desc}</p>
            </div>
            <div className="cl-item">
              <h4>Certification</h4>
              <p>{course.certification}</p>
            </div>
            <div className="cl-item">
              <h4>The Instructor</h4>
              <p>{author.about}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleCourse;