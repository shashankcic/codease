import React from 'react';
import { NavLink } from "react-router-dom";

function PageInfo({title,bg}) {
  return(
    <div className="page-info-section set-bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bg})`}}>
      <div className="container">
        <div className="site-breadcrumb">
          <NavLink className="" exact activeClassName="" to="/">
            Home
          </NavLink>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}

export default PageInfo;