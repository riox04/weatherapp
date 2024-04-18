import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaInfo } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {location.pathname === '/' ? (
                        <NavLink to="/about" className="Anav-link">
                            {/* <img
                                src="https://www.freeiconspng.com/uploads/about-us-icon-3.png"
                                alt="AboutUsIcon"
                                style={{ height: '50px', width: '50px', margin: '1.2em 1em' }}
                            /> */}
                            <FaInfo size={40} />
                        </NavLink>
                    ) : (
                        <NavLink to="/" className="nav-link">
                            {/* <img
                                src="https://www.freeiconspng.com/uploads/black-home-icon-11.png"
                                alt="HomeUsIcon"
                                className="nav-icon"
                                style={{ height: '50px', width: '50px',}}
                            /> */}
                            <TiHome size={50} />

                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;