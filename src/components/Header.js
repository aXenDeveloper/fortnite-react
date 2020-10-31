import React from 'react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>

                <nav className="header_nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/challenges">Challenges</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;