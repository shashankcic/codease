import React, { useState, useEffect } from 'react';
import AddItems from '../components/AddItems';
import ReactTable from 'react-table-6';
import api from '../api';

import 'react-table-6/react-table.css';

function UpdateLearningPath(props) {

	function updateLearningPath(e) {
		e.preventDefault();

		window.location.href = `/db/learningPaths/edit/${props.id}`;
	}
	return(
		<div style={{ "color": "#ef9b0f",	"cursor": "pointer"}} onClick={updateLearningPath}>Update</div>
	);
}

function DeleteLearningPath(props) {

	function deleteLearningPath(e) {
		e.preventDefault();
		if (
    	window.confirm(
        `Do you want to delete this learning path permanently?`,
      )
    ) {
      api.deleteLearningPathById(props.id)
      window.location.reload()
    }
	}
	return (
		<div style={{ "color": "#ff2222",	"cursor": "pointer"}} onClick={deleteLearningPath}>Delete</div>
	);
}

export default function AllLearningPaths() {
	const [learningPaths, setLearningPaths] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchLearningPaths = async () => {
			setIsLoading(true);

			await api.getAllLearningPaths().then(learningPaths => {
				setLearningPaths(learningPaths.data.data);
				setIsLoading(false);
			});
		}
		fetchLearningPaths();
	},[])

		const columnsTable = [
		{
			Header: 'ID',
			accessor: '_id',
			fiterable: true,
		},
		{
			Header: 'Learning Path Image',
			accessor: 'img',
			fiterable: true,
		},
		{
			Header: 'Learning Path Name',
			accessor: 'name',
			fiterable: true,
		},
		{
			Header: 'Learning Path Description',
			accessor: 'description',
			fiterable: true,
		},
		{
			Header: '',
			accessor: '',
			Cell: function(props) {
				return (
					<span>
						<DeleteLearningPath id={props.original._id} />
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
						<UpdateLearningPath id={props.original._id} />
					</span>
				);
			},
		},		
	];

	let showTable = true;
	if (!learningPaths.length) {
		showTable = false;
	}

	return (
		<div >
			<AddItems />
			<div className="container">
	      <h3>Learning Path List</h3>
	      {
					showTable && (
						<ReactTable
							data={learningPaths}
							columns={columnsTable}
							loading={isLoading}
							defaultPageSize={10}
							showPageSizeOption={true}
							minRows={0}
						/>
					)
				}
	    </div>
		</div>	
	);
}