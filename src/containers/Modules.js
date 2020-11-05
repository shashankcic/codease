import React, { useState, useEffect, lazy, Suspense } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import api from '../api';
const Course = lazy(() => import('../components/Course'));
const Featured = lazy(() => import('../components/FeaturedCourse'));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

function Modules(){
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
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
      })
    }
    fetchAuthors();
  }, [])  

  const allCourses = (courses.length && authors.length) ? courses.map((course) =>  <Suspense fallback={<div className="loader"></div>} key={course._id} ><Course key={course._id} course={course} authors={authors} /></Suspense>) : "loading";

  const beg = courses.filter(course =>  course.categoryName==="Beginner"); 
  const begCourses = beg.map(course =>  <Suspense fallback={<div className="loader"></div>} key={course._id} ><Course key={course._id} course={course} authors={authors} /></Suspense> );

  const int = courses.filter(course =>  course.categoryName==="Intermediate");
  const intCourses = int.map(course =>  <Suspense fallback={<div className="loader"></div>} key={course._id} ><Course key={course._id} course={course} authors={authors} /></Suspense> );

  const adv = courses.filter(course =>  course.categoryName==="Advanced");   
  const advCourses = adv.map(course =>  <Suspense fallback={<div className="loader"></div>} key={course._id} ><Course key={course._id} course={course} authors={authors} /></Suspense> );

  const misc = courses.filter(course =>  course.categoryName==="Miscellaneous");   
  const miscCourses = misc.map(course =>  <Suspense fallback={<div className="loader"></div>} key={course._id} ><Course key={course._id} course={course} authors={authors} /></Suspense> );

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <section className="course-section spad">
      <div className="container">
        <Suspense fallback={<div className="loader"></div>}>
          <Featured page="home"/>
        </Suspense>        
      </div>
      <div className={classes.root + " course-warp"} style={{width: "100%", margin: "20px auto"}}>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          onChange={handleChange}
          variant="scrollable"
          aria-label="difftabs"
          scrollButtons="auto"
          
        >
          <Tab label="All"  {...a11yProps(0)}/>
          <Tab label="Beginner"  {...a11yProps(1)}/>
          <Tab label="Intermediate"  {...a11yProps(2)}/>
          <Tab label="Advanced"  {...a11yProps(3)}/>
          <Tab label="Miscellaneous"  {...a11yProps(4)}/>
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <div className="row course-items-area">
            {allCourses}
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <div className="row course-items-area">
            {begCourses}
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <div className="row course-items-area">
            {intCourses}
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <div className="row course-items-area">
            {advCourses}
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
          <div className="row course-items-area">
            {miscCourses}
          </div>
        </TabPanel>
        <div className="featured-courses">
          <Suspense fallback={<div className="loader"></div>}>
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
          </Suspense>
          <Suspense fallback={<div className="loader"></div>}>
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
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default Modules;