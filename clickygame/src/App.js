import React, { Component } from 'react';
import './App.css';
import imagesJSON from "./images.json";
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';
import ClickCounter from "./components/ClickCounter/ClickCounter.js";
import ImageCard from './components/ImageCard/';

// import './components/Footer';


class App extends Component {
  state = {
    clickCount: 0,
    // images: images,
    imagesJSON,
    imagesGuessed: [],
    currentScore: 2,
    bestScore: 10,
    clickFeedback: "",
    roundsPlayed: 2
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
   let checkImage = this.state.imagesGuessed.find(function(element) {
     return element === id;
   });
   if (checkImage) {
    return "You already clicked that image this round"
   }
   else {
     return "Correct, no matches yet this round!"
   }
  };
  ////

  ///
  handlePlayerGuess = (event) => {
    let currentGuess = event.target.dataset.id;
    let guessCheck = this.checkImageId(currentGuess);
    console.log(`Current Guess: ${currentGuess}`);
    let bestScore = this.state.bestScore;
    let currentScore = this.state.currentScore;
    console.log(`Current Score: ${currentScore}, Best Score: ${bestScore}`);
    let alert = this.state.alert;
    console.log(`Alert: ${alert}`);
    let imagesGuessed = this.state.imagesGuessed;
    console.log(`Images Guessed Already: ${imagesGuessed}`);
    if (guessCheck === "You already clicked that image this round") {
      alert = "Incorrect";
      bestScore = currentScore>bestScore ? currentScore : bestScore;
      currentScore = 0;
      imagesGuessed = [];
    }
    else {
      alert = "Correct!";
      imagesGuessed.push(currentGuess);
      currentScore++;
      bestScore = currentScore > bestScore ? currentScore : bestScore;
    }
    this.setState({
      imagesJSON: this.state.imagesJSON.sort(() => Math.random() - 0.5),
      alert: alert,
      currentScore: currentScore,
      imagesGuessed: imagesGuessed,
    })
  }
  
  ////

  render() {
    return (
      <div>
        <Wrapper>
          <NavBar 
          current-score={this.state.currentScore} 
          best-score={this.state.bestScore} 
          rounds-played={this.state.roundsPlayed}
          alert={this.state.alert}
          >The `Don't Match` Memory Game!
          </NavBar>
          <ClickCounter />
          <ImageCard imagesJSON={this.state.imagesJSON} 
          handlePlayerGuess={this.handlePlayerGuess}/>

        </Wrapper>
      </div>
    );
  };
}

export default App;
