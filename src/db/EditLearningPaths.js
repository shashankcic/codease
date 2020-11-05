import React, { useState, useEffect, lazy, Suspense } from 'react';
import api from '../api';
import { useParams, useHistory } from 'react-router-dom';
const AddItems = lazy(() => import('../components/AddItems'));

export default function EditLearningPaths() {
	const { id } = useParams();
	const [img, setImg] = useState('');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const history = useHistory();

	async function onChangeImg(e) {
		setImg(e.target.value);
	}

	async function onChangeName(e) {
		setName(e.target.value);
	}

	async function onChangeDescription(e) {
		setDescription(e.target.value);
	}

	async function onSubmit(e) {
		const payload = { img, name, description };

		await api.updateLearningPathById(id, payload).then(res => {
			window.alert(`Learning Path updated successfully!`);
			history.push('/db/learningPaths');
		});
	}

	useEffect(() => {
		const update = async () => {
			const learningPath = await api.getLearningPathById(id);

			setImg(learningPath.data.data.img);
			setName(learningPath.data.data.name);
			setDescription(learningPath.data.data.description);
		};

		update();
	}, [id]);

	return (
		<div>
      <Suspense fallback={<div className="loader"></div>}>
				<AddItems />
      </Suspense>
			<div style={{marginTop: 10}} className="container">
	      <h3>Update Learning Path</h3>
      	<div className="form-group">
      		<label>Learning Path Image: </label>
      		<select
            className="form-control"
            required
            value={img}
            onChange={onChangeImg}
          >
            <option value="/assets/img/categories/c++.png">C++</option>
            <option value="/assets/img/categories/java.png">Java</option>
            <option value="/assets/img/categories/python.png">Python</option>
            <option value="/assets/img/categories/js.png">JavaScript</option>
          </select>
      	</div>
      	<div className="form-group">
      		<label>Learning Path Name: </label>
      		<input 
      			type="text"
      			className="form-control"
      			value={name}
      			onChange={onChangeName}
      		/>
      	</div>
      	<div className="form-group">
      		<label>Learning Path Description: </label>
      		<input 
      			type="text"
      			className="form-control"
      			value={description}
      			onChange={onChangeDescription}
      		/>
      	</div>

      	<br />

      	<div className="form-group">
      		<button className="btn btn-primary" onClick={onSubmit}>Update Learning Path</button>
    			<button className="btn btn-danger" onClick={() => history.push('/db/learningPaths')}>Cancel</button>
      	</div>
	    </div>
		</div>
	);
}