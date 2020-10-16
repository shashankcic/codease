import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import CoursesPage from './routes/CoursesPage';
import Course from './routes/Course';
import ContactUs from './routes/ContactUs';
import Elements from './routes/Elements';
import Blogs from './routes/Blogs';
import NotFound from './routes/NotFound';
import initialCourses from './data/initialCourses';
import initialAuthors from './data/initialAuthors';
import initial404Images from './data/initial404Images';

function App() {
  const [courses, setCourses] = useState(initialCourses);
  const [authors, setAuthors] = useState(initialAuthors);
  const [images404, setImages404] = useState(initial404Images);
  return (
    <Router>
      <div>  
        <div id="preloder">
          <div className="loader"></div>
        </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>  
          <Route path='/contact'>
            <ContactUs />
          </Route>
          <Route path='/courses'>
            <CoursesPage />
          </Route>
          <Route path='/about'>
            <Elements />
          </Route>
          <Route path='/course/:name'>
            <Course />
          </Route>
          <Route path='/blog'>
            <Blogs />
          </Route>
          <Route path="*"> 
            <NotFound props={images404}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;