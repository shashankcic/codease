import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PageInfo from '../components/PageInfo';
import Search from '../containers/Search';
import Footer from '../components/Footer';
import Course from '../components/Course';
import api from '../api';

export default function Category() {
	const { name } = useParams();
	const [modules, setModules] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [learningPath, setLearningPath] = useState('');

	useEffect(() => {
		const fetchModules = async () => {
			await api.getAllModules().then(response => {
				if (response.data.data.length > 0) {
          let mods = response.data.data.filter(module=> module.learningPathName === name);
          setModules(mods);
        }
			})
		}
		fetchModules();

		const fetchLearningPaths = async () => {
			await api.getAllLearningPaths().then(response => {
				if (response.data.data.length > 0) {
					let lp = response.data.data.find(learningPath => learningPath.name === name);
					setLearningPath(lp);
				}
			})
		}
		fetchLearningPaths();

		const fetchAuthors = async () => {
      await api.getAllAuthors().then(response => {
        if (response.data.data.length > 0) {
          setAuthors(response.data.data);
        }
      });
    }
    fetchAuthors();
	}, [name]);

	const allModules = (modules.length && authors.length) ? modules.map(module =>  <Course key={module._id} course={module} authors={authors} /> ) : <h2 className='tc w-100'>No modules found</h2>;

	return(
		<div>
			<Header />
			<PageInfo title={'Category/'+ name} bg='/assets/img/page-bg/5.jpg' />
			<Search courses={modules} authors={authors} />
			<div className='container'>
				<h1 className=''>{name} Courses</h1>
				<div className='set-bg w-25 center vh-25 mb4' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + learningPath.img})`}}></div>
				<h3>Description</h3>
				<p>{learningPath.description}</p>
			</div>
			<div className="course-section spad">
				<div className={"course-warp"}>
					<div className="row course-items-area">
						{allModules}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
} 