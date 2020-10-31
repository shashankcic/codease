import React, { useState, useEffect, useRef } from 'react';
import AddItems from './AddItems';
import api from '../api';
import { useHistory } from 'react-router-dom';

export default function AddModules() {
  const [img, setImg] = useState('/assets/img/courses/');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [learningPathName, setLearningPathName] = useState('');
  const [learningPaths, setLearningPaths] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [authors, setAuthors] = useState([]);
  const [price, setPrice] = useState(0);
  const [priceCurrency, setPriceCurrency] = useState('');
  const [duration, setDuration] = useState(0);
  const [durationUnit, setDurationUnit] = useState('');
  const ratingCount = 0;
  const stars = 0;
  const [heading, setHeading] = useState('');
  const [body, setBody] = useState('');
  const [field, setField] = useState('');
  const [ideLink, setIdeLink] = useState('');

  const history = useHistory();
  
  const learningPathRef = useRef('learningPathInput');
  const categoryRef = useRef('categoryInput');
  const authorRef = useRef('authorInput');
  const [defaultLPName, setDefaultLPName] = useState('');
  const [defaultCategoryName, setDefaultCategoryName] = useState('');
  const [defaultAuthorName, setDefaultAuthorName] = useState(''); 

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

    const fetchCategories = async () => {
      await api.getAllCategories().then(response => {
        if (response.data.data.length > 0) {
          setCategories(response.data.data.map(category=> category.name));
          setDefaultCategoryName(response.data.data[0].name);
          setCategoryName(response.data.data[0].name);
        }
      });
    }
    fetchCategories();

    const fetchAuthors = async () => {
      await api.getAllAuthors().then(response => {
        if (response.data.data.length > 0) {
          setAuthors(response.data.data.map(author=> author.name));
          setDefaultAuthorName(response.data.data[0].name);
          setAuthorName(response.data.data[0].name);
        }
      });
    }
    fetchAuthors();
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

  async function onChangeCategoryName(e) {
    setCategoryName(e.target.value);
  }

  async function onChangeAuthorName(e) {
    setAuthorName(e.target.value);
  }

  async function onChangePrice(e) {
    setPrice((e.target.validity.valid) ? e.target.value : price);
  }

  async function onChangePriceCurrency(e) {
    setPriceCurrency(e.target.value);
  }

  async function onChangeDuration(e) {
    setDuration((e.target.validity.valid) ? e.target.value : duration);
  }

  async function onChangeDurationUnit(e) {
    setDurationUnit(e.target.value);
  }

  async function onChangeHeading(e) {
    setHeading(e.target.value);
  }

  async function onChangeBody(e) {
    setBody(e.target.value);
  }

  async function onChangeField(e) {
    setField(e.target.value);
  }

  async function onChangeIdeLink(e) {
    setIdeLink(e.target.value);
  }

  async function onSubmit(e) {
    const payload = { img, name, description, learningPathName, categoryName, authorName, price, priceCurrency, duration, durationUnit, ratingCount, stars, heading, body, field, ideLink };

    await api.insertModule(payload).then(res => {
      window.alert(`Module added successfully!`);
      setImg('/assets/img/courses/');
      setName('');
      setDescription('');
      setLearningPathName(defaultLPName);
      setCategoryName(defaultCategoryName);
      setAuthorName(defaultAuthorName);
      setPrice(0);
      setPriceCurrency('');
      setDuration(0);
      setDurationUnit('');
      setHeading('');
      setBody('');
      setField('');
      setIdeLink('');
    })
    .catch(err => console.log('Error in Submitting', err));
  }

  return (
    <div>
      <AddItems />
      <div style={{marginTop: 10}} className="container">
        <h3>Add New Module</h3>
        <div className="form-group">
          <label>Module Learning Path: </label>
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
          <label>Module Category: </label>
          <select
            ref={categoryRef}
            required
            className="form-control"
            value={categoryName}
            onChange={onChangeCategoryName}
          >
            {
              categories.map(function(category) {
                return <option 
                  key={category}
                  value={category}
                >
                  {category}
                </option>;
              })
            }
          </select>
        </div>
        <div className="form-group">
          <label>Module Author: </label>
          <select
            ref={authorRef}
            required
            className="form-control"
            value={authorName}
            onChange={onChangeAuthorName}
          >
            {
              authors.map(function(author) {
                return <option 
                  key={author}
                  value={author}
                >
                  {author}
                </option>;
              })
            }
          </select>
        </div>
        <div className="form-group">
          <label>Module Image: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={img}
            onChange={onChangeImg}
          />
        </div>
        <div className="form-group">
          <label>Module Name: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className="form-group">
          <label>Module Description: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Module Price Currency: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={priceCurrency}
            onChange={onChangePriceCurrency}
          />
        </div>
        <div className="form-group">
          <label>Module Price: </label>
          <input 
            type='number'
            step='0.01'
            lang='en-us'
            min='0'
            max='10000'
            pattern='[0-9]+([,\.][0-9]+)?'
            className="form-control"
            required
            value={price}
            onChange={onChangePrice}
          />
        </div>
        <div className="form-group">
          <label>Module Duration: </label>
          <input 
            type='number'
            step='0.1'
            lang='en-us'
            min='0'
            max='1000'
            pattern='[0-9]+([,\.][0-9]+)?'
            className="form-control"
            required
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Module Duration Unit: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={durationUnit}
            onChange={onChangeDurationUnit}
          />
        </div>
        <div className="form-group">
          <label>Module Heading: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={heading}
            onChange={onChangeHeading}
          />
        </div>
        <div className="form-group">
          <label>Module Body: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={body}
            onChange={onChangeBody}
          />
        </div>
        <div className="form-group">
          <label>Module Field: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={field}
            onChange={onChangeField}
          />
        </div>
        <div className="form-group">
          <label>Module IDE Link: </label>
          <input 
            type="text"
            className="form-control"
            required
            value={ideLink}
            onChange={onChangeIdeLink}
          />
        </div>

        <br />

        <div className="form-group">
          <button className="btn btn-primary" onClick={onSubmit}>Add Module</button>
          <button className="btn btn-danger" onClick={() => history.push('/modules')}>Cancel</button>
        </div>
      </div>
    </div>
  );
}