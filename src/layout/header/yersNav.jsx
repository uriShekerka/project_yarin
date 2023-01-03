import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-light">
    <div className="container-fluid">
      <a className="navbar  text-light fw-bold fs-3 mb-3" href="#">Top Years</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mt-2" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-5">
          <li className="nav-item text-light">
            <a className="nav-link active text-light fw-light" aria-current="page" href="#">1989</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light fw-light" aria-current="page" href="#">1995</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light fw-light" aria-current="page" href="#">2000</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-light" href="#">2020</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-light" href="#">2021</a>
          </li>
        </ul>
        <span classNameName="navbar-text ">
       <select classNameName='select mb-2 '>
        <option value="">select yaer</option>
        <option value="">2003</option>
        <option value="">2004</option>
        <option value="">2005</option>
        <option value="">2006</option>
        <option value="">2007</option>
        <option value="">2008</option>
        <option value="">2009</option>
        <option value="">2010</option>
        <option value="">2011</option>
        <option value="">2012</option>
        <option value="">2013</option>
        <option value="">2014</option>
        <option value="">2015</option>
        <option value="">2016</option>
        <option value="">2017</option>
        <option value="">2018</option>
        <option value="">2019</option>
        <option value="">2020</option>
        <option value="">2021</option>
        <option value="">2022</option>
       </select>
        </span>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;
