import React  from 'react';
import './style.css';

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="appName">
            <a className="navbar-brand brand display-4 lead" href="/">
                React Employee
            </a>
        </nav>
    )
}

export default Navbar;