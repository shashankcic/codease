import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
const Header = lazy(() => import('../components/Header'));
const PageInfo = lazy(() => import('../components/PageInfo'));
const Search = lazy(() => import('../containers/Search'));
const Course = lazy(() => import('../components/Course'));
const Footer = lazy(() => import('../components/Footer'));

export default function Category() {
	const { level, name } = useParams();
	const [modules, setModules] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [category, setCategory] = useState('');

	useEffect(() => {
		const fetchModules = async () => {
			await api.getAllModules().then(response => {
				if (response.data.data.length > 0) {
          let mods = response.data.data.filter(module=> module.learningPathName === name && module.categoryName === level);
          setModules(mods);
        }
			})
		}
		fetchModules();

		const fetchCategory = async () => {
			await api.getAllCategories().then(response => {
				if (response.data.data.length > 0) {
					let cat = response.data.data.find(category => category.learningPathName === name && category.name === level);
					setCategory(cat);
				}
			})
		}
		fetchCategory();

		const fetchAuthors = async () => {
      await api.getAllAuthors().then(response => {
        if (response.data.data.length > 0) {
          setAuthors(response.data.data);
        }
      });
    }
    fetchAuthors();
	}, [level, name]);

	const allModules = (modules.length && authors.length) ? modules.map(module =>  <Suspense fallback={<div className="loader"></div>} key={module._id}><Course key={module._id} course={module} authors={authors} /></Suspense> ) : <h2 className='tc w-100'>No modules found</h2>;

	return(
		<div>
			<Suspense fallback={<div className="loader"></div>}>
				<Header />
			</Suspense>
			<Suspense fallback={<div className="loader"></div>}>
				<PageInfo title={'Category/'+ name + '/' + level} bg='/assets/img/page-bg/5.jpg' />
			</Suspense>
			<Suspense fallback={<div className="loader"></div>}>
				<Search courses={modules} authors={authors} />
			</Suspense>
			<div className='container'>
				<h1 className=''>{level} {name} Courses</h1>
				<div className='set-bg w-25 center vh-25 mb4' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + category.img})`}}></div>
				<h3>Description</h3>
				<p>{category.description}</p>
			</div>
			<div className="course-section spad">
				<div className={"course-warp"}>
					<div className="row course-items-area">
						{allModules}
					</div>
				</div>
			</div>
			<Suspense fallback={<div className="loader"></div>}>
				<Footer />
			</Suspense>
		</div>
	);
} 