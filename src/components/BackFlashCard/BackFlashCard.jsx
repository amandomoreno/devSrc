import React from 'react';
import '../FlashCard/FlashCard.css'

const BackFlashCard = (props) => {
  return ( 
    <div className="flash-card back" onClick={props.handleClick}>
      {props.flashCard.backSide}
      <button
        type="submit"
        className="btn"
        onClick={() => props.handleDeleteFlashCard(props.flashCard._id)}
      >
        Delete
      </button>
    </div>
   );
}
 
export default BackFlashCard;