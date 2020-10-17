import React, { Component } from 'react';
import Course from './Course';
import Featured from './FeaturedCourse';
import $ from 'jquery';

class Courses extends Component {
  componentDidMount() {
    $.fn.shuffleChildren = function() {
      $.each(this.get(), function(index, el) {
        var $el = $(el);
        var $find = $el.children();

        $find.sort(function() {
          return 0.5 - Math.random();
        });

        $el.empty();
        $find.appendTo($el);
      });
    };

    $(".course-items-area").ready(function() {
      // Usage
      $(".course-items-area").shuffleChildren();
    });
  }
  
  render() {
    const allCourses = this.props.courses.map((course) =>  <Course key={course.id} course={course} authors={this.props.authors} />);
    
    
    return (
      <section className="course-section spad">
        <div className="container">        
          <Featured page="home"/>
        </div>
        <div className="course-warp">
          <ul className="course-filter controls">
            <li className="control active" data-filter={`all`}>All</li>
            <li className="control" data-filter={`.beginner`}>Beginner</li>
            <li className="control" data-filter={`.intermediate`}>Intermediate</li>
            <li className="control" data-filter={`.advanced`}>Advanced</li>
          </ul>                                       
          <div className="row course-items-area">
            {allCourses}
          </div>
          <div className="featured-courses">
            <Featured
              page="courses"
              cImg="/assets/img/courses/js.png"
              price="0"
              cName="JavaScript"
              cLevel="Intermediate"
              cText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ultrices sapien eu pulvinar. Sed sit amet euismod libero. Sed cursus dui mattis tincidunt consequat. In eu augue quis velit commodo vulputate. Nam eget est ut purus pulvinar commodo. Aliquam bibendum nisi ut ligula porta, at porttitor ipsum faucibus. Phasellus vitae lorem eget lectus auctor pulvinar ut id augue. Sed gravida, arcu et fringilla semper, nulla neque pellentesque nisl, commodo feugiat felis neque fringilla arcu. Vestibulum ultricies turpis mauris, eu venenatis lectus vehicula hendrerit. Proin vel elit eget justo convallis ornare. Ut a augue commodo, commodo diam et, commodo orci. Pellentesque at nunc nec lorem egestas porttitor rhoncus ut dui. Donec id gravida urna."
              cTime="2"
              cTimeUnit="Hours"
              cClass="offset-lg-6 pl-0"
              aImg="/assets/img/authors/shashank.jpg"
              aName="Shashank Singh"
              aWork="Developer"
            />
            <Featured
              page="courses"
              cImg="/assets/img/courses/python.png"
              price="0"
              cName="Python"
              cLevel="Beginner"
              cText="In hac habitasse platea dictumst. Etiam id enim ut magna malesuada porta non quis nunc. Maecenas ante lorem, tempor sed pretium a, pharetra sit amet neque. Sed malesuada, nisl ut dignissim consectetur, velit odio viverra velit, ultrices malesuada ipsum purus ut ex. Donec placerat in arcu at scelerisque. Donec dictum quam nec enim placerat pharetra. Donec mattis rutrum massa. Nulla hendrerit pharetra pulvinar. Curabitur rhoncus est tortor, vitae suscipit metus varius id. Mauris aliquam pretium sem in pretium. Fusce sit amet mattis neque. Nullam tempus dapibus justo quis ultricies."
              cTime="35"
              cTimeUnit="Minutes"
              cClass="pr-0"
              aImg="/assets/img/authors/devansh.jpg"
              aName="Devansh Gupta"
              aWork="Developer"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Courses;