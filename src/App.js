import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  constructor(){
    super(); //this makes sure that the app becomes a component
    this.state = {
      cards: [
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some things and stuff and the like which things',
          isLiked: true
        }, 
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
        {
          src: 'https://via.placeholder.com/250x250',
          caption: 'some cool doodads and such',
          isLiked: false
        },
      ]
    }
    this.handleLike = this.handleLike.bind(this);
  }
  handleLike(position){
    const clickedCard = this.state.cards[position];
    const first = this.state.cards.slice(0, position);
    const last = this.state.cards.slice(position + 1);
    const newCards = [
      ...first,
      {...clickedCard, isLiked: !clickedCard.isLiked},
      ...last
    ];
    this.setState({cards: newCards});
  }
  render() {
    const { cards } = this.state;
    const CardGrid = cards.map((card, index) => <Card key={index} 
                                                      src={card.src} 
                                                      caption={card.caption} 
                                                      isLiked={card.isLiked}
                                                      onLike={() => this.handleLike(index)} />)
    return (
      <div className='container'>
        <h1>Card Grid</h1>
        {/* iteration to make a bunch of cards*/}
        <div className='row'>
          { CardGrid }
        </div>
      </div>
    );
  }
}

export default App;
