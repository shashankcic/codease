import React, { useState } from 'react';
import AddItems from '../components/AddItems';
import api from '../api';
import { useHistory } from 'react-router-dom';

export default function AddAuthors() {
  const [img, setImg] = useState('/assets/img/authors/');
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

    await api.insertAuthor(payload).then(res => {
      window.alert(`Author added successfully!`);
      setImg('/assets/img/authors/');
      setName('');
      setWork('');
      setAbout('');
    });
  }

  return (
    <div>
      <AddItems />
      <div style={{marginTop: 10}} className="container">
        <h3>Add New Author</h3>
        <div className="form-group">
          <label>Author Image: </label>
          <select
            className="form-control"
            required
            value={img}
            onChange={onChangeImg}
          >
            <option value="/assets/img/authors/aastha.jpg">Aastha</option>
            <option value="/assets/img/authors/bhanu.jpg">Bhanu</option>
            <option value="/assets/img/authors/devansh.jpg">Kirti</option>
            <option value="/assets/img/authors/kirti.jpg">Devansh</option>
            <option value="/assets/img/authors/shashank.jpg">Shashank</option>
          </select>
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
          <button className="btn btn-primary" onClick={onSubmit}>Add Author</button>
          <button className="btn btn-danger" onClick={() => history.push('/db/authors')}>Cancel</button>
        </div>
      </div>
    </div>
  );
}