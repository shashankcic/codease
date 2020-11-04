import React, { useState, useEffect } from 'react';
import Course from '../components/Course';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useParams } from 'react-router-dom';
import api from '../api';

function RelatedAuthors() {
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

  const relatedAuthors = (courses.length && authors.length && course) ? courses.filter(x => (x.authorName === course.authorName) && (x._id !== course._id)) : <div>Loading</div>;
  const allCourses = (relatedAuthors.length) ? relatedAuthors.map((course) =>  <Course key={course._id} course={course} authors={authors} lgSize={12} mdSize={12} smSize={12} />) : <div>No more courses from the author</div>;
  
  return (
    <section className="realated-courses spad">
      <div className="course-warp">
        <h2 className="rc-title">More from the Author</h2>
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

export default RelatedAuthors;