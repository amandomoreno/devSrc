import React from 'react';
import FlashCard from '../FlashCard/FlashCard'
import './FlashCardStack.css'

const FlashCardStack = (props) => {
    return ( 
        <>
            <div id='flashCardStack' className="flashCardStack">
                {props.flashCards.map(flashCard => (
                    <FlashCard 
                        flashCard={flashCard}
                        frontSide={flashCard.frontSide}
                        backSide={flashCard.backSide}
                        user={props.user}
                        handleDeleteFlashCard={props.handleDeleteFlashCard}
                    />
                ))}
            </div>
        </>
    );
}

export default FlashCardStack;

