import React from 'react';
import '../FlashCard/FlashCard.css'

const FrontFlashCard = (props) => {
  return ( 
    <div className="flash-card front" onClick={props.handleClick}>
      {props.flashCard.frontSide}
    </div>
   );
}
 
export default FrontFlashCard;