import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import CoursesPage from './routes/CoursesPage';
import Course from './routes/Course';
import ContactUs from './routes/ContactUs';
import AboutUs from './routes/AboutUs';
import Elements from './routes/Elements';
import Blogs from './routes/Blogs';
import NotFound from './routes/NotFound';
import SearchPage from './routes/SearchPage';
import initialCourses from './data/initialCourses';
import initialAuthors from './data/initialAuthors';
import initial404Images from './data/initial404Images';
import initialCourseCategories from './data/initialCourseCategories';
import initialBlogs from './data/initialBlogs';

function App() {
  return (
    <Router>
      <div>  
        <div id="preloder">
          <div className="loader"></div>
        </div>
        <Switch>
          <Route exact path='/'>
            <Home courses={initialCourses} authors={initialAuthors} categories={initialCourseCategories}/>
          </Route>  
          <Route path='/contact'>
            <ContactUs />
          </Route>
          <Route path='/courses'>
            <CoursesPage courses={initialCourses} authors={initialAuthors} />
          </Route>
          <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path='/element'>
            <Elements courses={initialCourses} authors={initialAuthors} />
          </Route>
          <Route path='/course/:name'>
            <Course courses={initialCourses} authors={initialAuthors}/>
          </Route>
          <Route path='/search'>
            <SearchPage courses={initialCourses} authors={initialAuthors}/>
          </Route>
          <Route path='/blog'>
            <Blogs courses={initialCourses} blogs={initialBlogs} authors={initialAuthors}/>
          </Route>
          <Route path="*"> 
            <NotFound images={initial404Images}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;