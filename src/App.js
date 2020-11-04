import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import ModulesPage from './routes/ModulesPage';
import ModuleIntro from './routes/ModuleIntro';
import Module from './routes/Module';
import ContactUs from './routes/ContactUs';
import AboutUs from './routes/AboutUs';
import Elements from './routes/Elements';
import Blogs from './routes/Blogs';
import NotFound from './routes/NotFound';
import SearchPage from './routes/SearchPage';
import Category from './routes/Category';
import Author from './routes/Author';
import LearningPathPage from './routes/LearningPathPage';
import { 
  AddAuthors, AddCategories, AddImages, AddLearningPaths, AddModules,
  AllAuthors, AllCategories, AllImages, AllLearningPaths, AllModules,
  EditAuthors, EditCategories, EditImages, EditLearningPaths, EditModules,
} from './db';
import { initialAuthors, initialBlogs, initialCourseCategories, initialCourses } from './data'; 

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
          <Route exact path='/contact'>
            <ContactUs />
          </Route>
          <Route exact path='/modules'>
            <ModulesPage courses={initialCourses} authors={initialAuthors} />
          </Route>
          <Route exact path='/about'>
            <AboutUs />
          </Route>
          <Route exact path='/element'>
            <Elements courses={initialCourses} authors={initialAuthors} />
          </Route>
          <Route exact path='/module/:id'>
            <ModuleIntro courses={initialCourses} authors={initialAuthors}/>
          </Route>
          <Route exact path='/module/:learningPathName/:categoryName/:id'>
            <Module />
          </Route>
          <Route exact path='/author/:id'>
            <Author />
          </Route>
          <Route exact path='/search'>
            <SearchPage courses={initialCourses} authors={initialAuthors}/>
          </Route>
          <Route exact path='/blog'>
            <Blogs courses={initialCourses} blogs={initialBlogs} authors={initialAuthors}/>
          </Route>
          <Route exact path='/db/images'>
            <AllImages />
          </Route>
          <Route exact path='/db/images/add'>
            <AddImages />
          </Route>
          <Route exact path='/db/images/edit/:id'>
            <EditImages />
          </Route>
          <Route exact path='/db/authors'>
            <AllAuthors />
          </Route>
          <Route exact path='/db/authors/add'>
            <AddAuthors />
          </Route>
          <Route exact path='/db/authors/edit/:id'>
            <EditAuthors />
          </Route>
          <Route exact path='/db/learningPaths'>
            <AllLearningPaths />
          </Route>
          <Route exact path='/db/learningPaths/add'>
            <AddLearningPaths />
          </Route>
          <Route exact path='/db/learningPaths/edit/:id'>
            <EditLearningPaths />
          </Route>
          <Route exact path='/db/categories'>
            <AllCategories />
          </Route>
          <Route exact path='/db/categories/add'>
            <AddCategories />
          </Route>
          <Route exact path='/db/categories/edit/:id'>
            <EditCategories />
          </Route>
          <Route exact path='/db/modules'>
            <AllModules />
          </Route>
          <Route exact path='/db/modules/add'>
            <AddModules />
          </Route>
          <Route exact path='/db/modules/edit/:id'>
            <EditModules />
          </Route>
          <Route exact path='/category/:name/:level'>
            <Category />
          </Route>
          <Route exact path='/category/:name'>
            <LearningPathPage />
          </Route>
          <Route path="*"> 
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;