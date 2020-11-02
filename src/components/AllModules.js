import React, { useState, useEffect } from 'react';
import AddItems from './AddItems';
import ReactTable from 'react-table-6';
import api from '../api';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-table-6/react-table.css';


export default function AllModules() {
	const [modules, setModules] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	function UpdateModule(props) {

		function updateModule(e) {
			e.preventDefault();

			window.location.href = `/modules/edit/${props.id}`;
		}
		return(
			<div style={{ "color": "#ef9b0f",	"cursor": "pointer"}} onClick={updateModule}>Update</div>
		);
	}

	function DeleteModule(props) {

		function deleteModule(e) {
			e.preventDefault();
			if (
	    	window.confirm(
	        `Do you want to delete this module permanently?`,
	      )
	    ) {
	      api.deleteModuleById(props.id)
	      window.location.reload()
	    }
		}
		return (
			<div style={{ "color": "#ff2222",	"cursor": "pointer"}} onClick={deleteModule}>Delete</div>
		);
	}

	useEffect(() => {
		const fetchModules = () => {
			setIsLoading(true);

		api.getAllModules().then(modules => {
				setModules(modules.data.data);
				setIsLoading(false);
			});
		}
		fetchModules();

	},[])

		const columnsTable = [
		{
			Header: 'ID',
			accessor: '_id',
			fiterable: true,
		},
		{
			Header: 'Learning Path Name',
			accessor: 'learningPathName',
			fiterable: true,
		},
		{
			Header: 'Category Name',
			accessor: 'categoryName',
			fiterable: true,
		},
		{
			Header: 'Author Name',
			accessor: 'authorName',
			fiterable: true,
		},
		{
			Header: 'Module Image',
			accessor: 'img',
			fiterable: true,
		},
		{
			Header: 'Module Name',
			accessor: 'name',
			fiterable: true,
		},
		{
			Header: 'Module Description',
			accessor: 'description',
			fiterable: true,
		},
		{
			Header: 'Module Price Currency',
			accessor: 'priceCurrency',
			fiterable: true,
		},
		{
			Header: 'Module Price',
			accessor: 'price',
			fiterable: true,
		},
		{
			Header: 'Module Duration',
			accessor: 'duration',
			fiterable: true,
		},
		{
			Header: 'Module Duration Unit',
			accessor: 'durationUnit',
			fiterable: true,
		},
		{
			Header: 'Module Rating Count',
			accessor: 'ratingCount',
			fiterable: true,
		},
		{
			Header: 'Module Stars',
			accessor: 'stars',
			fiterable: true,
		},
		{
			Header: 'Module Heading',
			accessor: 'heading',
			fiterable: true,
		},
		{
			Header: 'Module Body',
			accessor: 'body',
			fiterable: true,
		},
		{
			Header: 'Module Field',
			accessor: 'field',
			fiterable: true,
		},
		{
			Header: 'Module IDE Link',
			accessor: 'ideLink',
			fiterable: true,
		},
		{
			Header: '',
			accessor: '',
			Cell: function(props) {
				return (
					<span>
						<DeleteModule id={props.original._id} />
					</span>
				);
			},
		},
		{
			Header: '',
			accessor: '',
			Cell: function(props) {
				return (
					<span>
						<UpdateModule id={props.original._id} />
					</span>
				);
			},
		},				
	];


	let showTable = true;
	if (!modules.length) {
		showTable = false;
	}

	function showModule() {
		if(modules) {
			return <div>
          {modules.map((module, index) => {
            return (
	            <div className='container' key={index}>
	            	<div className='mt4 mb4 pa3'>
		            	<h1 className='tc'>{index+1}. {module.heading}</h1>
		              <div
		                dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(module.body)) }} >
		              </div>
	            	</div>
	            </div>
            )
          })}
        </div>
		}
	}

	return (
		<div >
			<AddItems />
			<div className="container">
	      <h3>Module List</h3>
	      {
					showTable && (
						<ReactTable
							data={modules}
							columns={columnsTable}
							loading={isLoading}
							defaultPageSize={10}
							showPageSizeOption={true}
							minRows={0}
						/>
					)
				}
	    </div>
	    {showModule()}
		</div>	
	);
}