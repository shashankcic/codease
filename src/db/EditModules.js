import React, { useState, useEffect, useRef } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import AddItems from '../components/AddItems';
import api from '../api';
import { useParams, useHistory } from 'react-router-dom';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function EditModules() {
	const { id } = useParams();
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
  const [ratingCount, setRatingCount] = useState(0);
  const [stars, setStars] = useState(0);
  const [heading, setHeading] = useState('');
  const [field, setField] = useState('');
  const [ideLink, setIdeLink] = useState('');
	
  const history = useHistory();
  
  const editorContent = '';

  const [editorState, setEditorState] = useState({ editorState: editorContent });

  const handleEditorChange = (editorState) => {
    setEditorState({ editorState });
  };

  const learningPathRef = useRef('learningPathInput');
  const categoryRef = useRef('categoryInput');
  const authorRef = useRef('authorInput');

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
    console.log(categoryName);
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

  async function onChangeField(e) {
    setField(e.target.value);
  }

  async function onChangeIdeLink(e) {
    setIdeLink(e.target.value);
  }

	async function onSubmit(e) {
		const payload = { 
      img, 
      name, 
      description, 
      learningPathName, 
      categoryName, 
      authorName, 
      price, 
      priceCurrency, 
      duration, 
      durationUnit, 
      ratingCount, 
      stars, 
      heading, 
      body: JSON.stringify(convertToRaw(editorState.editorState.getCurrentContent())), 
      field, 
      ideLink,
    };

		await api.updateModuleById(id, payload).then(res => {
			window.alert(`Module updated successfully!`);
			history.push('/db/modules');
		});
	}

	useEffect(() => {
		const update = async () => {
			const module = await api.getModuleById(id);

			setImg(module.data.data.img);
			setName(module.data.data.name);
			setDescription(module.data.data.description);
			setLearningPathName(module.data.data.learningPathName);
      setCategoryName(module.data.data.categoryName);
      setAuthorName(module.data.data.authorName);
      setPrice(module.data.data.price);
      setPriceCurrency(module.data.data.priceCurrency);
      setDuration(module.data.data.duration);
      setDurationUnit(module.data.data.durationUnit);
      setRatingCount(module.data.data.ratingCount);
      setStars(module.data.data.stars);
      setHeading(module.data.data.heading);
      setEditorState({ editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(module.data.data.body))) });
      setField(module.data.data.field);
      setIdeLink(module.data.data.ideLink);
		};

    const fetchLearningPaths = async () => {
      await api.getAllLearningPaths().then(response => {
        if (response.data.data.length > 0) {
          setLearningPaths(response.data.data.map(learningPath=> learningPath.name));
        }
      });
    }

    const fetchAuthors = async () => {
      await api.getAllAuthors().then(response => {
        if (response.data.data.length > 0) {
          setAuthors(response.data.data.map(author=> author.name));
        }
      });
    }
		
		update();
    fetchLearningPaths();
    fetchAuthors();

	}, [id]);

  useEffect(() => {
    const fetchCategories = async () => {
      await api.getAllCategories().then(response => {
        if (response.data.data.length > 0) {
          let cats = response.data.data.filter(category=> category.learningPathName === learningPathName);
          setCategories(cats.map(category => category.name));
          // setDefaultCategoryName(response.data.data[0].name);
          // setCategoryName(response.data.data[0].name);
        }
      });
    }
    fetchCategories();    
  }, [learningPathName]);

	return (
		<div>
      <AddItems />
      <div style={{marginTop: 10}} className="container">
        <h3>Update Module</h3>
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
          <select
            className="form-control"
            required
            value={img}
            onChange={onChangeImg}
          >
            <option value="/assets/img/courses/c++.png">C++</option>
            <option value="/assets/img/courses/java.png">Java</option>
            <option value="/assets/img/courses/python.png">Python</option>
            <option value="/assets/img/courses/js.png">JavaScript</option>
          </select>
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
          <select
            className="form-control"
            required
            value={priceCurrency}
            onChange={onChangePriceCurrency}
          >
            <option value='USD'>USD</option>
            <option value='INR'>INR</option>
          </select>
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
          <select 
            className="form-control"
            required
            value={durationUnit}
            onChange={onChangeDurationUnit}
          >
            <option value='Hours'>Hours</option>
            <option value='Mins'>Mins</option>
          </select>
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
          <Editor
            editorState={editorState.editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName='demo-wrapper'
            editorClassName='demo-editor'
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
          <button className="btn btn-primary" onClick={onSubmit}>Update Module</button>
          <button className="btn btn-danger" onClick={() => history.push('/db/modules')}>Cancel</button>
        </div>
      </div>
    </div>
	);
}