import React, { useState } from 'react';
import AddItems from '../routes/AddItems';
import axios from 'axios';

export default function AddImages() {
	const [imgName, setImgName] = useState("");
	const [imgPath, setImgPath] = useState("/assets/img/404/");
	const [errTitle, setErrTitle] = useState("");
	const [errText, setErrText] = useState("");

	function onChangeImgName(e) {
		setImgName(e.target.value);
	}

	function onChangeImgPath(e) {
		setImgPath(e.target.value);
	}

	function onChangeErrTitle(e) {
		setErrTitle(e.target.value);
	}

	function onChangeErrText(e) {
		setErrText(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();

		console.log('Form submitted');
		console.log(`Image Name: ${imgName}`);
    console.log(`Image Path: ${imgPath}`);
    console.log(`Error Title: ${errTitle}`);
    console.log(`Error Text: ${errText}`);

    const newImage = {
    	imgName: imgName,
    	imgPath: imgPath,
    	errTitle: errTitle,
    	errText: errText
    }

    axios.post('http://localhost:4000/codease/images/add', newImage)
    	.then(res => console.log(res.data))
    	.catch(function(err) {
    		console.log(err);
  		});

    setImgName("");
    setImgPath("/assets/img/404/");
    setErrTitle("");
    setErrText("");
	}

	return (
		<div>
			<AddItems />
			<div style={{marginTop: 10}} className="container">
	      <h3>Add New Image</h3>
	      <form onSubmit={onSubmit}>
	      	<div className="form-group">
	      		<label>Image Name: </label>
	      		<input 
	      			type="text"
	      			className="form-control"
	      			value={imgName}
	      			onChange={onChangeImgName}
	      		/>
	      	</div>
	      	<div className="form-group">
	      		<label>Image Path: </label>
	      		<input 
	      			type="text"
	      			className="form-control"
	      			value={imgPath}
	      			onChange={onChangeImgPath}
	      		/>
	      	</div>
	      	<div className="form-group">
	      		<label>Error Title: </label>
	      		<input 
	      			type="text"
	      			className="form-control"
	      			value={errTitle}
	      			onChange={onChangeErrTitle}
	      		/>
	      	</div>
	      	<div className="form-group">
	      		<label>Error Text: </label>
	      		<input 
	      			type="text"
	      			className="form-control"
	      			value={errText}
	      			onChange={onChangeErrText}
	      		/>
	      	</div>

	      	<br />

	      	<div className="form-group">
	      		<input type="submit" value="Add Image" className="btn btn-primary" />
	      	</div>
	      </form>
	    </div>
		</div>
	);
}