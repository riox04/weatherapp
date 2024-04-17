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
                            <img src="../../ham.png" alt="Menu" className="nav-icon" style={{ height: '50px', width: '50px' }} />
                        </NavLink>
                    ) : (
                        <NavLink to='/' className="nav-link">
                            <img src="../../ham.png" alt="Menu" className="nav-icon" style={{ height: '50px', width: '50px' }} />
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
