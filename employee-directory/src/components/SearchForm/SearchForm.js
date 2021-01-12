import React from 'react';

function SearchForm(){
    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="search by name" aria-label="search"/>
            <button className="btn btn-outline-success my-2 my-sm-0"type="submit">Search</button>
        </form>
    )
}

export default SearchForm;