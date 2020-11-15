import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import draftToHtml from 'draftjs-to-html';
import api from '../api';
import { Link, useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function isValidUrl(string) {
  try {
    new URL(string);
  } catch (_) {
    return false;  
  }

  return true;
}

export default function Module() {
	const { id, learningPathName, categoryName } = useParams();
	const [collapsed, setCollapsed] = useState(true);
	const [module, setModule] = useState('');
	const [modules, setModules] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [categories, setCategories] = useState([]);
	const [learningPaths, setLearningPaths] = useState([]);
	const [prevId, setPrevId] = useState('');
	const [nextId, setNextId] = useState('');
	const [width, setWidth] = React.useState(window.innerWidth);

	const updateWidth = () => {
	  setWidth(window.innerWidth);
	};

	useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
	});
	
	let prev = '';
	let next = '';
 
	if (modules.length && categories.length && learningPaths.length) {
		const filteredList = modules.filter(module => (learningPathName === module.learningPathName) && (categoryName === module.categoryName));
		filteredList.map((module, index) => {
			if (module._id === id) {
				prev = filteredList[index-1] ? filteredList[index-1]._id : id;
				next = filteredList[index+1] ? filteredList[index+1]._id : id;
				return null;
			}
			else return null;
		})
	}

	useEffect(() => {
		setPrevId(prev);
		setNextId(next);
	}, [prev,next])
	
	useEffect(() => {
		
		const fetchModules = async () => {
			
			await api.getAllModules().then(modules => {
				if(modules.data.data.length > 0)
					setModules(modules.data.data);
			});
		}
		fetchModules();

		const fetchModule = async () => {
			
			await api.getModuleById(id).then(module => {
				if(module.data.data) {
					setModule(module.data.data);
					}
			});
		}
		fetchModule();

		const fetchAuthors = async () => {
			await api.getAllAuthors().then(authors => {
				if(authors.data.data.length > 0) 
					setAuthors(authors.data.data);
			})
		}
		fetchAuthors();

		const fetchCategories = async () => {
			await api.getAllCategories().then(categories => {
				if(categories.data.data.length > 0) 
					setCategories(categories.data.data);
			})
		}
		fetchCategories();

		const fetchLearningPaths = async () => {
			await api.getAllLearningPaths().then(learningPaths => {
				if(learningPaths.data.data.length > 0) 
					setLearningPaths(learningPaths.data.data);
			})
		}
		fetchLearningPaths();

	}, [id])

	function showBody() {
		if (module) {
			return (
				<div
          dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(module.body)) }} >
        </div>
			);
		}
	}

	function onCollapse(collapsed) {
		setCollapsed(collapsed);
	}

	function showRepl() {
		if (isValidUrl(module.ideLink)) {
			return <div>
				<iframe 
					title='repl'
					height="600px" width="100%" 
					src={module.ideLink + '?lite=true'} 
					scrolling="yes" frameBorder="no" 
					allowtransparency="true" allowFullScreen={true} 
					sandbox="allow-forms allow-pointer-lock 
					allow-popups allow-same-origin 
					allow-scripts allow-modals allow-top-navigation">
				</iframe>
			</div>
		} else {
			return <div className='w-50 bg-white pa3 ma3 br3 shadow-3 tc center'>
				<h1 className='courier'>Repl couldn't load!</h1>
				<h6 className='i'>You can go and try this on their website yourself <a href="https://repl.it">here</a>.</h6>
			</div>
		}
	}

	function showSider() {
		if (modules.length && learningPaths.length && categories.length) {
			return (
				<Menu theme='dark' defaultSelectedKeys={[id]} mode='inline'>
					{
						learningPaths.map((learningPath, indexLP, learningPathArr) => {
							return (
								<SubMenu key={learningPath._id} title={learningPath.name}>
									{
										categories.map((category, indexCat, categoryArr) => {
											if(learningPath.name === category.learningPathName)
												return(
													<SubMenu key={category._id} title={category.name}>
														{
															modules.map((module, indexMod, moduleArr) => {
																if((learningPath.name === module.learningPathName) && category.name === module.categoryName){
																	return (
																		<Menu.Item key={module._id}>
																			<div></div>
																			<Link to={'/module/' + learningPath.name + '/' + category.name + '/' + module._id}>
																				{module.name}
																			</Link>
																		</Menu.Item>
																	);	
																}
																else return null;
															})
														}
													</SubMenu>
												);
												else return null;
										})
									}
								</SubMenu>
							);
						})
					}
				</Menu>
			);
		}
	}

	const author = (authors.length && module) ? authors.find(author => module.authorName===author.name) : <div>Loading</div>

	return (
		<div>
			<Layout style={{ minHeight: '100vh' }}>
        {
        	(width<480) ? (
        		<Sider 
		        	breakpoint="lg"
				      collapsedWidth="0"
				      onBreakpoint={broken => {
				      }}
				      onCollapse={(collapsed, type) => {
				      }}
				     >
		          <Link to='/'>
		          	<div className="logo center w-80 ph1">
		          		<img src={process.env.PUBLIC_URL + `/assets/img/logo.png`} alt={`Logo`} />
			          </div>
			        </Link>
		          {showSider()}
		        </Sider>
        		
        	) : (
        		<Sider 
		        	collapsible
		        	breakpoint="lg"
				      onBreakpoint={broken => {
				      }}
		        	collapsed={collapsed}
		      		onCollapse = {onCollapse}
		      	>
		          <Link to='/'>
		          	<div className="logo center w-80 ph1">
		          		<img src={process.env.PUBLIC_URL + `/assets/img/logo.png`} alt={`Logo`} />
			          </div>
			        </Link>
		          {showSider()}
		        </Sider>
        	)
        }
        
        <Layout className="site-layout">
          <Header className="site-layout-background tc" style={{ padding: 0 }} >
          	<h1 className='mw5 mw7-ns center pa3 ph5-ns f3 white'>Learn with Codease</h1>
          </Header>
          <Content style={{ margin: '0 16px' }} className='ma3 pa3'>
            <h2 className='tc garamond container'>{module.heading}</h2>
            <div className='flex flex-center justify-around'>
	            <div className='w-65'>
		            <Breadcrumb style={{ margin: '16px 10px' }}>
		              <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
		              <Breadcrumb.Item><Link to={'/category/' + learningPathName}>{learningPathName}</Link></Breadcrumb.Item>
		              <Breadcrumb.Item><Link to={'/category/' + learningPathName + '/' + categoryName}>{categoryName}</Link></Breadcrumb.Item>
		              <Breadcrumb.Item>{module.name}</Breadcrumb.Item>
		            </Breadcrumb>
	            </div>
	            <div className='w-25'>
	            	<Link to={'/author/' + author._id} className='black hover-light-blue pa2 float-right'>
	            		<figure className='figure'>
	            			<Avatar alt={author.name} src={process.env.PUBLIC_URL + author.img} className='figure-img img-fluid' />
	            			<figcaption className="figure-caption text-left">{author.name}</figcaption>
	            		</figure>
	            	</Link>
	            </div>
            </div>
            <div className='center container '>
            	{showBody()}
            	{showRepl()}
            </div>
          </Content>
          <Footer >
          	{(prevId === id || prevId === '') ? <div className='float-left f7 link dim ph3 pv2 mb2 dib white bg-gray'>Previous</div> : <Link to={'/module/' + learningPathName + '/' + categoryName + '/' + prevId} className='float-left f7 link dim ph3 pv2 mb2 dib white bg-black' >Previous</Link>}
          	{(nextId === id || prevId === '') ? <div className='float-right f7 link dim ph3 pv2 mb2 dib white bg-gray'>Next</div> : <Link to={'/module/' + learningPathName + '/' + categoryName + '/' + nextId} className='float-right f7 link dim ph3 pv2 mb2 dib white bg-black' >Next</Link>}
          </Footer>
        </Layout>
      </Layout>
		</div>
	);
}