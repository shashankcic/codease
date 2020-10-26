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
              <Link to="/images/all" className="nav-link">Images</Link>
            </li>
            <li className="navbar-item">
              <Link to="/images/add" className="nav-link">Add Images</Link>
            </li>
          </ul>
        </div>
      </nav>
		</div>
	);
}