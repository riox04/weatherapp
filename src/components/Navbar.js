import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {location.pathname === '/' ? (
                        <NavLink to='/about' className="nav-link">
                            <img src="https://www.freeiconspng.com/uploads/about-us-icon-3.png" alt="Home" style={{ height: '50px', width: '50px', margin: '1.2em 1em' }} />
                        </NavLink>
                    ) : (
                        <NavLink to='/' className="nav-link">
                            <img src="https://www.freeiconspng.com/uploads/black-home-icon-11.png" alt="About" className="nav-icon" style={{ height: '50px', width: '50px', margin: '0.7em 1em' }} />
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
