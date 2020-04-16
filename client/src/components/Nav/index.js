import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0 m-0">
            <span
                className="navbar-brand navbar-expand-sm navbar-expand-md col-md-3 col-lg-3 p-3 mb-2 bg-gradient-info text-white text-light m-sm-0 float-xs-none">
                <h2 className="d-flex justify-content-md-center text-dark">Steven Lam</h2>
            </span>
            <ul className="nav col d-flex justify-content-end">
                <li className="nav-item">
                    <a className="nav-link">
                    <Link to="/">Home</Link>
                    <i id="smile" className="far fa-laugh-beam"></i>
                    </a>
        
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                    <Link to="/portfolio">Portfolio</Link>
                    <i className="fas fa-briefcase"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                    <Link to="/contact">Contact</Link>
                    <i className="fas fa-address-book"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;