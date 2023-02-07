import React from 'react';

function Header(props) {
    return (
        <div id="header">
            <span id="site-title">memory<span id="red-title">card</span></span>
            <span id="scores">
                <div id="current-score">Current Score: {props.currentScore}</div>
                <div id="best-score">Best Score: {props.bestScore}</div>
            </span>
            <span id="instructions">Instructions: click on all of the physicists without repeats.</span>
        </div>
    )
}

export {Header};