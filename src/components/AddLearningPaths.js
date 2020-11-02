import React, { useState } from 'react';
import AddItems from './AddItems';
import api from '../api';
import { useHistory } from 'react-router-dom';

export default function AddLearningPaths() {
  const [img, setImg] = useState('/assets/img/categories/');
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

    await api.insertLearningPath(payload).then(res => {
      window.alert(`Learning Path added successfully!`);
      setImg('/assets/img/categories/');
      setName('');
      setDescription('');
    });
  }

  return (
    <div>
      <AddItems />
      <div style={{marginTop: 10}} className="container">
        <h3>Add New Learning Path</h3>
        <div className="form-group">
          <label>Learning Path Image: </label>
          <input 
            type="text"
            className="form-control"
            value={img}
            onChange={onChangeImg}
          />
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
          <button className="btn btn-primary" onClick={onSubmit}>Add Learning Path</button>
          <button className="btn btn-danger" onClick={() => history.push('/learningPaths')}>Cancel</button>
        </div>
      </div>
    </div>
  );
}