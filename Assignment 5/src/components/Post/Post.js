import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.Company}</h1>
        <div className="Info">
            <div>{props.Model}</div>
            <div>{props.Camera}</div>
            <div><img src={props.Img} alt="img" width="100" height="100"></img></div>
        </div>
    </article>
);

export default post;