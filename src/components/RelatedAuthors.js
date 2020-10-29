import React from 'react';
import Course from './Course';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useParams } from 'react-router-dom';

function RelatedAuthors({courses, authors}) {
  const { name } = useParams();
  const course = courses.find(x => x.id === name);
  const relatedAuthors = courses.filter(x => (x.aId === course.aId) && (x.id !== course.id));
  
  const allCourses = relatedAuthors.map((course) =>  <Course key={course.id} course={course} authors={authors} lgSize={12} mdSize={12} smSize={12} />);
  
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