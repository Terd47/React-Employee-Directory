import React from 'react';
import './style.css';
import SearchForm from '../../components/SearchForm/SearchForm';

function Navbar () {
    return (
        <nav classname="navbar navbar-expand-lg navbar-dark" id="appName">
            <a className="navbar-brand brand" href="/">
                React Employee
            </a>
            <SearchForm />
        </nav>
    )
}

export default Navbar;