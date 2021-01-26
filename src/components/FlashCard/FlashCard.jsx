//import React, { useState } from 'react';
import React, { Component } from 'react';
import "./FlashCard.css"
import FrontFlashCard from '../FrontFlashCard/FrontFlashCard'
import BackFlashCard from '../BackFlashCard/BackFlashCard'
import ReactCardFlip from 'react-card-flip'

class FlashCard extends Component {
  state = { 
    isFlipped: false
   }

  handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({isFlipped: !prevState.isFlipped}))
  } 

  render() { 
    return ( 
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <FrontFlashCard 
          flashCard={this.props.flashCard}
          handleClick={this.handleClick}
        />
        <BackFlashCard 
          flashCard={this.props.flashCard}
          handleClick={this.handleClick}
          handleDeleteFlashCard={this.props.handleDeleteFlashCard}
        />
      </ReactCardFlip>
     );
  }
}
 
export default FlashCard;
