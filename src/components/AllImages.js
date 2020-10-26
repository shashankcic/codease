import React, { useState, useEffect } from 'react';
import AddItems from '../routes/AddItems';
import axios from 'axios';
import Image from './Image';

export default function AllImages() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:4000/codease/images/')
			.then(res => {
				setImages(res.data);
			})
			.catch(function(err) {
				console.log(err);
			})
	},[])

	function imageList() {
  	return images.map(function(currentImage, i) {
  		return <Image image={currentImage} key={i} />
  	})
  }

	return (
		<div >
			<AddItems />
			<div className="container">
	      <h3>Images List</h3>
	      <table className="table table-striped" style={{ marginTop: 20 }}>
	      	<thead>
	      		<tr>
	      			<th>Image Name</th>
	      			<th>Image Path</th>
	      			<th>Error Title</th>
	      			<th>Error Text</th>
	      			<th>Action</th>
	      		</tr>
	      	</thead>
	      	<tbody>
	      		{imageList()}
	      	</tbody>
	      </table>
	    </div>
		</div>	
	);
}