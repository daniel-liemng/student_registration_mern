import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-success navbar-expand-md'>
      <div className='container'>
        <Link
          to='/'
          className='navbar-brand'
          style={{ textTransform: "uppercase", fontSize: "30px" }}
        >
          Student Registration
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Students
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/majors' className='nav-link'>
                Majors
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
