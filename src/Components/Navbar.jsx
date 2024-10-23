import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar({ handleSearchText }) {

  const userCount = useSelector((state)=> state.users.count);

  let handleNavSearchText = (searchText) => {
    handleSearchText(searchText);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          Blogger App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" >Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/blogs" >Blogs</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/users" >Users ({userCount})</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/invoice" >Invoice</Link>
            </li>
          </ul>
          <Search onReceived={handleNavSearchText} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;