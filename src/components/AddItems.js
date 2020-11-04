import React from 'react';
import { Link } from 'react-router-dom';

export default function AddItems() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Add Items</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/db/images" className="nav-link">Images</Link>
          </li>
          <li className="navbar-item">
            <Link to="/db/images/add" className="nav-link">Add Images</Link>
          </li>
          <li className="navbar-item">
            <Link to="/db/authors" className="nav-link">Authors</Link>
          </li>
          <li className="navbar-item">
            <Link to="/db/authors/add" className="nav-link">Add Authors</Link>
          </li>
          <li className="navbar-item">
            <Link to="/db/learningPaths" className="nav-link">Learning Paths</Link>
          </li>
          <li className="navbar-item">
            <Link to="/db/learningPaths/add" className="nav-link">Add Learning Paths</Link>
          </li>
          <li className="navbar-item">
            <Link to="/db/categories" className="nav-link">Categories</Link>
          </li>
          <li className="navbar-item">
            <Link to="/db/categories/add" className="nav-link">Add Categories</Link>
          </li>
          <li className="navbar-item">
            <Link to="/db/modules" className="nav-link">Modules</Link>
          </li>
          <li className="navbar-item">
            <Link to="/db/modules/add" className="nav-link">Add Modules</Link>
          </li>
        </ul>
      </div>
    </nav>
	);
}