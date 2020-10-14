import React from 'react';
import Course from './Course';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function RelatedCourses() {
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
              <Course 
                lgSize={12}
                mdSize={12}
                smSize={12}
                cClass="beginner"
                cImg="/assets/img/courses/c++.png"
                price="0"
                cName="C++"
                cLevel="Beginner"
                cTime="50"
                cTimeUnit="Minutes"
                aImg="/assets/img/authors/bhanu.jpg"
                aName="Bhanu Mittal"
                aWork="Developer"
              />
              <Course 
                lgSize={12}
                mdSize={12}
                smSize={12}
                cClass="intermediate"
                cImg="/assets/img/courses/c++.png"
                price="0"
                cName="C++"
                cLevel="Intermediate"
                cTime="3"
                cTimeUnit="Hours"
                aImg="/assets/img/authors/devansh.jpg"
                aName="Devansh Gupta"
                aWork="Developer"
              />
              <Course 
                lgSize={12}
                mdSize={12}
                smSize={12}
                cClass="beginner"
                cImg="/assets/img/courses/java.png"
                price="0"
                cName="Java"
                cLevel="Beginner"
                cTime="45"
                cTimeUnit="Minutes"
                aImg="/assets/img/authors/kirti.jpg"
                aName="Kirti Panwar"
                aWork="Developer"
              />
              <Course 
                lgSize={12}
                mdSize={12}
                smSize={12}
                cClass="advanced"
                cImg="/assets/img/courses/java.png"
                price="0"
                cName="Java"
                cLevel="Advanced"
                cTime="6"
                cTimeUnit="Hours"
                aImg="/assets/img/authors/aastha.jpg"
                aName="Aastha Shruti"
                aWork="Developer"
              />
              <Course 
                lgSize={12}
                mdSize={12}
                smSize={12}
                cClass="intermediate"
                cImg="/assets/img/courses/python.png"
                price="0"
                cName="Python"
                cLevel="Intermediate"
                cTime="2"
                cTimeUnit="Hours"
                aImg="/assets/img/authors/kirti.jpg"
                aName="Kirti Panwar"
                aWork="Developer"
              />
              <Course 
                lgSize={12}
                mdSize={12}
                smSize={12}
                cClass="advanced"
                cImg="/assets/img/courses/python.png"
                price="0"
                cName="Python"
                cLevel="Advanced"
                cTime="4"
                cTimeUnit="Hours"
                aImg="/assets/img/authors/bhanu.jpg"
                aName="Bhanu Mittal"
                aWork="Developer"
              />
              <Course 
                lgSize={12}
                mdSize={12}
                smSize={12}
                cClass="beginner"
                cImg="/assets/img/courses/js.png"
                price="0"
                cName="JavaScript"
                cLevel="Beginner"
                cTime="1"
                cTimeUnit="Hour"
                aImg="/assets/img/authors/aastha.jpg"
                aName="Aastha Shruti"
                aWork="Developer"
              />
              <Course 
                lgSize={12}
                mdSize={12}
                smSize={12}
                cClass="advanced"
                cImg="/assets/img/courses/js.png"
                price="0"
                cName="JavaScript"
                cLevel="Advanced"
                cTime="4"
                cTimeUnit="Hours"
                aImg="/assets/img/authors/shashank.jpg"
                aName="Shashank Singh"
                aWork="Developer"
              />
          </Carousel>
      </div>
    </section>
  );
}

export default RelatedCourses;