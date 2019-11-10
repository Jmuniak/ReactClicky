import React, { Component } from 'react';
import './App.css';
import imagesJSON from "./images.json";
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';
import ImageCard from './components/ImageCard/';

// import './components/Footer';


class App extends Component {
  state = {
    clickCount: 0,
    // images: images,
    imagesJSON,
    imagesGuessed: [],
    currentScore: 0,
    bestScore: 0,
    alert: "Click an image to begin",
    roundsPlayed: 0
  }

  ////
  handleIncrement = () => {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }
  handleDecrement = () => {
    this.setState({ clickCount: this.state.clickCount - 1 });
  };
  ////


  ////
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
  ////

  ///
  handlePlayerGuess = (event) => {
    let clickCount = this.state.clickCount;
    let currentGuess = event.target.dataset.id;
    let guessCheck = this.checkImageId(currentGuess);
    console.log(`Current Guess: ${currentGuess}`);
    console.log(`Guess Chek: ${guessCheck}`);
    let bestScore = this.state.bestScore;
    let currentScore = this.state.currentScore;
    let alert = this.state.alert;
    let imagesGuessed = this.state.imagesGuessed;
    let roundsPlayed = this.state.roundsPlayed;
    if (guessCheck === "Incorrect") {
      alert = "You already clicked that image this round!";
      bestScore = currentScore > bestScore ? currentScore : bestScore;
      currentScore = 0;
      roundsPlayed++;
      imagesGuessed = [];
      console.log(`Current Score: ${currentScore}, Best Score: ${bestScore}`);
      console.log(`Alert: ${alert}`);
      console.log(`Images Guessed Already: ${imagesGuessed}`);
    }
    else {
      alert = "Correct, no matches yet this round!";
      imagesGuessed.push(currentGuess);
      currentScore++;
      bestScore = currentScore > bestScore ? currentScore : bestScore;
      console.log(`Images Guessed Already: ${imagesGuessed}`);
      console.log(`Alert: ${alert}`);
      if (currentScore === 12) {
        let averageClicks = (clickCount + 1) / (roundsPlayed + 1);
        alert = (`You Win! it took you ${clickCount + 1} clicks and ${roundsPlayed + 1} rounds to Win
        Your average is ${averageClicks} clicks per round`);
      }
    }
    this.setState({
      imagesJSON: this.state.imagesJSON.sort(() => Math.random() - 0.5),
      alert: alert,
      clickCount: clickCount + 1,
      roundsPlayed: roundsPlayed,
      currentScore: currentScore,
      bestScore: bestScore,
      imagesGuessed: imagesGuessed,
    })
  }

  ////

  render() {
    return (
      <div>
        <Wrapper>
          <NavBar
            currentScore={this.state.currentScore}
            bestScore={this.state.bestScore}
            roundsPlayed={this.state.roundsPlayed}
            clickCount={this.state.clickCount}
            alert={this.state.alert}
          >The `Don't Match` Memory Game!
          </NavBar>
          <ImageCard imagesJSON={this.state.imagesJSON}
            handlePlayerGuess={this.handlePlayerGuess}
            handleIncrement={this.handleIncrement}
          />

        </Wrapper>
      </div>
    );
  };
}

export default App;
