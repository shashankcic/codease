import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import api from '../api';
import { useHistory } from 'react-router-dom';
const AddItems = lazy(() => import('../components/AddItems'));

export default function AddCategories() {
  const [img, setImg] = useState('/assets/img/categories/');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [learningPathName, setLearningPathName] = useState('');
  const [learningPaths, setLearningPaths] = useState([]);
  const history = useHistory();
  const learningPathRef = useRef('learningPathInput');
  const [defaultLPName, setDefaultLPName] = useState(''); 

  useEffect(() => {
    const fetchLearningPaths = async () => {

      await api.getAllLearningPaths().then(response => {
        if (response.data.data.length > 0) {
          setLearningPaths(response.data.data.map(learningPath=> learningPath.name));
          setDefaultLPName(response.data.data[0].name);
          setLearningPathName(response.data.data[0].name);
        }
      });
    }
    fetchLearningPaths();
  },[])

  async function onChangeImg(e) {
    setImg(e.target.value);
  }

  async function onChangeName(e) {
    setName(e.target.value);
  }

  async function onChangeDescription(e) {
    setDescription(e.target.value);
  }

  async function onChangeLearningPathName(e) {
    setLearningPathName(e.target.value);
  }

  async function onSubmit(e) {
    const payload = { img, name, description, learningPathName };

    await api.insertCategory(payload).then(res => {
      window.alert(`Category added successfully!`);
      setImg('/assets/img/categories/');
      setName('');
      setDescription('');
      setLearningPathName(defaultLPName);
    })
    .catch(err => console.log('Error in onSubmit', err));
  }

  return (
    <div>
      <Suspense fallback={<div className="loader"></div>}>
        <AddItems />
      </Suspense>
      <div style={{marginTop: 10}} className="container">
        <h3>Add New Category</h3>
        <div className="form-group">
          <label>Category Learning Path: </label>
          <select
            ref={learningPathRef}
            required
            className="form-control"
            value={learningPathName}
            onChange={onChangeLearningPathName}
          >
            {
              learningPaths.map(function(learningPath) {
                return <option 
                  key={learningPath}
                  value={learningPath}
                >
                  {learningPath}
                </option>;
              })
            }
          </select>
        </div>
        <div className="form-group">
          <label>Category Image: </label>
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
          <label>Category Name: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className="form-group">
          <label>Category Description: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={description}
            onChange={onChangeDescription}
          />
        </div>

        <br />

        <div className="form-group">
          <button className="btn btn-primary" onClick={onSubmit}>Add Category</button>
          <button className="btn btn-danger" onClick={() => history.push('/db/categories')}>Cancel</button>
        </div>
      </div>
    </div>
  );
}