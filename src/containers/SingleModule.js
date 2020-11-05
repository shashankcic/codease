import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { useParams } from 'react-router-dom';
import api from '../api';
import { Link } from 'react-router-dom';

function SingleModule() {
  const { id } = useParams();
  const [course, setCourse] = useState('');
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchModule = async () => {
      await api.getModuleById(id).then(response => {
        if (response.data.data) {
          setCourse(response.data.data);
        }
      })
    }
    fetchModule();

    const fetchAuthors = async () => {
      await api.getAllAuthors().then(response => {
        if (response.data.data.length > 0) {
          setAuthors(response.data.data);
        }
      });
    }
    fetchAuthors();
  }, [id])
  // console.log(course, 'course');
  // const course = courses.find(x => x.id === name);
  const author = (authors.length && course) ? authors.find(x => x.name === course.authorName) : <div>Loading</div>;
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
                    <Link to={'/author/' + author._id}>
                      <div className="ca-pic set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + author.img})`}}></div>
                      <h6>Teacher</h6>
                      <p>{author.name}, <span>{author.work}</span></p>
                    </Link>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Category</h6>
                    <p>{course.learningPathName}</p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Time Duration</h6>
                    <p>{course.duration} {course.durationUnit}</p>
                  </div>
                </div>
                <div className="course-meta">
                  <div className="cm-info">
                    <h6>Reviews</h6>
                    <p>{course.ratingCount} Reviews <span className="rating">
                      <Rating name="half-rating-read" value={course.stars ? course.stars : 4.7} defaultValue={4.7} precision={0.1} readOnly size="small" />
                    </span></p>
                  </div>
                </div>
              </div>
              <Link to={'/module/' + course.learningPathName + '/' + course.categoryName + '/' + course._id} className="site-btn buy-btn">Start This Course</Link>
            </div>
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL + course.img}`} alt="" className="course-preview" />
        <div className="row">
          <div className="col-lg-10 offset-lg-1 course-list">
            <div className="cl-item">
              <h4>Course Description</h4>
              <p>{course.description}</p>
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

export default SingleModule;