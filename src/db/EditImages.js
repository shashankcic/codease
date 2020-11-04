import React, { useState, useEffect } from 'react';
import AddItems from '../components/AddItems';
import api from '../api';
import { useParams, useHistory } from 'react-router-dom';

export default function EditImages() {
	const { id } = useParams();
	const [imgName, setImgName] = useState("");
	const [imgPath, setImgPath] = useState("");
	const [errTitle, setErrTitle] = useState("");
	const [errText, setErrText] = useState("");
	const history = useHistory();

	async function onChangeImgName(e) {
		setImgName(e.target.value);
	}

	async function onChangeImgPath(e) {
		setImgPath(e.target.value);
	}

	async function onChangeErrTitle(e) {
		setErrTitle(e.target.value);
	}

	async function onChangeErrText(e) {
		setErrText(e.target.value);
	}

	async function onSubmit(e) {
		const payload = { imgName, imgPath, errTitle, errText };

		await api.updateImageById(id, payload).then(res => {
			window.alert(`Image updated successfully!`);
			history.push('/db/images');
		});
	}

	useEffect(() => {
		const update = async () => {
			const image = await api.getImageById(id);

			setImgName(image.data.data.imgName);
			setImgPath(image.data.data.imgPath);
			setErrTitle(image.data.data.errTitle);
			setErrText(image.data.data.errText);
		};

		update();
	}, [id]);

	return (
		<div>
			<AddItems />
			<div style={{marginTop: 10}} className="container">
	      <h3>Update Image</h3>
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
      		<button className="btn btn-primary" onClick={onSubmit}>Update Image</button>
    			<button className="btn btn-danger" onClick={() => history.push('/db/images')}>Cancel</button>
      	</div>
	    </div>
		</div>
	);
}