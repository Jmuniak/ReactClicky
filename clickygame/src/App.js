import React, { Component } from 'react';
import './App.css';
import imagesJSON from "./images.json";
import ScoreBoard from './components/ScoreBoard';
import ImageCard from './components/ImageCard/';
import Footer from './components/Footer/'


class App extends Component {
  state = {
    clickCount: 0,
    imagesJSON,
    imagesGuessed: [],
    currentScore: 0,
    bestScore: 0,
    alert: "Click an image to begin",
    roundsPlayed: 0,
    wins: 0
  }

  handleIncrement = () => {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  checkImageId = id => {
    let checkImage = this.state.imagesGuessed.find(function (element) {
      return element === id;
    });
    if (checkImage) {
      return "Incorrect"
    }
    else {
      return "Correct"
    }
  };

  handlePlayerGuess = (event) => {
    let clickCount = this.state.clickCount;
    let currentGuess = event.target.dataset.id;
    let guessCheck = this.checkImageId(currentGuess);
    let bestScore = this.state.bestScore;
    let currentScore = this.state.currentScore;
    let alert = this.state.alert;
    let imagesGuessed = this.state.imagesGuessed;
    let roundsPlayed = this.state.roundsPlayed;
    let wins = this.state.wins;
    if (guessCheck === "Incorrect") {
      alert = "You already clicked that image this round!";
      bestScore = currentScore > bestScore ? currentScore : bestScore;
      currentScore = 0;
      roundsPlayed++;
      imagesGuessed = [];
    }
    else {
      alert = `Nice, no matching images yet this round!`;
      imagesGuessed.push(currentGuess);
      currentScore++;
      bestScore = currentScore > bestScore ? currentScore : bestScore;
      if (currentScore === 12) {
        wins++;
        roundsPlayed++;
        alert = `You Win!!! It took you ${clickCount++} clicks and ${roundsPlayed} rounds to Win.`;
        // *! issue !*: once the user wins they have to click an image to start the game again *
        // but all the guesses have been checked so it counts a loss and starts a new round, 
        // result: falsely giving them 1 round played in order to start playing again.
        // maybe improve this user experience by hiding all the images and showing a play again button?
      }
    }
    // then call set state
    this.setState({
      imagesJSON: this.state.imagesJSON.sort(() => Math.random() - 0.5),
      alert: alert,
      clickCount: clickCount + 1,
      roundsPlayed: roundsPlayed,
      wins: wins,
      currentScore: currentScore,
      bestScore: bestScore,
      imagesGuessed: imagesGuessed,
    })
  }


  render() {
    return (
      <div>
        <ScoreBoard
          currentScore={this.state.currentScore}
          bestScore={this.state.bestScore}
          roundsPlayed={this.state.roundsPlayed}
          wins={this.state.wins}
          clickCount={this.state.clickCount}
          alert={this.state.alert}
        >The `Don't Match` Memory Game!
        </ScoreBoard>
        <div>
          <ImageCard imagesJSON={this.state.imagesJSON}
            handlePlayerGuess={this.handlePlayerGuess}
            handleIncrement={this.handleIncrement}
          />
        </div>

        <Footer />
      </div>

    );
  };
}

export default App;
