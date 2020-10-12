import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Course from './routes/Course';
import ContactUs from './routes/ContactUs';

function App() {
  return (
    <Router>
      <div>  
        <div id="preloder">
          <div className="loader"></div>
        </div>
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>  
          <Route path='/contact'>
            <ContactUs />
          </Route>
          <Route path='/courses'>
            <Course />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;