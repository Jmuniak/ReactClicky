import React from "react";
import "./style.css"

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>{props.children}</h1>
            <div className="current-score">Your Current Score is: {props.currentScore}</div>
            <div className="best-score">Your Best Score is: {props.bestScore}</div>
            <div className="roundsPlayed">Rounds Played: {props.roundsPlayed}</div>
        </nav>
    )
}

export default NavBar;