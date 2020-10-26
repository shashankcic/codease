import React, { useState, useEffect } from 'react';
import AddItems from '../routes/AddItems';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

export default function EditImages() {
	const history = useHistory();
	const { id } = useParams();
	const [imgName, setImgName] = useState("");
	const [imgPath, setImgPath] = useState("/assets/img/404/");
	const [errTitle, setErrTitle] = useState("");
	const [errText, setErrText] = useState("");

	useEffect(() => {
		axios.get('http://localhost:4000/codease/images/' + id)
			.then(res => {
				setImgName(res.data.imgName);
				setImgPath(res.data.imgPath);
				setErrTitle(res.data.errTitle);
				setErrText(res.data.errText);
			})
			.catch(function(error) {
				console.log(error);
			})
	}, [id])

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

    const obj = {
    	imgName: imgName,
    	imgPath: imgPath,
    	errTitle: errTitle,
    	errText: errText
    };
    console.log(obj);

    axios.post('http://localhost:4000/codease/images/update/' + id, obj)
    	.then(res => console.log(res.data))
    	.catch(function(err) {
    		console.log(err);
  		});

    history.push('/images/all');

	}

	return (
		<div>
			<AddItems />
			<div className="container">
	      <h3 align="center">Update Image</h3>
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
	      		<input type="submit" value="Update Image" className="btn btn-primary" />
	      	</div>
	      </form>
	    </div>
		</div>
	);
}