import React from 'react';

function Card(props) {
    return (
        <div className="card" id={props.id} onClick={props.onClick}></div>
    )
}

export {Card};