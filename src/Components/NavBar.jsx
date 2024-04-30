import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{marginTop: '3rem'}}>
      <div className="navbar navbar-expand-lg" style={{backgroundColor: '#7091E6'}}>
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" >
            <img src='/images/logo.png' />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav " style={{fontWeight: 'bold', fontSize: '15px'}} >
              <li className="nav-item" >
                <Link to={'/Home'} className="nav-link link-light">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link to={'/Location'} className="nav-link link-light">Location</Link>
                
              </li>
              <li className="nav-item">
                <Link to={'/HookRedux'} className="nav-link link-light">HookRedux</Link>
              </li>
              <li className="nav-item">
                <Link to='/Form' className="nav-link link-light">Form</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Table'} className="nav-link link-light">Table</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
