import React, { useState, lazy, Suspense } from 'react';
import api from '../api';
import { useHistory } from 'react-router-dom';
const AddItems = lazy(() => import('../components/AddItems'));

export default function AddImages() {
  const [imgName, setImgName] = useState("");
  const [imgPath, setImgPath] = useState("/assets/img/404/");
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

    await api.insertImage(payload).then(res => {
      window.alert(`Image added successfully!`);
      setImgName('');
      setImgPath('/assets/img/404/');
      setErrTitle('');
      setErrText('');
    });
  }

  return (
    <div>
      <Suspense fallback={<div className="loader"></div>}>
        <AddItems />
      </Suspense>
      <div style={{marginTop: 10}} className="container">
        <h3>Add New Image</h3>
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
          <button className="btn btn-primary" onClick={onSubmit}>Add Image</button>
          <button className="btn btn-danger" onClick={() => history.push('/db/images')}>Cancel</button>
        </div>
      </div>
    </div>
  );
}