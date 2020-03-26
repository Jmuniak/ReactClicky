import React from "react";
import "./style.css"

function ScoreBoard(props) {
    return (
        <div className="jumbotron text-center">
            <h1>{props.children}</h1>
            <p>Try to click all 12 images without clicking the same image twice</p>
            <div className="best-score">
                <h4>Your Best Score is: {props.bestScore}</h4>
            </div>
            <div className="rounds-played">
                <h4>Rounds Played: {props.roundsPlayed}</h4>
            </div>
            <div className="wins">
                <h4>Rounds Won: {props.wins}</h4>
            </div>
            <div className="click-count">
                <h4>Click Count: {props.clickCount}</h4>
            </div>
            <div className="current-score">
                <h4>Your Current Score is: {props.currentScore}  / 12</h4>
            </div>
            <div className="alert-div">
                <h4>{props.alert}</h4>
            </div>
        </div>
    )
}

export default ScoreBoard;