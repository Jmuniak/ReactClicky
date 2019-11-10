import React from "react";
import "./style.css"

function NavBar(props) {
    return (
        <div className="jumbotron text-center">
            <h1>{props.children}</h1>
            <p>Try to click all 12 images without clicking the same image twice</p>
            <div className="current-score">
                <h3>Your Current Score is: {props.currentScore}</h3>
            </div>
            <div className="best-score">
                <h3>Your Best Score is: {props.bestScore}</h3>
            </div>
            <div className="rounds-played">
                <h3>Rounds Played: {props.roundsPlayed}</h3>
            </div>
            <div className="click-count">
            <h3>Click Count: {props.clickCount}</h3>
            </div>
            <div className="alert-div">
                <h3>{props.alert}</h3>
            </div>
        </div>
    )
}

export default NavBar;