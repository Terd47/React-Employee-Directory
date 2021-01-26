import React from 'react';
import './style.css';

function Title(props) {
    return <h1 className="title display-4">{props.children}</h1>;
}

export default Title;