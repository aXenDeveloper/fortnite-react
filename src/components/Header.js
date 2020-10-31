import React from 'react';
import Nav from './Nav';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import Lang from './Lang';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                <Nav />

                <Lang />
            </div>
        </header>
    );
};

export default Header;