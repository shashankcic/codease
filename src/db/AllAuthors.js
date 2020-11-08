import React, { useState, useEffect, lazy, Suspense } from 'react';
import ReactTable from 'react-table-6';
import api from '../api';
import 'react-table-6/react-table.css';
const AddItems = lazy(() => import('../components/AddItems'));


function UpdateAuthor(props) {

	function updateAuthor(e) {
		e.preventDefault();

		window.location.href = `/db/authors/edit/${props.id}`;
	}
	return(
		<div style={{ "color": "#ef9b0f",	"cursor": "pointer"}} onClick={updateAuthor}>Update</div>
	);
}

function DeleteAuthor(props) {

	function deleteAuthor(e) {
		e.preventDefault();
		if (
    	window.confirm(
        `Do you want to delete this author permanently?`,
      )
    ) {
      api.deleteAuthorById(props.id).then(() => window.location.reload())
    }
	}
	return (
		<div style={{ "color": "#ff2222",	"cursor": "pointer"}} onClick={deleteAuthor}>Delete</div>
	);
}

export default function AllAuthors() {
	const [authors, setAuthors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchAuthors = async () => {
			setIsLoading(true);

			await api.getAllAuthors().then(authors => {
				setAuthors(authors.data.data);
				setIsLoading(false);
			});
		}
		fetchAuthors();
	},[])

		const columnsTable = [
		{
			Header: 'ID',
			accessor: '_id',
			fiterable: true,
		},
		{
			Header: 'Author Image',
			accessor: 'img',
			fiterable: true,
		},
		{
			Header: 'Author Name',
			accessor: 'name',
			fiterable: true,
		},
		{
			Header: 'Author Profession',
			accessor: 'work',
			fiterable: true,
		},
		{
			Header: 'About Author',
			accessor: 'about',
			fiterable: true,
		},
		{
			Header: '',
			accessor: '',
			Cell: function(props) {
				return (
					<span>
						<DeleteAuthor id={props.original._id} />
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
						<UpdateAuthor id={props.original._id} />
					</span>
				);
			},
		},		
	];

	let showTable = true;
	if (!authors.length) {
		showTable = false;
	}

	return (
		<div >
      <Suspense fallback={<div className="loader"></div>}>
				<AddItems />
      </Suspense>
			<div className="container">
	      <h3>Author List</h3>
	      {
					showTable && (
						<ReactTable
							data={authors}
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