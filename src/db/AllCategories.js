import React, { useState, useEffect, lazy, Suspense } from 'react';
import ReactTable from 'react-table-6';
import api from '../api';
import 'react-table-6/react-table.css';
const AddItems = lazy(() => import('../components/AddItems'));


function UpdateCategory(props) {

	function updateCategory(e) {
		e.preventDefault();

		window.location.href = `/db/categories/edit/${props.id}`;
	}
	return(
		<div style={{ "color": "#ef9b0f",	"cursor": "pointer"}} onClick={updateCategory}>Update</div>
	);
}

function DeleteCategory(props) {

	function deleteCategory(e) {
		e.preventDefault();
		if (
    	window.confirm(
        `Do you want to delete this category permanently?`,
      )
    ) {
      api.deleteCategoryById(props.id)
      window.location.reload()
    }
	}
	return (
		<div style={{ "color": "#ff2222",	"cursor": "pointer"}} onClick={deleteCategory}>Delete</div>
	);
}

export default function AllCategories() {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchCategories = async () => {
			setIsLoading(true);

			await api.getAllCategories().then(categories => {
				setCategories(categories.data.data);
				setIsLoading(false);
			});
		}
		fetchCategories();
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
			Header: 'Category Image',
			accessor: 'img',
			fiterable: true,
		},
		{
			Header: 'Category Name',
			accessor: 'name',
			fiterable: true,
		},
		{
			Header: 'Category Description',
			accessor: 'description',
			fiterable: true,
		},
		{
			Header: '',
			accessor: '',
			Cell: function(props) {
				return (
					<span>
						<DeleteCategory id={props.original._id} />
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
						<UpdateCategory id={props.original._id} />
					</span>
				);
			},
		},		
	];

	let showTable = true;
	if (!categories.length) {
		showTable = false;
	}

	return (
		<div >
      <Suspense fallback={<div className="loader"></div>}>
				<AddItems />
      </Suspense>
			<div className="container">
	      <h3>Category List</h3>
	      {
					showTable && (
						<ReactTable
							data={categories}
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