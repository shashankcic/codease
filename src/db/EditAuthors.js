import React, { useState, useEffect, lazy, Suspense } from 'react';
import api from '../api';
import { useParams, useHistory } from 'react-router-dom';
const AddItems = lazy(() => import('../components/AddItems'));

export default function EditAuthors() {
	const { id } = useParams();
	const [img, setImg] = useState('');
	const [name, setName] = useState('');
	const [work, setWork] = useState('');
	const [about, setAbout] = useState('');
	const history = useHistory();

	async function onChangeImg(e) {
		setImg(e.target.value);
	}

	async function onChangeName(e) {
		setName(e.target.value);
	}

	async function onChangeWork(e) {
		setWork(e.target.value);
	}

	async function onChangeAbout(e) {
		setAbout(e.target.value);
	}

	async function onSubmit(e) {
		const payload = { img, name, work, about };

		await api.updateAuthorById(id, payload).then(res => {
			console.log(payload);
			window.alert(`Author details updated successfully!`);
			history.push('/db/authors');
		});
	}

	useEffect(() => {
		const update = async () => {
			const author = await api.getAuthorById(id);

			setImg(author.data.data.img);
			setName(author.data.data.name);
			setWork(author.data.data.work);
			setAbout(author.data.data.about);
		};

		update();
	}, [id]);

	return (
		<div>
      <Suspense fallback={<div className="loader"></div>}>
				<AddItems />
      </Suspense>
			<div style={{marginTop: 10}} className="container">
	      <h3>Update Author</h3>
      	<div className="form-group">
      		<label>Author Image: </label>
      		<input 
      			type="text"
      			className="form-control"
      			value={img}
      			onChange={onChangeImg}
      		/>
      	</div>
      	<div className="form-group">
      		<label>Author Name: </label>
      		<input 
      			type="text"
      			className="form-control"
      			value={name}
      			onChange={onChangeName}
      		/>
      	</div>
      	<div className="form-group">
      		<label>Author's Profession: </label>
      		<input 
      			type="text"
      			className="form-control"
      			value={work}
      			onChange={onChangeWork}
      		/>
      	</div>
      	<div className="form-group">
      		<label>About the Author: </label>
      		<input 
      			type="text"
      			className="form-control"
      			value={about}
      			onChange={onChangeAbout}
      		/>
      	</div>

      	<br />

      	<div className="form-group">
      		<button className="btn btn-primary" onClick={onSubmit}>Update Author</button>
    			<button className="btn btn-danger" onClick={() => history.push('/db/authors')}>Cancel</button>
      	</div>
	    </div>
		</div>
	);
}