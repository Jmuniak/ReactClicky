import React from "react";
import "./style.css"

function ScoreBoard(props) {
    return (
        <div className="jumbotron text-center">
            <h1>{props.children}</h1>
            <h6>Try to click all 12 images without clicking the same image twice</h6>
            <div className="row">
                <div className="col">
                    <p className="best-score">Best Score: {props.bestScore}</p>
                    <p className="rounds-played">Rounds Played: {props.roundsPlayed}</p>
                </div>
                <div className="col">
                    <p className="wins">Rounds Won: {props.wins}</p>
                    <p className="click-count">Click Count: {props.clickCount}</p>
                </div>

            </div>
            <p className="alert-div">{props.alert}</p>
            <div className="col">
                    <p className="current-score">Your Current Score is: {props.currentScore}  / 12</p>
                </div>
        </div>
    )
}

export default ScoreBoard;