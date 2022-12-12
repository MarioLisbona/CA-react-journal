// Importing all the necessary modules
import React from 'react'
import { Link } from 'react-router-dom'

// Creating nav bar using Bootstrap's navigation bar template
// className="" is used instead of class=""

// <a> tags and href="" have been replace with Link component and t="" respectively
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary bg-gradient">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">
        Journal
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">
            Home
        </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/category">
            Select Category
        </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/entry/new">
            New Entry
            </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar