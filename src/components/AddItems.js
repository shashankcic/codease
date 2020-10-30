import React from 'react';
import { Link } from 'react-router-dom';

export default function AddItems() {
	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Add Items</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/images" className="nav-link">Images</Link>
            </li>
            <li className="navbar-item">
              <Link to="/images/add" className="nav-link">Add Images</Link>
            </li>
            <li className="navbar-item">
              <Link to="/authors" className="nav-link">Authors</Link>
            </li>
            <li className="navbar-item">
              <Link to="/authors/add" className="nav-link">Add Authors</Link>
            </li>
            <li className="navbar-item">
              <Link to="/learningPaths" className="nav-link">Learning Paths</Link>
            </li>
            <li className="navbar-item">
              <Link to="/learningPaths/add" className="nav-link">Add Learning Paths</Link>
            </li>
            <li className="navbar-item">
              <Link to="/categories" className="nav-link">Categories</Link>
            </li>
            <li className="navbar-item">
              <Link to="/categories/add" className="nav-link">Add Categories</Link>
            </li>
          </ul>
        </div>
      </nav>
		</div>
	);
}