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
import AddImages from './components/AddImages';
import EditImages from './components/EditImages';
import AllImages from './components/AllImages';
import AddAuthors from './components/AddAuthors';
import EditAuthors from './components/EditAuthors';
import AllAuthors from './components/AllAuthors';
import AddLearningPaths from './components/AddLearningPaths';
import EditLearningPaths from './components/EditLearningPaths';
import AllLearningPaths from './components/AllLearningPaths';
import AddCategories from './components/AddCategories';
import EditCategories from './components/EditCategories';
import AllCategories from './components/AllCategories';
import AddModules from './components/AddModules';
import EditModules from './components/EditModules';
import AllModules from './components/AllModules';
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
          <Route exact path='/images'>
            <AllImages />
          </Route>
          <Route path='/images/add'>
            <AddImages />
          </Route>
          <Route path='/images/edit/:id'>
            <EditImages />
          </Route>
          <Route exact path='/authors'>
            <AllAuthors />
          </Route>
          <Route path='/authors/add'>
            <AddAuthors />
          </Route>
          <Route path='/authors/edit/:id'>
            <EditAuthors />
          </Route>
          <Route exact path='/learningPaths'>
            <AllLearningPaths />
          </Route>
          <Route path='/learningPaths/add'>
            <AddLearningPaths />
          </Route>
          <Route path='/learningPaths/edit/:id'>
            <EditLearningPaths />
          </Route>
          <Route exact path='/categories'>
            <AllCategories />
          </Route>
          <Route path='/categories/add'>
            <AddCategories />
          </Route>
          <Route path='/categories/edit/:id'>
            <EditCategories />
          </Route>
          <Route exact path='/modules'>
            <AllModules />
          </Route>
          <Route path='/modules/add'>
            <AddModules />
          </Route>
          <Route path='/modules/edit/:id'>
            <EditModules />
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