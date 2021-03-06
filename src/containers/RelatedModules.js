import React, { useState, useEffect, lazy, Suspense } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useParams } from 'react-router-dom';
import api from '../api';
const Course = lazy(() => import('../components/Course'));

function RelatedModules() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
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

    const fetchModules = async () => {
      await api.getAllModules().then(response => {
        if (response.data.data.length > 0) {
          setCourses(response.data.data);
        }
      })
    }
    fetchModules();

    const fetchAuthors = async () => {
      await api.getAllAuthors().then(response => {
        if (response.data.data.length > 0) {
          setAuthors(response.data.data);
        }
      });
    }
    fetchAuthors();
  }, [id]);

  const relatedCourses = (courses.length && course) ? courses.filter(x => (x.learningPathName === course.learningPathName || x.categoryName === 'Beginner') && (x._id !== course._id)) : <div>Loading</div>;
  
  const allCourses = (relatedCourses.length && authors.length ) ? relatedCourses.map((course) =>  <Suspense fallback={<div className="loader"></div>} key={course._id} ><Course key={course._id} course={course} authors={authors} lgSize={12} mdSize={12} smSize={12} /></Suspense>) : <div>Loading</div>;
  
  return (
    <section className="realated-courses spad">
      <div className="course-warp">
        <h2 className="rc-title">Related Courses</h2>
          <Carousel
            slidesPerPage={6}
            slidesPerScroll={1}
            animationSpeed={1500}
            autoPlay={3000}
            stopAutoPlayOnHover
            offset={50}
            itemWidth={300}
            fastSwipe
            centered
            infinite
            arrows
            breakpoints={{
              1000: { // these props will be applied when screen width is less than 1000px
                slidesPerPage: 2,
                clickToChange: false,
                centered: false,
                arrows: true,
                infinite: true,
                itemWidth: 270,
              },
              500: {
                slidesPerPage: 1,
                slidesPerScroll: 1,
                clickToChange: false,
                centered: true,
                arrows:true,
                animationSpeed: 2000,
                infinite: true,
                itemWidth: 270,
              },
            }}
          >
            {allCourses}
          </Carousel>
      </div>
    </section>
  );
}

export default RelatedModules;