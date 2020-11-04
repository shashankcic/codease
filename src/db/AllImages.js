import React, { useState, useEffect } from 'react';
import AddItems from '../components/AddItems';
import ReactTable from 'react-table-6';
import api from '../api';

import 'react-table-6/react-table.css';

function UpdateImage(props) {

	function updateImage(e) {
		e.preventDefault();

		window.location.href = `/db/images/edit/${props.id}`;
	}
	return(
		<div style={{ "color": "#ef9b0f",	"cursor": "pointer"}} onClick={updateImage}>Update</div>
	);
}

function DeleteImage(props) {

	function deleteImage(e) {
		e.preventDefault();
		if (
    	window.confirm(
        `Do you want to delete this image permanently?`,
      )
    ) {
      api.deleteImageById(props.id)
      window.location.reload()
    }
	}
	return (
		<div style={{ "color": "#ff2222",	"cursor": "pointer"}} onClick={deleteImage}>Delete</div>
	);
}

export default function AllImages() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchImages = async () => {
			setIsLoading(true);

			await api.getAllImages().then(images => {
				setImages(images.data.data);
				setIsLoading(false);
			});
		}
		fetchImages();
	},[])

		const columnsTable = [
		{
			Header: 'ID',
			accessor: '_id',
			fiterable: true,
		},
		{
			Header: 'Image Name',
			accessor: 'imgName',
			fiterable: true,
		},
		{
			Header: 'Image Path',
			accessor: 'imgPath',
			fiterable: true,
		},
		{
			Header: 'Error Title',
			accessor: 'errTitle',
			fiterable: true,
		},
		{
			Header: 'Error Text',
			accessor: 'errText',
			fiterable: true,
		},
		{
			Header: '',
			accessor: '',
			Cell: function(props) {
				return (
					<span>
						<DeleteImage id={props.original._id} />
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
						<UpdateImage id={props.original._id} />
					</span>
				);
			},
		},		
	];

	let showTable = true;
	if (!images.length) {
		showTable = false;
	}

	return (
		<div >
			<AddItems />
			<div className="container">
	      <h3>Images List</h3>
	      {
					showTable && (
						<ReactTable
							data={images}
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