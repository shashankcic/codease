import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const Home = lazy(() => import('./routes/Home'));
const ModulesPage = lazy(() => import('./routes/ModulesPage'));
const ModuleIntro = lazy(() => import('./routes/ModuleIntro'));
const Module = lazy(() => import('./routes/Module'));
const ContactUs = lazy(() => import('./routes/ContactUs'));
const AboutUs = lazy(() => import('./routes/AboutUs'));
const Elements = lazy(() => import('./routes/Elements'));
const Blogs = lazy(() => import('./routes/Blogs'));
const NotFound = lazy(() => import('./routes/NotFound'));
const SearchPage = lazy(() => import('./routes/SearchPage'));
const Category = lazy(() => import('./routes/Category'));
const Author = lazy(() => import('./routes/Author'));
const LearningPathPage = lazy(() => import('./routes/LearningPathPage'));
const AddAuthors = lazy(() => import('./db/AddAuthors'));
const AddCategories = lazy(() => import('./db/AddCategories'));
const AddImages = lazy(() => import('./db/AddImages'));
const AddLearningPaths = lazy(() => import('./db/AddLearningPaths'));
const AddModules = lazy(() => import('./db/AddModules'));
const AllAuthors = lazy(() => import('./db/AllAuthors'));
const AllCategories = lazy(() => import('./db/AllCategories'));
const AllImages = lazy(() => import('./db/AllImages'));
const AllLearningPaths = lazy(() => import('./db/AllLearningPaths'));
const AllModules = lazy(() => import('./db/AllModules'));
const EditAuthors = lazy(() => import('./db/EditAuthors'));
const EditCategories = lazy(() => import('./db/EditCategories'));
const EditImages = lazy(() => import('./db/EditImages'));
const EditLearningPaths = lazy(() => import('./db/EditLearningPaths'));
const EditModules = lazy(() => import('./db/EditModules'));
const initialBlogs = lazy(() => import('./data/initialBlogs')); 

function App() {
  return (
    <Router>
      <div>  
        <div id="preloder">
          <div className="loader"></div>
        </div>
        <Switch>
          <Route exact path='/'>
            <Suspense fallback={<div className="loader"></div>}>
              <Home />
            </Suspense>
          </Route>  
          <Route exact path='/contact'>
            <Suspense fallback={<div className="loader"></div>}>
              <ContactUs />
            </Suspense>
          </Route>
          <Route exact path='/modules'>
            <Suspense fallback={<div className="loader"></div>}>
              <ModulesPage />
            </Suspense>
          </Route>
          <Route exact path='/about'>
            <AboutUs />
          </Route>
          <Route exact path='/element'>
            <Suspense fallback={<div className="loader"></div>}>
              <Elements />
            </Suspense>
          </Route>
          <Route exact path='/module/:id'>
            <Suspense fallback={<div className="loader"></div>}>
              <ModuleIntro />
            </Suspense>
          </Route>
          <Route exact path='/module/:learningPathName/:categoryName/:id'>
            <Suspense fallback={<div className="loader"></div>}>
              <Module />
            </Suspense>
          </Route>
          <Route exact path='/author/:id'>
            <Suspense fallback={<div className="loader"></div>}>
              <Author />
            </Suspense>
          </Route>
          <Route exact path='/search'>
            <Suspense fallback={<div className="loader"></div>}>
              <SearchPage />
            </Suspense>
          </Route>
          <Route exact path='/blog'>
            <Suspense fallback={<div className="loader"></div>}>
              <Blogs blogs={initialBlogs} />
            </Suspense>
          </Route>
          <Route exact path='/db/images'>
            <Suspense fallback={<div className="loader"></div>}>
              <AllImages />
            </Suspense>
          </Route>
          <Route exact path='/db/images/add'>
            <Suspense fallback={<div className="loader"></div>}>
              <AddImages />
            </Suspense>
          </Route>
          <Route exact path='/db/images/edit/:id'>
            <Suspense fallback={<div className="loader"></div>}>
              <EditImages />
            </Suspense>
          </Route>
          <Route exact path='/db/authors'>
            <Suspense fallback={<div className="loader"></div>}>
              <AllAuthors />
            </Suspense>
          </Route>
          <Route exact path='/db/authors/add'>
            <Suspense fallback={<div className="loader"></div>}>
              <AddAuthors />
            </Suspense>
          </Route>
          <Route exact path='/db/authors/edit/:id'>
            <Suspense fallback={<div className="loader"></div>}>
              <EditAuthors />
            </Suspense>
          </Route>
          <Route exact path='/db/learningPaths'>
            <Suspense fallback={<div className="loader"></div>}>
              <AllLearningPaths />
            </Suspense>
          </Route>
          <Route exact path='/db/learningPaths/add'>
            <Suspense fallback={<div className="loader"></div>}>
              <AddLearningPaths />
            </Suspense>
          </Route>
          <Route exact path='/db/learningPaths/edit/:id'>
            <Suspense fallback={<div className="loader"></div>}>
              <EditLearningPaths />
            </Suspense>
          </Route>
          <Route exact path='/db/categories'>
            <Suspense fallback={<div className="loader"></div>}>
              <AllCategories />
            </Suspense>
          </Route>
          <Route exact path='/db/categories/add'>
            <Suspense fallback={<div className="loader"></div>}>
              <AddCategories />
            </Suspense>
          </Route>
          <Route exact path='/db/categories/edit/:id'>
            <Suspense fallback={<div className="loader"></div>}>
              <EditCategories />
            </Suspense>
          </Route>
          <Route exact path='/db/modules'>
            <Suspense fallback={<div className="loader"></div>}>
              <AllModules />
            </Suspense>
          </Route>
          <Route exact path='/db/modules/add'>
            <Suspense fallback={<div className="loader"></div>}>
              <AddModules />
            </Suspense>
          </Route>
          <Route exact path='/db/modules/edit/:id'>
            <Suspense fallback={<div className="loader"></div>}>
              <EditModules />
            </Suspense>
          </Route>
          <Route exact path='/category/:name/:level'>
            <Suspense fallback={<div className="loader"></div>}>
              <Category />
            </Suspense>
          </Route>
          <Route exact path='/category/:name'>
            <Suspense fallback={<div className="loader"></div>}>
              <LearningPathPage />
            </Suspense>
          </Route>
          <Route path="*"> 
            <Suspense fallback={<div className="loader"></div>}>
              <NotFound />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;