
import React, { Component } from 'react';
import FlashCardStack from '../../components/FlashCardStack/FlashCardStack'
import AddFlashcard from '../../components/AddFlashcard/AddFlashcard'
import * as flashCardAPI from '../../services/flashCardApi'

class FlashCardList extends Component {
    state = {
        flashCards: [],  
    }

    async componentDidMount() {
        const flashCards = await flashCardAPI.getMyFlashCards(this.props.user)
        this.setState({flashCards: flashCards.flashCards})
    }

    handleAddFlashCard = async (newFlashCardData) => {
        const newFlashCard = await flashCardAPI.create(newFlashCardData);
        this.setState(
          (state) => ({
            flashCards: [...state.flashCards, newFlashCard],
          }),
          () => this.props.history.push("/studyBuddy")
        );
      };

    handleDeleteFlashCard = async (id) => {
        await flashCardAPI.deleteFlashCard(id)
        this.setState((state) => ({
            flashCards: state.flashCards.filter((f) => f._id !== id)
        }), () => this.props.history.push('/studyBuddy'))
    }

    render() { 
        return ( 
        <>
            <AddFlashcard 
                handleAddFlashCard={this.handleAddFlashCard}
                user={this.props.user}
            />
        <div className='flashCardStack'>
            <FlashCardStack 
                flashCards={this.state.flashCards}
                handleDeleteFlashCard={this.handleDeleteFlashCard}
                user={this.props.user}
            />
        </div>
            
        </>
         );
        }
}
 
export default FlashCardList;
